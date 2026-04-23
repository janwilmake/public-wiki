---
title: sponsorflare
description: Cloudflare Workers-based sponsorship and usage-billing layer built by Jan Wilmake
category: Projects
---

# sponsorflare

**sponsorflare** is a Cloudflare Workers-based sponsorship and usage-billing layer developed by [[Jan Wilmake]] in January 2025. It enables developers to monetise their open-source tools and APIs by combining GitHub Sponsors with usage-based billing, deployed at the edge without a traditional backend.[^history]

## Concept

The core thesis: the standard path for monetising developer tools (Stripe + database + auth server) is heavyweight and discourages adoption. sponsorflare wraps the GitHub Sponsors flow with Cloudflare's infrastructure to create a lightweight, edge-native billing layer that any developer can drop in front of their Worker or API.[^diary-2025]

A sponsorflare-protected endpoint checks for a valid GitHub Sponsor token before serving responses. Users who haven't sponsored are prompted to do so; sponsors get access proportional to their tier.

## Integration with uithub

sponsorflare was integrated as the primary monetisation layer for [[uithub]] starting in November 2024, when Wilmake added a billing mechanism that charged API consumers based on usage.[^diary-2024-q4] The cloudflare-sponsorware repository on GitHub attracted attention from other founders in the agent-payments space.[^cf-oppo]

## Cloudflare Partnership Interest

In early 2025, Wilmake pitched sponsorflare to Cloudflare's DevRel team as a potential collaboration — a reusable pattern for thousands of developers to monetise agent tools via GitHub Sponsors. He presented it as one of three key assets (alongside Workers for Platforms experiments and Durable Objects research) in discussions with Peter Saulitis (Cloudflare NYC) and Ricky (Cloudflare).[^cf-oppo]

The proposal was for a 6-month DevRel partnership; these negotiations stalled through March–April 2025 and were ultimately not formalised.[^cf-oppo]

## Technical Stack

- **Runtime**: Cloudflare Workers (Durable Objects for state)
- **Auth**: GitHub OAuth + GitHub Sponsors API
- **Billing**: Usage-tracked per request; tier-based access
- **Repository**: `github.com/janwilmake/cloudflare-sponsorware`

## Related Projects

- **[[uithub]]** — primary consumer of sponsorflare
- **stripeflare** — a Stripe-based variant that attracted separate interest from Stripe and Cloudflare teams[^cf-oppo]
- **x402 / L402** — payment protocol experiments that informed sponsorflare's design

## See Also

- [[Jan Wilmake]]
- [[uithub]]
- [[Code From Anywhere]]
- [[Parallel AI]]

[^history]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^diary-2025]: Personal diary January–March 2025: `2025/2025-01-diary.md`, `2025-03-diary.md`
[^diary-2024-q4]: Personal diary November 2024: `2024/2024-Q4/2024-11-diary.md`
[^cf-oppo]: Cloudflare opportunity notes: `2025/investors/cf-oppo.md`
