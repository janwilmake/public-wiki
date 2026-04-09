---
title: openapisearch.com
description: API discovery and search tool by Jan Wilmake that went viral in March 2025
category: Projects
---

# openapisearch.com

![openapisearch.com](https://openapisearch.com/openapi.png)

**openapisearch.com** is an API discovery and search tool developed by [[Jan_Wilmake]] under [[Code_From_Anywhere]], derived from [[ActionSchema]]'s OpenAPI tooling. It allows developers and AI agents to search for APIs and retrieve their OpenAPI specifications. The tool went viral in March 2025.

## Origin

openapisearch.com grew out of Wilmake's work on ActionSchema's OpenAPI proxy and search infrastructure during 2024. ActionSchema needed a way to discover and query external APIs from within data pipelines; the underlying search component was extracted and made into a standalone product.

## Viral Traction (March 2025)

In March 2025, openapisearch.com experienced a significant viral event alongside related tools in the forgithub ecosystem, driving substantial traffic and developer attention.

## Technical Notes

- Deployed on Cloudflare Workers (edge compute)
- Results served from a proprietary providers dataset (`providers.json`)
- Search outputs are rate-limited and curated to protect data quality

## January 2026: SLOP and agentskills.io

On January 28, 2026, Jan shipped two new features:

1. **OpenAPI → agentskills.io**: A new `/skills/{hostname}` endpoint that generates a skill from any OpenAPI spec
2. **OpenAPI → llms.txt (SLOP)**: Converting any OpenAPI spec into a Simple Language Open Protocol (SLOP) document that is llms.txt compatible — reducing GitHub's 2M-token OpenAPI spec to ~30k tokens

Jan coined the term **SLOP** (Simple Language Open Protocol) for the human-readable, llms.txt-compatible format distilled from OpenAPI specs. Every SLOP can be used via the [[LLMTEXT]] MCP.

## February 2026: Cloudflare Code Mode MCP

In February 2026, Cloudflare launched a "Code Mode MCP" which converts OpenAPI specs into code-mode style tool calls without a traditional MCP server layer. Jan's reaction: *"For big APIs like this, this beats CLIs! MCP is back. Inspires me to do MORE with my openapi-mcp-server."*

## Relationship to Other Projects

- **[[ActionSchema]]** — parent project and conceptual origin
- **[[uithub]]** — sister tool for repository context; openapisearch handles the API layer
- **[[forgithub]]** — tools for interacting with GitHub data programmatically
- **[[Parallel_AI]]** — Jan extended API search and MCP work at Parallel AI

## See Also

- [[Jan_Wilmake]]
- [[ActionSchema]]
- [[uithub]]
- [[Code_From_Anywhere]]
- [[LLMTEXT]]
