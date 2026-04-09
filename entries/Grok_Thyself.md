---
title: Grok Thyself
description: X data sync tool by Jan Wilmake that continuously backs up tweets, bookmarks, and likes to a private GitHub repo
category: Projects
---

# Grok Thyself

**Grok Thyself** (`grokthyself.com`) is a tool developed by [[Jan_Wilmake]] and launched on April 7, 2026. It synchronises a user's X (Twitter) posts, bookmarks, and likes into a private GitHub repository of the user's choice, creating a structured, AI-queryable personal knowledge base from social media activity.

## Overview

The tool was inspired by Andrej Karpathy's viral thread on LLM knowledge bases (April 5, 2026), in which Karpathy advocated for using LLMs to build and maintain personal knowledge bases. Jan had been building personal knowledge infrastructure since 2024, and Karpathy's post provided the catalyst to productise the X-data sync component.

Jan's initial question to his audience: *"who wants a continuous sync of all their tweets+bookmarks+likes into a private github repo to augment their knowledge base?"* — received strong interest.

## Features

- **Continuous sync**: Automatically syncs X bookmarks and posts to a private GitHub repository
- **Backfill**: Retrieves up to 1,000 historic bookmarks and 1,000 historic posts on first setup
- **Rich context**: Every post includes quoted posts and replied-to posts, all neatly organised in daily markdown files
- **GitHub App integration**: Uses a GitHub App for repository access; users select which private repo to sync to

## Traction

Within 24 hours of launch, Grok Thyself achieved:

| Metric | Count |
|--------|-------|
| Likes on launch tweet | 185 |
| Bookmarks | 290 |
| Sign-ups | 40 |
| Paid subscribers | 3 |

Jan described the launch as *"a success"* and immediately pivoted to the next product in the pipeline: [[Self-Driving_Repos]].

## Community Response

An unexpected development: someone in the web3 community created a memecoin for Grok Thyself through a decentralised crowdfunding mechanism, motivated by a desire to support solo developers. Jan had no involvement in or awareness of this until notified by a user.

## Relationship to Other Projects

Grok Thyself is the data ingestion layer for Jan's broader personal knowledge base architecture:

- **Input**: Grok Thyself syncs raw X data to a private GitHub repo
- **Processing**: [[Self-Driving_Repos]] runs agents on source repos to produce a synthesised wiki
- **Output**: A wiki repo (like this one)

## See Also

- [[Jan_Wilmake]]
- [[Self-Driving_Repos]]
- [[Agent_Friendly_Web]]
- [[socialdatapod]]
- [[ContextArea]]
