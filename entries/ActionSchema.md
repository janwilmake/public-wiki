---
title: ActionSchema
description: AI-powered spreadsheet and data-pipeline tool developed by Jan Wilmake
category: Projects
---

# ActionSchema

**ActionSchema** is an AI-powered spreadsheet and data-pipeline tool developed by [[Jan Wilmake]] under [[Code From Anywhere]]. Initially conceived as a way to automate complex data workflows using large language models, ActionSchema evolved through 2023–2024 into a platform enabling users to define, run, and chain API-driven actions within a spreadsheet-like interface.[^2023-2024]

## Origins

The concept for ActionSchema emerged from Wilmake's work on AI automation pipelines in mid-2023, building upon earlier explorations in conversational AI and data enrichment during his time in Brazil working on the **Zion** B2B conversational AI project.[^2023-2024] A key influence was the proliferation of OpenAI plugins and the MRKL (Modular Reasoning, Knowledge and Language) architecture pattern.

ActionSchema was publicly announced in its alpha form during weeks 37–41 of 2023, with first paying users acquired shortly after launch.[^2023-2024]

## Features

- **AI columns**: Each column in a table could be powered by an LLM prompt, OpenAI function call, or external API call
- **Chained pipelines**: Results from one column feed into the next, enabling multi-step data enrichment
- **AG-Grid integration**: A high-performance, interactive grid for manipulating large datasets
- **OpenAPI proxy**: ActionSchema could invoke external APIs directly from a schema definition
- **OAuth2 / Auth support**: Users could authenticate with external services within pipelines

## Development History

| Period | Milestone |
|--------|-----------|
| 2023 Q3 | Public alpha launch; first paying users |
| 2023 Q4 | OpenAI DevDay response; expanded GPT integration |
| 2024 Q1 | Major database refactor, user-centric data structures |
| 2024 Q2 | Agent system, OpenAPI search, CRUD API work |
| 2024 Q3 | Full-time focus post-Slimmer.ai; GPT streamer; moat strategy; Cloudflare Workers exploration |
| 2024 Q4 | GitHub push/issues API integration, NLang file transformer, githuq deployment |

### 2024 Q3: Moat Strategy and "Generative Web"

Following dismissal from Slimmer.ai in July 2024, Wilmake spent Q3 working full-time on ActionSchema from outdoor locations in Drenthe.[^diary-2024-q3] This period produced a formal competitive strategy analysis documenting four moat components:

- **Technical complexity**: Implementation details remain private; system designed to be comprehensible to one person
- **Data advantage**: Search queries and conversation data collected for iterative improvement
- **First-mover advantage**: Target market (agents and developers building platforms) not yet recognised by competitors
- **Unfair advantage**: Outputs calibrated to reduce quality for potential competitors while remaining directly useful for end users[^diary-2024-q3]

In August 2024 Wilmake built a `/chat/completions` wrapper — a GPT streamer that could hide functionality inside a standard OpenAI-compatible endpoint, enabling any app to be queried as a chat interface.[^diary-2024-q3]

By September 2024 the concept had evolved into what Wilmake termed the **"generative web"**: a system in which he was no longer writing software for users but writing software that writes software. The stated goal was reaching a state where "code in English only" becomes possible, followed by systems that "find opportunity systematically and find the thing to build next automatically."[^diary-2024-q3]

October 2024 work included the swcapi pipeline, npmjz library, and service worker JS generation for Cloudflare deployment. December 2024 introduced **NLang**, a natural language file transformer that translates English instructions into code transformations applied to repository files.[^diary-2024-q4]

## The Integration Manifesto (2024)

Jan published a 2024 blog post — "Why are systems always so hard to integrate with other systems?" — that reads as the clearest public articulation of ActionSchema's purpose. Starting from a real incident (a tech lead refusing a PDF-generation API due to data compliance concerns), Jan systematically addressed each barrier to API integration — privacy, vendor lock-in, latency, customisation, cost, reliability, complexity — and proposed concrete solutions for each:

