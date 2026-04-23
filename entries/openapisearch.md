---
title: openapisearch.com
description: API discovery and search tool by Jan Wilmake that went viral in March 2025
category: Projects
---

# openapisearch.com

![openapisearch.com](https://openapisearch.com/openapi.png)

**openapisearch.com** is an API discovery and search tool developed by [[Jan Wilmake]] under [[Code From Anywhere]], derived from [[ActionSchema]]'s OpenAPI tooling. It allows developers and AI agents to search for APIs and retrieve their OpenAPI specifications. The tool went viral in March 2025.[^history]

## Origin

openapisearch.com grew out of Wilmake's work on ActionSchema's OpenAPI proxy and search infrastructure during 2024. ActionSchema needed a way to discover and query external APIs from within data pipelines; the underlying search component was extracted and made into a standalone product.[^history]

A key product principle: the search results deliberately do not expose full information about the sorting algorithm or authentication details, protecting Wilmake's data advantage while still providing useful output to end users.[^diary-2024-q3]

## Viral Traction (March 2025)

In March 2025, openapisearch.com experienced a significant viral event alongside related tools in the forgithub ecosystem, driving substantial traffic and developer attention. The launch was coordinated with other tools: **zipobject** (repository packaging), **sponsorflare** (billing), and various **forgithub** utilities.[^history]

## Relationship to Other Projects

openapisearch.com sits within a broader tooling ecosystem:[^history]

- **[[ActionSchema]]** — parent project and conceptual origin
- **[[uithub]]** — sister tool for repository context (code); openapisearch handles the API layer
- **forgithub** family — tools for interacting with GitHub data programmatically
- **[[Parallel AI]]** — Wilmake later extended API search and MCP work at Parallel AI

## Technical Notes

- Deployed on Cloudflare Workers (edge compute)
- Results served from a proprietary providers dataset (`providers.json`) kept behind a private key
- Search outputs are rate-limited and deliberately incomplete to protect the moat[^diary-2024-q3]

## January 2026: SLOP and agentskills.io

On January 28, 2026, Jan shipped updates to openapisearch introducing two new features:

1. **OpenAPI → agentskills.io**: A new `/skills/{hostname}` endpoint that generates a skill from any OpenAPI spec[^x-posts-2026-01-28]
2. **OpenAPI → llms.txt (SLOP)**: Converting any OpenAPI spec into a Simple Language Open Protocol (SLOP) document that is llms.txt compatible — reducing GitHub's 2M-token OpenAPI spec to ~30k tokens[^x-posts-2026-01-28]

Jan coined the term **SLOP** (Simple Language Open Protocol) for the human-readable, llms.txt-compatible format distilled from OpenAPI specs. Every SLOP can be used via the LLMTEXT MCP.

## February 2026: Cloudflare Code Mode MCP

In February 2026, Cloudflare launched a "Code Mode MCP" which converts OpenAPI specs into code-mode style tool calls without a traditional MCP server layer. Jan's response: *"For big APIs like this, this beats CLIs! MCP is back. Inspires me to do MORE with my openapi-mcp-server."*[^x-posts-2026-02-20] The Cloudflare approach validated Jan's earlier OpenAPI-to-MCP direction while showing a convergent path in the ecosystem.

## See Also

- [[Jan Wilmake]]
- [[ActionSchema]]
- [[uithub]]
- [[Code From Anywhere]]
- [[LLMTEXT]]

[^history]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^diary-2024-q3]: Personal diary August 2024: `2024/2024-Q3/2024-08-diary.md`
[^x-posts-2026-01-28]: X post archive: `x-archive/raw/posts/2026-01-28.md`
[^x-posts-2026-02-20]: X post archive: `x-archive/raw/posts/2026-02-20.md`
