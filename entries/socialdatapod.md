---
title: socialdatapod
description: Jan Wilmake's personal X/Twitter history MCP and knowledge base tool for full historical context
category: Projects
---

# socialdatapod

**socialdatapod** (`github.com/janwilmake/socialdatapod`) is a personal social data aggregation tool developed by [[Jan_Wilmake]]. It syncs a user's complete X (Twitter) post history — including conversations and threads — into a personal database, making the full historical context available as an MCP server for AI agents.

## Concept

Jan's motivation: X's own search and AI tools (including Grok) are poor at knowing a user's actual network, interests, and interactions. By syncing all personal posts to a private database, an AI agent can answer questions about the user's history, relationships, and conversations with much higher accuracy.

The tool focuses on posts and conversations that the user has authored (not others' posts), which avoids copyright issues — the user owns their own posts.

A companion X CRM (`crm.grok-tools.com`) allows syncing X follows, adding notes and tags to contacts, and querying the network via MCP.

## Background

Jan had been building toward this concept since early 2025. In October 2025 he shipped an updated X MCP with full historical context, comparing it favourably against Grok's poor recall of the user's own network. He made the majority of his X context work public in the socialdatapod repository.

## Evolution

In April 2026, Jan productised this concept into [[Grok_Thyself]] — a hosted tool providing continuous sync of tweets, bookmarks, and likes into a private GitHub repository, inspired by Andrej Karpathy's writing on LLM knowledge bases.

## See Also

- [[Jan_Wilmake]]
- [[Grok_Thyself]]
- [[ContextArea]]
- [[Agent_Friendly_Web]]
