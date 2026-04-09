#!/usr/bin/env node
/**
 * lint.js — checks all wiki entries for broken [[wiki links]].
 *
 * A [[wiki link]] is broken when the slug it resolves to has no
 * corresponding .md file in entries/. The renderer converts spaces
 * to underscores (matching wiki/src/markdown.ts):
 *   slug = name.replace(/\s+/g, "_")
 *
 * Run: node lint.js
 * Exit code 0 = clean, 1 = broken links found.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRIES_DIR = path.join(__dirname, "entries");

// ── Build set of valid slugs ──────────────────────────────────────────────────

const validSlugs = new Set(
  fs.readdirSync(ENTRIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
);

// ── Scan every entry for [[wiki links]] ──────────────────────────────────────

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

let totalBroken = 0;
const results = [];

for (const file of [...validSlugs].sort().map((s) => s + ".md")) {
  const filePath = path.join(ENTRIES_DIR, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const broken = [];

  for (const [, inner] of content.matchAll(WIKILINK_RE)) {
    // Support [[Slug|Display]] pipe alias syntax
    const pipe = inner.indexOf("|");
    const nameOrSlug = pipe === -1 ? inner : inner.slice(0, pipe);
    const slug = nameOrSlug.trim().replace(/\s+/g, "_");
    if (!validSlugs.has(slug)) {
      broken.push({ name: inner, slug });
    }
  }

  if (broken.length > 0) {
    results.push({ file, broken });
    totalBroken += broken.length;
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

if (totalBroken === 0) {
  console.log(`✓ All wiki links are valid (${validSlugs.size} entries checked)`);
  process.exit(0);
} else {
  for (const { file, broken } of results) {
    console.log(`\n${file}`);
    for (const { name, slug } of broken) {
      console.log(`  ✗ [[${name}]]  →  entries/${slug}.md  (not found)`);
    }
  }
  console.log(`\n${totalBroken} broken link${totalBroken === 1 ? "" : "s"} in ${results.length} file${results.length === 1 ? "" : "s"}`);
  process.exit(1);
}
