---
title: OpenPolsia
description: Open-source AI business-manager by Jan Wilmake, modelled on the @polsia X account's autonomous multi-business agent
category: Projects
---

# OpenPolsia

**OpenPolsia** is an open-source project started by [[Jan Wilmake]] on March 22, 2026. It is modelled on **Polsia** — an autonomous AI agent visible as the `@polsia` account on X — which runs multiple businesses simultaneously and posts updates about its operations. OpenPolsia is Jan's attempt to replicate and extend this concept with open-source code.[^x-posts-2026-03-24]

## What is Polsia?

Polsia (`@polsia` on X) is an AI agent that autonomously manages and describes business operations. Its X posts read as automated business status updates. On March 21, 2026 it posted two examples of this pattern: *"New company running today. A video editing service built by a creator who knows what creators actually need. The editing-as-a-service market is wide open for someone with real production instincts."* and *"Now running ops for a platform that turns drawing into a daily habit. No competition, no pressure. Just consistency and a community that shows up. The Duolingo of sketching, basically."*[^x-bookmarks-2026-03-21]

This makes Polsia a precursor to agentic business management: rather than a human describing a startup, an AI agent runs the day-to-day operations and documents them publicly. The model combines business task orchestration with multi-business context switching.

The Polsia concept is distinct from conventional AI product builders — the agent does not simply generate a business plan, it autonomously operates multiple businesses simultaneously in an ongoing, persistent fashion, posting publicly about its decisions and operations on X.

## OpenPolsia vs. Polsia

Jan chose to open-source the replication rather than reverse-engineer the original or contact the Polsia team. As of Day 3 (March 24, 2026) he was focused on achieving **feature parity** with the original Polsia before adding improvements or diverging. There is no indication from the archive that a separate closed-source `Polsia.md` entry is warranted — Jan engaged with Polsia purely as an inspiration/model and OpenPolsia is the only product he built in this space. The two can be understood as the inspiration and the open-source response respectively, both covered in this entry.

## OpenPolsia Features

Jan started with a focus on feature parity to Polsia, building out in daily increments:

- **Day 1 (March 22, 2026)**: Smooth business creation and business switching; agent can create and execute tasks, send/receive email, write documents, and use bash on documents[^x-posts-2026-03-22]
- **Day 3 (March 24, 2026)**: Focus on feature parity before further improvement; Jan posted a cryptic "probably nothing...." image hinting at early progress[^x-posts-2026-03-24]

Core capabilities targeted:
- **Business creation and switching** — creating new business contexts and switching agent focus between them
- **Task execution** — running structured tasks against documents or services
- **Email integration** — send and receive email as part of task pipelines
- **Bash on documents** — executing shell commands in the context of document-based work
- **Multi-business support** — managing workflows across multiple business contexts simultaneously

## Execution Substrate: Cloudflare Sandbox

On the same day as the Day 3 OpenPolsia update (March 24, 2026), Jan was actively building the execution infrastructure that OpenPolsia would depend on. He asked: *"Can I have a Cloudflare sandbox where the user is logged in into their own `stripe`, `git`, `gh` and `wrangler`, then expose the terminal with all the commands as an AI tool with proper sleeping built-in when the tool isn't used?"*[^x-posts-2026-03-24]

Later that day he answered his own question: *"result — it worked for gh, stripe, and wrangler"*, publishing the code at `github.com/janwilmake/sandbox`. The sandbox uses Cloudflare's sandbox API with automatic sleeping to minimise costs when the tool is idle. This substrate — a pre-authenticated, sleepable terminal exposed as an MCP tool — is the execution layer that makes OpenPolsia's agentic business operations technically feasible.[^x-posts-2026-03-24]

On March 25, Jan confirmed the sandbox was working fully after receiving helpful pointers from `@firtoz` about using tokens for `git`, `gh`, `wrangler`, and `stripe` CLI authentication.[^x-posts-2026-03-25]

## Timing and Context

OpenPolsia was started on March 22, 2026, during an extremely productive period. In the weeks immediately preceding, Jan also shipped:

| Date | Project |
|------|---------|
| Mar 2 | [[Markdown_Browser]] launched |
| Mar 5 | [[uithub]] open-sourced |
| Mar 7 | uithub-lib published |
| Mar 19 | githuq launched (via [[forgithub]]) |
| Mar 22 | OpenPolsia Day 1 |
| Mar 24 | Cloudflare Sandbox completed |

This clustering of launches in March 2026 was the densest shipping period in Jan's post-Parallel AI career, enabled by Claude Code agentic workflows and Cloudflare's tooling.

## Conceptual Significance

OpenPolsia represents Jan's most direct engagement with the idea of AI agents as autonomous business operators — not just as coding assistants, but as entities that create, run, and describe businesses without human bottlenecks. This connects to his broader philosophy in [[Agent_Friendly_Web]] (providing agents with clean information access) and [[Reciprocal_Networks]] (independent units operating through reliable APIs). An agent running multiple businesses on autopilot is, in effect, a one-person company operated by a non-person.

## See Also

- [[Jan_Wilmake]]
- [[ContextArea]]
- [[Markdown_Browser]]
- [[forgithub]]
- [[Agent_Friendly_Web]]
- [[Reciprocal_Networks]]
- [[Cloudflare_Sandbox]]

[^x-posts-2026-03-22]: X post archive: `x-archive/raw/posts/2026-03-22.md`
[^x-posts-2026-03-24]: X post archive: `x-archive/raw/posts/2026-03-24.md`
[^x-posts-2026-03-25]: X post archive: `x-archive/raw/posts/2026-03-25.md`
[^x-bookmarks-2026-03-21]: X bookmarks archive: `x-archive/raw/bookmarks/2026-03-21.md`
