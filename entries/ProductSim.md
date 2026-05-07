---
title: ProductSim
description: AI-powered E2E browser testing tool that runs against PR preview deploys; launched April 15, 2026; competing with YC-backed Arga Labs
category: Projects
---

# ProductSim

**ProductSim** (`productsim.com`) is an AI-powered end-to-end (E2E) browser testing tool developed by [[Jan_Wilmake]] and launched on April 15, 2026. It is a GitHub App that runs an AI browser agent against pull request preview deploys to perform automated E2E testing, addressing the gap between AI-accelerated shipping velocity and insufficient quality assurance.

## Overview

Jan's launch framing: *"AI lets us ship fast, but it doesn't properly test its changes. ProductSim is fixing this."* The tool targets a specific pain point in the modern AI-assisted development workflow: coding agents can write and ship code rapidly, but the testing step is often skipped or inadequate, leading to bugs reaching production.

When pitched in three words, Jan described the value proposition as: *"confidently ship ai-prs."*

## How It Works

ProductSim operates as a GitHub App that integrates with pull request workflows:

1. A developer (or AI coding agent) opens a PR
2. The PR's preview deploy URL is detected
3. ProductSim runs an AI browser agent against the preview
4. The agent performs E2E tests simulating real user interactions
5. Results are reported back to the PR

This model requires that the target repository has **preview URLs for every PR** set up — a prerequisite Jan explicitly asked about on launch day.

## Associated Brand: Diffie.ai

**Diffie.ai** is a related brand/site being developed in parallel with ProductSim, focusing on the messaging of "E2E tests without code" and the "true cost of test maintenance." The relationship between the ProductSim and Diffie brands was still being defined as of mid-April 2026.

## Competitive Landscape

### Arga Labs

The most significant identified competitor is **Arga Labs**, a YC-backed startup that provides per-PR sandboxes with service twins (Stripe, Slack) and auto-generated E2E tests. Arga Labs was spotted via a Y Combinator announcement the same week as ProductSim's launch.

### Skills.sh Distribution

Jan explored distributing ProductSim through **skills.sh**, a skills marketplace, specifically investigating the `playwright-e2e-testing` skill listing as a potential distribution channel for the tool.

## Go-to-Market Strategy

Jan's distribution strategy for ProductSim emphasised social listening and targeted outreach rather than broad marketing:

- **Social listening tools**: Evaluated ForumScout, Octolens, and Alertly for monitoring intent signals around E2E testing pain points
- **X thread engagement**: Ran systematic searches for threads mentioning E2E tests, Playwright, and bugs shipped to production, building a list of high-value threads to engage with
- **Cold outreach**: Jan identified *"cold outreach"* as the most critical skill for builders in 2026, and ProductSim became a primary vehicle for practicing this
- **Distribution-as-moat**: On April 17, Jan spent ~8 minutes reading Roman Khaves's thread *"distribution is the ONLY moat"* — reinforcing focus on distribution over features

### "PR is Dead" Narrative Pivot

