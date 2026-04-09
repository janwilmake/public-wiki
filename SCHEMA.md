# Janpedia Schema

This document defines the structure, conventions, and maintenance workflows for **Janpedia** — Jan Wilmake's personal knowledge wiki. Any LLM agent maintaining or querying this wiki should read this file first.

---

## Architecture

The wiki follows a three-layer pattern:

| Layer | Location | Role |
|-------|----------|------|
| **Raw sources** | `history/`, `diary-*.md`, `career/`, `2024/`, `2025/`, `blog/`, etc. | Immutable ground-truth documents. Never edited by wiki operations. |
| **The wiki** | `wiki/entries/*.md` | LLM-maintained markdown pages synthesised from raw sources. Structured, interlinked, citable. |
| **This schema** | `wiki/SCHEMA.md` | Defines structure, categories, and maintenance workflows. |

The wiki is the "memory layer" — raw sources are too voluminous to read every time. The wiki contains what has already been extracted and synthesised.

---

## Entry Structure

Every entry is a markdown file in `wiki/entries/` with YAML frontmatter followed by Wikipedia-style content.

### Frontmatter

```yaml
---
title: Display Name          # shown in UI and manifest
description: One sentence.   # shown in category cards and search snippets; keep under 120 chars
category: <see below>        # determines sidebar grouping
---
```

### Body conventions

- **Lead sentence**: bold name + one-sentence definition, e.g. `**uithub** is a GitHub repository viewer...`
- **Sections**: `##` headings for major sections, `###` for subsections
- **Cross-references**: `[[Article Name]]` or `[[Slug|Display text]]` — spaces are converted to underscores for the URL; use the exact slug name of the target file (without `.md`)
- **Footnotes**: `[^key]` inline, `[^key]: Label: \`path/to/source\`` at end of file. Multiple footnotes per paragraph are fine.
- **See Also**: final `##` section listing related entries as `[[wiki links]]`

### File naming

- `Title_Case_With_Underscores.md` — matches the slug used in `[[wiki links]]`
- The slug is the filename without `.md`
- URL: `/wiki/<slug>`

---

## Categories

| Category | What belongs here |
|----------|------------------|
| **People** | Named individuals with a direct relationship to Jan Wilmake |
| **Projects** | Software products, tools, and experiments built or co-built by Jan |
| **Organizations** | Companies, agencies, communities Jan has worked with or targeted |
| **Concepts** | Original frameworks, theories, and philosophies Jan has articulated |
| **Events** | Discrete, time-bounded occurrences (viral surges, medical episodes, milestones) |
| **Career** | Job search strategies, career planning documents |
| **Financial** | Income history, runway, financial milestones |
| **Health** | Medical and mental health history |
| **Lifestyle** | Location-independent living, personal habits, recurring practices |
| **Places** | Geographic locations significant to Jan's life or work |

---

## Operations

### Ingest

**When to run**: when new raw source material arrives (diary entry, email thread, conversation log, article, contract).

**Goal**: integrate the new information into 10–15 existing wiki pages, and create new pages for any newly documented entities.

**Steps**:

1. Read the new source document in full.
2. List every named entity it introduces or updates (people, projects, orgs, concepts, events, places).
3. For each entity with an **existing wiki page**:
   - Add or update facts in the relevant section.
   - Add a new `[^newref]` footnote pointing to the source file path.
   - Update the `description` frontmatter if the one-liner is now stale.
   - Add new `[[wiki links]]` for any entities newly mentioned.
4. For each **new entity** worth its own page: create a new `wiki/entries/<Slug>.md` following the entry structure above.
5. Check bidirectional links: if A now links to B, check whether B's "See Also" should link back to A.
6. Regenerate the manifest: `cd wiki && node build.js`

**Per-entry update checklist**:
- [ ] New facts added with correct section placement
- [ ] New `[^ref]` footnote with source path
- [ ] `description` frontmatter still accurate
- [ ] No orphaned `[[wiki links]]` introduced (verify slugs exist)

---

### Query

**When to run**: when asked a question about Jan Wilmake, his projects, career, or context.

**Steps**:

1. Identify which categories and entries are most relevant to the question.
2. Read those entries in full (the raw sources they cite are available if deeper detail is needed).
3. Synthesise an answer with inline citations referencing the footnote sources.
4. If the answer surfaces a synthesis valuable enough to stand alone, consider creating a new wiki page for it.

---

### Lint

**When to run**: periodically, or before deploying the wiki.

**What to check**:

| Check | How to detect | Fix |
|-------|--------------|-----|
| **Broken wiki links** | `[[Name]]` where `Name` (spaces→underscores) has no matching `.md` file | Fix link or create stub entry |
| **Orphan pages** | entries with no inbound `[[wiki links]]` | Add cross-references from related entries |
| **Stale descriptions** | frontmatter `description` contradicts body text | Update frontmatter |
| **Uncited facts** | factual claims without a `[^ref]` citation | Add footnote or remove claim |
| **Category drift** | entry in the wrong category | Fix `category` frontmatter |
| **Outdated facts** | claims contradicted by more recent source documents | Update with newer ref |

Run after lint: `cd wiki && node build.js` to verify manifest regenerates cleanly.

---

## Building and Deploying

```bash
# Regenerate manifest.json from all entries
cd wiki && node build.js

# Run local dev server (Cloudflare Workers)
cd wiki && npx wrangler dev

# Deploy to Cloudflare
cd wiki && npx wrangler deploy
```

`manifest.json` is read at runtime by the Cloudflare Worker — always regenerate it after adding, removing, or renaming entries.

---

## Known Conventions

- The wiki title is **Janpedia**; the subtitle is *Jan Wilmake's personal knowledge base*.
- The worker is in `wiki/src/index.ts`; the markdown renderer is in `wiki/src/markdown.ts`.
- The renderer supports: `[[wiki links]]`, `[^footnotes]`, tables, fenced code, blockquotes, images (rendered as `<figure>`), and standard inline markdown.
- The renderer does **not** support: nested lists beyond one level or raw HTML.
