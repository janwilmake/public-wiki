---
title: Agent-Friendly Web
description: Jan Wilmake's mission to make the open internet accessible to AI agents through token-dense URL mirrors
category: Concepts
---

# Agent-Friendly Web

The **Agent-Friendly Web** is a design philosophy and ongoing project pursued by [[Jan Wilmake]] from 2024 onwards. Its central thesis: the existing internet is built for human eyes — rendered HTML, JavaScript-heavy interfaces, CAPTCHAs, and session cookies — and is deeply hostile to AI agents that consume information as text. Jan's mission is to fix this at the infrastructure level by building URL-accessible, token-efficient mirrors of major information sources.

His own formulation: *"I'm On a Mission To Make The Open Internet Agent-Friendly through URLs (Universal Resource Locators)."*[^what-i-want]

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

Jan connected this to Tim Urban's "Elon's Secret Sauce" framework from *Wait But Why* (2015): the idea that rigorous first-principles reasoning applied to a continuous information stream produces better outcomes than intuition-based decision-making. UITHub, in this view, is infrastructure for applying that framework at scale.[^world-is-information]

The deeper commercial insight Jan articulated: rather than building yet another AI application, owning the **access layer** between the internet and AI systems creates a durable infrastructure position — similar to how search engines created durable positions by indexing the web before anyone else.

## Business Challenges

Jan identified a recurring difficulty: having built the infrastructure, he struggled to create clear B2B messaging that communicated its value to enterprise buyers. The technology worked; the go-to-market did not.[^what-i-want]

An alternative framing he explored was a **context marketplace** — where URL sources would be indexed, curated, and shared across users, with the content provider receiving payment for high-quality indexed content. This remained a design concept as of early 2026.

## LLMTEXT (2025)

In October 2025, Jan launched **LLMTEXT** — an open-source toolkit for the [llms.txt standard](https://llmstxt.org) — under Parallel AI's banner. The toolkit extends the Agent-Friendly Web mission from URL mirrors to documentation standards: rather than mirroring platforms that don't expose clean text, LLMTEXT helps websites publish clean text proactively.

Three tools shipped at launch:

- **llms.txt MCP** — turns any valid llms.txt into a dedicated MCP server; uses LLM reasoning (not vector search) to decide which docs to load, similar in spirit to how uithub lets agents selectively fetch repo contents
- **Check tool** — validates an existing llms.txt against the spec, surfacing common errors (oversized files, wrong content-type, non-root hosting)
- **Create tool** — framework-agnostic generator powered by Parallel's Extract API; scrapes a site's sitemap and produces a compliant llms.txt

Jan's framing at launch: *"AI has overtaken humans as the primary user of the web."* The tools respond to data showing an 8% drop in Wikipedia's human traffic as AI summaries absorb queries.[^llmtext]

## Intellectual Precursors

**Scalable knowledge work**: Jan's 2024 blog post "Scalable Ideas" articulates the same access-layer logic: by automating retrieval of structured information from GitHub (README → landing page pipeline), knowledge work becomes replicable at global scale. The Agent-Friendly Web mirrors are the infrastructure that makes this possible.[^scalable]

**The post-smartphone era**: Jan's 2024 essay on voice-first AI agents frames open-source agents as the mechanism for eliminating "fences" — proprietary interfaces that prevent machine-to-machine interaction. The Agent-Friendly Web mirrors are, in this reading, fence-removal infrastructure: they convert locked-down HTML surfaces into open text streams.[^post-smartphone]

## Reception

[[openapisearch]] went viral in March 2025 (100k+ pageviews), validating the core premise that developers wanted agent-friendly access to API specifications. [[uithub]] had three separate viral events (October 2024, December 2024, March 2025) each exceeding 100k pageviews.[^ryan]

## Markdown Browser (2026)

In March 2026, Jan launched **[[Markdown_Browser]]** (`markdownbrowser.com`) — a browser extension and web tool that shows any URL's markdown representation alongside its llms.txt navigation sidebar. His framing: *"The web is bifurcating. For 30 years we had one web — built for human eyes. Now a second web is emerging: markdown, structured data, and llms.txt files that AI agents consume. There's no browser for that second web. Until now."*[^x-posts-2026-03-02]

The Markdown Browser supports pluggable extract engines (Defuddle by default) and pluggable search engines, and was designed to integrate with Parallel AI's API key for rendering HTML-only pages.[^x-posts-2026-03-06]

## Industry Validation

Between October 2025 and early 2026, Jan's core thesis that agents would take over as the primary web users received significant external validation:

- **Bun** adopted content-negotiation markdown serving, shrinking token usage ~10x[^x-posts-2025-10-02]
- **Mintlify** adopted markdown-by-default for AI agents, reporting 30x token reduction[^x-posts-2025-10-02]
- **Cloudflare** announced native real-time content conversion to Markdown using content negotiation headers (February 2026)[^x-posts-2026-02-12]
- **Mintlify** reported 48% of all docs visitors across their platform were from AI agents by January 2026[^x-posts-2026-01-19]
- **Vercel** adopted markdown as an output format: `curl -H 'accept:text/markdown'` for the Vercel website[^x-posts-2026-01-14]

Jan noted (October 2025): *"Shortly after, @mintlify also adopted it, which probably has a real impact on how this develops as so many startups are using it and now adopt it unknowingly."*[^x-posts-2025-10-02]

## The Principal Belief

Jan has articulated this as a position on open standards: *"We need to adopt more open standards, or we lose a shared sense of reality. Markdown is one of them."*[^x-posts-2025-12-08]

## Cloudflare /crawl Endpoint (March 2026)

In March 2026, Cloudflare launched a `/crawl` endpoint — one API call to crawl an entire site, returning content in HTML, Markdown, or JSON. Jan's reaction: *"Wow"*. This represented platform-level validation of the Agent-Friendly Web thesis: major infrastructure companies treating markdown output as a first-class concern, not an afterthought.[^x-posts-2026-03-11]

## See Also

- [[uithub]]
- [[openapisearch]]
- [[sponsorflare]]
- [[LLMTEXT]]
- [[Markdown_Browser]]
- [[Jan_Wilmake]]
- [[socialdatapod]]
- [[getpromind]]
- [[Spec_First_Development]]
- [[installthismcp]]

[^what-i-want]: Personal notes: `2025/what-i-want.md`
[^x-posts-2025-10-02]: X post archive: `x-archive/raw/posts/2025-10-02.md`
[^x-posts-2025-12-08]: X post archive: `x-archive/raw/posts/2025-12-08.md`
[^x-posts-2026-01-14]: X post archive: `x-archive/raw/posts/2026-01-14.md`
[^x-posts-2026-01-19]: X post archive: `x-archive/raw/posts/2026-01-19.md`
[^x-posts-2026-02-12]: X post archive: `x-archive/raw/posts/2026-02-12.md`
[^x-posts-2026-03-02]: X post archive: `x-archive/raw/posts/2026-03-02.md`
[^x-posts-2026-03-06]: X post archive: `x-archive/raw/posts/2026-03-06.md`
[^x-posts-2026-03-11]: X post archive: `x-archive/raw/posts/2026-03-11.md`
[^world-is-information]: Philosophy notes: `2025/the-world-is-information.md`
[^ryan]: Investor email exchange: `2025/investors/ryan-hoover.md`
[^llmtext]: Blog post: `../blog/2025/LLMTEXT-for-llmstxt.md`
[^scalable]: Blog post: `../blog/2024/scalable-ideas.md`
[^post-smartphone]: Blog post: `../blog/2024/the-post-smartphone-era.md`
