# AGENTS.md — VibeKit

## Project Overview

This repository contains `VibeKit`, a copy-ready AI kit library for prompts, context packs, harnesses, loops, agents, Codex instructions, RAG patterns, business workflows, writing workflows, and reusable AI skills.

The product should feel friendly, practical, and builder-oriented. It should not feel like a dense enterprise documentation site.

## Product Name

Use `VibeKit` everywhere in user-facing copy.

Do not use old names such as `Copyflow AI`.

## Core Tagline

```text
Everything you need to vibe with AI, copy-ready.
```

## Recommended Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static local content for MVP
- No database for MVP
- No authentication for MVP
- Hosted on Vercel

## Project Structure

Recommended structure:

```text
/src
  /app
    /kits
    /sources
    /about
    /submit
  /components
  /content
  /lib
```

## Development Commands

Use the commands available in `package.json`.

Common expected commands:

```bash
npm run dev
npm run build
npm run lint
```

If a command does not exist, do not invent complex tooling. Either add it intentionally or document that it is unavailable.

## Implementation Rules

- Prefer small, safe changes.
- Keep components typed.
- Keep content separate from UI components.
- Use local static content first.
- Do not add a database unless explicitly requested.
- Do not add auth unless explicitly requested.
- Do not add paid subscription logic in MVP.
- Keep the UI responsive.
- Run build after major changes.

## Content Rules

Every kit should include:

- slug
- title
- description
- category
- difficulty
- tools
- tags
- useWhen
- doNotUseWhen
- requiredInputs
- copyBlockTitle
- copyBlock
- steps
- verificationChecklist
- exitCondition
- reuseStatus

Do not copy external source text directly.

## Legal and Attribution Rules

VibeKit may be inspired by open-source projects, but the site must not copy unlicensed content.

For source-inspired kits:

- Rewrite in original wording
- Add source attribution
- Add license note when known
- Mark reuse status clearly

Do not include leaked system prompts, proprietary prompts, or content from sources with unclear reuse rights.

## UX Rules

The user should be able to:

1. Understand VibeKit quickly
2. Browse kits
3. Search kits
4. Open a kit
5. Copy the main kit block
6. See source and reuse status
7. Support via Buy Me a Coffee

## Tone

Use friendly builder language.

Preferred wording:

- kit
- copy-ready
- run it
- remix it
- builder
- vibe with AI
- source inspiration
- verification
- exit condition

Avoid excessive jargon:

- agentic orchestration
- complex autonomous pipelines
- enterprise AI governance
- prompt engineering methodology overload

## Quality Checklist

Before finalizing work:

- TypeScript passes
- Build passes
- No broken imports
- No missing slugs
- Related kits exist
- Copy buttons work
- Mobile layout is acceptable
- Empty states exist
- No old brand names remain

## Final Response Format

When reporting work, summarize:

- What changed
- Files changed
- Commands run
- Any remaining issues
