---
title: ActionSchema
description: AI-powered spreadsheet and data-pipeline tool developed by Jan Wilmake
category: Projects
---

# ActionSchema

**ActionSchema** is an AI-powered spreadsheet and data-pipeline tool developed by [[Jan_Wilmake]] under [[Code_From_Anywhere]]. Initially conceived as a way to automate complex data workflows using large language models, ActionSchema evolved through 2023–2024 into a platform enabling users to define, run, and chain API-driven actions within a spreadsheet-like interface.

## Origins

The concept for ActionSchema emerged from Wilmake's work on AI automation pipelines in mid-2023, building upon earlier explorations in conversational AI and data enrichment. A key influence was the proliferation of OpenAI plugins and the MRKL (Modular Reasoning, Knowledge and Language) architecture pattern.

ActionSchema was publicly announced in its alpha form during weeks 37–41 of 2023, with first paying users acquired shortly after launch.

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
| 2024 Q3 | Full-time focus; GPT streamer; Cloudflare Workers exploration |
| 2024 Q4 | GitHub push/issues API integration, NLang file transformer |

### The "Generative Web" (2024)

By September 2024 the concept had evolved into what Wilmake termed the **"generative web"**: a system in which he was no longer writing software for users but writing software that writes software. The stated goal was reaching a state where "code in English only" becomes possible, followed by systems that "find opportunity systematically and find the thing to build next automatically."

December 2024 introduced **NLang**, a natural language file transformer that translates English instructions into code transformations applied to repository files.

## The Integration Manifesto (2024)

Jan published a blog post — "Why are systems always so hard to integrate with other systems?" — that reads as the clearest public articulation of ActionSchema's purpose. Starting from a real incident (a tech lead refusing a PDF-generation API due to data compliance concerns), Jan systematically addressed each barrier to API integration and proposed concrete solutions:

- **GPT Normalization**: using LLMs to refactor code so it works with multiple vendor interfaces interchangeably
- **API search engine**: a tool that filters APIs by compliance region, latency SLA, and feature requirements
- **AI-assisted integration**: RAG-injecting API specs into AI software engineers so integration becomes near-zero effort

## Technical Stack

- **Frontend**: React, AG-Grid
- **Backend**: Bun.sh, Node.js, TypeScript
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI API (GPT-4, function calling)
- **Infrastructure**: Cloudflare Workers

## Payment Infrastructure (2025)

In March 2025, Wilmake introduced **L402** — a simplified payment protocol for AI agents based on OpenAPI tooling conventions, designed to allow agents to pay for API access programmatically. This work influenced the design of [[sponsorflare]].

## Reception

ActionSchema was featured at the **AIGrunn conference** in Groningen (October 2023), where Wilmake gave a presentation on AI-powered data pipelines. The project was developed within the **VentureLab North** startup accelerator programme.

## Relationship to Other Projects

- **[[uithub]]** – emerged from ActionSchema's GitHub API work
- **[[Screenless]]** – developed in parallel as a complementary AI input interface
- **[[openapisearch]]** – a derived tool for discovering and querying APIs, which went viral in March 2025
- **[[sponsorflare]]** – billing layer enabling monetisation of ActionSchema-derived APIs

## See Also

- [[Jan_Wilmake]]
- [[Code_From_Anywhere]]
- [[uithub]]
- [[Screenless]]
- [[Chat_AI]]
- [[openapisearch]]
