#!/usr/bin/env node
/**
 * build.js — scans entries/ for .md files, parses frontmatter,
 * and writes entries/manifest.json so the worker knows all available articles.
 *
 * Run: node build.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRIES_DIR = path.join(__dirname, "entries");

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

const files = fs
  .readdirSync(ENTRIES_DIR)
  .filter((f) => f.endsWith(".md"))
  .sort();

const entries = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const content = fs.readFileSync(path.join(ENTRIES_DIR, file), "utf-8");
  const fm = parseFrontmatter(content);

  entries.push({
    slug,
    title: fm.title ?? slug.replace(/_/g, " "),
    description: fm.description ?? "",
    category: fm.category ?? "General"
  });
}

// Group by category for a stable sort: category asc, then title asc
entries.sort(
  (a, b) =>
    a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
);

const manifest = {
  generated: new Date().toISOString(),
  entries
};

const outPath = path.join("manifest.json");
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ manifest.json — ${entries.length} entries`);
for (const e of entries) {
  console.log(`  [${e.category}] ${e.slug}`);
}
