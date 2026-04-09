---
title: installthismcp
description: Jan Wilmake's MCP installation helper that generates one-click install instructions for any MCP server across all major clients
category: Projects
---

# installthismcp

**installthismcp** (`installthismcp.com`) is a developer utility built by [[Jan_Wilmake]] that dramatically reduces friction when sharing MCP servers. Given any MCP server URL, it generates a shareable installation page with one-click install support for clients that support it (Cursor, Claude Desktop, etc.) and clear instructions for all others.

## Problem It Solves

Jan articulated the core problem: *"I hate these awkward JSON files you need to edit to install MCPs"*. Every MCP server author was maintaining their own per-client installation instructions, often outdated or incomplete, covering a growing list of clients (Cursor, Claude Desktop, VS Code, Windsurf, etc.).

installthismcp abstracts this away: point it at any MCP server URL, get a shareable link that provides the right instructions for whatever client the user has.

## Features

- **One-click installation** for clients that support a `mcp://install?url=...` style deep link
- **Per-client instructions** for clients that require JSON config editing
- **OAuth-aware** — works correctly for remote MCP servers with OAuth authentication
- **README-friendly** — generates embeddable badges and links for MCP server documentation
- **Open source** — MIT licensed at `github.com/janwilmake/install-this-mcp`

## Example

A shareable installation URL looks like:
```
https://installthismcp.com/Parallel%20Task%20MCP?url=https%3A%2F%2Ftask-mcp.parallel.ai%2Fmcp
```
Anyone clicking this link sees the right instructions for their specific MCP client.

## Development History

| Date | Milestone |
|------|-----------|
| Oct 8, 2025 | First version launched (`v0.2.0`) |
| Oct 20, 2025 | Re-announced; positioned as reliable infrastructure |
| Oct 25, 2025 | v0.2.1 released; MIT license added; README improvements |
| Oct 29, 2025 | Pull request submitted to official MCP servers README on GitHub |

## Adoption

Jan submitted a PR to the official `modelcontextprotocol/servers` repository to add installthismcp as a recommended installation method — a signal that he considered it canonical infrastructure for the MCP ecosystem.

The tool was also referenced in the `awesome-remote-mcp-servers` awesome list.

## Relationship to Other Projects

installthismcp sits adjacent to Jan's MCP ecosystem work at [[Parallel_AI]] and connects directly to [[ContextArea]] (which itself is an MCP server and MCP client). It embodies Jan's broader pattern of building ecosystem infrastructure rather than applications.

## See Also

- [[Jan_Wilmake]]
- [[ContextArea]]
- [[Parallel_AI]]
- [[Agent_Friendly_Web]]
- [[LLMTEXT]]
