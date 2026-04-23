---
title: Self-Driving Repos
description: Jan Wilmake's platform for running autonomous AI agents on GitHub repositories with strict budget control
category: Projects
---

# Self-Driving Repos

**Self-Driving Repos** (`selfdrivingrepo.com`) is a platform concept developed by [[Jan_Wilmake]] beginning April 8, 2026. It enables users to configure autonomous AI agents that run on a schedule against GitHub repositories, with strict budget controls and no coding required.[^x-posts-2026-04-08]

## Overview

The core idea: a user defines a set of source repositories (containing raw data — notes, tweets, documents) and a target repository (where synthesised output is written). An AI agent runs on a configurable schedule (e.g., every 48 hours), reads the source repos, and updates the target repo. Each agent has a defined budget per run and per time period.[^selfdrivingrepo-json]

Jan's framing: *"what if you could easily run self-driving repos with strict budget control in the cloud? no coding required"* and *"self-healing self-evolving knowledge bases... at scale"*.[^x-posts-2026-04-08]

## Configuration

The platform uses a `selfdrivingrepo.json` configuration file placed in the target repository. The schema includes:[^selfdrivingrepo-json]

- **Agent definitions**: name, LLM model, prompt, frequency, and budget
- **Tool permissions**: bash access, diff tools, web search, thread support
- **Upstream repos**: source repositories the agent can read from (read-only)
- **Budget controls**: per-run budget in cents, budget period, and spread options

Example use cases Jan described:[^x-posts-2026-04-08]
- Automatic blog writing
- SEO content generation
- Personal knowledge base wikis (like this wiki)
- Any recurring content synthesis task

## Relationship to This Wiki

This wiki (`janwilmake/wiki`) is itself a self-driving repo — in fact, the first production instance of the platform. The `selfdrivingrepo.json` in this repository defines an agent called "wiki updater" that reads from four source repos — `knowledge-until-2023`, `knowledge-2024-2025-2026`, `blog`, and `x-archive` — and synthesises their contents into wiki entries on a 48-hour schedule.[^selfdrivingrepo-json]

As of April 12, 2026, this wiki is actively being maintained by the self-driving agent on a regular schedule, confirming the viability of the concept. The agent reads new x-posts, blog entries, and knowledge documents from the downstream repos and incorporates them into existing wiki entries or creates new ones.

## Agent Cost Challenges

On April 10, 2026, Jan publicly noted that running agent orchestration is expensive: *"i created an agent orchestration platform with agents that have bash and websearch but it's soooo damn expensive. one run to explore a repo and make some changes costs $5 easily."* He quickly identified **caching** as the primary mechanism for reducing costs — a key design consideration for making self-driving repos economically viable at scale.[^x-posts-2026-04-10]

He also explored compatibility issues with running the underlying execution engine (just-bash) inside Cloudflare Workers, noting that `quickjs-emscripten` does not run in Workers and offering to contribute a fix to the project.[^x-posts-2026-04-10]

## Motivation

Jan identified a gap between Karpathy's viral LLM knowledge base concept and practical implementation: *"this is really great but i cant keep my wiki up-to-date. i dont want to run all these background processes on my own computer"*. Self-Driving Repos solves this by running agents in the cloud on a schedule, with the repository itself as the interface.[^x-posts-2026-04-07]

The timing was notable — on the same day Anthropic launched their agent fleet dashboard (April 8, 2026), Jan joked: *"oops... just started an agent orchestration startup today."*[^x-posts-2026-04-08]

## Competitive Landscape

### Claude Code Routines

On April 14–15, 2026, Anthropic launched **[[Claude_Code_Routines]]** — cloud-scheduled agents that run on Anthropic's infrastructure with no laptop required. Jan identified this as the most significant direct competitor: *"these could've been saas products before. whats left to build?"*[^x-posts-2026-04-15]

### GitHub Agentic Workflows

