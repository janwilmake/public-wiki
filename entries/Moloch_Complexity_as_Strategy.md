---
title: Moloch / Complexity as Strategy
description: Jan Wilmake's theory that corporate complexity is sometimes a deliberate competitive strategy, connected to Scott Alexander's coordination failure concept
category: Concepts
---

# Moloch / Complexity as Strategy

**Complexity as Strategy** is a theory developed and documented by [[Jan Wilmake]] describing how companies — particularly enterprise software vendors — deliberately engineer unnecessary complexity into their products, APIs, and processes as a competitive moat. Jan connected this pattern to the broader concept of **Moloch**, the metaphor for systemic coordination failure popularised by Scott Alexander's essay *"Meditations on Moloch."*[^moloch]

## The Theory

Jan's formulation identifies several mechanisms by which companies deploy complexity strategically:

- **Perceived sophistication**: Complex systems justify premium pricing and attract investors who interpret complexity as evidence of advanced IP.
- **Vendor lock-in**: Non-standard, proprietary APIs raise switching costs until customers are effectively trapped.
- **Expertise moats**: Steep learning curves prevent competitors from replicating the product quickly.
- **Concealing simplicity**: Artificial complexity disguises the fact that a product's core value is simple, protecting margins.

Enterprise software is the clearest expression of this pattern: convoluted pricing models, proprietary query languages, and integration overhead that necessitates expensive consulting engagements.

## The Moloch Connection

Jan noted that this corporate behaviour is a specific manifestation of what Scott Alexander calls **Moloch** — coordination failures where individually rational competitive actions produce collectively irrational outcomes. The key insight: *"It doesn't necessarily require malicious intent. Even well-meaning actors can be trapped in systems that force them to take actions that worsen outcomes for everyone, simply because not doing so would mean losing in the competitive landscape."*[^moloch]

Companies might genuinely prefer a world with simpler, interoperable standards. But the first company to simplify becomes vulnerable, so each company separately chooses complexity — and everyone loses.

## Implications for Jan's Work

This framework has direct implications for Jan's product philosophy. His tools — [[uithub]], [[openapisearch]], [[sponsorflare]], and the [[Agent_Friendly_Web]] mirror network — are explicitly designed as anti-complexity moves: simple HTTP APIs, Markdown output, no proprietary DSLs, and open standards wherever possible.

Jan's insight about MCP (Model Context Protocol) illustrates the flip side: *"When MCP first came out my first instinct was OpenAPI-to-MCP, but didn't act on it at first because I was like this is almost too easy. But nobody did it for some reason. NEXT TIME I KNOW BETTER."*[^moloch]

The observation is that genuine simplicity, when it arrives in a space dominated by deliberate complexity, is paradoxically non-obvious. The very fact that a solution seems too easy leads developers to assume someone else has already done it or that there must be a hidden catch — leaving the obvious move unclaimed.

## Purpose-Driven Openness: A Constructive Counter-Proposal

In a 2023 blog post, Jan proposed a mechanism for escaping the Moloch trap without requiring either full secrecy or full open source: **purpose-driven openness**. The core idea is that LLMs now make it computationally feasible to calculate `purposeAlignment` and `purposeAlignmentCertainty` between any two entities — companies, projects, people.

If such a score could be computed globally, sharing decisions could become continuous and granular: share your technology with entities whose purpose closely aligns with yours, withhold it from those whose purpose diverges. This preserves the innovation benefits of openness while limiting the dual-use risk that causes companies to default to secrecy.

Jan connected this to a post-capitalist framing: if basic needs were met universally, purpose would replace profit as the primary organising force for collaboration, and inter-entity alignment could be measured the same way tribal trust worked in small groups — but at civilisational scale, mediated by AI.[^innovateability]

## Strategic Application

Jan also identified a counter-strategy: dropping genuinely valuable, simple solutions **anonymously** to avoid incumbents mobilising to protect their complexity moats. If the source of the disruption is unknown, the coordination required to suppress it is harder to organise.[^moloch]

## See Also

- [[Agent_Friendly_Web]]
- [[openapisearch]]
- [[Jan_Wilmake]]

[^moloch]: Complexity theory notes: `2025/moloch.md`
[^innovateability]: Blog post: `../blog/2023/innovateability.md`
