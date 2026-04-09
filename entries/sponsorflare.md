---
title: sponsorflare
description: Cloudflare Workers-based sponsorship and usage-billing layer built by Jan Wilmake
category: Projects
---

# sponsorflare

**sponsorflare** is a Cloudflare Workers-based sponsorship and usage-billing layer developed by [[Jan_Wilmake]] in January 2025. It enables developers to monetise their open-source tools and APIs by combining GitHub Sponsors with usage-based billing, deployed at the edge without a traditional backend.

## Concept

The core thesis: the standard path for monetising developer tools (Stripe + database + auth server) is heavyweight and discourages adoption. sponsorflare wraps the GitHub Sponsors flow with Cloudflare's infrastructure to create a lightweight, edge-native billing layer that any developer can drop in front of their Worker or API.

A sponsorflare-protected endpoint checks for a valid GitHub Sponsor token before serving responses. Users who haven't sponsored are prompted to do so; sponsors get access proportional to their tier.

## Integration with uithub

sponsorflare was integrated as the primary monetisation layer for [[uithub]] starting in November 2024, when Wilmake added a billing mechanism that charged API consumers based on usage. The `cloudflare-sponsorware` repository on GitHub attracted attention from other founders in the agent-payments space.

## Technical Stack

- **Runtime**: Cloudflare Workers (Durable Objects for state)
- **Auth**: GitHub OAuth + GitHub Sponsors API
- **Billing**: Usage-tracked per request; tier-based access
- **Repository**: `github.com/janwilmake/cloudflare-sponsorware`

## Related Projects

- **[[uithub]]** — primary consumer of sponsorflare
- **stripeflare** — a Stripe-based variant that attracted interest from Stripe and Cloudflare teams
- **x402 / L402** — payment protocol experiments that informed sponsorflare's design

## See Also

- [[Jan_Wilmake]]
- [[uithub]]
- [[Code_From_Anywhere]]
- [[Parallel_AI]]
