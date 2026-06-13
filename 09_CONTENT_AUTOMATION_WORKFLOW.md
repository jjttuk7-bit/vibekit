# VibeKit Content Automation Workflow

This workflow keeps VibeKit useful without turning it into a pile of copied prompts.
Automation can help find candidates and draft kit shells, but a human should approve
source reuse, wording, and publication.

## Goal

Create a repeatable content loop for turning public AI builder patterns into
copy-ready VibeKit kits with attribution, license notes, and clear reuse status.

## Weekly Loop

1. Find source candidates
   - Search public docs, open-source repositories, blog posts, and issue threads.
   - Prefer official docs, clearly licensed repositories, and practical examples.
   - Avoid leaked prompts, proprietary prompts, private content, and unclear-rights material.

2. Triage reuse risk
   - Capture source URL, publisher, visible license, and last checked date.
   - Classify reuse status:
     - `original`
     - `adapted_with_attribution`
     - `reference_only`
     - `do_not_copy_directly`
   - If no license is visible, default to `reference_only` or `do_not_copy_directly`.

3. Draft kit candidate
   - Rewrite in original VibeKit wording.
   - Extract the transferable workflow, not source text.
   - Include required context, workflow steps, copy block, verification checklist,
     exit condition, expected output, and source references.

4. Review quality
   - Check that the copy block is directly runnable.
   - Confirm the kit helps a specific builder task.
   - Remove vague hype, enterprise jargon, and unverified claims.
   - Verify source notes and license notes are visible.

5. Publish
   - Add approved kit data to `src/data/kits.ts`.
   - Run `npm run typecheck`, `npm run lint`, and `npm run build`.
   - Commit with a message like `Add curated kit: <kit title>`.
   - Push to `main` and verify the Vercel deployment.

## Automation Prompt

Use this as the starting prompt for a recurring Codex or manual research pass:

```text
Find 5 public source candidates for VibeKit.

Focus areas:
- Codex workflows
- context engineering
- RAG workflows
- AI workflow QA
- reusable agent skills

For each candidate, return:
- title
- source URL
- publisher or repository owner
- visible license or terms signal
- why it is useful for builders
- suggested VibeKit category
- recommended reuse status
- risk notes

Rules:
- Do not copy source text.
- Do not include leaked, proprietary, or unclear-rights prompts.
- Prefer official documentation and clearly licensed repositories.
- Mark missing or unclear licenses as reference-only or do-not-copy-directly.
```

## Review Checklist

- Source URL is reachable.
- License or terms signal is recorded.
- Kit wording is original.
- Source-inspired material is attributed.
- Reuse status is accurate enough for publication.
- Copy block can be pasted into a real AI tool.
- Verification checklist and exit condition are clear.

## Suggested Cadence

- Weekly: source candidate discovery.
- Weekly: review and approve 1-3 kits.
- Monthly: prune weak kits, improve top kits, and check broken source links.

## Human Gate

Do not publish a source-inspired kit automatically. A human reviewer should approve
the source notes, license note, reuse status, and final copy block before merge.
