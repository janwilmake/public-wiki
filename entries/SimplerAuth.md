---
title: SimplerAuth
description: Auth library collection for Cloudflare Workers by Jan Wilmake; minimal OAuth implementations
category: Projects
---

# SimplerAuth

**SimplerAuth** (`simplerauth.com`) is a collection of minimal, copy-pasteable OAuth authentication libraries for Cloudflare Workers, developed by [[Jan Wilmake]]. The project reflects Jan's philosophy that most auth frameworks are over-engineered and that a simple 200-line file is often all you need.

## Philosophy

Jan bought the domain in June 2025 with a clear rationale:[^x-posts-2025-06-03]

> *"Most auth frameworks are just making things more bloated. We need something simpler."*

The core insight: auth libraries create huge dependencies and abstract away auth completely. SimplerAuth takes the opposite approach — each provider is a single, highly readable, copy-pasteable file of approximately 200 lines, with no external dependencies. *"There's not even a need for it to become a dependency really — it's just one copy-pasteable file."*[^x-posts-2025-06-03]

SimplerAuth is explicitly Cloudflare Workers-only: *"Oh and it'll just work for cloudflare because that's what I'm using. I have no intention of making it work elsewhere. Be my guest!"*[^x-posts-2025-06-03]

## Providers and Libraries

The project is organised as a GitHub Stars list (`github.com/stars/janwilmake/lists/simpler-auth`) containing individual provider implementations:[^x-posts-2025-06-03]

- **GitHub OAuth** — `github.com/janwilmake/github-oauth-client-provider`; includes `withSimplerAuth` middleware that enforces authenticated user for the entire handler
- **X (Twitter) OAuth** — `x.simplerauth.com` (`github.com/janwilmake/x-oauth-middleware`)

The `withSimplerAuth` pattern composes with other Cloudflare Workers middleware in a clean wrapper style:

```ts
withPathKv(withSimplerAuth(withStripeflare(handler)))
```

A provider for the entire auth flow was published as `simplerauth-provider` in August 2025, with an associated blog post at `github.com/janwilmake/simplerauth-provider/blob/main/BLOG.md`.[^x-posts-2025-08-19]

## Integration with Jan's Stack

SimplerAuth became the auth layer for multiple Jan projects. In June 2025 he described his target uithub architecture as:

```ts
withMcp(withPathKv(withSimplerAuth(uithubHandler)))
```

This pattern appeared across uithub, ContextArea, and other Cloudflare Workers-based tools. The approach prioritised minimalism and kept the codebase easy to audit.

## December 2025: Single-Repo Consolidation

On December 24, 2025, Jan consolidated all SimplerAuth templates into a single repository at `github.com/janwilmake/simplerauth`. Previously the project was distributed across a GitHub Stars list, which slowed adoption. Jan credited Sam Goodwin with suggesting the consolidation.[^x-posts-2025-12-24] The project had under 100 stars total across the distributed repos; the consolidation was intended to make discovery and adoption easier.

Jan re-introduced it with: *"SimplerAuth is an unconventional way to do auth by owning the code yourself and actually learning how it works. Where most auth libraries abstract away auth completely, SimplerAuth is a single, highly readable, copy-pasteable file of ~200 lines."*[^x-posts-2025-12-24]

## February 2026: SMS OAuth Provider

In February 2026, Jan added a Twilio SMS OAuth provider to the repo — a minimal example showing how to set up SMS-based login for an MCP server. This extended SimplerAuth's scope beyond social OAuth into phone-number-based authentication, relevant for agent and MCP server use cases.[^x-posts-2026-02-04]

## See Also

- [[Jan Wilmake]]
- [[uithub]]
- [[ContextArea]]
- [[Cloudflare_Pursuit_2024_2025]]
- [[sponsorflare]]
- [[Sam_Goodwin]]

[^x-posts-2025-06-03]: X post archive: `x-archive/raw/posts/2025-06-03.md`
[^x-posts-2025-08-19]: X post archive: `x-archive/raw/posts/2025-08-19.md`
[^x-posts-2025-12-24]: X post archive: `x-archive/raw/posts/2025-12-24.md`
[^x-posts-2026-02-04]: X post archive: `x-archive/raw/posts/2026-02-04.md`
