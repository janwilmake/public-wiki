---
title: Cloudflare
description: American internet infrastructure company; the primary deployment platform for Jan Wilmake's 2024–2026 projects
category: Organizations
---

# Cloudflare

**Cloudflare** (NYSE: NET) is an American internet infrastructure and security company headquartered in San Francisco, California. Founded in 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn, Cloudflare operates one of the world's largest global networks, providing DDoS protection, CDN, DNS, zero-trust security, and — most relevantly to [[Jan_Wilmake]] — the **Cloudflare Workers** serverless compute platform.

## Relevance to Jan

Cloudflare is the single most referenced organisation across Jan's 2024–2026 work. Virtually every major project Jan built during this period — [[uithub]], [[openapisearch]], [[sponsorflare]], [[ContextArea]], and many others — is built on **Cloudflare Workers** and related services. Jan describes Cloudflare's developer platform as the infrastructure that makes his [[Agent_Friendly_Web]] vision technically feasible: globally distributed, HTTP-native, and requiring no persistent server management.

## Key Products Jan Uses

- **Cloudflare Workers** — Serverless JavaScript/TypeScript execution at the edge; Jan's primary deployment target
- **Durable Objects (DO)** — Stateful compute primitives; Jan ran experiments ("DOFS", "DCPU") exploring DO-based repo preloading and caching
- **Workers for Platforms (WFP)** — Multi-tenant Workers deployment; Jan explored this as a foundation for plugin systems
- **R2** — S3-compatible object storage without egress fees
- **Workers KV** — Distributed key-value store used in [[sponsorflare]] and [[uithub]]

## Industry Validation

In 2026, Cloudflare took several actions that validated Jan's thesis about the [[Agent_Friendly_Web]]:

- **February 2026**: Cloudflare announced native real-time content conversion to Markdown using content negotiation headers
- **March 2026**: Cloudflare launched a `/crawl` endpoint — one API call to crawl an entire site, returning content in HTML, Markdown, or JSON
- **Cloudflare Code Mode MCP** (February 2026): Converts OpenAPI specs into code-mode style tool calls, validating Jan's earlier OpenAPI-to-MCP direction in [[openapisearch]]

## Cloudflare Skills (2026)

In January 2026, Jan shipped **Cloudflare Skills** (`npx skills add janwilmake/cloudflare-skills`) — a skill package for building high-quality Cloudflare Workers without common mistakes. This was part of his broader commitment to improving the Cloudflare developer experience.

## See Also

- [[uithub]]
- [[sponsorflare]]
- [[openapisearch]]
- [[Agent_Friendly_Web]]
- [[Depth_First_DevRel]]
- [[Jan_Wilmake]]
