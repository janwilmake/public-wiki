---
title: uithub
description: GitHub repository viewer and AI context tool developed by Jan Wilmake
category: Projects
---

# uithub

**uithub** is a GitHub repository viewer and AI context generation tool developed by [[Jan Wilmake]] under [[Code From Anywhere]]. It allows users to view the full contents of any public GitHub repository in a format optimised for consumption by large language models (LLMs) and AI coding agents. The tool gained significant viral traction in March 2025.[^2024-2025]

## Overview

uithub addresses a practical problem in AI-assisted software development: feeding entire codebases to LLM-based tools requires structured, token-efficient representations of repository contents. uithub aggregates file trees, source files, and metadata into a single, well-formatted output that AI agents and developers can paste directly into prompts or context windows.

The name is a portmanteau of "UI" and "GitHub," reflecting its role as a readable interface layer on top of the GitHub API.

Wilmake's positioning: **"What Firecrawl is for the web, uithub is for code."**[^diary-2025-q2]

## Traction

uithub went viral on X (Twitter) three distinct times:[^investor-ryan]

| Date | Traffic Event |
|------|--------------|
| October 2024 | First major viral event; 100,000+ pageviews |
| December 2024 | 100,000+ pageviews, primarily from Japan |
| March 2025 | Third viral event, 100,000+ pageviews |

Between spikes, steady adoption of approximately **500–2,000 daily active users** with repeated usage patterns.[^investor-ryan]

In April 2025, Wilmake was in contact with **Ryan Hoover** (founder of Product Hunt, investor at Weekend Fund) about a potential pre-seed investment, describing a $250,000 raise to continue development without freelance distractions.[^investor-ryan] [^investor-ben]

## Features

- **Full repository view**: Renders all files of a GitHub repository in a single scrollable or downloadable document
- **Token counting**: Displays approximate token counts for repository contents[^career-plan]
- **Library mode**: Available as an npm library for programmatic use[^career-plan]
- **Shadow branches**: A mechanism for maintaining alternative versions of repository state
- **Monetisation layer**: Sponsorflare integration for usage-based billing and API key management

## Development History

| Period | Milestone |
|--------|-----------|
| 2024 Q4 | Initial GitHub API work; static hosting experiments; githuq deployment concept |
| 2025 Jan | zipobject, uithub.analysis, sponsorflare; gitingest collaboration discussions |
| 2025 Feb | uithub.chat, claudeflair integration |
| 2025 Feb–Jun | University of Groningen student supervision |
| 2025 Mar | openapisearch.com viral launch; badge system for LLM-friendly repos |
| 2025 Apr | DORM launch; UIT plugin system (faq.schema.json, plugins.schema.json) |
| 2025 May | Upstash sponsorship ($100/month); DORM and context.json stabilisation |
| 2025 Nov | Viral surge during Wilmake's Vietnam hospitalisation |

### January 2025: Gitingest Collaboration

In January 2025 Wilmake held discussions with the creator of Gitingest — a competing GitHub-to-LLM-context tool that had accumulated approximately 3,000 GitHub stars. The two discussed potential collaboration and open-sourcing uithub as a gesture to initiate a working relationship, with both founders discussing possible Y Combinator applications.[^diary-2025-q1]

### April 2025: Positioning and DORM

In April 2025 Wilmake articulated uithub's market positioning: **"What Firecrawl is for the web, uithub is for code."** He introduced a badge system enabling repo owners to add a one-click link to their README to make the repository LLM-friendly via uithub. **DORM** (a developer community or hosting layer concept) launched in April 2025.[^diary-2025-q2]

### November 2025: Viral Surge During Hospitalisation

Notably, uithub experienced a viral traffic spike and community attention during the period when Wilmake was hospitalised in Vietnam (November 2025). He observed the growth remotely on return to the Netherlands and noted the irony of the timing.[^diary-2025-q4]

## University Collaboration

From February to June 2025, Wilmake supervised four software engineering students from the **University of Groningen** working on uithub-related tooling — the first formal institutional collaboration in his career.[^2024-2025]

## Related Tools

uithub is part of a broader ecosystem of developer tools:[^2024-2025] [^career-plan]

- **[[openapisearch]]** – API discovery and search, went viral March 2025
- **[[sponsorflare]]** – Cloudflare-based sponsorship and billing layer
- **zipobject** – Utility for packaging repository contents
- **forgithub** – Family of GitHub data tools (activity, archive, stars, patch, join)
- **uithub.chat** – Chat interface for querying repository contents with LLMs
- **contextarea** – Personal context aggregation layer integrating uithub with X data

## Technical Stack

- **Runtime**: Cloudflare Workers (edge deployment)
- **Language**: TypeScript
- **APIs**: GitHub REST API, GitHub GraphQL API
- **Billing**: Stripe via sponsorflare

## December 2025: Monetisation Reset and Cloudflare Migration

