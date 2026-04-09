---
title: Markdown Browser
description: Browser extension and web tool by Jan Wilmake showing any URL's markdown representation alongside its llms.txt sidebar
category: Projects
---

# Markdown Browser

**Markdown Browser** (`markdownbrowser.com`) is a browser extension and web tool developed by [[Jan_Wilmake]] and launched in March 2026. It shows any URL's markdown representation alongside its llms.txt navigation sidebar, providing a unified interface for the "second web" — the markdown and structured-data layer that AI agents consume.

## Concept

Jan's framing at launch: *"The web is bifurcating. For 30 years we had one web — built for human eyes. Now a second web is emerging: markdown, structured data, and llms.txt files that AI agents consume. There's no browser for that second web. Until now."*

Markdown Browser solves this by giving humans and agents a consistent way to see both layers of any URL simultaneously.

## Features

- **Pluggable extract engines**: Defuddle (by @kepano) is the default; [[Parallel_AI]]'s API is available for HTML-only sites
- **llms.txt sidebar**: Shows the llms.txt navigation structure for any site that has one
- **Universal**: Works on any URL — GitHub repos, documentation sites, blogs, and more

## Relationship to Parallel AI

Jan used Parallel's Extract API as the backend for sites that only serve HTML. This positioned Markdown Browser as a direct showcase for Parallel's Extract API capability and part of his DevRel work.

## Industry Context

Markdown Browser was launched as the [[Agent_Friendly_Web]] thesis was receiving significant industry validation — with Cloudflare, Mintlify, Vercel, and Bun all adopting markdown-first content delivery in the months prior.

## See Also

- [[Jan_Wilmake]]
- [[Agent_Friendly_Web]]
- [[LLMTEXT]]
- [[Parallel_AI]]
- [[uithub]]