On April 12–13, 2026, Jan discovered **[[GitHub_Agentic_Workflows]]** (gh-aw) and published a detailed comparison blog post at `selfdrivingrepo.com/blog/selfdrivingrepo-vs-gh-aw`. He identified key differentiators: Self-Driving Repos offers web search, commit history access, cross-repo context, and model flexibility — features gh-aw lacked at launch.[^x-posts-2026-04-13]

### Multica Autopilot

Also tracked: **Multica Autopilot** by Jiayuan Zhang — an open-source alternative to Claude Code Routines that runs locally with any agent model.[^goals]

### Ployed.ai

On April 21, 2026, Jan briefly visited **Ployed.ai** — a "Managed Deployment Platform for Vibecoders." The product occupies adjacent positioning to Self-Driving Repos in the "managed AI execution" space, targeting a similar audience of developers who want agents to handle deployment and maintenance tasks without manual intervention.[^activity-2026-04-21]

## Landing Page and Community Response

On April 12, 2026, Jan posted *"roast my landing page"* with a screenshot of `selfdrivingrepo.com`, receiving feedback about the generic CTA ("GET STARTED") and missing pricing information. A user (@jhogervorst) noted the page didn't explain payment; Jan confirmed pricing at **model cost + 20%** and planned to add a pricing section.[^x-posts-2026-04-12] [^x-posts-2026-04-13]

On April 13, 2026, Jan published a more detailed announcement: *"I created 'Self driving Repo' (.com) — let's you spawn recurring agents with budget control. Agents have full FS access and sources like other repos, issues, and the web. Agent outputs are pushed to your preferred repo/branch."*[^x-posts-2026-04-13]

## Vision: Source Code as Agent Prompt

On April 14, 2026, Jan articulated a more radical vision for Self-Driving Repos, asking: *"What if your 'source code' was just an agent prompt describing the ICP and the painpoint and the AI agent would autonomously build and maintain the product, and talk to users?"* This vision — codebases that evolve based on market problems rather than human prompts — represents the philosophical endpoint of the self-driving repo concept.[^x-posts-2026-04-14]

## Emerging Framings (Late April 2026)

### The Context Flywheel

On April 21, 2026, Jan read tessl.io's *"The Context Flywheel: Why the Best AI Coding Teams Will Win on Context."* Self-Driving Repos' "source code as agent prompt" philosophy is the engineering implementation of a context flywheel: each agent run adds context that makes the next run smarter. This framing was identified as a priority for SDR messaging.[^activity-2026-04-21]

### AI Services vs. AI Software

The same day, Jan watched *"Why AI Services Will Crush AI Software"* (~18 min). If this thesis holds, SDR should lean harder into being a *service* that runs agents for users (not infrastructure they configure) — positioning closer to "managed agent execution" than "agent platform."[^activity-2026-04-21]

### Security Workflows

Jan's April 21 exploration of MCP-based pentesting ([[Hackbot]]) opened a potential vertical for Self-Driving Repos: continuous security monitoring as a scheduled agent workflow. The SDR execution model could run security scans on a codebase or infrastructure without building an entirely new product.[^activity-2026-04-21]

## Pipeline Architecture

Self-Driving Repos is the orchestration layer in Jan's knowledge base pipeline:

1. **[[Grok_Thyself]]** — syncs X data to a private GitHub repo (data ingestion)
2. **[[Browser_History_Extension]]** — syncs browsing history to a private GitHub repo (data ingestion)
3. **Self-Driving Repos** — runs agents that read source repos and write to target repos (processing)
4. **Wiki / Blog output** — the synthesised, human- and AI-readable result (output)

## Pricing Model

On April 13, 2026, Jan publicly clarified the pricing model in response to feedback from @jhogervorst: *"you pay for model cost + 20%."* He acknowledged the need to add a visible pricing section to the landing page.[^x-posts-2026-04-13]

## Landing Page Feedback (April 12–13, 2026)

