---
title: Parallel AI
description: San Francisco AI company where Jan Wilmake worked as DevRel contractor in 2025; raised $100M at $2B valuation in April 2026
category: Organizations
---

# Parallel AI

![Parallel AI](https://parallel.ai/parallel-logo-540.png)

**Parallel AI** is a San Francisco-based artificial intelligence company focused on AI research tooling, web search capabilities for AI agents, and developer infrastructure. [[Jan Wilmake]] worked at Parallel AI as a Developer Relations (DevRel) contractor from approximately August to November 2025.[^2024-2025]

## Products

- **Parallel Search MCP** – A Model Context Protocol (MCP) server providing web search and web fetch capabilities for AI agents
- **Context tooling** – Systems for managing and retrieving context within LLM workflows
- **Cloudflare integrations** – Edge-compute deployments leveraging Cloudflare Workers

## Jan Wilmake's Role

Contract negotiations were finalised in late July 2025 after Wilmake needed several weeks to review the initial terms.[^diary-2025-q3] Wilmake joined at approximately 32 hours per week and structured his working week around Parallel's schedule: Monday–Thursday focused on Parallel deliverables, with a longer weekend for personal product work.[^diary-2025-q3] His work focused on:

- Developing and documenting MCP server integrations
- Building Cloudflare-based infrastructure components
- Creating developer-facing examples and integrations
- Contributing to context tooling and API documentation

Wilmake also pitched Cloudflare engineer Kristian Freeman on building a standalone MCP client — framed as **"a T3 Chat but for MCP"** — as a showcase for Cloudflare's developer platform, though this proposal was not formalised.[^diary-2025-q3]

During the same period (July 2025), the open-source email project **mail0** approached Wilmake about a separate Cloudflare Durable Objects contract, creating overlapping opportunities.[^diary-2025-q3]

The engagement ran August–November 2025, ending when Wilmake experienced a health episode in Vietnam (see [[Mental Health History]]).[^2024-2025]

## Relocation Plans

During the Parallel AI period, Wilmake and his fiancée Bruna began actively planning a relocation to the San Francisco Bay Area, specifically targeting **Woodside** or other hillside communities near Palo Alto for proximity to nature and the Bay Area tech network.[^diary-2025-q3]

## Model Context Protocol (MCP)

A significant portion of Wilmake's work at Parallel AI involved the **Model Context Protocol (MCP)**, an emerging standard for connecting AI models to external data sources and tools. This work extended technical expertise developed through [[uithub]] and [[ActionSchema]].

Parallel AI operates as a listed MCP server provider on claude.ai, providing web search and web fetch capabilities to Claude users.

## Employment Context

The Parallel AI role followed a period of declined offers in mid-2025:[^2024-2025] [^diary-2025-q2]

- **May 2025**: A trial week at Iterate.com (~$3,600 earned), offer declined
- **May 2025**: Multiple other offers declined — Skyfire, ComposioDev, StackOne, SocialDatabase
- **May 2025**: Investor Ben Tossell expressed interest in backing Wilmake's work
- **May 2025**: Upstash began sponsoring uithub at $100/month
- **Ongoing**: Cloudflare DevRel partnership negotiations, stalled
- **August 2025**: Parallel AI DevRel contract begins

Total 2025 earnings were approximately €61,000, with Parallel AI contributing approximately $67,200 USD across several contract periods.[^earnings]

## 2026 Strategy and DevRel Niche

In January 2026, Jan published a retrospective and forward-looking post on his role at Parallel. Key findings from 2025: 2.5M X impressions, +2,600 GitHub stars across new repos, and a significant body of work (cookbook recipes, n8n integration, OAuth provider, Task MCP, LLMTEXT). The main challenge identified: sustaining X traffic and converting it into meaningful Parallel product adoption.

His 2026 niche within DevRel: the intersection of **code** (Cloudflare + Parallel) and **indie hackers / playful mindset**, specifically targeting developers who build in public, SaaS builders, and web scraping communities. He contrasted this with the no-code / enterprise quadrant, which he left to others.[^parallel-2026]

His 2026 plan had three components:

1. **Free tools and DevTools** — continuing LLMTEXT and cookbook-style tools that generate genuine developer value and funnel users toward Parallel's paid APIs (product-led growth)
2. **Wilmake Stack** — a skills library making it easier to build apps with Parallel primitives
3. **Build SaaS for the agentic internet** — building a profitable independent business using MCP and agent standards, then selling it; ideas included agent-friendly web (markdown browser), socialdatapod, OSS jobs finder, and a context marketplace

## AI Inference DX Design

Concurrently with the Parallel engagement, Jan was building **contextarea** — a developer-experience layer on top of AI inference. A 2025 draft post describes the challenge: around every model's core token-in/token-out function, there are many desirable features (response caching, billing, identity, URL context, MCP tool use, code mode, cronjobs, async execution), and composing them into a coherent developer experience is *"more of an artform than simply following rules in a book."*[^inference-dx]

This work sits at the intersection of Parallel's infrastructure goals and Jan's own product interests in MCP and agent tooling.

## October 2025: OpenAI Apps SDK and Parallel MCP UI

In early October 2025, OpenAI released the Apps SDK — an MCP-based standard for building MCPs with interactive UIs. Jan built a UI for the Parallel MCP using this SDK, working through initial bugs before getting it functional.[^x-posts-2025-10-08]

Jan also posted about the need for a standard for how MCP Clients can expose uploaded files to MCPs — noting that existing clients (Claude, ChatGPT, IDE-based) all handle file uploads differently and inefficiently, inserting file content token-by-token into the context window.[^x-posts-2025-10-06]

## October 2025: Parallel Task API and Entity Resolution

In mid-October 2025, Jan worked on using the Parallel Task API for entity resolution — finding all social media profiles belonging to a person given limited identifying information. He designed a shape for a person entity resolution API and tested it with Parallel's `core` processor.[^x-posts-2025-10-12]

On December 9, 2025, Jan shipped an entity resolution feature: *"find all social media profiles belonging to any person, given enough information — name, email, username, or any profile URL — returns matching profiles across platforms for sales, recruitment, and data quality use cases."*[^x-posts-2025-12-09]

## November 2025: Search API Launch

On November 6, 2025, Parallel AI launched the **Parallel Search API** — described as *"the most accurate web search for AI agents, built using our proprietary web index and retrieval infrastructure."* Jan announced the launch on X, writing: *"today we're launching the new Search API at @p0; the highest accuracy web search API engineered for AI... by engineering every layer of the stack from first principles our team has achieved state-of-the-art results."*[^x-posts-2025-11-06]

The benchmark results from CEO [[Paraga_Agarwal]] showed Parallel outperforming products built over years by major companies. Jonas Templestein publicly switched from ChatGPT to Claude to Parallel for deep research the same week, calling each step a major improvement.[^x-posts-2025-11-05]

## January 2026: Parallel Task MCP Update

On January 15, 2026, Jan announced that the Parallel Task MCP now also supports "fast" processors — expanding the available processing tiers.[^x-posts-2026-01-15]

## January 2026: Parallel on Google Vertex AI

On January 14, 2026, Parallel announced that grounding with Parallel web search was available in preview on **Google Vertex AI**.[^x-posts-2026-01-14]

## January 2026: Monitor API Structured Outputs

On January 22, 2026, Parallel announced **structured outputs for the Parallel Monitor API** — always-on web searches with configurable schemas for structured responses.[^x-posts-2026-01-22]

## February 2026: Parallel as DevRel Showcase

Jan used Parallel's Extract API as the backend for [[Markdown_Browser]] (launched March 2, 2026), where sites that only serve HTML (without native markdown) require a Parallel API key to render. This positioned Markdown Browser as a direct showcase for Parallel's Extract API capability.[^x-posts-2026-03-02]

## March 2026: Markdown Browser and Defuddle

Jan added pluggable extract engines to Markdown Browser in March 2026, with Defuddle (by @kepano) becoming the default. Parallel's API remained available as an option for HTML-only sites. Jan tested edge cases — e.g., `parallel.ai/blog` only showed the top blog post with Defuddle but worked better with Parallel's API.[^x-posts-2026-03-06]

## April 2026: Free MCP Search Launch

On April 24, 2026, Parallel AI launched **free web search for AI agents** via MCP — requiring no account, no API keys, and zero cost. The announcement tweet from @p0 stated: *"The best web search for agents is now free. Upgrade to Parallel's web search tools in any MCP-supported tool or agent, for free, in under 60 seconds."* Utkarsh Srivastava (@utkarsh) followed up: *"The same quality that enterprises rely on, now available to individual developers for free."*[^activity-2026-04-24-p0]

Jan read the announcement on April 24 and revisited it on April 26. [[Paraga_Agarwal]] also posted about major upgrades across the board and global coverage for the Search and Extract APIs, which Jan liked on X.[^activity-2026-04-26]

This launch is strategically significant for Jan's product portfolio: [[Self-Driving_Repos]] uses Parallel's web search as a tool for its agents. With the search layer now free, the marginal cost of each agent run that includes web search drops to zero — improving the economics of the platform. The free MCP search also lowers the barrier for any MCP-compatible tool to integrate web search, validating Jan's long-standing bet on MCP as the connective tissue of the agentic internet.[^goals-apr]

## April 2026: $100M Raise at $2B Valuation

On April 30, 2026, **Parallel Web Systems raised $100M at a $2B valuation** — a headline that trended on X. Jan noticed the trending topic and spent over 4 minutes reading the discussion thread. This represents a significant milestone for the company Jan worked at as a DevRel contractor just months earlier, and validates the bet on AI-powered web search and agent infrastructure that Jan contributed to building.[^browser-2026-04-30-raise]

## April 2026: Parallel Docs Check

On April 28, 2026, Jan briefly visited the **Parallel AI docs** (Getting Started / Overview) — a quick check of the developer documentation, suggesting continued engagement with the platform even during a personal rest period.[^activity-2026-04-28-docs]

## Hacker Residency (November 2025)

During Jan's Parallel AI contract period, he attended the **[[Hacker_Residency]]** in Da Nang, Vietnam in late October / early November 2025. Organised by Travis (@transitive_bs), the residency hosted Jan alongside Edmund Tian, Melanie Klenner, Lilian, Miles Feldstein and others. Jan described it as: *"I've never been around such an incredibly talented group of people. Shipping with such urgency and passion, all with the best possible vibes."*[^x-posts-2025-11-06] This period ended shortly before his November 2025 hospitalisation.

## Parallel Web Systems Inc.

**Parallel Web Systems Inc.** is the formal corporate entity behind Parallel AI. As of May 2026, the entity has a **Ramp corporate card** — Jan received an email on May 13 about updated Ramp sign-in requirements for Parallel Web Systems Inc., indicating he still has some administrative access or account linkage despite the DevRel contract ending in November 2025.[^activity-2026-05-13]

### May 2026: INDEX by Parallel Launch

On May 20, 2026, **Parallel Web Systems launched INDEX** — a system that indexes websites so AI agents can discover and use them, and **pays web creators for AI agent usage** based on Shapley value attribution. The launch trended on X. Jan explored the announcement that morning, checking the [INDEX about page](https://index.parallel.ai/about) and the [INDEX dashboard for wilmake.com](https://index.parallel.ai/dashboard?domain=wilmake.com) — the fact that he checked his own domain first signals personal alignment with the product's value proposition.[^activity-2026-05-20]

He also browsed Parallel's documentation — specifically the ClawHub, Agent Skills, and MCP Tool Calling docs — and checked the **Parallel Web Systems front-end Member of Technical Staff** job opening on Ashby. No application was filed as of May 22, but the role is aligned with Jan's SDR/uithub/openpolsia background.[^activity-2026-05-20]

The INDEX product is conceptually adjacent to Jan's own work on [[Agent_Friendly_Web]], [[LLMTEXT]], and [[uithub]] — all of which address the question of how AI agents should discover, access, and pay for web content. Jan's RT of @p0 on May 19 — *"AI agents are the web's second user. They'll use it 1000x more than humans ever have"* — further frames the alignment.[^x-posts-2026-05-19]

### parallel-llms-txt Deploy Failure (May 2026)

On May 14, 2026, Jan received a CI/CD failure notification for **`parallel-web/parallel-llms-txt`** — a GitHub Actions deploy to Cloudflare Workers that failed on the `main` branch. As of May 26, the deploy has been broken for **twelve consecutive days** with no visible fix attempts. The exact purpose of `parallel-llms-txt` is not publicly documented — it may be an `llms.txt` aggregator, LLM routing layer, or proxy service.[^activity-2026-05-14] [^goals-2026-05-22]

## See Also

- [[Jan Wilmake]]
- [[Paraga_Agarwal]]
- [[Code From Anywhere]]
- [[uithub]]
- [[ActionSchema]]
- [[Career Plan 2026]]
- [[Hacker_Residency]]
- [[LLMTEXT]]

[^activity-2026-04-24-p0]: Activity summary: `x-archive/raw/activity-summary/2026-04-24.md`
[^activity-2026-04-26]: Activity summary: `x-archive/raw/activity-summary/2026-04-26.md`
[^activity-2026-04-28-docs]: Activity summary: `x-archive/raw/activity-summary/2026-04-28.md`
[^activity-2026-05-13]: Activity summary: `x-archive/raw/activity-summary/2026-05-13.md`
[^activity-2026-05-14]: Activity summary: `x-archive/raw/activity-summary/2026-05-14.md`
[^activity-2026-05-20]: Activity summary: `x-archive/raw/activity-summary/2026-05-20.md`
[^x-posts-2026-05-19]: X post archive: `x-archive/raw/x-posts/2026-05-19.md`
[^goals-2026-05-22]: Goals document: `x-archive/entries/GOALS.md` (updated 2026-05-22)
[^goals-apr]: Goals document (April 2026): `x-archive/entries/GOALS.md`
[^2024-2025]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^x-posts-2025-10-06]: X post archive: `x-archive/raw/posts/2025-10-06.md`
[^x-posts-2025-10-08]: X post archive: `x-archive/raw/posts/2025-10-08.md`
[^x-posts-2025-10-12]: X post archive: `x-archive/raw/posts/2025-10-12.md`
[^x-posts-2025-11-05]: X post archive: `x-archive/raw/posts/2025-11-05.md`
[^x-posts-2025-11-06]: X post archive: `x-archive/raw/posts/2025-11-06.md`
[^x-posts-2025-12-09]: X post archive: `x-archive/raw/posts/2025-12-09.md`
[^x-posts-2026-01-14]: X post archive: `x-archive/raw/posts/2026-01-14.md`
[^x-posts-2026-01-15]: X post archive: `x-archive/raw/posts/2026-01-15.md`
[^x-posts-2026-01-22]: X post archive: `x-archive/raw/posts/2026-01-22.md`
[^x-posts-2026-03-02]: X post archive: `x-archive/raw/posts/2026-03-02.md`
[^x-posts-2026-03-06]: X post archive: `x-archive/raw/posts/2026-03-06.md`
[^earnings]: Financial summary 2025: `administration/earnings-2025.md`
[^diary-2025-q2]: Personal diary May 2025: `2025/2025-05-diary.md`
[^diary-2025-q3]: Personal diary July–August 2025: `2025/2025-07-diary.md`, `2025-08-diary.md`
[^parallel-2026]: Blog post: `../blog/2026/parallel-role-2026.md`
[^inference-dx]: Blog post (draft): `../blog/2025/ai-inference-dx-design.md`
