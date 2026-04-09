---
title: Self-Driving Repos
description: Jan Wilmake's platform for running autonomous AI agents on GitHub repositories with strict budget control
category: Projects
---

# Self-Driving Repos

**Self-Driving Repos** (`selfdrivingrepo.com`) is a platform developed by [[Jan_Wilmake]] beginning April 8, 2026. It enables users to configure autonomous AI agents that run on a schedule against GitHub repositories, with strict budget controls and no coding required.

## Overview

The core idea: a user defines a set of source repositories (containing raw data — notes, tweets, documents) and a target repository (where synthesised output is written). An AI agent runs on a configurable schedule (e.g., every 48 hours), reads the source repos, and updates the target repo. Each agent has a defined budget per run and per time period.

Jan's framing: *"what if you could easily run self-driving repos with strict budget control in the cloud? no coding required"* and *"self-healing self-evolving knowledge bases... at scale"*.

## Configuration

The platform uses a `selfdrivingrepo.json` configuration file placed in the target repository. The schema includes:

- **Agent definitions**: name, LLM model, prompt, frequency, and budget
- **Tool permissions**: bash access, diff tools, web search, thread support
- **Upstream repos**: source repositories the agent can read from (read-only)
- **Budget controls**: per-run budget in cents, budget period, and spread options

Example use cases:
- Automatic blog writing
- SEO content generation
- Personal knowledge base wikis
- Any recurring content synthesis task

## Motivation

Jan identified a gap between Karpathy's viral LLM knowledge base concept and practical implementation: *"this is really great but i cant keep my wiki up-to-date. i dont want to run all these background processes on my own computer"*. Self-Driving Repos solves this by running agents in the cloud on a schedule, with the repository itself as the interface.

The timing was notable — on the same day Anthropic launched their agent fleet dashboard (April 8, 2026), Jan joked: *"oops... just started an agent orchestration startup today."*

## Pipeline Architecture

Self-Driving Repos is the orchestration layer in Jan's knowledge base pipeline:

1. **[[Grok_Thyself]]** — syncs X data to a private GitHub repo (data ingestion)
2. **Self-Driving Repos** — runs agents that read source repos and write to target repos (processing)
3. **Wiki / Blog output** — the synthesised, human- and AI-readable result (output)

## Relationship to This Wiki

This wiki (`janwilmake/public-wiki`) is itself a self-driving repo. The `selfdrivingrepo.json` in this repository defines an agent that synthesises public-facing content on a schedule.

## See Also

- [[Jan_Wilmake]]
- [[Grok_Thyself]]
- [[Agent_Friendly_Web]]
- [[ContextArea]]
