---
title: LLMTEXT
description: Open-source toolkit by Jan Wilmake for creating, validating, and using llms.txt files; launched under Parallel AI in October 2025
category: Projects
---

# LLMTEXT

**LLMTEXT** (llmtext.com) is an open-source toolkit developed by [[Jan Wilmake]] and launched under [[Parallel_AI]]'s banner in October 2025. It provides three tools to help websites become accessible to AI agents through the [llms.txt standard](https://llmstxt.org) — a format proposed by Jeremy Howard to give LLMs structured, token-efficient access to website documentation.

## Background

By late 2025, AI bots had overtaken human visitors as the primary users of the web. Wikipedia reported an 8% decline in human traffic as AI summaries absorbed queries. Yet most websites continued to serve HTML built for human eyes, not structured text optimised for language model consumption.

The llms.txt standard — a Markdown file at the root of a domain, linking to clean text versions of key pages — had been adopted by Anthropic, Cloudflare, Docker, HubSpot, and others, but adoption was uneven and many implementations were technically incorrect.

LLMTEXT addresses both the supply problem (helping websites create valid llms.txt files) and the consumption problem (making valid llms.txt files instantly useful as MCP servers).[^llmtext]

## Tools

### llms.txt MCP

Turns any valid llms.txt into a dedicated MCP server installable in one click. Conceptually similar to Context7 but narrowly focused on a single website, and using LLM reasoning — not vector search — to select which documents to load into context.

The server exposes two tools:
- **get** — retrieves the llms.txt overview and then fetches relevant documents for a given task
- **leaderboard** — shows most active users and usage insights

The MCP only installs for llms.txt files that fully comply with the spec — a quality gate that incentivises website owners to fix their implementations.

### Check Tool

Validates an existing llms.txt. Common errors Jan found across popular implementations:

| Error | Example |
|-------|---------|
| Oversized table of contents | Cloudflare's llms.txt is 36,000 tokens |
| Wrong content-type on linked pages | Docker, Bitcoin.com serve HTML |
| Non-root hosting | Mintlify, Next.js serve under `/docs/` |
| Raw URLs without markdown link format | Cursor |
| Documents too large | Supabase links to an 800,000-token doc |

### Create Tool

A framework-agnostic generator powered by Parallel's Extract API. Scrapes a site via its sitemap, converts pages to Markdown, and outputs a spec-compliant llms.txt. Jan used it to generate Parallel AI's own llms.txt.[^llmtext]

## Context within Jan's Work

LLMTEXT extends the [[Agent_Friendly_Web]] mission. The mirror network (uithub, openapisearch, etc.) makes existing hostile-to-AI websites accessible by proxying them through clean-text endpoints. LLMTEXT instead helps websites *publish* clean text proactively, following an open standard — a more scalable and collaborative approach.

It is also Jan's most significant project as a DevRel contractor at Parallel, and the clearest example of his [[Depth_First_DevRel]] approach: building a real, widely-useful open-source tool that demonstrates Parallel's capabilities (the Extract API) and drives developer awareness.

## Reception

Launched October 30, 2025 via a Parallel AI blog post authored by Jan. Adopted by the broader llms.txt community; the MCP server became installable for any valid llms.txt at `mcp.llmtext.com`.

## December 2025 Updates

On December 18, 2025 Jan shipped an update to `llmtext-mcp` (the GitHub repo behind llmtext.com):
- Added `llms-txt-fetch`: a library to fetch all contents from a llms.txt file
- Created `explore-sitemaps`: a way to quickly get robots.txt, sitemaps, and RSS feeds in a structured format
- Also launched `map.llmtext.com` — a fully stateless sitemap mapper[^x-posts-2025-12-18]

## October 2025: llms.txt Quality Campaign

Before the formal LLMTEXT launch, Jan ran an informal quality campaign against broken llms.txt implementations in October 2025. He used an early version of the check tool to audit major sites, finding widespread errors. Notable findings:

- CircleCI, Supabase, and Apify had non-compliant llms.txt files
- Nuxt.js's llms.txt had all links returning HTML, not markdown
- Many generators (including popular Google results) were generating structurally incorrect files
- Even Mintlify (which auto-generates llms.txt) had valid-looking but non-compliant implementations

Jan's reaction: *"It's wild to see how many llms.txt are incorrect or completely unusable! Even big companies..."* and *"This is terrible for the llms.txt ecosystem!"*[^x-posts-2025-10-21]

He tagged Jeremy Howard (`@jeremyphoward`, creator of the standard) asking for action, and began correspondence with the affected companies to fix their implementations.[^x-posts-2025-10-22]

## November 2025: Position on llms.txt Standard

Jan engaged actively in debates about the llms.txt standard throughout November 2025, including:
- Advising T_Zahil (Uneed founder) on proper llms.txt construction: optimal size under 100k tokens, split by category, each linked page should have a markdown version[^x-posts-2025-12-14]
- Noting that `llms.txt` should link to markdown pages, not contain markdown itself — and that `llms-full.txt` is not part of the spec[^x-posts-2026-01-28]
- Clarifying the spec requires all links to be in proper markdown link format[^x-posts-2025-11-05]

## See Also

- [[Agent_Friendly_Web]]
- [[Parallel_AI]]
- [[Depth_First_DevRel]]
- [[Jan_Wilmake]]
- [[Markdown_Browser]]

[^llmtext]: Blog post and launch: `../blog/2025/LLMTEXT-for-llmstxt.md`
[^x-posts-2025-10-21]: X post archive: `x-archive/raw/posts/2025-10-21.md`
[^x-posts-2025-10-22]: X post archive: `x-archive/raw/posts/2025-10-22.md`
[^x-posts-2025-12-14]: X post archive: `x-archive/raw/posts/2025-12-14.md`
[^x-posts-2025-12-18]: X post archive: `x-archive/raw/posts/2025-12-18.md`
[^x-posts-2025-11-05]: X post archive: `x-archive/raw/posts/2025-11-05.md`
[^x-posts-2026-01-28]: X post archive: `x-archive/raw/posts/2026-01-28.md`
