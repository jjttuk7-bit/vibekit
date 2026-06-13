# 02. Information Architecture — VibeKit

## 1. Site Map

```text
/
/kits
/kits/[slug]
/categories
/categories/[category]
/sources
/sources/[slug]
/about
/submit
/support
```

For the MVP, `/categories/[category]` and `/sources/[slug]` are optional. Category filtering can happen on `/kits` first.

## 2. Navigation

Header links:

- Kits
- Categories
- Sources
- About
- Support

Primary CTA:

- Browse Kits

Secondary CTA:

- Buy Me a Coffee

## 3. Home Page Structure

### 3.1 Hero

Title:

```text
VibeKit
```

Headline:

```text
Everything you need to vibe with AI, copy-ready.
```

Subheadline:

```text
Practical AI kits for prompts, context, loops, agents, and skills — curated from high-signal open-source patterns and rewritten for real-world use.
```

Buttons:

- Browse Kits
- How It Works

### 3.2 Category Strip

Show key categories:

- Prompt Kits
- Context Kits
- Harness Kits
- Loop Kits
- Skill Kits
- Agent Kits
- Codex Kits
- RAG Kits

### 3.3 Featured Kits

Show 6 featured kits:

- Context Pack Builder
- Document Quality Loop
- Codex Fix Until Green Kit
- GitHub Pattern Extractor
- Repeated Task to Skill Kit
- RAG Source Checker

### 3.4 How It Works

Three steps:

1. Pick a kit
2. Copy the instruction
3. Run, verify, and remix

### 3.5 Safety Section

Explain:

- Inspired by open-source patterns
- Rewritten into original kits
- License and attribution notes included
- No direct copying from unlicensed material

### 3.6 Support Section

Copy:

```text
VibeKit is free to browse and copy. If a kit saved you time, you can support future kits.
```

Button:

```text
Buy me a coffee
```

## 4. Kit Card Structure

Each card should show:

- Title
- Description
- Category badge
- Difficulty badge
- Tool badges
- Reuse status badge
- Short use case

Example:

```text
Context Pack Builder
Turn messy project information into a reusable AI context pack.
Category: Context Kit
Best for: ChatGPT, Claude, Codex
Difficulty: Beginner
Reuse: Original
```

## 5. Kit Detail Page Structure

Recommended order:

1. Hero section
2. Metadata row
3. Use when / Do not use when
4. Required input
5. Copy-ready kit block
6. Verification checklist
7. Exit condition
8. Tool-specific versions
9. Source and license note
10. Related kits
11. Support callout

## 6. Visual Tone

VibeKit should feel like a modern builder toolkit.

Recommended visual direction:

- Clean cards
- Rounded corners
- Soft gradients
- Friendly badges
- Clear copy buttons
- Minimal but warm design

Avoid:

- Enterprise dashboard heaviness
- Hacker-only dark terminal look
- Overly cute toy-like design
- Dense documentation pages

## 7. Category Naming

Use `Kit` in category names for brand consistency.

Preferred:

- Prompt Kit
- Context Kit
- Harness Kit
- Loop Kit
- Skill Kit
- Agent Kit
- Codex Kit
- RAG Kit
- Business Kit
- Writing Kit

Avoid user-facing category names like:

- Prompt Engineering Workflows
- Harness Engineering Artifacts
- Agentic Orchestration Templates

Those can appear in descriptions, not navigation.