By April 16, 2026, ProductSim's narrative was expanding beyond E2E testing into the broader *"AI-generated PR pipeline problem."* Jan read Burak Dede's article ["The Pull Request is Dead: Surviving the AI Code Avalanche"](https://burakdede.com/blog/the-pull-request-is-dead-surviving-the-ai-code-avalanche/) (~7 min), suggesting a potential reframing from "E2E testing for AI code" to "fixing the broken AI PR pipeline."

## Infrastructure Evaluation

### Cloudflare Browser Run

During [[Cloudflare_Agents_Week]] (April 2026), Cloudflare launched **Browser Run** — a hosted headless browser for AI agents. Jan evaluated it as a potential infrastructure layer for ProductSim, spending 7+ minutes on the blog post and exploring the documentation (Live View, Limits, Changelog, Pricing) on April 16, 2026. This represents a potential alternative to Browserbase as ProductSim's browser execution substrate.

### Adjacent Tools Tracked

Jan also evaluated several tools in the AI code review and testing space:

- **CodeRabbit** — AI code reviews (visited April 16)
- **Passmark** (bug0inc/passmark) — open-source Playwright library for AI browser regression testing with intelligent caching, auto-healing, and multi-model verification (found April 16)
- **Libretto** (saffron-health/libretto) — AI toolkit for building and maintaining browser automations (found April 16)
- **Diffie AI** — used for testing on April 16 (app.diffie.ai)
- **Checkly** (checklyhq.com) — "monitoring powered by Playwright" — explored as both a competitive signal and a potential employer (April 17)

## Emerging Strategic Framings (Late April 2026)

By late April 2026, three strategic framings were emerging that could shape ProductSim's positioning:

### "AI Services Will Crush AI Software"

On April 21, Jan watched *"Why AI Services Will Crush AI Software"* (~18 min). If the thesis holds — that managed AI-powered workflows beat pure AI software — ProductSim/Diffie.ai should lean into being a *service* (managed E2E testing that just runs) rather than a developer tool (configure your own test suite).

### The Context Flywheel

On the same day, Jan read tessl.io's *"The Context Flywheel: Why the Best AI Coding Teams Will Win on Context."* ProductSim can be positioned as the **test context layer** in the AI coding flywheel — capturing *what works* about PRs as a signal that compounds over time.

### Agent-Ready Pipeline

Cloudflare's **isitagentready.com** tool suggests a framing pivot: from "E2E testing" to "agent-ready pipeline." As agentic CI/CD emerges, ProductSim could be positioned as the quality gate in an agent-ready deployment pipeline.

## Development History

The GitHub repository (`janwilmake/productsim`) had at least 14 pull requests by launch day. Notable PRs on April 15 included adding `.claude` to `.gitignore` and bypassing auth on localhost — suggesting active development alongside the public launch.

## Late April 2026: Development Stall and New Competitive Signals

Between April 20 and at least April 29, 2026, ProductSim experienced an extended no-code streak. Several external developments during the stall period reshaped the competitive landscape:

### GPT-5.5 Validation (April 23–24)

OpenAI launched GPT-5.5 on April 23, 2026. The next day, Kenton Varda (creator of Cap'n Proto, Cloudflare engineer) confirmed that GPT-5.5 had autonomously identified a six-year-old, deeply buried corner-case bug in Cap'n Proto's RPC system — a bug Varda himself had written a comment about years prior. Jan liked Varda's confirmation tweet. This was identified as a strong signal for upgrading ProductSim's test-generation intelligence from its current model to GPT-5.5.

### Arga Labs (YC-Backed Competitor)

**Arga Labs**, a Y Combinator-backed startup, was confirmed as ProductSim's closest direct competitor. Arga provides per-PR sandboxes with service twins (Stripe, Slack) and auto-generated E2E tests — a feature set that substantially overlaps with ProductSim's vision.

### SpaceX × Cursor AI Partnership (April 22)

SpaceX and Cursor AI announced a partnership, with SpaceX offering its Colossus H100 supercomputer training cluster to Cursor. Jan identified the implication: as Cursor's distribution grows, more AI-generated PRs will enter the pipeline — increasing demand for PR-level automated testing, ProductSim's core value proposition.

### Anthropic Removes Claude Code from Pro Plan (April 22)

Anthropic restricted Claude Code to higher-tier plans, prompting Sam Altman to reply *"come to the light side."* The resulting fragmentation across Cursor, Claude Code, and GitHub Copilot creates an opportunity for ProductSim to position as the **neutral, tool-agnostic testing layer** across all AI-assisted coding tools.

### Cloudflare Agent Readiness Score (April 24)

Cloudflare published an "Agent Readiness Score" blog post, introducing a framework for assessing how well websites are optimised for AI agents. A potential positioning hook emerged: framing ProductSim as the tool that ensures applications remain agent-ready before every deploy.

## See Also

- [[Jan_Wilmake]]
- [[Self-Driving_Repos]]
- [[Browser_MCP]]
- [[Cloudflare_Agents_Week]]
- [[Cloudflare]]
