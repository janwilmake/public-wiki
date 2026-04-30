---
title: Hackbot
description: Passive security recon tool for any domain — SSL, headers, DNS, subdomains, breach exposure — built and deployed by Jan Wilmake on April 21, 2026
category: Projects
---

# Hackbot

**Hackbot** (`hackbot.cc`) is a passive security reconnaissance tool built and deployed by [[Jan_Wilmake]] on April 21, 2026. It provides instant security recon for any domain — SSL certificate analysis, HTTP security headers, DNS records, subdomain enumeration, and breach exposure — deployed as a Cloudflare Worker.

## Build Timeline

On April 21, 2026, Jan spent approximately one hour in a dedicated Claude session titled *"MCP for pentesting and security testing"*, researching the MCP-security space before building and shipping the MVP same-day:

1. Reviewed **pentestMCP** (`RamKansal/pentestMCP` on GitHub) — an MCP designed for penetration testers
2. Reviewed **GhidraMCP** (`LaurieWired/GhidraMCP`) — an MCP for the Ghidra reverse engineering tool
3. Searched Google for *"continuous security monitoring"*
4. Visited **Pentera** (`pentera.io`) — an exposure validation platform with AI-driven testing
5. Visited **Warpnet** (`warpnet.nl`) — a Dutch security monitoring and response provider
6. Registered the domain **hackbot.cc** via Cloudflare Registrar
7. Deployed the Cloudflare Worker; the live site and GitHub repository (`janwilmake/hackbot`) were both active the same day

## Current Status (Late April 2026)

The MVP has been live at [hackbot.cc](https://hackbot.cc/) since April 21, with the GitHub repo describing it as *"Passive security recon for any domain — SSL, headers, DNS, subdomains, breach exposure."* As of late April, no further iteration has occurred since launch — a nine-day gap. Returning to iterate on the MVP has been flagged as overdue.

## Product Evolution Ideas

Several expansion directions have been identified:

- **MCP interface** — exposing hackbot's recon as MCP-callable tools for AI agents
- **Agent Readiness check** — following Cloudflare's April 24 Agent Readiness Score blog, hackbot could add checks for robots.txt, llms.txt, structured data, and CORS headers — assessing whether a domain is optimised for AI agent access
- **GPT-5.5 analysis pipeline** — replacing rule-based vulnerability checks with GPT-5.5 reasoning over raw recon data
- **Self-driving security repo** — [[Self-Driving_Repos]] applied to continuous security monitoring of a codebase or infrastructure
- **Scheduled monitoring and alerting** — continuous domain monitoring with notifications

## Career Angle

The same day, Jan viewed LinkedIn job listings for "AI Security Engineer" at Gazelle Global and "Security Engineer" at Quanza. This suggests the exploration has a dual purpose: both a potential product *and* a potential career pivot into the emerging AI security engineering field.

## Strategic Context

The security tooling market has several properties that make it attractive for Jan's product portfolio:

- **Willingness to pay**: B2B security is a well-funded vertical
- **Early mover advantage**: MCP + security is very new; few established products exist
- **Leverage**: [[Self-Driving_Repos]]' scheduled-agent model could run continuous security monitoring without building entirely new infrastructure
- **Hireable skillset**: "AI Security Engineer" is an emerging job category that directly matches the skills Jan is building

## See Also

- [[Jan_Wilmake]]
- [[Self-Driving_Repos]]
- [[Cloudflare]]
