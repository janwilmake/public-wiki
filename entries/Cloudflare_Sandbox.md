---
title: Cloudflare Sandbox
description: Jan Wilmake's Cloudflare-based pre-authenticated terminal tool exposing stripe, git, gh, and wrangler as AI tools
category: Projects
---

# Cloudflare Sandbox

**Cloudflare Sandbox** (`github.com/janwilmake/sandbox`) is a tool built by [[Jan Wilmake]] in March 2026 that creates a cloud-based terminal environment where the user's `stripe`, `git`, `gh` (GitHub CLI), and `wrangler` (Cloudflare CLI) CLIs are all pre-authenticated and exposed as an AI tool via MCP. The sandbox uses Cloudflare's sandbox API with automatic sleeping when idle, keeping costs minimal.[^x-posts-2026-03-24]

## Concept

Jan's question that prompted the build: *"Can I have a Cloudflare sandbox where the user is logged in into their own `stripe`, `git`, `gh` and `wrangler`, then expose the terminal with all the commands as an AI tool with proper sleeping built-in when the tool isn't used?"*[^x-posts-2026-03-24]

The answer was yes, and he shipped it the same day. The design makes each CLI tool available to an AI agent without requiring the agent to handle authentication flows — the user logs in once, and from that point the sandbox handles credential management.

## Implementation Details

- **Runtime**: Cloudflare Sandbox API (container/VM layer)
- **Auth**: Per-tool token authentication (tokens passed to each CLI at startup)
  - `git` and `gh`: GitHub personal access token
  - `wrangler`: Cloudflare API token
  - `stripe`: Stripe CLI token
- **Sleeping**: Automatic hibernation when not in use — the sandbox "sleeps" to reduce costs and "wakes" when a tool call arrives
- **Tool exposure**: The full terminal (all bash commands + specific CLIs) exposed as an MCP-compatible AI tool

The implementation worked for `gh`, `stripe`, and `wrangler` on the first day. A coding agent layer was in progress but described as more complex, particularly around Claude's authentication flow.[^x-posts-2026-03-24]

## Relationship to OpenPolsia

The Cloudflare Sandbox provides the execution substrate for [[OpenPolsia]] — the open-source autonomous business manager. An AI agent managing multiple businesses needs to be able to deploy code (`wrangler`), push to git, handle payments (`stripe`), and query/modify repositories (`gh`). The sandbox makes all of this available as a single, sleepable, pre-authenticated AI tool.[^x-posts-2026-03-24]

## Design Philosophy

The sandbox addresses a recurring gap Jan had identified in his agentic workflow: most AI tools either assume local CLI access (which requires a laptop to be running) or require complex authentication plumbing in each agent. By pre-authenticating at the sandbox level and exposing the terminal as a single MCP-compatible tool, agents can perform deployment, version control, and payment operations without the human having to intervene for credentials.[^x-posts-2026-03-25]

## See Also

- [[Jan_Wilmake]]
- [[OpenPolsia]]
- [[ContextArea]]
- [[Parallel_AI]]

[^x-posts-2026-03-24]: X post archive: `x-archive/raw/posts/2026-03-24.md`
[^x-posts-2026-03-25]: X post archive: `x-archive/raw/posts/2026-03-25.md`
