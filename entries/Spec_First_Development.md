---
title: Spec-First Development
description: Jan Wilmake's practice of writing SPEC.md files before building — treating written specifications as the primary engineering artifact
category: Concepts
---

# Spec-First Development

**Spec-First Development** is a software development practice consistently followed by [[Jan Wilmake]] for over two years (as of April 2026): before writing code, write a `SPEC.md` file — a plain-text specification of what the software should do. In the era of LLM agents, this practice has become doubly valuable: the SPEC file serves both as a design discipline for the human and as the primary context document for the coding agent.[^x-posts-2026-04-05]

## The Practice

Jan's approach, described in response to Karpathy's viral thread on LLM knowledge bases in April 2026: *"I've done this for over 2 years. Just search in my github for SPEC.md."*[^x-posts-2026-04-05]

A `SPEC.md` file typically contains:
- A description of what the software should do (user-facing behaviour)
- Technical constraints and stack decisions
- Key design choices and their rationale
- Acceptance criteria or success metrics

The file lives in the repository root alongside code, serving as both documentation and agent instruction.

## Why It Matters in the AI Era

Before LLM coding assistants, SPEC files were principally a human design discipline — forcing the developer to think through the problem before implementing. In the agentic era, the SPEC file takes on a second function: it is the primary context document fed to the coding agent. An agent that reads a SPEC before writing code produces dramatically better output than one that is prompted with vague instructions.

This is why Jan connected his SPEC.md practice to Karpathy's thread about LLM knowledge bases: both involve the insight that **pre-written structured text is the substrate that makes LLMs useful**. Jan had already been treating his own repositories as structured knowledge sources — the `SPEC.md` pattern being the most direct expression of this.

## Connection to Larger Philosophy

The SPEC-first practice connects to several threads in Jan's broader thinking:

- **[[Agent_Friendly_Web]]** — if URLs are context for AI agents, then SPEC.md files are the canonical context for coding agents accessing repositories via [[uithub]] or similar tools
- **[[Scalable_Knowledge_Work]]** — a SPEC encodes the expertise required to make design decisions; once written, it can be replicated across many implementations
- **Context engineering** — [[ContextArea]] is Jan's general-purpose tool for composing prompts with URL-as-context; SPEC.md files are the natural targets of such context loading

## Practical Adoption

A notable consequence of this practice: Jan's GitHub repositories contain SPEC.md files as a matter of routine, making them more agent-accessible than typical repositories. When [[uithub]] is pointed at a Jan Wilmake repository, the SPEC.md provides meaningful context that a coding agent can use immediately.

## See Also

- [[Jan_Wilmake]]
- [[uithub]]
- [[ContextArea]]
- [[Agent_Friendly_Web]]
- [[Scalable_Knowledge_Work]]

[^x-posts-2026-04-05]: X post archive: `x-archive/raw/posts/2026-04-05.md`
