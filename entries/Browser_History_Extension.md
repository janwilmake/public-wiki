---
title: Browser History Extension
description: Chrome extension by Jan Wilmake that auto-syncs browsing history to a private GitHub repo as daily Markdown files
category: Projects
---

# Browser History Extension

**Browser History Extension** is a Chrome extension developed by [[Jan_Wilmake]] and announced on April 12, 2026. It automatically synchronises a user's browsing history to a private GitHub repository as daily Markdown files, with each visit logged with timestamp, page title, duration, and description.[^x-posts-2026-04-12]

## Overview

The extension requires no servers and no accounts beyond a GitHub token. Each day's browsing history is committed as a structured Markdown file to the user's chosen private repository. The data includes:

- Timestamp of each visit
- Page title
- Duration spent on page
- Auto-generated description

Jan's announcement: *"I built a Chrome extension that automatically syncs your browsing history to a GitHub repo as daily Markdown files. Each visit gets logged with timestamp, page title, duration, and description — all stored in your own private repo. No servers, no accounts, just a GitHub token."*[^x-posts-2026-04-12]

## Relationship to Self-Driving Repos

The extension feeds directly into the [[Self-Driving_Repos]] pipeline. Jan demonstrated this on April 12, 2026, showing how the browser history data was *"being put to good use"* — a self-driving agent reads the raw browser history and generates a daily goals overview document (the `GOALS.md` file in the x-and-browser-archive repository).[^x-posts-2026-04-12]

This makes Browser History Extension the third data ingestion layer alongside [[Grok_Thyself]] (X data) in Jan's personal knowledge base architecture:

1. **[[Grok_Thyself]]** — syncs X posts, bookmarks, and likes
2. **Browser History Extension** — syncs browsing history
3. **[[Self-Driving_Repos]]** — runs agents that process both data sources

## Known Limitations

Jan self-identified two flaws shortly after announcement:[^goals]

1. **Privacy**: All browsing history is captured indiscriminately, including sensitive domains (banking, health, authentication pages)
2. **No LLM processing**: Raw history is stored but not summarised or categorised at the point of capture

Planned improvements include a selective/private-mode capture with domain blocklist, and an automated daily summarisation step where an agent reads the raw history and writes a narrative summary.[^goals]

## Data Sovereignty Philosophy

The extension aligns with Jan's broader philosophy of **personal data sovereignty** — the principle that users should own their own data in their own repositories rather than depending on third-party platforms. Combined with [[Grok_Thyself]], the extension enables cross-signal synthesis: combining X activity with browsing patterns to surface emerging interests and behavioural patterns.[^goals]

## See Also

- [[Jan_Wilmake]]
- [[Grok_Thyself]]
- [[Self-Driving_Repos]]
- [[getpromind]]

[^x-posts-2026-04-12]: X post archive: `x-archive/raw/x-posts/2026-04-12.md`
[^goals]: Goals document: `x-archive/entries/GOALS.md`
