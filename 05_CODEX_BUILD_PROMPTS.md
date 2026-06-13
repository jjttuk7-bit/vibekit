# 05. Codex Build Prompts — VibeKit

Use these prompts in sequence with Codex. Put `AGENTS.md` in the project root before starting.

## Prompt 0 — Project Setup

```text
You are building a new Next.js App Router project called VibeKit.

VibeKit is a copy-ready AI kit library for prompts, context packs, harnesses, loops, agents, Codex instructions, RAG patterns, and reusable AI skills.

Create the project using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static local content first
- No authentication
- No database for MVP

Create a clean project structure:
/src/app
/src/components
/src/content
/src/lib

Implement a polished home page with:
- Hero section
- Tagline: "Everything you need to vibe with AI, copy-ready."
- Browse Kits CTA
- Category cards
- Featured kits section
- How it works section
- Safety/source attribution section
- Buy Me a Coffee support callout

Run the build after implementation and fix any errors.
```

## Prompt 1 — Data Model and Sample Content

```text
Create the VibeKit content model.

Add TypeScript types for:
- Kit
- Source
- KitCategory
- Difficulty
- ReuseStatus
- ToolName

Create /src/content/kits.ts with at least 30 sample kit objects across these categories:
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

Each kit must include:
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
- relatedKits

The content can be original placeholder-quality but must be realistic and useful.
Do not use copied text from external sources.
```

## Prompt 2 — Kit Browse Page

```text
Build the /kits page for VibeKit.

Requirements:
- Search bar
- Category filter
- Difficulty filter
- Tool filter
- Reuse status filter
- Responsive kit card grid
- Empty state when no results match
- Kit cards link to /kits/[slug]

Use the local kits data from /src/content/kits.ts.
Keep the design friendly, modern, and lightweight.
Run npm run build and fix errors.
```

## Prompt 3 — Kit Detail Page

```text
Build the dynamic kit detail page at /kits/[slug].

Each detail page must show:
- Title
- Description
- Metadata badges
- Use when
- Do not use when
- Required inputs
- Copy-ready kit block with copy button
- Steps
- Verification checklist
- Exit condition
- Tool versions if available
- Source and license note
- Related kits
- Buy Me a Coffee support callout

If a slug does not exist, show a 404.
Run npm run build and fix errors.
```

## Prompt 4 — Components

```text
Refactor the VibeKit UI into reusable components:

- Header
- Footer
- KitCard
- Badge
- CopyBlock
- FilterBar
- CategoryCard
- SupportCallout
- SourceAttribution
- RelatedKits

Make sure components are typed and reusable.
Keep styling consistent.
Run build and fix errors.
```

## Prompt 5 — Sources Page

```text
Create a /sources page for VibeKit.

The page should explain that VibeKit curates open-source AI patterns but rewrites them into original kits with license-aware attribution.

Add /src/content/sources.ts with sample source objects.
Show:
- Source title
- URL
- Platform
- License
- Reuse status
- Summary
- Related kits

Do not imply that VibeKit copies unlicensed source content.
Run build and fix errors.
```

## Prompt 6 — About and Submit Pages

```text
Create /about and /submit pages.

/about should explain:
- What VibeKit is
- What VibeKit is not
- Why kits are copy-ready
- How source attribution works
- Why license safety matters
- How users can support the project

/submit should include:
- Suggest a kit idea
- Suggest a GitHub source
- Report a license issue
- Placeholder contact instructions

Keep the tone friendly and builder-oriented.
Run build and fix errors.
```

## Prompt 7 — Polish and SEO

```text
Polish VibeKit for MVP launch.

Add:
- Metadata title and description
- Open Graph metadata
- Clean favicon placeholder
- Responsive spacing
- Accessible labels
- Good empty states
- Footer links
- Buy Me a Coffee URL placeholder

SEO title:
VibeKit — Copy-ready AI kits for prompts, loops, agents, and skills

SEO description:
VibeKit is a library of copy-ready AI kits for prompts, context, harnesses, loops, Codex, RAG, agents, and reusable skills.

Run npm run build and fix all errors.
```

## Prompt 8 — QA Pass

```text
Perform a QA pass on the VibeKit codebase.

Check:
- TypeScript errors
- Broken links
- Missing slugs
- Invalid related kit references
- Empty content fields
- Copy buttons
- Mobile layout
- Accessibility labels
- Build errors

Fix issues with the smallest safe changes.
Run npm run build again.
Summarize what you changed.
```

## Prompt 9 — Content Expansion

```text
Expand the VibeKit content library.

Add 20 more useful kits with original wording.
Prioritize:
- Codex coding agent kits
- Claude Code kits
- Context engineering kits
- Loop engineering kits
- RAG evaluation kits
- Business validation kits

Each kit must be practical, copy-ready, and include verification plus exit condition.
Do not add external copied text.
Run build and fix errors.
```
