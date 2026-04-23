---
title: Depth-First DevRel
description: Jan Wilmake's developer relations philosophy of building real revenue-generating products on top of sponsored APIs rather than producing tutorials
category: Concepts
---

# Depth-First DevRel

**Depth-First DevRel** is a developer relations philosophy articulated by [[Jan Wilmake]] as an alternative to the conventional approach of producing API tutorials, documentation demos, and conference talks. Instead of advocating for a platform through breadth (many touchpoints, many use cases), it advocates for advocating through depth: building a single, genuinely excellent, open-source product on top of the platform — one that generates real revenue and demonstrates production-grade quality.

Jan's own definition: *"Going super deep making a super high-quality product, open source."*[^freeman]

## Principles

The philosophy rests on four commitments:

1. **Simplicity** — The product should solve a clearly bounded problem with minimal surface area. Complexity for its own sake undermines the proof.
2. **Quality** — The implementation must be production-grade. A demo that would embarrass its author in a code review defeats the purpose.
3. **Real-world use** — The product must have actual users and, ideally, actual revenue. This is what separates depth-first DevRel from a polished tutorial.
4. **Use sponsored APIs, never compromise on quality** — Accept platform sponsorship to subsidise development, but never build in platform limitations that degrade the product. The integrity of the proof depends on it.

## Rationale

Jan's core insight is about what developers actually want to know when they evaluate a platform: *"People looking at developers on Twitter want to know one thing: can I turn this thing into something that makes money for me?"*[^freeman]

A tutorial shows that an API call works. A production product with paying customers or a meaningful free user base shows that the API is worth staking a real business on. The depth-first approach makes a claim the breadth-first approach cannot: **this platform is good enough to bet your startup on, and here is the bet already made and paying off.**

## Context

Jan developed this philosophy during his 2024–2025 period of building [[uithub]], [[openapisearch]], and [[sponsorflare]] — each of which was built on Cloudflare Workers, and each of which attracted organic traffic and, in the case of uithub, corporate sponsorship from Upstash ($100/month from May 2025).

He was actively pitching a formal DevRel role or partnership to Cloudflare throughout this period, using the existing products as proof of the approach. His proposal to [[Kristian_Freeman]] centred on building a *"hugely successful standalone MCP client"* that would showcase Cloudflare's full stack and bring new developers into the ecosystem — the depth-first approach applied to a higher-profile product.[^freeman]

The philosophy is also a response to what Jan called **breadth-first DevRel**: well-resourced content programs that produce many tutorials and blog posts but fail to demonstrate that anyone has actually shipped a durable business using the platform.

## See Also

- [[Kristian_Freeman]]
- [[uithub]]
- [[sponsorflare]]
- [[openapisearch]]
- [[Jan_Wilmake]]

[^freeman]: Meeting notes / philosophy: `2025/freeman.md`
