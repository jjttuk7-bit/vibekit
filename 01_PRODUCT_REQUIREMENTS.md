# 01. Product Requirements Document — VibeKit

## 1. Product Summary

VibeKit is a searchable website that provides copy-ready AI kits. Each kit helps users execute a specific AI-powered task such as building prompts, preparing context, running coding agents, improving documents, validating ideas, or creating reusable agent skills.

## 2. Primary User Stories

### User Story 1: Browse Kits

As a user, I want to browse AI kits by category so that I can quickly find a kit for my task.

Acceptance criteria:

- User can see categories on the home page
- User can filter by category
- User can see kit title, description, tags, and difficulty

### User Story 2: Search Kits

As a user, I want to search by keywords such as `Codex`, `RAG`, `document`, `loop`, or `skill`.

Acceptance criteria:

- Search results update quickly
- Results match title, description, tags, and use cases
- Empty state shows friendly suggestions

### User Story 3: Copy a Kit

As a user, I want to copy the main prompt or instruction block with one click.

Acceptance criteria:

- Each kit detail page has a copy button
- Copy button gives success feedback
- Code/prompt blocks are readable on mobile and desktop

### User Story 4: Check Source and License

As a user, I want to know whether a kit is original, adapted, attribution-required, or reference-only.

Acceptance criteria:

- Each kit has a reuse badge
- Each kit has source attribution if applicable
- License notes are visible but not overwhelming

### User Story 5: Support the Project

As a user, I want to support the creator if the kit saved me time.

Acceptance criteria:

- Header or footer includes Buy Me a Coffee link
- Kit detail pages may show a small support callout
- Support UI should not block usage

## 3. Functional Requirements

### 3.1 Home Page

Must include:

- Hero section
- Primary tagline
- Category cards
- Featured kits
- How it works section
- Source/license safety section
- Buy Me a Coffee support block

Hero copy:

```text
VibeKit
Everything you need to vibe with AI, copy-ready.
```

Subcopy:

```text
Practical AI kits for prompts, context, loops, agents, and skills — curated from high-signal open-source patterns and rewritten for real-world use.
```

### 3.2 Kit Browse Page

Route: `/kits`

Must include:

- Search bar
- Category filter
- Difficulty filter
- Tool filter
- Reuse status filter
- Kit card grid

### 3.3 Kit Detail Page

Route: `/kits/[slug]`

Must include:

- Title
- One-line description
- Category
- Best for
- Difficulty
- Use when
- Do not use when
- Required input
- Copy-ready kit block
- Verification checklist
- Exit condition
- Tool versions if available
- Source inspiration
- License/reuse status
- Related kits

### 3.4 Source Page

Route: `/sources`

Must include:

- Source repository list
- Repository name
- URL
- License
- Stars if manually provided
- Related kits
- Reuse note

### 3.5 About Page

Route: `/about`

Must explain:

- What VibeKit is
- What it is not
- Why not copy source material directly
- How kits are created
- How attribution works
- How users can support the project

### 3.6 Submit Page

Route: `/submit`

For MVP, this can be a static page with instructions:

- Suggest a GitHub repo
- Suggest a kit idea
- Report license issue
- Contact email or GitHub issue link placeholder

## 4. Non-Functional Requirements

- Fast static site generation preferred
- Mobile responsive
- Accessible color contrast
- No login required
- Content should be easy to update
- Build must pass with `npm run build`
- Lint must pass if lint script exists

## 5. Content Requirements

Each kit must include:

- Unique slug
- Title
- Category
- Description
- Difficulty
- Tools
- Tags
- Use case
- Copy block
- Verification
- Exit condition
- Reuse status
- Source attribution if needed

## 6. Out of Scope for MVP

Do not build:

- Auth
- Database admin panel
- Payment system
- AI-powered kit generator
- GitHub API crawler
- User profile
- Comments

## 7. Quality Bar

The product should feel useful even with only 30 kits.

A kit is considered good when:

- It solves one clear task
- It is copy-ready
- It has a concrete verification method
- It avoids vague advice
- It does not depend on unlicensed copied text
