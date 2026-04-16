---
title: ProductSim
description: AI-powered E2E browser testing tool by Jan Wilmake that runs automated tests against PR preview deploys
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

## Associated Brand: Diffie.ai

**Diffie.ai** is a related brand/site being developed in parallel with ProductSim, focusing on the messaging of "E2E tests without code" and the "true cost of test maintenance." The relationship between the ProductSim and Diffie brands was still being defined as of mid-April 2026.

## Competitive Landscape

The most significant identified competitor is **Arga Labs**, a YC-backed startup that provides per-PR sandboxes with service twins (Stripe, Slack) and auto-generated E2E tests. Arga Labs was spotted via a Y Combinator announcement the same week as ProductSim's launch.

## Go-to-Market Strategy

Jan's distribution strategy for ProductSim emphasised social listening and targeted outreach:

- **Social listening tools**: Evaluated ForumScout, Octolens, and Alertly for monitoring intent signals around E2E testing pain points
- **X thread engagement**: Systematic searches for threads mentioning E2E tests, Playwright, and bugs shipped to production
- **Cold outreach**: Jan identified *"cold outreach"* as the most critical skill for builders in 2026, and ProductSim became a primary vehicle for practicing this

## See Also

- [[Jan_Wilmake]]
- [[Self-Driving_Repos]]
- [[Browser_MCP]]
