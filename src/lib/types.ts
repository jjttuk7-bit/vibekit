export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ReuseStatus =
  | "original"
  | "adapted_with_attribution"
  | "reference_only"
  | "do_not_copy_directly";

export type CategorySlug =
  | "prompt-kits"
  | "context-kits"
  | "harness-kits"
  | "loop-kits"
  | "skill-kits"
  | "agent-kits"
  | "codex-kits"
  | "rag-kits"
  | "business-kits"
  | "writing-kits";

export type Category = {
  name: string;
  slug: CategorySlug;
  description: string;
  icon: string;
  useCase: string;
};

export type ToolVersion = {
  tool: string;
  prompt: string;
};

export type Kit = {
  id: string;
  slug: string;
  title: string;
  category: CategorySlug;
  summary: string;
  description: string;
  difficulty: Difficulty;
  bestFor: string[];
  useWhen: string[];
  doNotUseWhen: string[];
  requiredContext: string[];
  workflowSteps: string[];
  copyPastePrompt: string;
  verificationChecklist: string[];
  exitCondition: string;
  expectedOutput: string;
  toolVersions: ToolVersion[];
  tags: string[];
  sourceInspiration: string;
  licenseNote: string;
  reuseStatus: ReuseStatus;
  featured?: boolean;
};
