---
title: Claude Code Routines
description: Anthropic's cloud-scheduled agent system launched April 2026; direct competitor to Jan Wilmake's Self-Driving Repos
category: Organizations
---

# Claude Code Routines

**Claude Code Routines** is a feature launched by Anthropic in April 2026 that allows users to configure AI agents (Claude) to run on a schedule, from an API call, or in response to an event — all on Anthropic's cloud infrastructure. It is the most direct competitor to [[Jan_Wilmake]]'s [[Self-Driving_Repos]] platform.

## Overview

Anthropic's official description: *"Configure a routine once (a prompt, a repo, and your connectors), and it can run on a schedule, from an API call, or in response to an event. Routines run on our web infrastructure, so you don't have to keep your laptop open."*

The feature was part of a broader Anthropic launch that included an agent fleet dashboard — a production interface showing multiple agents running, their task counts, active status, and MCP connections to external services (e.g., HubSpot).

## Timing and Competitive Impact

Claude Code Routines was announced the same week Jan was building and launching [[Self-Driving_Repos]]. On April 8, 2026, Jan joked: *"oops... just started an agent orchestration startup today"* — in response to coverage of Anthropic's agent fleet dashboard.

By April 15, 2026, Jan was closely tracking Claude Code Routines as his most significant competitor. He spent time re-reading the announcement and evaluating the feature set. His public reaction: *"these could've been saas products before. whats left to build?"* — acknowledging the competitive pressure from Anthropic offering scheduled agent capabilities natively.

## Comparison with Self-Driving Repos

| Feature | Claude Code Routines | Self-Driving Repos |
|---------|---------------------|--------------------|
| **Runtime** | Anthropic's cloud | Cloudflare-based |
| **Model lock-in** | Claude only | Any model (configurable) |
| **Scheduling** | Schedule, API, events | Configurable frequency |
| **Budget control** | Via API key limits | Built-in per-run and per-period budget caps |
| **Web search** | Unknown | Yes (via @p0) |
| **Cross-repo context** | Single repo | Multiple upstream repos (read-only mounting) |
| **Git history access** | Yes (native Claude Code) | Yes |
| **Pricing** | Part of Claude subscription | Model cost + 20% |

The key differentiators Jan identified for Self-Driving Repos include cross-repo context (ability to mount multiple source repositories), web search integration, and model flexibility. Claude Code Routines' advantage is its native integration with Anthropic's infrastructure and the existing Claude Code user base.

## Open-Source Alternative: Multica Autopilot

Also tracked by Jan: **Multica Autopilot** by Jiayuan Zhang — an open-source alternative to Claude Code Routines that runs locally and supports any agent model, further fragmenting the competitive landscape.

## See Also

- [[Self-Driving_Repos]]
- [[GitHub_Agentic_Workflows]]
- [[Jan_Wilmake]]
- [[Parallel_AI]]
