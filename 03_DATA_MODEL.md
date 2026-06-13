# 03. Data Model — VibeKit

## 1. Core Concept

The main content object is a `Kit`.

A kit is a reusable, copy-ready AI execution pattern. It may include prompts, context instructions, loop rules, verification checklists, exit conditions, and tool-specific versions.

## 2. TypeScript Types

```ts
export type KitCategory =
  | 'prompt-kit'
  | 'context-kit'
  | 'harness-kit'
  | 'loop-kit'
  | 'skill-kit'
  | 'agent-kit'
  | 'codex-kit'
  | 'rag-kit'
  | 'business-kit'
  | 'writing-kit';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type ReuseStatus =
  | 'original'
  | 'adapted-with-attribution'
  | 'reference-only'
  | 'do-not-copy-directly';

export type ToolName =
  | 'ChatGPT'
  | 'Claude'
  | 'Claude Code'
  | 'Codex'
  | 'Cursor'
  | 'Gemini'
  | 'LangGraph'
  | 'Generic LLM';

export interface SourceRef {
  title: string;
  url: string;
  author?: string;
  license?: string;
  note: string;
}

export interface ToolVersion {
  tool: ToolName;
  instruction: string;
}

export interface Kit {
  slug: string;
  title: string;
  description: string;
  category: KitCategory;
  difficulty: Difficulty;
  tools: ToolName[];
  tags: string[];
  featured?: boolean;

  useWhen: string[];
  doNotUseWhen: string[];
  requiredInputs: string[];

  copyBlockTitle: string;
  copyBlock: string;

  steps: string[];
  verificationChecklist: string[];
  exitCondition: string[];
  outputFormat?: string[];

  toolVersions?: ToolVersion[];

  reuseStatus: ReuseStatus;
  sourceRefs?: SourceRef[];
  attributionText?: string;

  relatedKits?: string[];
  createdAt?: string;
  updatedAt?: string;
}
```

## 3. Example Kit JSON

```json
{
  "slug": "context-pack-builder",
  "title": "Context Pack Builder",
  "description": "Turn messy project information into a reusable AI context pack.",
  "category": "context-kit",
  "difficulty": "beginner",
  "tools": ["ChatGPT", "Claude", "Codex", "Generic LLM"],
  "tags": ["context", "project setup", "prompting", "memory"],
  "featured": true,
  "useWhen": [
    "You are starting a new AI-assisted task",
    "The AI keeps giving generic answers",
    "You need reusable context for a project"
  ],
  "doNotUseWhen": [
    "The task is very small and needs no background",
    "You already have a complete project brief"
  ],
  "requiredInputs": [
    "Project goal",
    "Target user",
    "Constraints",
    "Available files or materials",
    "Desired output format"
  ],
  "copyBlockTitle": "Copy this prompt",
  "copyBlock": "Act as an AI context architect...",
  "steps": [
    "Collect project facts",
    "Separate assumptions from facts",
    "Define success criteria",
    "Create reusable context pack",
    "Use the context pack for the task"
  ],
  "verificationChecklist": [
    "The goal is specific",
    "Constraints are listed",
    "Output format is clear",
    "The AI has enough examples or references"
  ],
  "exitCondition": [
    "Stop when the context pack can be reused without additional explanation"
  ],
  "reuseStatus": "original",
  "sourceRefs": [],
  "relatedKits": ["before-coding-context", "project-memory-builder"]
}
```

## 4. Source Model

```ts
export interface Source {
  slug: string;
  title: string;
  url: string;
  author?: string;
  platform: 'GitHub' | 'Website' | 'Paper' | 'Other';
  license?: string;
  stars?: number;
  summary: string;
  reuseStatus: ReuseStatus;
  relatedKits: string[];
}
```

## 5. File Structure Recommendation

```text
/src
  /app
    /kits
    /sources
    /about
    /submit
  /components
    KitCard.tsx
    KitDetail.tsx
    CopyBlock.tsx
    Badge.tsx
    SearchAndFilter.tsx
  /content
    kits.ts
    sources.ts
  /lib
    filters.ts
    categories.ts
    copy.ts
```

## 6. Search Fields

Search should include:

- title
- description
- tags
- category
- tools
- useWhen

## 7. Badge Labels

Category labels:

```ts
const categoryLabels = {
  'prompt-kit': 'Prompt Kit',
  'context-kit': 'Context Kit',
  'harness-kit': 'Harness Kit',
  'loop-kit': 'Loop Kit',
  'skill-kit': 'Skill Kit',
  'agent-kit': 'Agent Kit',
  'codex-kit': 'Codex Kit',
  'rag-kit': 'RAG Kit',
  'business-kit': 'Business Kit',
  'writing-kit': 'Writing Kit'
};
```

Reuse labels:

```ts
const reuseLabels = {
  'original': 'Original',
  'adapted-with-attribution': 'Adapted with attribution',
  'reference-only': 'Reference only',
  'do-not-copy-directly': 'Do not copy directly'
};
```
