---
title: Markdown Browser
description: Browser tool by Jan Wilmake for navigating the agent-readable second web via markdown and llms.txt
category: Projects
---

# Markdown Browser

**Markdown Browser** (`markdownbrowser.com`) is a web tool developed by [[Jan Wilmake]] and launched on March 2, 2026. It shows any URL's markdown representation alongside a llms.txt navigation sidebar — framed as a browser for the "second web" of AI-readable content.[^x-posts-2026-03-02]

## Concept

Jan's launch framing: *"The web is bifurcating. For 30 years we had one web — built for human eyes. Now a second web is emerging: markdown, structured data, and llms.txt files that AI agents consume. There's no browser for that second web. Until now."*[^x-posts-2026-03-02]

The core observation motivating Markdown Browser: *"Markdown is a better reading experience. No popups. No layout shift. No cookie dialogs. No autoplaying videos. No 'subscribe' modals. Just text, links, and code blocks. It's reader mode on steroids — except the content is designed to be read this way."*[^x-posts-2026-03-02]

Sites with `/llms.txt` files become navigable through a sidebar, similar to a dev portal but for the machine-readable web. Devtools show token cost, response time, and spec compliance.

## Features

- **Markdown rendering** of any URL (via extract engine)
- **llms.txt sidebar navigation** — when a site has llms.txt, it becomes browsable like a docs portal
- **Pluggable extract engines** — Defuddle (default), Jina, Parallel API, and others[^x-posts-2026-03-06]
- **Pluggable search engines** — configurable per user[^x-posts-2026-03-06]
- **Deep link sharing** — share a URL that preloads a specific page: e.g. `markdownbrowser.com/?url=https://...`[^x-posts-2026-03-06]
- **Token cost and response time** shown as devtools

## Development History

| Date | Milestone |
|------|-----------|
| Mar 2, 2026 | Initial launch; announcement thread on X |
| Mar 6, 2026 | Added pluggable extract and search engines; Defuddle becomes default |
| Mar 6, 2026 | Added deep link sharing via URL query param |

## Integration with Parallel AI

For URLs that only serve HTML (no native markdown), Markdown Browser requires a Parallel API key to use Parallel's extraction API to render them. Sites that natively serve markdown (via content-negotiation) work without a key.

Jan positioned this as a showcase for Parallel's Extract API — the right extract engine matters, and Parallel's is one of the best options.[^x-posts-2026-03-06]

## Reception

The launch thread received positive engagement. Jan noted that some sites "hold up beautifully" in markdown while others don't, surfacing which sites are genuinely agent-friendly.

## See Also

- [[Jan Wilmake]]
- [[Agent_Friendly_Web]]
- [[LLMTEXT]]
- [[ContextArea]]
- [[Parallel_AI]]

[^x-posts-2026-03-02]: X post archive: `x-archive/raw/posts/2026-03-02.md`
[^x-posts-2026-03-06]: X post archive: `x-archive/raw/posts/2026-03-06.md`
