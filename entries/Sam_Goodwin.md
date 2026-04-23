---
title: Sam Goodwin
description: Creator of Alchemy; TypeScript-native Infrastructure-as-Code framework for Cloudflare and AWS
category: People
---

# Sam Goodwin

![Sam Goodwin](https://github.com/sam-goodwin.png)

**Sam Goodwin** is an Australian-American software engineer based in Seattle, Washington. He is the creator of **[Alchemy](https://alchemy.run)**, a TypeScript-native Infrastructure-as-Code (IaC) library, and previously co-founded **Eventual**, an AI-driven automation startup. He is active on X as [@samgoodwin89](https://x.com/samgoodwin89).[^x]

## Career

Goodwin studied at the **Australian National University**. He subsequently spent over a decade at **Amazon**, building foundational infrastructure for Amazon's e-commerce, Alexa, and InfoSec platforms, and developed programming language tooling for the Alexa Skills Kit. He describes his decade-long experience building cloud systems as the motivation behind Alchemy.[^iottechexpo]

He co-founded **Eventual** (CEO), an AI-driven automation startup converting natural language business requirements into scalable distributed systems using cloud infrastructure as code.

He then launched **Alchemy** — an embeddable, ESM-native TypeScript IaC library that models cloud resources as simple memoized async functions. Unlike Terraform, Pulumi, or CloudFormation, Alchemy eliminates proprietary DSLs and JSON configuration, talking directly to cloud service APIs (AWS, Cloudflare, GitHub) via HTTPS. The philosophy: *"I want infrastructure to feel like importing a module and writing a function."*[^awsfundamentals]

The Alchemy repository (`alchemy-run/alchemy`) has grown to **1,400+ stars** and 70+ contributors. Goodwin is a strong advocate for Cloudflare as an infrastructure platform, frequently posting about Cloudflare Workers replacing AWS services like API Gateway, Step Functions, and EventBridge.[^x] He appeared on the **devtools.fm** podcast in April 2025 discussing Alchemy.[^youtube]

## Connection to Jan

Jan identified Sam as a **"compiler expert with audacious platform ambitions"** and a medium-priority collaboration target in his 2025 network strategy. The recommended action was to join Sam's Alchemy Discord, contribute to the Alchemy provider ecosystem, and collaborate on Cloudflare-specific IaC patterns. Sam was seen as part of a natural three-way partnership: Jan (Cloudflare ecosystem + task automation) + Sam (TypeScript IaC) + Murzin (context management).[^collabs][^diary]

In December 2025, Sam suggested that Jan consolidate all his OAuth template repositories into a single repo — a suggestion Jan acted on, creating `github.com/janwilmake/simplerauth` as a unified collection. Jan credited Sam with the idea in the public announcement.[^x-posts-2025-12-24]

## See Also

- [[Jan Wilmake]]
- [[Artem_Murzin]]

[^x]: X profile: https://x.com/samgoodwin89
[^iottechexpo]: IoT Tech Expo speaker bio: iottechexpo.com/northamerica/speaker/samuel-goodwin/
[^awsfundamentals]: "Alchemy - Reimagining Infrastructure-as-Code": awsfundamentals.com/blog/alchemy-reimagining-iac
[^youtube]: devtools.fm podcast (April 2025): youtube.com/watch?v=babOa4shATk
[^collabs]: Collaboration notes: `2025/COLLABS.md`
[^diary]: Personal diary April 2025: `2025/2025-04-diary.md`
[^x-posts-2025-12-24]: X post archive: `x-archive/raw/posts/2025-12-24.md`
