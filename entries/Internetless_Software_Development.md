---
title: Internetless Software Development
description: Jan Wilmake's 2024 experiment building a fully offline development environment using a local LLM, local DNS, and a Vercel-compatible request resolver
category: Concepts
---

# Internetless Software Development

**Internetless Software Development** is a concept and living experiment documented by [[Jan_Wilmake]] in early 2024. The premise: dedicate a second MacBook Air as a machine that has never touched the real internet — running a large local LLM, local DNS resolution, and a Vercel-compatible serverless environment — producing a complete software development setup with no external dependencies.

Jan's framing: *"I imagine a device that goes back to basics. It has no internet, just a huge LLM."*

## Motivations

Jan identified several distinct reasons to pursue a fully offline setup:

- **AGI containment**: a device that cannot reach the internet cannot be exploited by a rogue AI to cause external harm — the machine is a safe sandbox for running powerful models
- **Privacy**: with no outbound connection, activity on the laptop is fully private — no remote hacking, no telemetry, no AI panopticon
- **Security**: no internet means no malware exfiltration vectors
- **Distraction elimination**: no social media, no news, no notifications — pure focus
- **Battery life**: a base-model MacBook Air without WiFi can last significantly longer on a charge
- **Remote resilience**: useful in locations with poor connectivity

## Technical Challenges

### macOS Installation

Apple's M1+ recovery tools require internet activation during initial setup, making a truly internet-virgin installation impossible on modern Apple hardware. Jan found that older Macs without the activation requirement would be necessary for a purist approach; on a modern M1 Air, the internet is only needed at install time, not during operation.

### Local DNS and Vercel Resolver

Jan's design for the local network layer:

- A custom DNS resolver that maps standard domain names to `localhost`
- A **Vercel project resolver** that:
  - matches incoming requests by domain
  - serves `public/` static files
  - follows `vercel.json` rules for rewrites, redirects, and serverless functions
- The development environment doubles as the production environment — a `Cmd+S` deploys to the local web

This would enable standard browser-based development against web standards, with no code changes required between local and (eventual) real deployment.

### Local npm Registry

Jan explored hosting a local npm server at the standard registry address, pre-seeded with common packages, so standard package managers would continue to work without modification.

### External APIs

For code that calls external APIs, Jan proposed an LLM-backed mock layer: the model generates plausible responses based on the OpenAPI spec of the target service, caches them, and returns them to the calling code — preserving functional development without real connectivity.

### Deployment

Without internet, deployment would use physical media (USB) and a batch-deploy script run periodically — prioritising development speed and privacy over continuous delivery.

## Significance

The experiment sits at the intersection of several recurring themes in Jan's work: the [[Agent_Friendly_Web]] (what infrastructure does an AI agent need?), the [[Outcomputed]] scenario (what happens if the internet gets shut down?), and his practical interest in reducing external dependencies across his toolchain.

## See Also

- [[Jan_Wilmake]]
- [[Code_From_Anywhere]]
- [[Agent_Friendly_Web]]
- [[Outcomputed]]
