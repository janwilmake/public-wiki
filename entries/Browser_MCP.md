---
title: Browser MCP
description: Jan Wilmake's scalable cloud browser MCP microsaas using Playwright, charging $0.01 per browser action
category: Projects
---

# Browser MCP

**Browser MCP** is a cloud-hosted, pay-per-use browser automation MCP server built by [[Jan_Wilmake]] and launched in February 2026. It exposes Playwright-powered browser automation — form filling, data extraction, web navigation — as an MCP tool, billed at $0.01 per action.

## Origin

Jan was frustrated with existing browser MCP options in early February 2026. After exploring alternative approaches, he found Cloudflare's Playwright MCP (`github.com/cloudflare/playwright-mcp`) and built a scalable cloud-hosted solution on top of it.

On February 10, 2026, he launched his solution as a micro-SaaS: *"found a good solution to this issue and launched a new microsaas — scalable mcp serving playwright — $0.01 per action — fill forms, extract data, and more!"*

## Features

- **Playwright-powered** — full headless browser with Chromium
- **Scalable** — cloud-hosted, no local browser installation required
- **Pay-per-use** — $0.01 per action (highly granular pricing for browser automation)
- **Remote MCP** — accessible from any MCP client without local setup

## Motivation

Jan's stated goal: *"I want to build an agent as powerful as OpenClaw but fully ran in the cloud."* OpenClaw (an autonomous agent) requires a local machine running a browser and CLIs. Jan wanted to replicate this capability as cloud-first infrastructure, so agents running in Cloudflare Workers or similar environments could perform browser actions without a dedicated machine.

## Technical Notes

- Backed by `cloudflare/playwright-mcp`
- Billed per action rather than per session or per minute — designed for infrequent, targeted use cases (forms, extraction) rather than continuous browsing
- Initial beta launched via DMs; Jan invited testers directly

## Relationship to Larger Projects

Browser MCP complements [[ContextArea]] (context and MCP composition) and [[OpenPolsia]] (autonomous business operations). An autonomous agent managing businesses needs browser capability — to sign up for services, fill forms, scrape data from sites without APIs. Browser MCP provides this at a cost low enough for automation workflows.

## See Also

- [[Jan_Wilmake]]
- [[ContextArea]]
- [[OpenPolsia]]
- [[Cloudflare_Sandbox]]
- [[Agent_Friendly_Web]]
