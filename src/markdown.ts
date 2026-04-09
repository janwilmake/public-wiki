/**
 * Markdown → HTML renderer for Cloudflare Workers.
 * Handles: headings, bold, italic, inline code, code blocks,
 * tables, unordered/ordered lists, blockquotes, horizontal rules,
 * links, [[wiki links]], and footnotes ([^id] / [^id]: text).
 */

// ── Utilities ─────────────────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Footnote pre-processing ───────────────────────────────────────────────────

interface FootnoteState {
  defs: Map<string, string>;   // id → definition text
  order: string[];             // ids in order of first inline appearance
}

/**
 * Strips `[^id]: text` definition lines from the markdown and collects them.
 * Returns cleaned markdown and the footnote state.
 */
function extractFootnoteDefs(md: string): { cleaned: string; state: FootnoteState } {
  const defs = new Map<string, string>();
  const cleaned = md.replace(/^\[\^([^\]]+)\]:\s*(.+)$/gm, (_, id, text) => {
    defs.set(id.trim(), text.trim());
    return "";
  }).replace(/\n{3,}/g, "\n\n").trim();

  return { cleaned, state: { defs, order: [] } };
}

// ── Inline renderer ───────────────────────────────────────────────────────────

function makeInlineRenderer(state: FootnoteState) {
  return function inlineMarkdown(text: string): string {
    let s = text;

    // Code spans — protect first
    s = s.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);

    // Bold + italic, bold, italic
    s = s.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Images — must come before links (syntax: ![alt](src) vs [label](href))
    s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) =>
      `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">`
    );

    // Markdown links
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) =>
      `<a href="${escapeHtml(href)}" rel="noopener noreferrer">${escapeHtml(label)}</a>`
    );

    // Wiki links [[Article Name]] or [[Slug|Display text]]
    s = s.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
      const pipe = inner.indexOf("|");
      const nameOrSlug = pipe === -1 ? inner : inner.slice(0, pipe);
      const label = pipe === -1 ? inner : inner.slice(pipe + 1);
      const slug = nameOrSlug.trim().replace(/\s+/g, "_");
      return `<a href="/wiki/${encodeURIComponent(slug)}" class="wiki-link">${escapeHtml(label.trim())}</a>`;
    });

    // Footnote inline refs [^id]  — must come after wiki-link processing
    s = s.replace(/\[\^([^\]]+)\]/g, (_, id) => {
      if (!state.order.includes(id)) state.order.push(id);
      const num = state.order.indexOf(id) + 1;
      return `<sup id="fnref-${escapeHtml(id)}"><a href="#fn-${escapeHtml(id)}" class="reference">[${num}]</a></sup>`;
    });

    return s;
  };
}

// ── Block renderers ───────────────────────────────────────────────────────────

function renderTable(lines: string[], inline: (s: string) => string): string {
  const rows = lines.map((l) =>
    l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim())
  );
  const head = rows[0];
  const body = rows.slice(2);
  const thCells = head.map((h) => `<th>${inline(h)}</th>`).join("");
  const tbRows = body
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
    .join("\n");
  return `<table>\n<thead><tr>${thCells}</tr></thead>\n<tbody>\n${tbRows}\n</tbody>\n</table>`;
}

// ── Main renderer ─────────────────────────────────────────────────────────────

export function renderMarkdown(md: string): string {
  const { cleaned, state } = extractFootnoteDefs(md);
  const inline = makeInlineRenderer(state);

  const lines = cleaned.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      const cls = lang ? ` class="language-${escapeHtml(lang)}"` : "";
      out.push(`<pre><code${cls}>${codeLines.join("\n")}</code></pre>`);
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|") && i + 1 < lines.length && /^\|[-| :]+\|$/.test(lines[i + 1])) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      out.push(renderTable(tableLines, inline));
      continue;
    }

    // Headings
    const hMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (hMatch) {
      const level = hMatch[1].length;
      const raw = hMatch[2];
      const id = raw.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      out.push(`<h${level} id="${id}">${inline(raw)}</h${level}>`);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^[-*_]{3,}$/.test(line.trim())) {
      out.push("<hr>");
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        bqLines.push(lines[i].slice(2));
        i++;
      }
      // Render blockquote content with same footnote state
      out.push(`<blockquote>${renderMarkdownWithState(bqLines.join("\n"), state)}</blockquote>`);
      continue;
    }

    // Unordered list
    if (/^[-*+] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+] /.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^[-*+] /, ""))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("\n")}</ul>`);
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^\d+\. /, ""))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join("\n")}</ol>`);
      continue;
    }

    // Standalone image → figure block
    if (/^!\[[^\]]*\]\([^)]+\)$/.test(line.trim())) {
      const m = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (m) {
        const alt = m[1];
        const src = m[2];
        const caption = alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : "";
        out.push(
          `<figure class="article-image">` +
          `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">` +
          `${caption}</figure>`
        );
        i++;
        continue;
      }
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("|") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("> ") &&
      !/^[-*+] /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i]) &&
      !/^[-*_]{3,}$/.test(lines[i].trim()) &&
      !/^\[\^[^\]]+\]:/.test(lines[i]) &&   // skip stray def lines
      !/^!\[[^\]]*\]\([^)]+\)$/.test(lines[i].trim())  // standalone image
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      out.push(`<p>${inline(paraLines.join(" "))}</p>`);
    }
  }

  // Append footnotes / references section if any refs were used
  if (state.order.length > 0) {
    const items = state.order
      .map((id, idx) => {
        const num = idx + 1;
        const defText = state.defs.get(id);
        const body = defText
          ? inline(defText)
          : `<em>(definition missing for <code>[^${escapeHtml(id)}]</code>)</em>`;
        return `<li id="fn-${escapeHtml(id)}">${body}&nbsp;<a href="#fnref-${escapeHtml(id)}" class="footnote-backref" title="Jump back to citation ${num}">↑</a></li>`;
      })
      .join("\n");
    out.push(`<div class="reflist"><h2 id="references">References</h2><ol class="references">${items}</ol></div>`);
  }

  return out.join("\n");
}

/** Render markdown sharing an existing footnote state (used for blockquotes). */
function renderMarkdownWithState(md: string, state: FootnoteState): string {
  const inline = makeInlineRenderer(state);
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    const hMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (hMatch) {
      const level = hMatch[1].length;
      const id = hMatch[2].toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      out.push(`<h${level} id="${id}">${inline(hMatch[2])}</h${level}>`);
      i++; continue;
    }
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#")) {
      paraLines.push(lines[i]); i++;
    }
    if (paraLines.length > 0) out.push(`<p>${inline(paraLines.join(" "))}</p>`);
  }
  return out.join("\n");
}

// ── TOC extraction ────────────────────────────────────────────────────────────

export function extractToc(md: string): Array<{ level: number; text: string; id: string }> {
  // Strip footnote defs before scanning for headings
  const cleaned = md.replace(/^\[\^[^\]]+\]:.+$/gm, "");
  const toc: Array<{ level: number; text: string; id: string }> = [];
  for (const line of cleaned.split("\n")) {
    const m = line.match(/^(#{1,6})\s+(.*)/);
    if (!m || m[1].length < 2) continue;
    // Skip the auto-generated References heading
    if (m[2].trim().toLowerCase() === "references") continue;
    const text = m[2]
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/\*\*?(.+?)\*\*?/g, "$1")
      .replace(/\[\^[^\]]+\]/g, "");
    const id = m[2].toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    toc.push({ level: m[1].length, text: text.trim(), id });
  }
  return toc;
}
