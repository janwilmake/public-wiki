---
title: ContextArea
description: Web-based context engineering and MCP client tool by Jan Wilmake; launched February 2026
category: Projects
---

# ContextArea

**ContextArea** (`contextarea.com`) is a web-based context engineering and MCP client tool developed by [[Jan Wilmake]] and launched publicly on February 11, 2026. It enables users to compose prompts using URLs as context, tag MCP servers inline, and run prompts against multiple AI models. Every result is instantly shareable via a unique URL.[^x-posts-2026-02-11]

## Core Concept

ContextArea is built around a simple but powerful paradigm:

- **URLs are context** — paste any URL into the prompt area and it is fetched and included as context
- **MCP servers via `@`** — type `@{mcp-url}` to inject an MCP server's tools into the prompt
- **Shareable results** — every prompt + result gets a unique, shareable URL at `contextarea.com/...`

Jan framed it as: *"URLs are context, tag MCP servers in a whim — every result is instantly shareable — Fully MIT OSS."*[^x-posts-2026-02-11]

## Features

- **Monaco editor** — uses the Monaco (VSCode) code editor as its core input surface[^x-posts-2026-02-06]
- **MCP marketplace** — built-in discovery and one-click installation of MCP servers with name and icon support[^x-posts-2026-02-11]
- **Image support** — images can be dropped in and they render for models that support vision[^x-posts-2026-02-12]
- **ContextArea as MCP** — ContextArea is itself an MCP server, exposing tools to list activated MCPs and run sub-agents[^x-posts-2026-02-12]
- **ContextArea API** — exposes an API for creating experiences with URL-as-context and MCP-via-@ support[^x-posts-2026-02-12]
- **Raw JS/CSS/HTML** — the entire application uses no frontend framework; just Monaco + vanilla web[^x-posts-2026-02-10]

## Development History

| Date | Milestone |
|------|-----------|
| Early 2025 | First version: `contextarea.com` as a personal prompt tool |
| Oct 2025 | Used heavily in building Parallel MCP demos and sharing prompt+result links |
| Dec 2025 | Used for sharing context+rules links (e.g. `contextarea.com/rules-...`) |
| Jan 2026 | Used as identity provider development environment; Jan live-streamed building a remote MCP client with Parallel's styling |
| Feb 6, 2026 | Rebuilt with Monaco as core editor; added MCP server tagging |
| Feb 9, 2026 | MCP support added; becomes first ContextArea with MCP client |
| Feb 11, 2026 | Formal launch with video; MIT open-sourced |
| Feb 12, 2026 | ContextArea becomes an MCP itself; API launched |

Source code: `github.com/janwilmake/contextarea-worker`[^x-posts-2026-02-06]

## Relationship to Other Projects

ContextArea integrates tightly with Jan's other tools:
- Uses [[uithub]] API to load GitHub repository context
- Supports [[LLMTEXT]] MCPs via `@{mcp-url}` syntax
- Can invoke [[openapisearch]] OpenAPI MCPs
- The "sharing" model inspired by and feeds into Jan's broader agent-friendly URL philosophy

## See Also

- [[Jan Wilmake]]
- [[uithub]]
- [[LLMTEXT]]
- [[Agent_Friendly_Web]]
- [[Markdown_Browser]]
- [[installthismcp]]
- [[Browser_MCP]]

## Payment Integration Exploration

In February 2026, Jan explored integrating x402 machine payments into ContextArea — making it possible for AI agents to pay for MCP tools automatically. He noted: *"I'm actually trying to build something and maybe integrate payments into it: contextarea.com"*, referencing an open MCP PR for payment support, and was seeking corporate sponsorship to fund the bandwidth costs this would entail.[^x-posts-2026-02-23]

[^x-posts-2026-02-06]: X post archive: `x-archive/raw/posts/2026-02-06.md`
[^x-posts-2026-02-10]: X post archive: `x-archive/raw/posts/2026-02-10.md`
[^x-posts-2026-02-11]: X post archive: `x-archive/raw/posts/2026-02-11.md`
[^x-posts-2026-02-12]: X post archive: `x-archive/raw/posts/2026-02-12.md`
[^x-posts-2026-02-23]: X post archive: `x-archive/raw/posts/2026-02-23.md`
