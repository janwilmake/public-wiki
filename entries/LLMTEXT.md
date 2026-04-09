---
title: LLMTEXT
description: Open-source toolkit by Jan Wilmake for creating, validating, and using llms.txt files; launched under Parallel AI in October 2025
category: Projects
---

# LLMTEXT

**LLMTEXT** (`llmtext.com`) is an open-source toolkit developed by [[Jan_Wilmake]] and launched under [[Parallel_AI]]'s banner in October 2025. It provides three tools to help websites become accessible to AI agents through the [llms.txt standard](https://llmstxt.org) — a format proposed by Jeremy Howard to give LLMs structured, token-efficient access to website documentation.

## Background

By late 2025, AI bots had overtaken human visitors as the primary users of the web. Wikipedia reported an 8% decline in human traffic as AI summaries absorbed queries. Yet most websites continued to serve HTML built for human eyes, not structured text for AI agents.

The llms.txt standard addressed this: a simple file at `/.well-known/llms.txt` (or `/llms.txt`) listing the key documentation pages for a site, with a short description of each. LLMTEXT built the tooling to make this standard practical.

## Tools

### llms.txt MCP

Turns any valid `llms.txt` file into a dedicated MCP server. Uses LLM reasoning (not vector search) to decide which docs to load — similar in spirit to how [[uithub]] lets agents selectively fetch repo contents.

### Check Tool

Validates an existing `llms.txt` against the spec, surfacing common errors:
- Oversized files
- Wrong content-type headers
- Non-root hosting

### Create Tool

A framework-agnostic generator powered by Parallel's Extract API:
- Scrapes a site's sitemap
- Produces a compliant, well-structured `llms.txt`

## SLOP (Simple Language Open Protocol)

LLMTEXT also introduced **SLOP** — a human-readable, llms.txt-compatible format distilled from OpenAPI specs, developed via [[openapisearch]]. It reduces massive API specs (e.g. GitHub's 2M-token spec) to ~30k tokens, making them practical for AI agent use.

## Reception

LLMTEXT was Jan's most prominent [[Parallel_AI]] project, earning 2.5M X impressions and adding GitHub stars across the 2025 developer community.

## See Also

- [[Jan_Wilmake]]
- [[Parallel_AI]]
- [[Agent_Friendly_Web]]
- [[openapisearch]]
- [[Markdown_Browser]]