In late November 2025, uithub was down for approximately one month. In December 2025 Jan rebuilt it with a new monetisation model: GitHub OAuth login became required for all users, private repository access costs a one-time $20 fee, and each private-repo request costs $0.01. The tool migrated fully to Cloudflare Workers, taking advantage of recent CPU optimisations to make it noticeably faster.[^x-posts-2025-12-14]

Jan announced the new model on December 14, 2025: *"Big uithub update! To prevent bots, you are now required to log in. To have a business model, you need to pay $20 (one time) to access private repos — every request on private repos costs $0.01, regular repos are still free."* The first conversion occurred almost immediately, with one paid user among the first 20 sign-ins.[^x-posts-2025-12-14]

Jan also disclosed a Cloudflare bill of $75 that month, noting the startup programme had ended, and that he owns 144+ domains costing ~$1,440/year.[^x-posts-2025-12-14]

## January 2026: Feature Updates and Ongoing Development

In January 2026 Jan shipped analytics to uithub via Claude Code — built without writing a single line of code manually.[^x-posts-2026-01-04] He also confirmed uithub is written in pure TypeScript, HTML, and CSS — no frameworks.[^x-posts-2026-01-13]

A significant new feature shipped January 30, 2026: **advanced filters** — VSCode-like glob patterns for file include/exclude and full-text search.[^x-posts-2026-01-30] Token counts for folders and large files were added January 24.[^x-posts-2026-01-24]

On January 30 Jan also prototyped **Durable Object repo preloading** — caching a large repo inside a DO so subsequent searches become very fast; he demonstrated browsing through the React repository (50 MB) with fast lookup times.[^x-posts-2026-01-30]

Jan also created a **skill for uithub** so coding agents know how to fetch uithub URLs: `npx skills add janwilmake/uithub`.[^x-posts-2026-03-06]

## February 2026: Binary File Fix and Open-Source Release

In February 2026 Jan fixed a bug where loading large binary files (e.g., MP4s) caused Cloudflare resource errors; the new version skips binary files.[^x-posts-2026-02-02]

He also shipped OAuth consent screen for the uithub OAuth provider.[^x-posts-2026-02-05]

## March 2026: Open Sourced

On March 5, 2026 Jan open-sourced uithub at `github.com/janwilmake/uithub`.[^x-posts-2026-03-05]

On March 7, 2026 he announced **uithub-lib** — a library for programmatically fetching and parsing GitHub repos from the open-source codebase.[^x-posts-2026-03-07]

### Login Bug Fix (March 31, 2026)

A user (@wgw_eth) reported Cloudflare Error 1101 when logging into uithub, an issue that had persisted for weeks. On March 31, Jan identified the root cause: users with non-Latin characters in their display name triggered an encoding error in the authentication flow. A fix was rolled out the same day.[^x-posts-2026-03-31]

## Revenue

By late February 2026 Jan disclosed uithub had reached **$120 MRR** over the preceding 2.5 months from the private-repo access model.[^x-posts-2026-02-27]

## See Also

- [[Jan Wilmake]]
- [[Code From Anywhere]]
- [[ActionSchema]]
- [[Parallel AI]]
- [[forgithub]]
- [[ContextArea]]
- [[Markdown_Browser]]

[^2024-2025]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^x-posts-2025-12-14]: X post archive: `x-archive/raw/posts/2025-12-14.md`
[^x-posts-2026-01-04]: X post archive: `x-archive/raw/posts/2026-01-04.md`
[^x-posts-2026-01-13]: X post archive: `x-archive/raw/posts/2026-01-13.md`
[^x-posts-2026-01-24]: X post archive: `x-archive/raw/posts/2026-01-24.md`
[^x-posts-2026-01-30]: X post archive: `x-archive/raw/posts/2026-01-30.md`
[^x-posts-2026-02-02]: X post archive: `x-archive/raw/posts/2026-02-02.md`
[^x-posts-2026-02-05]: X post archive: `x-archive/raw/posts/2026-02-05.md`
[^x-posts-2026-03-05]: X post archive: `x-archive/raw/posts/2026-03-05.md`
[^x-posts-2026-03-06]: X post archive: `x-archive/raw/posts/2026-03-06.md`
[^x-posts-2026-03-07]: X post archive: `x-archive/raw/posts/2026-03-07.md`
[^x-posts-2026-02-27]: X post archive: `x-archive/raw/posts/2026-02-27.md`
[^x-posts-2026-03-31]: X post archive: `x-archive/raw/x-posts/2026-03-31.md`
[^career-plan]: Career plan and job search notes: `career/career-plan.md`
[^diary-2025-q1]: Personal diary January 2025: `2025/2025-01-diary.md`
[^diary-2025-q2]: Personal diary April–May 2025: `2025/2025-04-diary.md`, `2025-05-diary.md`
[^diary-2025-q4]: Personal diary November 2025: `2025/2025-11-diary.md`
[^investor-ryan]: Email exchange with Ryan Hoover (Product Hunt / Weekend Fund): `2025/investors/ryan-hoover.md`
[^investor-ben]: Email pitch to Ben Tossell: `2025/investors/ben-tossel.md`
