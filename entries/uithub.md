---
title: uithub
description: GitHub repository viewer and AI context tool developed by Jan Wilmake
category: Projects
---

# uithub

**uithub** is a GitHub repository viewer and AI context generation tool developed by [[Jan_Wilmake]] under [[Code_From_Anywhere]]. It allows users to view the full contents of any public GitHub repository in a format optimised for consumption by large language models (LLMs) and AI coding agents. The tool gained significant viral traction in 2024–2025.

## Overview

uithub addresses a practical problem in AI-assisted software development: feeding entire codebases to LLM-based tools requires structured, token-efficient representations of repository contents. uithub aggregates file trees, source files, and metadata into a single, well-formatted output that AI agents and developers can paste directly into prompts or context windows.

The name is a portmanteau of "UI" and "GitHub," reflecting its role as a readable interface layer on top of the GitHub API.

Jan's positioning: **"What Firecrawl is for the web, uithub is for code."**

## Traction

uithub went viral on X (Twitter) three distinct times:

| Date | Traffic Event |
|------|--------------|
| October 2024 | First major viral event; 100,000+ pageviews |
| December 2024 | 100,000+ pageviews, primarily from Japan |
| March 2025 | Third viral event, 100,000+ pageviews |

Between spikes, steady adoption of approximately 500–2,000 daily active users with repeated usage patterns.

## Features

- **Full repository view**: Renders all files of a GitHub repository in a single scrollable or downloadable document
- **Token counting**: Displays approximate token counts for repository contents
- **Advanced filters**: VSCode-like glob patterns for file include/exclude and full-text search
- **Library mode**: Available as an npm library (`uithub-lib`) for programmatic use
- **Shadow branches**: A mechanism for maintaining alternative versions of repository state
- **Monetisation layer**: [[sponsorflare]] integration for usage-based billing and API key management

## Development History

| Period | Milestone |
|--------|-----------|
| 2024 Q4 | Initial GitHub API work; first viral event |
| 2025 Jan | zipobject, sponsorflare integration |
| 2025 Mar | [[openapisearch]] viral launch; badge system for LLM-friendly repos |
| 2025 Apr | DORM launch; plugin system (faq.schema.json, plugins.schema.json) |
| 2025 May | Upstash sponsorship; DORM and context.json stabilisation |
| 2025 Nov | Viral surge; [[uithub_Viral_Events]] |
| 2025 Dec | Rebuilt with new monetisation model; full Cloudflare migration |
| 2026 Jan | Analytics (shipped via Claude Code), advanced filters, Durable Object preloading |
| 2026 Feb | Binary file bug fix; OAuth consent screen |
| 2026 Mar | Open-sourced at `github.com/janwilmake/uithub` |

### December 2025: Monetisation Reset

In December 2025, Jan rebuilt uithub with a new model: GitHub OAuth login is required for all users, private repository access costs a one-time $20 fee, and each private-repo request costs $0.01. The tool migrated fully to Cloudflare Workers.

### March 2026: Open Sourced

On March 5, 2026, Jan open-sourced uithub at `github.com/janwilmake/uithub`. A companion library (`uithub-lib`) was released March 7.

## Revenue

By late February 2026, uithub had reached **$120 MRR** from the private-repo access model.

## University Collaboration

From February to June 2025, Jan supervised four software engineering students from the **University of Groningen** working on uithub-related tooling.

## Technical Stack

- **Runtime**: Cloudflare Workers (edge deployment)
- **Language**: TypeScript, HTML, CSS (no frameworks)
- **APIs**: GitHub REST API, GitHub GraphQL API
- **Billing**: Stripe via [[sponsorflare]]

## Related Tools

- **[[openapisearch]]** – API discovery and search, went viral March 2025
- **[[sponsorflare]]** – Cloudflare-based sponsorship and billing layer
- **[[forgithub]]** – Family of GitHub data tools
- **[[ContextArea]]** – Personal context aggregation layer
- **[[Markdown_Browser]]** – Browser extension for the agent-friendly web

## See Also

- [[Jan_Wilmake]]
- [[Code_From_Anywhere]]
- [[ActionSchema]]
- [[Parallel_AI]]
- [[forgithub]]
- [[uithub_Viral_Events]]