After posting *"roast my landing page"* on April 12, Jan received constructive feedback from multiple X followers:[^x-posts-2026-04-12] [^activity-2026-04-13]

- **@anyone_lese**: Pain points not highlighted clearly enough; CTA too generic; suggested concrete "what happens next" flow
- **@jhogervorst**: Pricing not visible on the landing page
- **@antonkrivov**: Requested clearer messaging around the problem being solved

Peter Pistorius ([@appfactory](https://x.com/appfactory)) emerged as an early champion, responding positively and asking about the URL.[^x-posts-2026-04-12]

## Competition: GitHub Agentic Workflows

## Technical Approach

Jan explored multiple execution substrates for running agents in the cloud, including:
- Rivet (by NathanFlurry) for running Claude inside Cloudflare Workers[^x-posts-2026-04-07]
- The [[Cloudflare_Sandbox]] for pre-authenticated terminal access
- Serverless coding agents as the most cloud-friendly option[^x-posts-2026-04-07]

The underlying execution engine uses **just-bash** (by @cramforce). On April 10, 2026, Jan noted compatibility issues running just-bash inside Cloudflare Workers due to `quickjs-emscripten` and offered to contribute a fix. He is also tracking the integration of @RhysSullivan's `executor` package into just-bash, which would make it a fully viable platform for business agents.[^x-posts-2026-04-10]

Cloudflare's **[[Cloudflare_Agents_Week]]** (April 2026) surfaced several potentially relevant infrastructure primitives, including Durable Object Facets (sandboxed SQLite for Dynamic Workers), the Local Explorer (web UI for local Cloudflare resources), and a new Cloudflare CLI for debugging agentic workflows.[^activity-2026-04-13]

### Cloudflare Artifacts

On April 19, 2026, Jan researched **[[Cloudflare_Artifacts]]** — Cloudflare's git-native versioned storage for AI agents — spending ~20 minutes reading the blog post and exploring the open-source `cloudflare/artifact-fs` driver. The key feature is **lazy file hydration**: agents can mount large Git repositories without blocking on a full clone. This is potentially significant for Self-Driving Repos, which currently needs to clone multiple upstream source repositories for agent runs. Artifacts could substantially reduce the cost and latency of cross-repo context loading.[^activity-2026-04-19]

## See Also

- [[Jan_Wilmake]]
- [[Grok_Thyself]]
- [[Agent_Friendly_Web]]
- [[OpenPolsia]]
- [[Cloudflare_Sandbox]]
- [[Scalable_Knowledge_Work]]
- [[GitHub_Agentic_Workflows]]
- [[Claude_Code_Routines]]
- [[Browser_History_Extension]]
- [[ProductSim]]
- [[Cloudflare_Artifacts]]

[^x-posts-2026-04-07]: X post archive: `x-archive/raw/x-posts/2026-04-07.md`
[^x-posts-2026-04-08]: X post archive: `x-archive/raw/x-posts/2026-04-08.md`
[^x-posts-2026-04-10]: X post archive: `x-archive/raw/x-posts/2026-04-10.md`
[^x-posts-2026-04-12]: X post archive: `x-archive/raw/x-posts/2026-04-12.md`
[^x-posts-2026-04-13]: X post archive: `x-archive/raw/x-posts/2026-04-13.md`
[^x-posts-2026-04-14]: X post archive: `x-archive/raw/x-posts/2026-04-14.md`
[^x-posts-2026-04-15]: X post archive: `x-archive/raw/x-posts/2026-04-15.md`
[^activity-2026-04-13]: Activity summary: `x-archive/raw/activity-summary/2026-04-13.md`
[^goals]: Goals document: `x-archive/entries/GOALS.md`
[^activity-2026-04-19]: Activity summary: `x-archive/raw/activity-summary/2026-04-19.md`
[^selfdrivingrepo-json]: Configuration file: `selfdrivingrepo.json` in this repository
