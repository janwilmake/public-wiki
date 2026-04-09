import { renderMarkdown, extractToc } from "./markdown";
import manifest from "../manifest.json";
// ── Types ─────────────────────────────────────────────────────────────────────

interface Env {
  ASSETS: Fetcher;
}

interface ManifestEntry {
  slug: string;
  title: string;
  description: string;
  category: string;
}

interface Manifest {
  generated: string;
  entries: ManifestEntry[];
}

// ── Module-level cache ────────────────────────────────────────────────────────

const contentCache = new Map<string, string>();

async function getManifest(env: Env): Promise<Manifest> {
  return manifest;
}

async function getEntryContent(env: Env, slug: string): Promise<string | null> {
  const cached = contentCache.get(slug);
  if (cached !== undefined) return cached;
  const res = await env.ASSETS.fetch(new Request(`http://assets/${slug}.md`));
  if (!res.ok) return null;
  const text = await res.text();
  contentCache.set(slug, text);
  return text;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const WIKI_TITLE = "Janpedia";
const WIKI_SUBTITLE = "Jan Wilmake's personal knowledge base";

// ── Helpers ───────────────────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function htmlResponse(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}

// ── CSS ───────────────────────────────────────────────────────────────────────

const CSS = `
*, *::before, *::after { box-sizing: border-box; }
:root {
  --bg: #eaecf0;
  --page-bg: #ffffff;
  --border: #a2a9b1;
  --border-light: #eaecf0;
  --text: #202122;
  --text-muted: #54595d;
  --link: #3366cc;
  --link-visited: #6b4080;
  --accent: #3366cc;
  --sidebar-w: 160px;
  --font: 'Linux Libertine','Georgia','Times',serif;
  --font-sans: 'Linux Biolinum','Helvetica Neue','Helvetica','Arial',sans-serif;
  --font-mono: 'SFMono-Regular','Consolas','Liberation Mono','Menlo',monospace;
}
html { font-size: 14px; scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; }

/* ── Header ── */
#mw-head {
  background: #fff;
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
}
#mw-head-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 1rem;
  display: flex; align-items: center; gap: 1.2rem; height: 54px;
}
#p-logo { display: flex; align-items: center; gap: 0.55rem; text-decoration: none; flex-shrink: 0; }
#p-logo-mark {
  width: 38px; height: 38px; border-radius: 50%;
  background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-sans); font-size: 1.15rem; font-weight: 700; color: #fff; line-height: 1;
  flex-shrink: 0;
}
#p-logo-text { display: flex; flex-direction: column; line-height: 1.2; }
#p-logo-sitename { font-family: var(--font-sans); font-size: 1rem; font-weight: 700; color: var(--text); }
#p-logo-tagline { font-family: var(--font-sans); font-size: 0.65rem; color: var(--text-muted); }
#p-search {
  flex: 1; max-width: 450px;
  display: flex; align-items: stretch;
  border: 1px solid var(--border); border-radius: 2px;
  background: #fff; overflow: hidden;
}
#searchInput {
  flex: 1; border: none; outline: none;
  padding: 0.38rem 0.65rem;
  font-size: 0.9rem; font-family: var(--font-sans);
  background: transparent; color: var(--text);
}
#searchButton {
  border: none; border-left: 1px solid var(--border);
  background: #f8f9fa;
  padding: 0 0.75rem; cursor: pointer;
  font-size: 0.85rem; font-family: var(--font-sans); color: var(--text-muted);
}
#searchButton:hover { background: var(--border-light); }

/* ── Page wrapper ── */
#mw-page-wrap { max-width: 1280px; margin: 0 auto; display: flex; }

/* ── Left nav sidebar ── */
#mw-panel {
  width: var(--sidebar-w); flex-shrink: 0;
  padding: 1rem 0.7rem 1rem 1rem;
}
.portal { margin-bottom: 1rem; }
.portal h3 {
  font-family: var(--font-sans); font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .07em;
  color: var(--text-muted); margin: 0 0 0.3rem;
  padding-bottom: 0.25rem; border-bottom: 1px solid var(--border-light);
}
.portal ul { list-style: none; margin: 0; padding: 0; }
.portal li { margin: 0.18rem 0; }
.portal a {
  font-family: var(--font-sans); font-size: 0.8rem;
  color: var(--link); text-decoration: none;
  display: block; padding: 0.08rem 0.3rem; border-radius: 2px;
}
.portal a:hover { text-decoration: underline; }
.portal a.active { font-weight: 700; color: var(--text); background: var(--border-light); }
.cat-label {
  font-family: var(--font-sans); font-size: 0.66rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .05em;
  color: var(--text-muted); margin: 0.5rem 0 0.1rem 0.3rem;
}

/* ── Main content ── */
#mw-content {
  flex: 1; min-width: 0;
  background: var(--page-bg);
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

/* ── Namespace / action tabs ── */
#p-namespaces {
  display: flex; gap: 0;
  padding: 0.5rem 2rem 0;
  border-bottom: 1px solid var(--border);
  background: var(--page-bg);
}
.ns-tab {
  font-family: var(--font-sans); font-size: 0.82rem;
  padding: 0.28rem 0.75rem 0.35rem;
  color: var(--link); text-decoration: none;
  border: 1px solid var(--border); border-bottom: none;
  border-radius: 3px 3px 0 0;
  margin-bottom: -1px; margin-right: 2px;
  background: #f0f2f5;
  display: inline-block;
}
.ns-tab:hover { background: #fff; }
.ns-tab.selected {
  background: var(--page-bg);
  border-bottom-color: var(--page-bg);
  color: var(--text); font-weight: 600; cursor: default;
}

/* ── Article heading ── */
#content-text { padding: 1.2rem 2rem 2.5rem; }
.firstHeading {
  font-family: var(--font-sans); font-size: 1.95rem; font-weight: normal;
  line-height: 1.2; border-bottom: 1px solid var(--border);
  padding-bottom: 0.35rem; margin: 0.2rem 0 0.1rem;
  color: var(--text);
}
.mw-subtitle {
  font-family: var(--font-sans); font-size: 0.78rem;
  color: var(--text-muted); margin: 0.3rem 0 1rem;
  font-style: italic;
}

/* ── Body content ── */
.mw-body-content { font-size: 0.938rem; line-height: 1.65; }
.mw-body-content p { margin: 0 0 0.7em; }
.mw-body-content a { color: var(--link); text-decoration: none; }
.mw-body-content a:visited { color: var(--link-visited); }
.mw-body-content a:hover { text-decoration: underline; }
.mw-body-content strong { font-weight: bold; }
.mw-body-content em { font-style: italic; }
.mw-body-content h2 {
  font-family: var(--font-sans); font-size: 1.38rem; font-weight: normal;
  border-bottom: 1px solid var(--border);
  margin: 1.6rem 0 0.55rem; padding-bottom: 0.15rem;
}
.mw-body-content h3 {
  font-family: var(--font-sans); font-size: 1.07rem; font-weight: bold;
  margin: 1.3rem 0 0.4rem;
}
.mw-body-content h4 {
  font-family: var(--font-sans); font-size: 0.95rem; font-weight: bold;
  margin: 1rem 0 0.35rem;
}
.mw-body-content code {
  font-family: var(--font-mono); font-size: 0.86em;
  background: #f8f9fa; border: 1px solid #eaecf0;
  padding: 0.1em 0.35em; border-radius: 2px;
}
.mw-body-content pre {
  background: #f8f9fa; border: 1px solid var(--border);
  padding: 1em; overflow-x: auto; margin: 0.8em 0;
  font-size: 0.85em; line-height: 1.55;
}
.mw-body-content pre code { background: none; border: none; padding: 0; }
.mw-body-content ul, .mw-body-content ol { margin: 0.3em 0 0.8em 1.6em; padding: 0; }
.mw-body-content li { margin: 0.25em 0; }
.mw-body-content table {
  border-collapse: collapse; margin: 0.8em 0;
  font-size: 0.875rem; font-family: var(--font-sans);
}
.mw-body-content th, .mw-body-content td {
  border: 1px solid var(--border); padding: 0.32em 0.6em;
  text-align: left; vertical-align: top;
}
.mw-body-content th { background: #eaecf0; font-weight: 600; }
.mw-body-content tr:nth-child(even) td { background: #f8f9fa; }
.mw-body-content hr { border: none; border-top: 1px solid var(--border); margin: 1em 0; }
.mw-body-content blockquote {
  border-left: 3px solid var(--border); padding: 0.4em 0.8em;
  margin: 0.8em 0; color: var(--text-muted); font-style: italic;
}

/* ── Table of Contents ── */
#toc {
  background: #f8f9fa; border: 1px solid var(--border);
  padding: 0.55rem 1rem 0.7rem;
  display: inline-block; min-width: 185px; max-width: 300px;
  float: right; margin: 0 0 1em 1.5em;
  font-size: 0.84rem; font-family: var(--font-sans);
}
#toc .toctitle {
  font-weight: bold; font-size: 0.9rem;
  text-align: center; margin-bottom: 0.35rem;
}
#toc ol { margin: 0; padding-left: 1.3em; }
#toc li { margin: 0.2em 0; line-height: 1.4; }
#toc a { color: var(--link); text-decoration: none; }
#toc a:hover { text-decoration: underline; }
.toc-indent { padding-left: 1em; }

/* ── Citations & References ── */
sup a.reference {
  color: var(--link); text-decoration: none; font-size: 0.75em;
}
sup a.reference:hover { text-decoration: underline; }
.reflist {
  clear: both;
  border-top: 1px solid var(--border);
  padding-top: 0.5em; margin-top: 1.8em;
}
.reflist h2 {
  font-family: var(--font-sans); font-size: 1.38rem; font-weight: normal;
  border-bottom: 1px solid var(--border); margin: 0 0 0.6em; padding-bottom: 0.15rem;
}
ol.references {
  font-size: 0.84rem; font-family: var(--font-sans);
  padding-left: 2.5em; margin: 0.4em 0;
  columns: 2; column-gap: 2em;
}
ol.references li {
  margin: 0.3em 0; break-inside: avoid;
  color: var(--text);
}
ol.references li a { color: var(--link); }
a.footnote-backref { color: var(--text-muted); text-decoration: none; font-size: 0.9em; }
a.footnote-backref:hover { text-decoration: underline; }

/* ── Article images ── */
figure.article-image {
  float: right;
  clear: right;
  margin: 0.4em 0 1.2em 1.5em;
  border: 1px solid var(--border);
  background: #f8f9fa;
  max-width: 220px;
  font-size: 0;
}
figure.article-image img {
  width: 100%;
  height: auto;
  display: block;
}
figure.article-image figcaption {
  font-size: 0.75rem;
  color: var(--text-muted);
  padding: 0.28em 0.5em 0.35em;
  text-align: center;
  line-height: 1.35;
  border-top: 1px solid var(--border);
  font-family: var(--font-sans);
}
.mw-body-content img { max-width: 100%; height: auto; }
@media (max-width: 600px) {
  figure.article-image { float: none; margin: 0 0 1em; max-width: 100%; }
}

/* ── Category box ── */
#catlinks {
  clear: both;
  border: 1px solid var(--border-light); background: #f8f9fa;
  padding: 0.4em 0.8em; margin-top: 1.5em;
  font-family: var(--font-sans); font-size: 0.83rem;
}
#catlinks strong { color: var(--text); }
#catlinks a { color: var(--link); text-decoration: none; }
#catlinks a:hover { text-decoration: underline; }

/* ── Home page ── */
.home-intro { font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem; }
.category-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1rem; margin-top: 1rem;
}
.category-card { border: 1px solid var(--border); }
.category-card-head {
  background: #cee0f2; border-bottom: 1px solid var(--border);
  padding: 0.32rem 0.75rem;
}
.category-card-head h3 {
  font-family: var(--font-sans); font-size: 0.82rem; font-weight: 700;
  margin: 0; color: #1a3a5c;
}
.category-card ul { list-style: none; margin: 0; padding: 0.5rem 0.75rem; }
.category-card li { margin: 0.28rem 0; }
.category-card a { font-family: var(--font-sans); font-size: 0.88rem; color: var(--link); text-decoration: none; }
.category-card a:hover { text-decoration: underline; }
.entry-desc { font-size: 0.74rem; color: var(--text-muted); }

/* ── Search ── */
.search-results { margin-top: 0.8rem; }
.search-result-item { border-bottom: 1px solid var(--border-light); padding: 0.7rem 0; }
.search-result-item:last-child { border-bottom: none; }
.search-result-item h3 { font-family: var(--font-sans); font-size: 1.05rem; margin: 0 0 0.2rem; }
.search-result-item h3 a { color: var(--link); text-decoration: none; }
.search-result-item h3 a:hover { text-decoration: underline; }
.search-snippet { font-size: 0.86rem; color: var(--text-muted); font-family: var(--font-sans); margin: 0; }
mark { background: #fef9c3; padding: 0 1px; }

/* ── Footer ── */
#footer {
  max-width: 1280px; margin: 0 auto;
  border-top: 1px solid var(--border); padding: 0.8rem 1rem 0.8rem calc(var(--sidebar-w) + 1rem + 1px);
  font-family: var(--font-sans); font-size: 0.76rem; color: var(--text-muted);
  display: flex; gap: 1.5rem; flex-wrap: wrap;
}
#footer a { color: var(--text-muted); }

/* ── Responsive ── */
@media (max-width: 860px) {
  #mw-panel { display: none; }
  #mw-content { border-left: none; border-right: none; }
  #content-text { padding: 0.8rem 1rem 2rem; }
  #p-namespaces { padding: 0.4rem 1rem 0; }
  #toc { float: none; max-width: 100%; margin: 0 0 1em; }
  .category-grid { grid-template-columns: 1fr; }
  ol.references { columns: 1; }
  #footer { padding-left: 1rem; }
}
`;

// ── HTML shell helpers ────────────────────────────────────────────────────────

function buildSidebar(entries: ManifestEntry[], activeSlug?: string): string {
  const byCategory = new Map<string, ManifestEntry[]>();
  for (const e of entries) {
    if (!byCategory.has(e.category)) byCategory.set(e.category, []);
    byCategory.get(e.category)!.push(e);
  }

  const sections = [...byCategory.entries()]
    .map(([cat, ents]) => {
      const links = ents
        .map((e) => {
          const cls = e.slug === activeSlug ? ' class="active"' : "";
          return `<li><a href="/wiki/${encodeURIComponent(e.slug)}"${cls}>${escapeHtml(e.title)}</a></li>`;
        })
        .join("");
      return `<div class="cat-label">${escapeHtml(cat)}</div><ul>${links}</ul>`;
    })
    .join("\n");

  return `<div id="mw-panel">
  <div class="portal">
    <h3>Navigation</h3>
    <ul>
      <li><a href="/">Main page</a></li>
      <li><a href="/search">Search</a></li>
      <li><a href="/random">Random article</a></li>
    </ul>
  </div>
  <div class="portal">
    <h3>Articles</h3>
    ${sections}
  </div>
</div>`;
}

function buildToc(md: string): string {
  const toc = extractToc(md);
  if (toc.length < 3) return "";
  const items = toc
    .map((item) => {
      const indent = item.level > 2 ? ' class="toc-indent"' : "";
      return `<li${indent}><a href="#${encodeURIComponent(item.id)}">${escapeHtml(item.text)}</a></li>`;
    })
    .join("\n");
  return `<div id="toc"><div class="toctitle">Contents</div><ol>${items}</ol></div>`;
}

function page(
  title: string,
  bodyHtml: string,
  sidebar: string,
  opts: { slug?: string; category?: string; isArticle?: boolean } = {}
): string {
  const tabs = opts.isArticle
    ? `<div id="p-namespaces">
        <a class="ns-tab selected" href="#">Article</a>
        <a class="ns-tab" href="/${encodeURIComponent(opts.slug ?? "")}.md">Source</a>
      </div>`
    : "";

  const catbox = opts.category
    ? `<div id="catlinks"><strong>Category:</strong> <a href="/">${escapeHtml(opts.category)}</a></div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} — ${escapeHtml(WIKI_TITLE)}</title>
<style>${CSS}</style>
</head>
<body>
<div id="mw-head">
  <div id="mw-head-inner">
    <a id="p-logo" href="/">
      <div id="p-logo-mark">JW</div>
      <div id="p-logo-text">
        <span id="p-logo-sitename">${escapeHtml(WIKI_TITLE)}</span>
        <span id="p-logo-tagline">${escapeHtml(WIKI_SUBTITLE)}</span>
      </div>
    </a>
    <form id="p-search" action="/search" method="get">
      <input id="searchInput" type="search" name="q" placeholder="Search this wiki" autocomplete="off">
      <button id="searchButton" type="submit">Search</button>
    </form>
  </div>
</div>
<div id="mw-page-wrap">
  ${sidebar}
  <div id="mw-content">
    ${tabs}
    <div id="content-text">
      ${bodyHtml}
      ${catbox}
    </div>
  </div>
</div>
<div id="footer">
  <span>Personal knowledge wiki of Jan Wilmake</span>
  <span><a href="/random">Random article</a></span>
  <span>${new Date().getFullYear()} Jan Wilmake</span>
</div>
</body>
</html>`;
}

// ── Page renderers ────────────────────────────────────────────────────────────

function renderHome(manifest: Manifest): string {
  const byCategory = new Map<string, ManifestEntry[]>();
  for (const e of manifest.entries) {
    if (!byCategory.has(e.category)) byCategory.set(e.category, []);
    byCategory.get(e.category)!.push(e);
  }

  const cards = [...byCategory.entries()]
    .map(([cat, ents]) => {
      const items = ents
        .map(
          (e) =>
            `<li><a href="/wiki/${encodeURIComponent(e.slug)}">${escapeHtml(e.title)}</a>` +
            `<div class="entry-desc">${escapeHtml(e.description)}</div></li>`
        )
        .join("");
      return (
        `<div class="category-card">` +
        `<div class="category-card-head"><h3>${escapeHtml(cat)}</h3></div>` +
        `<ul>${items}</ul></div>`
      );
    })
    .join("");

  const body = `
    <h1 class="firstHeading">Main Page</h1>
    <p class="home-intro">
      Welcome to the personal wiki of <a href="/wiki/Jan_Wilmake">Jan Wilmake</a> —
      a structured knowledge base covering career history, projects, organisations, and personal context.
      Use the search bar above or the sidebar to navigate.
    </p>
    <h2 style="font-family:var(--font-sans);font-size:1.1rem;border-bottom:1px solid var(--border-light);padding-bottom:.3rem;margin:1.2rem 0 .7rem;">
      All articles by category
    </h2>
    <div class="category-grid">${cards}</div>`;

  return page("Main Page", body, buildSidebar(manifest.entries));
}

function renderArticle(
  entry: ManifestEntry,
  rawContent: string,
  allEntries: ManifestEntry[]
): string {
  const md = rawContent.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  const toc = buildToc(md);
  const html = renderMarkdown(md);

  // Insert TOC after the first </p>, but ALWAYS before any article image figure
  // so a floating image never steals the top-right position from the TOC.
  let articleHtml: string;
  if (toc) {
    const figIdx = html.indexOf('<figure class="article-image">');
    const paraEnd = html.indexOf("</p>");
    // If a figure appears before (or instead of) the first paragraph end, put
    // the TOC before the figure so the TOC wins the top-right float column.
    let at: number;
    if (figIdx > -1 && (paraEnd === -1 || figIdx <= paraEnd + 4)) {
      at = figIdx;
    } else if (paraEnd > -1) {
      at = paraEnd + 4;
    } else {
      at = 0;
    }
    articleHtml = html.slice(0, at) + toc + html.slice(at);
  } else {
    articleHtml = html;
  }

  const body = `
    <h1 class="firstHeading">${escapeHtml(entry.title)}</h1>
    <div class="mw-subtitle">From ${escapeHtml(WIKI_SUBTITLE)}</div>
    <div class="mw-body-content">${articleHtml}</div>`;

  return page(entry.title, body, buildSidebar(allEntries, entry.slug), {
    slug: entry.slug,
    category: entry.category,
    isArticle: true
  });
}

function renderSearch(
  query: string,
  manifest: Manifest,
  contentMap: Map<string, string>
): string {
  const q = query.trim().toLowerCase();
  let resultsHtml = "";

  if (q) {
    const results: Array<{
      entry: ManifestEntry;
      snippet: string;
      score: number;
    }> = [];

    for (const entry of manifest.entries) {
      const body = contentMap.get(entry.slug) ?? "";
      let score = 0;
      if (entry.title.toLowerCase().includes(q)) score += 10;
      if (entry.description.toLowerCase().includes(q)) score += 5;
      score += Math.min(body.toLowerCase().split(q).length - 1, 5);
      if (score === 0) continue;

      const idx = body.toLowerCase().indexOf(q);
      let snippet = "";
      if (idx > -1) {
        const start = Math.max(0, idx - 80);
        const end = Math.min(body.length, idx + q.length + 120);
        const raw = body
          .slice(start, end)
          .replace(/[#*`|>_]/g, "")
          .trim();
        const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        snippet =
          (start > 0 ? "…" : "") +
          raw.replace(re, (m) => `<mark>${escapeHtml(m)}</mark>`) +
          (end < body.length ? "…" : "");
      }
      results.push({ entry, snippet, score });
    }

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
      resultsHtml = `<p>No results for <strong>"${escapeHtml(query)}"</strong>.</p>`;
    } else {
      resultsHtml =
        `<p style="font-family:var(--font-sans);color:var(--text-muted);margin-bottom:.8rem;">` +
        `${results.length} result${results.length === 1 ? "" : "s"} for <strong>"${escapeHtml(query)}"</strong></p>` +
        `<div class="search-results">` +
        results
          .map(
            ({ entry, snippet }) =>
              `<div class="search-result-item">` +
              `<h3><a href="/wiki/${encodeURIComponent(entry.slug)}">${escapeHtml(entry.title)}</a></h3>` +
              `<p class="search-snippet">${snippet || escapeHtml(entry.description)}</p>` +
              `</div>`
          )
          .join("") +
        `</div>`;
    }
  }

  const body = `
    <h1 class="firstHeading">Search</h1>
    <form action="/search" method="get" style="margin:.6rem 0 1.2rem;display:flex;gap:.5rem;max-width:540px;">
      <input type="search" name="q" value="${escapeHtml(query)}"
        style="padding:.4rem .6rem;border:1px solid var(--border);border-radius:2px;font-size:.95rem;flex:1;font-family:var(--font-sans);">
      <button type="submit" style="padding:.4rem .8rem;background:var(--accent);color:#fff;border:none;border-radius:2px;cursor:pointer;font-family:var(--font-sans);">Search</button>
    </form>
    ${resultsHtml}`;

  return page(
    q ? `Search: ${query}` : "Search",
    body,
    buildSidebar(manifest.entries)
  );
}

function render404(slug: string, allEntries: ManifestEntry[]): Response {
  const body = `
    <h1 class="firstHeading">Article not found</h1>
    <p>The article <strong>"${escapeHtml(slug)}"</strong> does not exist in this wiki.</p>
    <p><a href="/">Return to Main Page</a> · <a href="/search">Search</a></p>
    <p>Available articles:</p>
    <ul style="font-family:var(--font-sans);font-size:.9rem;columns:2;">
      ${allEntries.map((e) => `<li><a href="/wiki/${encodeURIComponent(e.slug)}">${escapeHtml(e.title)}</a></li>`).join("")}
    </ul>`;

  return new Response(page("Not Found", body, buildSidebar(allEntries)), {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}

// ── Worker entry point ────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/" || pathname === "/wiki" || pathname === "/wiki/") {
      const manifest = await getManifest(env);
      return htmlResponse(renderHome(manifest));
    }

    const articleMatch = pathname.match(/^\/wiki\/(.+)$/);
    if (articleMatch) {
      const slug = decodeURIComponent(articleMatch[1]);
      const manifest = await getManifest(env);
      const entry = manifest.entries.find((e) => e.slug === slug);
      if (!entry) return render404(slug.replace(/_/g, " "), manifest.entries);
      const content = await getEntryContent(env, slug);
      if (content === null) return render404(slug, manifest.entries);
      return htmlResponse(renderArticle(entry, content, manifest.entries));
    }

    if (pathname === "/random") {
      const manifest = await getManifest(env);
      const entries = manifest.entries;
      const entry = entries[Math.floor(Math.random() * entries.length)];
      return Response.redirect(new URL(`/wiki/${entry.slug}`, url).toString(), 302);
    }

    if (pathname === "/search") {
      const q = url.searchParams.get("q") ?? "";
      const manifest = await getManifest(env);
      await Promise.all(
        manifest.entries.map((e) => getEntryContent(env, e.slug))
      );
      return htmlResponse(renderSearch(q, manifest, contentCache));
    }

    // Fall through to static assets (raw .md files, manifest.json, etc.)
    return env.ASSETS.fetch(request);
  }
};
