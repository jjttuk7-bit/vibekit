import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    name: "Prompt Kits",
    slug: "prompt-kits",
    description: "Reusable prompts for ideation, refinement, and sharper outputs.",
    icon: "✳",
    useCase: "Start faster when the task is mostly language and framing.",
  },
  {
    name: "Context Kits",
    slug: "context-kits",
    description: "Context packs that help an AI tool understand the work before it starts.",
    icon: "▣",
    useCase: "Package goals, constraints, examples, and success criteria.",
  },
  {
    name: "Harness Kits",
    slug: "harness-kits",
    description: "Lightweight checks and test harnesses for AI-assisted work.",
    icon: "◇",
    useCase: "Turn fuzzy quality into repeatable verification.",
  },
  {
    name: "Loop Kits",
    slug: "loop-kits",
    description: "Review-and-improve loops for docs, research, products, and code.",
    icon: "↻",
    useCase: "Keep improving until a clear exit condition is met.",
  },
  {
    name: "Skill Kits",
    slug: "skill-kits",
    description: "Reusable skill patterns for repeat tasks and AI assistant workflows.",
    icon: "◆",
    useCase: "Convert a process you repeat into a reusable AI skill.",
  },
  {
    name: "Agent Kits",
    slug: "agent-kits",
    description: "Focused agent workflows with inputs, checkpoints, and boundaries.",
    icon: "◎",
    useCase: "Give an AI agent a practical job and a clear finish line.",
  },
  {
    name: "Codex Kits",
    slug: "codex-kits",
    description: "Kits for coding agents, repo setup, tests, and fix-until-green loops.",
    icon: "⌘",
    useCase: "Work with Codex, Claude Code, Cursor, and similar coding tools.",
  },
  {
    name: "RAG Kits",
    slug: "rag-kits",
    description: "Patterns for source summaries, retrieval notes, and grounded answers.",
    icon: "⌁",
    useCase: "Build answers from trusted sources without copying blindly.",
  },
  {
    name: "Business Kits",
    slug: "business-kits",
    description: "Practical workflows for validation, positioning, customers, and offers.",
    icon: "$",
    useCase: "Shape business ideas with sharper evidence and decisions.",
  },
  {
    name: "Writing Kits",
    slug: "writing-kits",
    description: "Copy-ready writing workflows for scripts, pages, documents, and edits.",
    icon: "¶",
    useCase: "Improve drafts with structure, voice, and verification.",
  },
];
