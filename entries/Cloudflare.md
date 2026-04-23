---
title: Cloudflare
description: American internet infrastructure company; the single most referenced organisation in Jan Wilmake's 2024–2026 notes
category: Organizations
---

# Cloudflare

**Cloudflare** (NYSE: NET) is an American internet infrastructure and security company headquartered in San Francisco, California. Founded in 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn, Cloudflare operates one of the world's largest global networks, providing DDoS protection, CDN, DNS, zero-trust security, and — most relevantly to [[Jan Wilmake]] — the **Cloudflare Workers** serverless compute platform.

## Relevance to Jan

Cloudflare is the single most referenced organisation across Jan's 2024–2026 knowledge base. Virtually every major project Jan built during this period — [[uithub]], [[openapisearch]], [[sponsorflare]], flaredream.com, and xymake.com — is built on **Cloudflare Workers** and related services (Durable Objects, R2, Workers KV, Workers for Platforms). Jan describes Cloudflare's developer platform as the infrastructure that makes his [[Agent_Friendly_Web]] vision technically feasible: globally distributed, HTTP-native, and requiring no persistent server management.[^gtm-2024]

## Key Products Jan Uses

- **Cloudflare Workers** — Serverless JavaScript/TypeScript execution at the edge; Jan's primary deployment target
- **Durable Objects (DO)** — Stateful compute primitives; Jan ran experiments ("DOFS", "DCPU") that attracted significant developer interest on X
- **Workers for Platforms (WFP)** — Multi-tenant Workers deployment; Jan explored this as a foundation for his plugin system
- **R2** — S3-compatible object storage without egress fees
- **Workers KV** — Distributed key-value store used in sponsorflare and uithub

## Jan's Cloudflare Relationship (2024–2025)

Jan pursued a formal relationship with Cloudflare's Developer Relations team throughout 2024–2025. Key milestones:

**Q4 2024**: Jan identified Cloudflare as a strategic partner and outlined ideas for tools he could build (serverless Wrangler, GitHub super-integration, Vercel-to-Cloudflare migration tooling). He noted the Workers Launchpad program (cohort #5 deadline: February 28, 2025) as a potential entry point.[^gtm-2024]

**Early 2025**: Jan was introduced to the Cloudflare DevRel team via a chain: [[Sunil_Pai]] → [[Ricky_Robinett]] → **Peter Saulitis** (Cloudflare, New York). Jan met with Peter on March 19, 2025 and followed up with a detailed email proposing a 6-month DevRel partnership, covering five contribution areas: sponsorflare, Workers for Platforms experiments, Durable Objects research, MCP commentary, and forgithub tooling.[^cf-oppo]

**April 2025**: Jan applied to the **Cloudflare Launchpad** program (accelerator for Cloudflare-native startups). The application was rejected.[^history]

**May 2025**: Jan met Cloudflare Connect London (April 2025) and remained in discussions with Peter Saulitis through the spring. Negotiations for a DevRel contract ultimately stalled without a formal agreement.[^history]

**August 2025**: Jan secured a DevRel contractor role at **[[Parallel_AI]]** (San Francisco), which involved Cloudflare integrations as part of the scope — a partial realisation of his Cloudflare-adjacent goals through a different employer.

## Key Cloudflare Contacts

- **[[Sunil_Pai]]** — Principal Systems Engineer; creator of the Cloudflare Agents SDK. Jan identified him as his #1 highest-leverage contact in 2025.
- **[[Ricky_Robinett]]** — VP Developer Relations and Community; introduced Jan to Peter Saulitis.
- **[[Kristian_Freeman]]** — Engineering Manager, DevRel; Austin, TX. Jan pitched a standalone MCP client concept to Kristian.
- **[[Dmitry_Alexenko]]** — Head of Enterprise Engineering; formerly Stripe Billing. Jan discussed HTTP-level monetisation (the "Stripeflare" concept) with Dmitry.
- **Peter Saulitis** — Cloudflare New York; Jan's primary DevRel partnership contact through early-mid 2025.

## Agents Week (April 2026)

In April 2026, Cloudflare ran **[[Cloudflare_Agents_Week]]** — a multi-day product launch event introducing infrastructure primitives for AI agents. Key announcements included **Browser Run** (headless browser for agents), **Cloudflare Mesh** (post-quantum encrypted private mesh networking), **Email for Agents** (email service in public beta), **AI Platform** (inference layer for agents), **Durable Object Facets** (sandboxed SQLite for Dynamic Workers), and a **Registrar API** beta.[^activity-2026-04-16]

Jan followed the event closely, as many announcements were directly relevant to his [[Self-Driving_Repos]] and [[ProductSim]] projects. He also surfaced a billing transparency pain point — agreeing with @levelsio that there is no way to identify which Worker causes cost when running hundreds of Workers — receiving 14 likes and 1 retweet, his most-engaged tweet that week.[^x-posts-2026-04-14]

A late Agents Week addition — **[[Cloudflare_Artifacts]]** (git-native versioned storage for agents with lazy file hydration) — particularly caught Jan's attention on April 19, 2026. He spent ~20 minutes reading the blog post and exploring the open-source `cloudflare/artifact-fs` driver, identifying it as potentially significant infrastructure for [[Self-Driving_Repos]]' cross-repo context feature.[^activity-2026-04-19]

## See Also

- [[uithub]]
- [[sponsorflare]]
- [[openapisearch]]
- [[Sunil_Pai]]
- [[Ricky_Robinett]]
- [[Kristian_Freeman]]
- [[Dmitry_Alexenko]]
- [[Depth_First_DevRel]]
- [[Cloudflare_Agents_Week]]
- [[Cloudflare_Artifacts]]
- [[Self-Driving_Repos]]
- [[ProductSim]]

[^gtm-2024]: Cloudflare strategy notes Q4 2024: `2024/2024-Q4/gtm-2024-q4/cloudflare.md`
[^cf-oppo]: Cloudflare partnership email: `2025/investors/cf-oppo.md`
[^history]: Work history timeline: `2026/history/2024-2025.md`
[^activity-2026-04-16]: Activity summary: `x-archive/raw/activity-summary/2026-04-16.md`
[^x-posts-2026-04-14]: X post archive: `x-archive/raw/x-posts/2026-04-14.md`
[^activity-2026-04-19]: Activity summary: `x-archive/raw/activity-summary/2026-04-19.md`
