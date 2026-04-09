---
title: ContextArea
description: Web-based context engineering and MCP client tool by Jan Wilmake; launched February 2026
category: Projects
---

# ContextArea

**ContextArea** (`contextarea.com`) is a web-based context engineering and MCP client tool developed by [[Jan_Wilmake]] and launched publicly on February 11, 2026. It enables users to compose prompts using URLs as context, tag MCP servers inline, and run prompts against multiple AI models.

## Concept

ContextArea is built around the idea that the most powerful way to use AI is to compose context from URLs — pointing the model at specific web pages, GitHub repos, API specs, or documentation rather than pasting raw text. It combines:

- **URL-as-context**: Any URL can be dropped into a prompt; ContextArea fetches and includes its content
- **MCP client**: Users can tag MCP servers inline within their prompt composition
- **Multi-model**: Prompts can be executed against different AI models

Jan described this as a developer-experience layer on top of AI inference, addressing the challenge of composing multiple desirable features (caching, billing, identity, URL context, MCP tool use, code mode, cronjobs, async execution) into a coherent workflow.

## Architecture

ContextArea sits within Jan's broader toolchain:

- **Context sources**: [[uithub]] (code repos), [[openapisearch]] (API specs), [[socialdatapod]] (X history), [[getpromind]] (personal history)
- **Auth**: [[SimplerAuth]] middleware
- **Execution**: Cloudflare Workers

## Connection to Spec-First Development

ContextArea embodies [[Spec_First_Development]] in practice: SPEC.md files are the natural targets of URL-as-context loading. When an agent reads a repo's SPEC.md via [[uithub]], then executes through ContextArea, the result is dramatically better than unguided prompting.

## See Also

- [[Jan_Wilmake]]
- [[Agent_Friendly_Web]]
- [[installthismcp]]
- [[SimplerAuth]]
- [[socialdatapod]]
- [[getpromind]]
