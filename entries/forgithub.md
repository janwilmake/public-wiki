---
title: forgithub
description: Family of GitHub-focused tools by Jan Wilmake including Dashboard for GitHub and Context for GitHub
category: Projects
---

# forgithub

**forgithub** is a family of GitHub-focused developer tools built by [[Jan Wilmake]], launched in December 2025. The tools provide improved GitHub interfaces and LLM-ready context generation, building on the foundations of [[uithub]].

## Tools

### Dashboard for GitHub (`dashboard.forgithub.com`)

A better personal homepage for GitHub, launched December 30, 2025.[^x-posts-2025-12-30] Features:
- Repos, Open PRs, Review Requests, Starred Repos — all easily searchable and sortable
- Described as fixing the problem that *"pretty much the entire GitHub homepage is useless"*
- Fully open source: `github.com/janwilmake/dashboard-for-github`

### Context for GitHub (`context.forgithub.com`)

A LLM context tool that aggregates all repos relevant to you for use with AI, launched December 30, 2025.[^x-posts-2025-12-30]

Jan's framing: *"Selling context is going to be a thing: one-time purchase of context or subscriptions of context that stays up-to-date on a particular topic."*[^x-posts-2026-01-14]

### githuq (`githuq.com`)

A chat interface for GitHub repositories — flip the 'b' to 'q' in any GitHub URL (`github.com` → `githuq.com`) to get a chat interface that uses the repo's README, tree, and agent instruction files as context, powered by `justbash.dev`.[^x-posts-2026-03-19] Launched March 19, 2026.

## Philosophy

Jan articulated a vision around "selling context" in January 2026: *"Selling context is going to be a thing: one-time purchase of context or subscriptions of context that stays up-to-date on a particular topic. High quality context. Context is king."*[^x-posts-2026-01-14]

forgithub represents the GitHub slice of this vision — Jan's personal context around his own repositories and activity, made available to others.

## Related: gcombinator

In January 2026, Jan also shipped **gcombinator** — a URL-flip tool for Hacker News (change 'y' to 'g' in any `ycombinator.com` URL) that returns the full article context including comments, making HN discussions accessible to LLMs.[^x-posts-2026-01-25] This follows the same pattern as forgithub (flip-the-letter URL access) applied to HN content.

## Origin

forgithub grew out of the uithub ecosystem. Jan had ~1,000 users on a GitHub dashboard waitlist from early 2025 but never launched it that year. In late December 2025, he built both the dashboard and context tool in a single day.[^x-posts-2025-12-29]

## mcpchat.wilmake.com

A closely related project: in January 2026, Jan built `mcpchat.wilmake.com` — a browser-based remote MCP client that lets anyone chat with an MCP server without installing anything. The Notion MCP was used as a demonstration: `mcpchat.wilmake.com/mcp.notion.com/mcp`.[^x-posts-2026-01-19] This follows the same "flip-a-letter" or "swap-the-URL" pattern as forgithub tools — ease of access to any MCP without setup friction.

## See Also

- [[Jan Wilmake]]
- [[uithub]]
- [[Agent_Friendly_Web]]
- [[ContextArea]]

[^x-posts-2025-12-29]: X post archive: `x-archive/raw/posts/2025-12-29.md`
[^x-posts-2025-12-30]: X post archive: `x-archive/raw/posts/2025-12-30.md`
[^x-posts-2026-01-14]: X post archive: `x-archive/raw/posts/2026-01-14.md`
[^x-posts-2026-01-25]: X post archive: `x-archive/raw/posts/2026-01-25.md`
[^x-posts-2026-01-19]: X post archive: `x-archive/raw/posts/2026-01-19.md`
[^x-posts-2026-03-19]: X post archive: `x-archive/raw/posts/2026-03-19.md`
