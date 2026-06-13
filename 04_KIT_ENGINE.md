# 04. VibeKit Kit Engine

## 1. Purpose

The VibeKit Kit Engine is the internal process for turning useful AI patterns from GitHub, blogs, papers, or personal experiments into original, copy-ready kits.

The goal is not to copy source material. The goal is to extract the reusable pattern, rewrite it, add verification, and package it as a practical VibeKit item.

## 2. High-Level Flow

```text
Source Discovery
↓
Source Quality Check
↓
License Check
↓
Pattern Extraction
↓
Original Kit Rewriting
↓
Verification Design
↓
Tool Version Adaptation
↓
Attribution Block
↓
Publish
```

## 3. Source Discovery

Find sources from:

- GitHub repositories
- Awesome lists
- Open-source agent examples
- Prompt engineering guides
- RAG examples
- Evaluation frameworks
- Coding agent workflows
- Personal experiments

Signals:

- High stars
- Recent activity
- Clear README
- Practical examples
- Permissive license
- Strong community use
- Useful pattern, not just hype

## 4. Source Quality Check

For each source, evaluate:

```text
Repository:
URL:
Stars:
Last updated:
License:
Main topic:
Useful pattern:
Can this be generalized?
Can it be safely reused?
Recommended status: PASS / REVIEW / SKIP
```

## 5. License Check

Reuse status rules:

- `original`: Created from scratch or based on general knowledge
- `adapted-with-attribution`: Inspired by a source with a license that allows adaptation
- `reference-only`: Useful for understanding but should not be copied
- `do-not-copy-directly`: No license, unclear source, leaked prompt, or risky content

Important rule:

If a repository has no license, do not copy text or code into VibeKit. You may use it only as reference for your own original explanation.

## 6. Pattern Extraction

Extract only the reusable pattern.

Ask:

- What problem does this source solve?
- What is the repeatable structure?
- What inputs does it need?
- What steps does it follow?
- How do we know it worked?
- When should the AI stop?
- Which tools can use it?

Do not extract:

- Original wording
- Unique branding
- Exact examples unless licensed and attributed
- Full code from source
- Leaked system prompts
- Proprietary instructions

## 7. Kit Rewriting Template

Use this structure:

```text
Title:
Description:
Category:
Best for:
Difficulty:
Use when:
Do not use when:
Required input:
Copy-ready kit:
Steps:
Verification checklist:
Exit condition:
Tool versions:
Source inspiration:
License note:
Attribution:
```

## 8. Copy-Ready Kit Principles

Every kit must be:

- Clear
- Actionable
- Copy-ready
- Original in wording
- Specific to one task
- Verifiable
- Safe to publish
- Easy to remix

Bad kit:

```text
Use AI to improve your content.
```

Good kit:

```text
Use this kit to improve a draft until every checklist item passes. The AI must identify weaknesses, rewrite only necessary sections, re-check the output, and stop when all criteria pass.
```

## 9. Verification Design

A VibeKit item should not end with vague advice. It should include a way to check quality.

Examples:

- Tests pass
- Checklist items pass
- Output matches required format
- Sources are cited
- Assumptions are separated from facts
- No unsupported claims remain
- User can copy the final artifact

## 10. Exit Condition Design

Each kit must say when to stop.

Examples:

```text
Stop when all checklist items are marked PASS.
```

```text
Stop when the build command passes and no unrelated files were changed.
```

```text
Stop when the final answer includes facts, assumptions, risks, and next actions.
```

## 11. Tool Version Adaptation

For each kit, add tool-specific notes when useful:

- ChatGPT: conversational prompt
- Claude: longer document-style prompt
- Codex: repository-aware build instruction
- Claude Code: codebase modification instruction
- Cursor: file-level editing instruction
- LangGraph: agent/node/state version

## 12. Kit Conversion Prompt

Use this prompt to convert a source into a VibeKit item:

```text
Act as the VibeKit curator.

I will provide a GitHub README, article, or source summary.
Your job is not to copy it directly.
Your job is to extract the reusable AI execution pattern and rewrite it as an original VibeKit item.

Rules:
- Do not copy the original wording.
- Do not copy code unless the license clearly allows it and attribution is included.
- Separate source summary from the new kit.
- Create a practical, copy-ready kit.
- Include verification and exit condition.
- Include reuse status and attribution note.

Input source:
[PASTE SOURCE HERE]

Output:
1. Source Summary
2. Reuse Risk
3. VibeKit Item
4. Copy-Ready Block
5. Verification Checklist
6. Exit Condition
7. Tool Versions
8. Attribution Block
```

## 13. Publish Checklist

Before publishing a kit, confirm:

- Title is clear
- Category is correct
- Copy block works independently
- Source risk is checked
- Attribution is included if needed
- No direct unlicensed copying
- Verification is specific
- Exit condition is present
- Related kits are added
