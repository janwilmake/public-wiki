---
title: Jonas Templestein
description: CEO of Iterate; co-founder and former CTO of Monzo Bank
category: People
---

# Jonas Templestein

![Jonas Templestein](https://github.com/jonashuckestein.png)

**Jonas Templestein** is a German-British software engineer and entrepreneur. He is the **CEO and Founder of [Iterate](https://iterate.com)**, an AI agent platform, and the co-founder and former CTO of **Monzo Bank**, one of the UK's leading digital banks. He is active on X as [@jonas](https://x.com/jonas).[^x]

## Career

### Early Career

Templestein studied Management Consulting at Academy Consult München (2007–2009) and at the University of California, Berkeley (2009). He worked as a Lead Engineer at Campfire Labs (acquired by Groupon), Director of Experience at StartupBus, NLP Researcher at LEKAB Communication Systems, and Software Engineer at Starling Bank.[^rocketreach]

He founded **HipDial** in 2012, a communications startup he ran until 2018.

### Monzo Bank (2015–2023)

In 2015, Templestein moved to London to co-found **Monzo** (originally Mondo) alongside Tom Blomfield, Jason Bates, Paul Rippon, and Gary Dolman. He served as **Co-founder and CTO** for nearly nine years, playing a central role in building the engineering foundations of what became one of the most important European fintech companies. Monzo grew to millions of customers and a valuation exceeding £4 billion.[^jasshah]

He left Monzo in December 2023, writing a farewell blog post after almost nine years.[^x]

### Iterate (2024–present)

Templestein founded **Iterate** in 2024 — described as "the world's most hackable AI agent" — with a mission to enable "self-driving startups" where AI handles routine business operations. Iterate is backed by OpenAI, Index Ventures, Y Combinator president Garry Tan, Naval Ravikant, Amjad Masad (Replit CEO), Aravind Srinivas (Perplexity CEO), and others.[^iterate] He has been vocal about a theory of "Level 0 through Level 5" AI-augmented startups, placing most organisations at Level 1 as of 2025.

## Connection to Jan

In May 2025, Jan did a trial week with Iterate at a rate of **$3,600 for the week** (with a potential offer of $5,000+/month ongoing). Jonas wanted Jan full-time, but Jan declined to continue because Jonas required full-time commitment rather than the 2 days/week arrangement Jan was seeking. Jan had met Jonas at an Amsterdam event earlier in the year.[^diary]

## cf-artifact-viewer (April 2026)

On April 22, 2026, Templestein published **cf-artifact-viewer** (`iterate/cf-artifact-viewer`) — a Cloudflare [[Cloudflare_Artifacts|Artifacts]] browser and editor that can be deployed to a user's own Cloudflare account with one click. He posted on X: *"you should now be able to deploy this to your own Cloudflare account with one click."* Jan browsed the GitHub repository and the live demo at `artifacts.iterate-dev-jonas.com`, continuing to evaluate [[Cloudflare_Artifacts]] as potential infrastructure for [[Self-Driving_Repos]].

## Cloudflare Bindings-as-API-Wrappers Idea (April 2026)

On April 24, 2026, Templestein posted an influential idea on X: *"The cloudflare 'bindings instead of env vars' thing is so good that I sometimes wonder why they don't have wrappers for popular third party APIs — env.STRIPE — that sort of thing."* He followed up with a technical approach: using lightweight wrapper Workers and service bindings, so tokens never leak. Jan liked the tweet. Cloudflare's Irvine Broque responded with interest, calling it the *"next fun collab"* and suggesting OAuth-based Stripe integration where *"it's literally impossible to leak the API token."*

This is notable because it connects directly to the infrastructure layer both Templestein and Jan operate in — Cloudflare Workers as the substrate for agent-friendly services — and represents a potential new Cloudflare product direction that could benefit both [[Iterate]] and Jan's Cloudflare-based projects.

## See Also

- [[Jan_Wilmake]]
- [[Iterate]]
- [[Cloudflare_Artifacts]]

[^x]: X profile: https://x.com/jonas
[^rocketreach]: Career history: rocketreach.co/jonas-templestein-email
[^jasshah]: Monzo founding team history: jasshah.substack.com/p/monzo-10-years-that-changed-banking-1
[^iterate]: Iterate website: iterate.com
[^diary]: Personal diary May 2025: `2025/2025-05-diary.md`
[^activity-2026-04-22]: Activity summary: `x-archive/raw/activity-summary/2026-04-22.md`
[^activity-2026-04-24-jonas]: Activity summary: `x-archive/raw/activity-summary/2026-04-24.md`
