---
title: SimplerAuth
description: Auth library collection for Cloudflare Workers by Jan Wilmake; minimal OAuth implementations
category: Projects
---

# SimplerAuth

**SimplerAuth** (`simplerauth.com`) is a collection of minimal, copy-pasteable OAuth authentication libraries for Cloudflare Workers, developed by [[Jan_Wilmake]]. The project reflects Jan's philosophy that most auth frameworks are over-engineered and that a simple 200-line file is often all you need.

## Philosophy

Jan's rationale:

> *"Most auth frameworks are just making things more bloated. We need something simpler."*

The core insight: auth libraries create huge dependencies and abstract away auth completely. SimplerAuth takes the opposite approach — each provider is a single, highly readable, copy-pasteable file of approximately 200 lines, with no external dependencies. *"There's not even a need for it to become a dependency really — it's just one copy-pasteable file."*

SimplerAuth is explicitly Cloudflare Workers-only.

## Providers and Libraries

The project is organised as a GitHub repository (`github.com/janwilmake/simplerauth`) containing individual provider implementations:

- **GitHub OAuth** — includes `withSimplerAuth` middleware
- **X (Twitter) OAuth** — `x.simplerauth.com`
- **SMS OAuth** (Twilio) — added February 2026 for MCP server phone-number login

The `withSimplerAuth` pattern composes cleanly with other Cloudflare Workers middleware:

```ts
withPathKv(withSimplerAuth(withStripeflare(handler)))
```

## Development Timeline

| Date | Milestone |
|------|-----------|
| June 2025 | Domain purchased; initial concept |
| August 2025 | `simplerauth-provider` published |
| December 2025 | All templates consolidated into a single repo |
| February 2026 | SMS (Twilio) OAuth provider added |

### December 2025: Consolidation

On December 24, 2025, Jan consolidated all SimplerAuth templates into a single repository. Previously the project was distributed across a GitHub Stars list, which slowed adoption. Jan credited Sam Goodwin with suggesting the consolidation.

## Integration with Jan's Stack

SimplerAuth became the auth layer for multiple Jan projects including [[uithub]], [[ContextArea]], and other Cloudflare Workers-based tools.

## See Also

- [[Jan_Wilmake]]
- [[uithub]]
- [[ContextArea]]
- [[sponsorflare]]
