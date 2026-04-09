---
title: Scalable Knowledge Work
description: Jan Wilmake's thesis that LLMs enable copying and executing knowledge work at global scale via API-driven pipelines
category: Concepts
---

# Scalable Knowledge Work

**Scalable Knowledge Work** is a concept articulated by [[Jan_Wilmake]] in a 2024 blog post ("Scalable Ideas") describing how large language models shift knowledge work from a one-off activity to a globally replicable pipeline. The claim: for any task that requires expertise but follows a repeatable pattern, an LLM-driven API chain can now execute it millions of times with minimal marginal cost.

## The Core Thesis

Jan's formulation: *"We're entering an age where we can start copying knowledge work. What I mean by that is that we can find a useful thing to do once and do it on a global scale, potentially millions of times, to create value."*

The enabling conditions:
1. LLMs can interpret high-level natural language instructions without rigid input schemas
2. APIs make the outputs of individual steps composable
3. Each step in the pipeline can be a hosted serverless function — independently developed, independently scalable

## The GitHub Website Example

Jan used a concrete example to illustrate the concept:

**Task**: *"Find popular GitHub repos that don't have a website yet, and build a compelling landing page for them with a CTA back to the repo. Host this on Vercel and make an issue in the repo named 'I made a website for you!'"*

Broken into subtasks:

| Subtask | APIs Required |
|---------|--------------|
| Find popular repos | GitHub API |
| Check if repo has a website | GitHub API + SERP + scraper |
| Understand what the repo does | GitHub API (README) |
| Build a landing page | Claude + website builder |
| Host on Vercel | Vercel Deploy API |
| Create an issue | GitHub Issues API |

Each subtask becomes an independently hosted serverless API. Chained together as an [[ActionSchema]], the whole pipeline becomes a single invocable action — deployable at scale across every qualifying repo on GitHub.

## Bottleneck: Task Decomposition

Jan identified the key constraint as not execution speed or API cost, but **task decomposition knowledge**: understanding what the sub-APIs are, what each step requires, and how to chain them. This is where expertise matters — and where tools like openapisearch and ActionSchema's OpenAPI proxy add leverage, by making the space of available APIs discoverable and the wiring between them lower-friction.

## Relationship to Adjacent Concepts

Scalable Knowledge Work is the economic thesis that motivates several of Jan's infrastructure projects:

- **[[ActionSchema]]** provides the pipeline execution layer (API chaining, OpenAPI proxy, agent coordination)
- **[[Agent_Friendly_Web]]** provides the data access layer (token-efficient mirrors of major platforms)

Together, they form a coherent picture: the web becomes a substrate for automated knowledge work, and the infrastructure for accessing it must become agent-friendly.

## See Also

- [[ActionSchema]]
- [[Agent_Friendly_Web]]
- [[Jan_Wilmake]]