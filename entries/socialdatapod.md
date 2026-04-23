---
title: socialdatapod
description: Jan Wilmake's personal X/Twitter history MCP and knowledge base tool for full historical context
category: Projects
---

# socialdatapod

**socialdatapod** (`github.com/janwilmake/socialdatapod`) is a personal social data aggregation tool developed by [[Jan Wilmake]]. It syncs a user's complete X (Twitter) post history — including conversations and threads — into a personal database, making the full historical context available as an MCP server for AI agents.[^x-posts-2025-10-05]

## Concept

Jan's motivation: X's own search and AI tools (including Grok) are poor at knowing a user's actual network, interests, and interactions. By syncing all personal posts to a private database, an AI agent can answer questions about the user's history, relationships, and conversations with much higher accuracy.[^x-posts-2025-10-06]

The tool focuses on posts and conversations that the user has authored (not others' posts), which avoids copyright issues — the user owns their own posts.[^x-posts-2025-10-06]

A companion X CRM (`crm.grok-tools.com`) allows syncing X follows, adding notes and tags to contacts, and querying the network via MCP.[^x-posts-2025-10-05]

## Background

Jan had been building toward this concept since early 2025. In October 2025 he shipped an updated X MCP with full historical context, comparing it favourably against Grok's poor recall of the user's own network. He demo'd it showing people he *actually* knows and interacts with — a stark contrast to Grok's generic suggestions.[^x-posts-2025-10-06]

Jan made the majority of his X context work public in the socialdatapod repository: *"I just put the majority of my x context work in https://github.com/janwilmake/socialdatapod, have at it!"*[^x-posts-2025-10-05]

## Related

In April 2026, Jan expressed interest in building a **continuous sync** of all tweets, bookmarks, and likes into a private GitHub repo as a personal knowledge base — inspired by Karpathy's writing on LLM knowledge bases.[^x-posts-2026-04-05]

## See Also

- [[Jan Wilmake]]
- [[ContextArea]]
- [[Agent_Friendly_Web]]
- [[getpromind]]

[^x-posts-2025-10-05]: X post archive: `x-archive/raw/posts/2025-10-05.md`
[^x-posts-2025-10-06]: X post archive: `x-archive/raw/posts/2025-10-06.md`
[^x-posts-2026-04-05]: X post archive: `x-archive/raw/posts/2026-04-05.md`
