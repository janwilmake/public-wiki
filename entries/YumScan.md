---
title: YumScan
description: Restaurant menu visual browser app built by Jan Wilmake on May 31, 2026; registered as getyumscan.com on Cloudflare
category: Projects
---

# YumScan

**YumScan** (`getyumscan.com`) is a restaurant menu visual browser app built by [[Jan_Wilmake]] on May 31, 2026. It takes a restaurant menu — as an image or URL — and produces a visual, browsable display of every dish.[^activity-2026-05-31]

## Development

YumScan was conceived and built in a single morning. The session began at approximately 09:37 CEST on May 31, when Jan opened a Claude chat titled *"Restaurant menu visual browser app names"* to brainstorm names. He settled on **YumScan** and immediately checked domain availability on Cloudflare Registrar, finding `getyumscan.com` available. The domain was registered by ~10:15.[^activity-2026-05-31]

The technology stack includes:

- **Claude Platform API** — Jan checked API usage costs and limits during development, confirming Claude is used for menu parsing and dish identification[^activity-2026-05-31]
- **Serper.dev** — Google Search API used for image search (tested with food images in the Serper playground)[^activity-2026-05-31]
- **Cloudflare** — hosting and domain registration

Jan spent approximately two hours building and testing the app (10:34–12:35), iterating on the live site at `getyumscan.com` with dozens of visits. He tested with real menu images from multiple cuisines — searching Google Images for restaurant menus in English, Vietnamese, Chinese, Japanese, and Russian — including a specific test with the menu from *Yiasou On The Bay*, a Greek restaurant in Brooklyn.[^activity-2026-05-31]

A tagline visible during testing read *"See every dish on any menu"*.[^activity-2026-05-31]

## Continued Development

On June 8, 2026, [[Bruna]] submitted **Pull Request #1** to the `janwilmake/yumscan` GitHub repository: *"Add async scan jobs with polling endpoint"* (`by brunabaudel`). Jan reviewed the PR changes for approximately 57 seconds.[^browser-2026-06-08] This marks one of the first recorded collaborative code contributions from Bruna to one of Jan's projects.

## Context

YumScan broke a multi-day pattern of leisure-heavy consumption. The preceding week (May 21–30) was dominated by Color Block Jam gameplay, YouTube rabbit holes on ancient civilisations, Netflix binging, and a wildcamping trip planning session. YumScan was the first new product shipped since [[Grok_Thyself]] (April 7) and [[Self-Driving_Repos]] (April 8).[^activity-2026-05-31]

The project demonstrates Jan's recurring "build-and-ship-in-a-morning" pattern: a Claude brainstorming session → domain purchase → working prototype → live testing, all within roughly three hours. This is consistent with the rapid development cadence seen in projects like [[ProductSim]], [[Markdown_Browser]], and [[ContextArea]].

YumScan also represents Jan's continued use of the Claude API as a core product building block — the same infrastructure powering his earlier [[Chat_AI]] (WhatsApp bot) and informing his work at [[Parallel_AI]] on AI inference DX design.

## See Also

- [[Jan_Wilmake]]
- [[Bruna]]
- [[Career_Plan_2026]]
- [[Self-Driving_Repos]]
- [[Grok_Thyself]]

[^activity-2026-05-31]: Activity summary: `x-archive/raw/activity-summary/2026-05-31.md`
[^browser-2026-06-08]: Browser history: `x-archive/raw/browser-history/2026-06-08.md`
