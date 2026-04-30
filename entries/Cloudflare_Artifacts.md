---
title: Cloudflare Artifacts
description: Cloudflare's git-native versioned storage for AI agents, launched April 2026; potential infrastructure for Self-Driving Repos
category: Organizations
---

# Cloudflare Artifacts

**Cloudflare Artifacts** is a product launched by [[Cloudflare]] during [[Cloudflare_Agents_Week]] in April 2026. It provides git-native versioned storage designed specifically for AI agent workloads, allowing agents to read and write files in a Git-compatible store without the overhead of a full clone.

## Overview

Artifacts is described as "versioned storage that speaks Git." The key innovation is **lazy file hydration** — agents can mount large Git repositories without blocking on an initial full clone. Instead, files are fetched on demand, making it practical for agents to work with repositories containing thousands of files.

The companion open-source component is **artifact-fs** (`cloudflare/artifact-fs`), a filesystem driver that implements the lazy hydration behaviour.

## Relevance to Jan Wilmake

[[Jan_Wilmake]] spent approximately 20 minutes on April 19, 2026 reading the Artifacts blog post and exploring the GitHub repository. The product is potentially significant for [[Self-Driving_Repos]]' infrastructure layer. Self-Driving Repos currently needs to clone source repositories for agents to read — a process that can be slow and expensive for large repos. Artifacts' lazy file hydration could substantially reduce the cost and latency of agent runs that need cross-repo context.

## cf-artifact-viewer by Jonas Templestein

On April 22, 2026, Jan explored **cf-artifact-viewer** (`iterate/cf-artifact-viewer`) — a Cloudflare Artifacts browser and editor built by [[Jonas_Templestein]] of [[Iterate]]. Templestein posted on X: *"you should now be able to deploy this to your own Cloudflare account with one click."* Jan visited the GitHub repository, the live demo at `artifacts.iterate-dev-jonas.com`, and explored example project views. This third-party tooling validates the Artifacts product's utility and further supports Jan's interest in using Artifacts as an output/state layer for [[Self-Driving_Repos]].

## See Also

- [[Cloudflare]]
- [[Cloudflare_Agents_Week]]
- [[Self-Driving_Repos]]
- [[Jan_Wilmake]]
- [[Jonas_Templestein]]
- [[Iterate]]
