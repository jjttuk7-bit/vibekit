# 08. VibeKit MVP Execution Plan

## Goal

Launch a simple, polished VibeKit MVP in 7 days.

The MVP should let users browse, search, open, and copy AI kits.

## Day 1 — Project Setup

Tasks:

- Create Next.js App Router project
- Add TypeScript and Tailwind
- Add project structure
- Add `AGENTS.md`
- Build home page skeleton

Deliverable:

- Running local app
- Home page visible
- Build passes

Codex prompt:

Use Prompt 0 from `05_CODEX_BUILD_PROMPTS.md`.

## Day 2 — Data Model and Content

Tasks:

- Create Kit TypeScript types
- Add 30 initial kits
- Add categories and labels
- Add sample sources

Deliverable:

- Static kit data available
- TypeScript validates content

Codex prompt:

Use Prompt 1.

## Day 3 — Browse and Filter

Tasks:

- Build `/kits`
- Add search
- Add filters
- Add responsive card grid
- Add empty state

Deliverable:

- Users can browse and search kits

Codex prompt:

Use Prompt 2.

## Day 4 — Kit Detail Pages

Tasks:

- Build `/kits/[slug]`
- Add copy button
- Add metadata sections
- Add verification checklist
- Add related kits

Deliverable:

- Every kit has a detail page
- Copy function works

Codex prompt:

Use Prompt 3 and Prompt 4.

## Day 5 — Sources, About, Submit

Tasks:

- Build `/sources`
- Build `/about`
- Build `/submit`
- Add license policy copy
- Add support callouts

Deliverable:

- Site explains source and license handling
- Users can understand VibeKit’s safety policy

Codex prompt:

Use Prompt 5 and Prompt 6.

## Day 6 — Polish and SEO

Tasks:

- Add metadata
- Improve responsive design
- Improve card UI
- Add footer
- Add Buy Me a Coffee link placeholder
- Check mobile layout

Deliverable:

- MVP feels launchable

Codex prompt:

Use Prompt 7.

## Day 7 — QA and Launch

Tasks:

- Run build
- Fix broken links
- Check related kit slugs
- Check copy buttons
- Check empty states
- Deploy to Vercel

Deliverable:

- Public MVP link

Codex prompt:

Use Prompt 8.

## MVP Launch Checklist

- [ ] Home page explains VibeKit in 5 seconds
- [ ] `/kits` page works
- [ ] Search works
- [ ] Filters work
- [ ] Kit detail pages work
- [ ] Copy button works
- [ ] Source attribution visible
- [ ] License policy visible
- [ ] Buy Me a Coffee link included
- [ ] Mobile layout acceptable
- [ ] `npm run build` passes
- [ ] Deployed to Vercel

## Post-Launch Week 1

After launch:

- Add 20 more kits
- Share 5 kits on social media
- Ask users which kits they want next
- Add GitHub issue link for submissions
- Create downloadable VibeKit starter pack

## First Paid/Support Experiment

Do not start with subscriptions.

Start with:

- Buy Me a Coffee
- Downloadable advanced kit pack
- Codex Kit Pack
- Claude Code Kit Pack
- RAG Kit Pack

Potential product:

```text
VibeKit Codex Pack
20 copy-ready prompts for building, fixing, testing, and shipping with Codex.
```