- **GPT Normalization**: using LLMs to refactor code so it works with multiple vendor interfaces interchangeably, eliminating lock-in
- **API search engine**: a tool that filters APIs by compliance region, latency SLA, and feature requirements
- **AI-assisted integration**: RAG-injecting API specs into AI software engineers so integration becomes near-zero effort

The post ends with Jan identifying himself as building exactly this future at `@janwilmake`.[^manifesto]

## Scalable Knowledge Work (2024)

A companion blog post, "Scalable Ideas," frames ActionSchema's pipeline architecture in terms of economic impact: LLMs make it possible to take a knowledge work task (e.g. *"build a landing page for this GitHub repo"*), decompose it into API-driven subtasks, and execute it millions of times. The key insight is that the bottleneck is not execution speed but **task decomposition** — knowing what the sub-APIs are and how to chain them. ActionSchema's OpenAPI proxy and pipeline model is the infrastructure for this.[^scalable]

## Monorepo to Connected Repos (2024)

In April 2024, Jan documented his migration away from a 150k-line private monorepo toward a fully decoupled, open-source architecture where every package is its own GitHub repo and npm package. Key tooling he built: a `linkall` CLI, a `ship.sh` script for mass-publishing across repos, and the `from-anywhere` utility library. This architectural shift — driven by goals of distribution, collaboration, and open-sourcing — directly preceded and enabled the Code From Anywhere product philosophy.[^monorepo]

## Reception

ActionSchema was featured at the **AIGrunn conference** in Groningen (October 2023), where Wilmake gave a presentation on AI-powered data pipelines.[^2023-2024] The project was developed within the **VentureLab North** startup accelerator programme.[^2023-2024]

## Technical Stack

- **Frontend**: React, AG-Grid
- **Backend**: Bun.sh, Node.js, TypeScript
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI API (GPT-4, function calling)
- **Infrastructure**: Cloudflare Workers

## Payment Infrastructure (2025)

In March 2025, Wilmake introduced **L402** — a simplified payment protocol for AI agents based on OpenAPI tooling conventions, designed to allow agents to pay for API access programmatically. The proposal was shared publicly on GitHub (`github.com/janwilmake/l402`) as an alternative to existing L402 drafts, which Wilmake considered overly complex.[^diary-2025-mar]

This work influenced the design of [[sponsorflare]] and later his work at [[Parallel AI]] on MCP monetisation.

## Relationship to Other Projects

ActionSchema shares conceptual DNA with several related tools:[^2024-2025]

- **[[uithub]]** – emerged from ActionSchema's GitHub API work, focusing on repository context for AI agents
- **[[Screenless]]** – developed in parallel as a complementary AI input interface
- **[[openapisearch]]** – a derived tool for discovering and querying APIs, which went viral in March 2025
- **[[sponsorflare]]** – billing layer enabling monetisation of ActionSchema-derived APIs

## See Also

- [[Jan Wilmake]]
- [[Code From Anywhere]]
- [[uithub]]
- [[Screenless]]
- [[Chat AI]]

[^2023-2024]: Detailed timeline 2023–2024: `history/2023-2024.md`
[^2024-2025]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^diary-2024-q3]: Personal diary July–September 2024: `2024/2024-Q3/2024-07-diary.md`, `2024-08-diary.md`, `2024-09-diary.md`
[^diary-2024-q4]: Personal diary October–December 2024: `2024/2024-Q4/2024-10-diary.md`, `2024-11-diary.md`, `2024-12-diary.md`
[^diary-2025-mar]: Personal diary March 2025: `2025/2025-03-diary.md`
[^manifesto]: Blog post: `../blog/2024/why-are-systems-not-working-together.md`
[^scalable]: Blog post: `../blog/2024/scalable-ideas.md`
[^monorepo]: Blog post: `../blog/2024/connected-repos.md`
