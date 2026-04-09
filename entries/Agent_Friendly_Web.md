---
title: Agent-Friendly Web
description: Jan Wilmake's mission to make the open internet accessible to AI agents through token-dense URL mirrors
category: Concepts
---

# Agent-Friendly Web

The **Agent-Friendly Web** is a design philosophy and ongoing project pursued by [[Jan_Wilmake]] from 2024 onwards. Its central thesis: the existing internet is built for human eyes — rendered HTML, JavaScript-heavy interfaces, CAPTCHAs, and session cookies — and is deeply hostile to AI agents that consume information as text. Jan's mission is to fix this at the infrastructure level by building URL-accessible, token-efficient mirrors of major information sources.

His own formulation: *"I'm On a Mission To Make The Open Internet Agent-Friendly through URLs (Universal Resource Locators)."*

## The Mirror Network

Jan built a family of tools — each a mirror of a major platform that returns clean, structured Markdown rather than HTML. These mirrors can be called by AI agents, LLMs, or any HTTP client with no authentication overhead:

| Mirror | Source Platform |
|--------|----------------|
| [uithub.com](https://uithub.com) | GitHub repositories |
| [googllm.com](https://googllm.com) | Google Search results |
| [flaredream.com](https://flaredream.com) | Cloudflare Dashboard |
| [openapisearch.com](https://openapisearch.com) | Public APIs (OpenAPI specs) |
| [xymake.com](https://xymake.com) | X / Twitter |
| [arxivmd.org](https://arxivmd.org) | ArXiv research papers |

Each mirror follows the same principle: take a URL that would normally return rendered HTML (or require login), and return the same information in a format a language model can consume directly.

## Philosophy

The concept is grounded in Jan's broader belief that **everything is an information stream** and that reducing friction between raw information and AI reasoning is a precondition for building reliable AI agents. A human navigating GitHub can tolerate JavaScript loading states and visual chrome; an LLM calling an API cannot.

The deeper commercial insight Jan articulated: rather than building yet another AI application, owning the **access layer** between the internet and AI systems creates a durable infrastructure position — similar to how search engines created durable positions by indexing the web before anyone else.

## LLMTEXT (2025)

In October 2025, Jan launched **[[LLMTEXT]]** — an open-source toolkit for the [llms.txt standard](https://llmstxt.org) — under [[Parallel_AI]]'s banner. The toolkit extends the Agent-Friendly Web mission from URL mirrors to documentation standards: rather than mirroring platforms that don't expose clean text, LLMTEXT helps websites publish clean text proactively.

Three tools shipped at launch:

- **llms.txt MCP** — turns any valid llms.txt into a dedicated MCP server
- **Check tool** — validates an existing llms.txt against the spec
- **Create tool** — framework-agnostic generator that produces a compliant llms.txt from a site's sitemap

Jan's framing at launch: *"AI has overtaken humans as the primary user of the web."*

## Markdown Browser (2026)

In March 2026, Jan launched **[[Markdown_Browser]]** (`markdownbrowser.com`) — a browser extension and web tool that shows any URL's markdown representation alongside its llms.txt navigation sidebar. His framing: *"The web is bifurcating. For 30 years we had one web — built for human eyes. Now a second web is emerging: markdown, structured data, and llms.txt files that AI agents consume. There's no browser for that second web. Until now."*

## Industry Validation

Between October 2025 and early 2026, Jan's core thesis received significant external validation:

- **Bun** adopted content-negotiation markdown serving, shrinking token usage ~10x
- **Mintlify** adopted markdown-by-default for AI agents, reporting 30x token reduction
- **Cloudflare** announced native real-time content conversion to Markdown (February 2026)
- **Mintlify** reported 48% of all docs visitors were from AI agents by January 2026
- **Vercel** adopted markdown as an output format: `curl -H 'accept:text/markdown'`

## Reception

[[openapisearch]] went viral in March 2025 (100k+ pageviews), validating the core premise that developers wanted agent-friendly access to API specifications. [[uithub]] had three separate viral events (October 2024, December 2024, March 2025) each exceeding 100k pageviews.

## Cloudflare /crawl Endpoint (March 2026)

In March 2026, Cloudflare launched a `/crawl` endpoint — one API call to crawl an entire site, returning content in HTML, Markdown, or JSON. This represented platform-level validation of the Agent-Friendly Web thesis: major infrastructure companies treating markdown output as a first-class concern.

## See Also

- [[uithub]]
- [[openapisearch]]
- [[sponsorflare]]
- [[LLMTEXT]]
- [[Markdown_Browser]]
- [[Jan_Wilmake]]
- [[Spec_First_Development]]
- [[installthismcp]]
