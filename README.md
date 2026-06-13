# VibeKit

Everything you need to vibe with AI, copy-ready.

VibeKit is a lightweight library of copy-ready AI kits for prompts, context,
loops, agents, Codex workflows, RAG workflows, business workflows, and writing
workflows.

Live site: https://vibekit-seven.vercel.app/

## What It Does

VibeKit helps builders discover a practical AI workflow, open the kit, copy the
prompt or checklist, and run it directly in ChatGPT, Claude, Codex, Cursor, or
another AI tool.

The MVP includes:

- Home page with category and featured kit discovery
- Searchable kits listing page
- Kit detail pages with copy-paste prompt blocks
- Category, source policy, about, support, and submit pages
- 20 local static sample kits
- Source inspiration, license notes, and reuse status on kit pages
- GitHub Issue Form for kit submissions

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local static content
- Vercel hosting

No database, authentication, or paid subscription logic is required for the MVP.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Project Structure

```text
src/
  app/
    kits/
    categories/
    sources/
    about/
    support/
    submit/
  components/
  data/
  lib/
```

Key files:

- `src/data/kits.ts` — local kit data
- `src/data/categories.ts` — category definitions
- `src/lib/types.ts` — TypeScript content model
- `src/components/CopyBlock.tsx` — copy button and prompt block
- `.github/ISSUE_TEMPLATE/kit_submission.yml` — kit submission form
- `09_CONTENT_AUTOMATION_WORKFLOW.md` — content curation workflow

## Content Model

Every kit should include:

- slug
- title
- category
- summary and description
- difficulty
- best for
- use when
- do not use when
- required context
- workflow steps
- copy-paste prompt
- verification checklist
- exit condition
- expected output
- tool-specific versions
- tags
- source inspiration
- license note
- reuse status

Supported reuse status values:

- `original`
- `adapted_with_attribution`
- `reference_only`
- `do_not_copy_directly`

## Source Policy

VibeKit can be inspired by public AI workflows, official documentation, and
open-source projects, but it should not copy external source text directly.

Source-inspired kits should:

- Use original VibeKit wording
- Link to source references
- Include license or terms notes when known
- Mark reuse status clearly
- Avoid leaked, proprietary, or unclear-rights prompt text

If a source has no visible license, treat it as reference-only or do-not-copy
until a human reviewer decides otherwise.

## Contributing A Kit

Use the Submit page on the live site:

https://vibekit-seven.vercel.app/submit

Or open a GitHub issue with the kit submission template:

https://github.com/jjttuk7-bit/vibekit/issues/new?template=kit_submission.yml

Good submissions are practical, original, copy-ready, and clear about source
inspiration.

## Deployment

The app is designed for Vercel.

Recommended settings:

- Framework: Next.js
- Build command: `npm run build`
- Output directory: default

Pushes to `main` can be deployed automatically through Vercel's GitHub
integration.
