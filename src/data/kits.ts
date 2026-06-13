import type { CategorySlug, Difficulty, Kit, ReuseStatus } from "@/lib/types";

type KitSeed = Omit<
  Kit,
  | "id"
  | "copyPastePrompt"
  | "verificationChecklist"
  | "exitCondition"
  | "expectedOutput"
  | "toolVersions"
  | "sourceInspiration"
  | "sourceReferences"
  | "licenseNote"
  | "reuseStatus"
> & {
  promptFocus: string;
  expectedOutput?: string;
  reuseStatus?: ReuseStatus;
  sourceInspiration?: string;
  sourceReferences?: Kit["sourceReferences"];
  licenseNote?: string;
};

function buildPrompt(title: string, focus: string, steps: string[]) {
  return `You are helping me run the ${title}.

Goal:
${focus}

Context I will provide:
- Objective:
- Audience or user:
- Constraints:
- Existing draft, repo, source, or notes:
- Definition of done:

Workflow:
${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

Rules:
- Ask for missing context before making strong assumptions.
- Keep recommendations practical and copy-ready.
- Separate facts, assumptions, and recommendations.
- End with a short verification checklist and a clear exit condition.`;
}

function makeKit(index: number, seed: KitSeed): Kit {
  const verificationChecklist = [
    "Inputs are explicit enough for another builder to run the kit.",
    "Output is specific, actionable, and avoids vague AI hype.",
    "Risks, assumptions, and missing context are called out.",
    "The final result can be copied into the target tool or workflow.",
  ];

  return {
    ...seed,
    id: `kit-${String(index).padStart(2, "0")}`,
    copyPastePrompt: buildPrompt(seed.title, seed.promptFocus, seed.workflowSteps),
    verificationChecklist,
    exitCondition:
      "Stop when the output is ready to use without another planning pass.",
    expectedOutput:
      seed.expectedOutput ??
      "A concise, copy-ready artifact with decisions, next steps, and checks.",
    toolVersions: [
      {
        tool: "ChatGPT / Claude",
        prompt:
          "Paste the main kit block, then add your goal, audience, and constraints.",
      },
      {
        tool: "Codex / Cursor",
        prompt:
          "Paste the kit block with repository context, target files, and verification commands.",
      },
    ],
    sourceInspiration:
      seed.sourceInspiration ??
      "Original VibeKit pattern inspired by common public builder workflows and open-source practice.",
    sourceReferences: seed.sourceReferences,
    licenseNote:
      seed.licenseNote ??
      "Original VibeKit wording. If you adapt this from a specific repository or article, add attribution and license notes before publishing.",
    reuseStatus: seed.reuseStatus ?? "original",
  };
}

const seeds: KitSeed[] = [
  {
    slug: "idea-to-product-kit",
    title: "Idea to Product Kit",
    category: "prompt-kits",
    summary: "Turn a rough idea into a scoped product concept with first actions.",
    description:
      "A practical ideation kit for shaping an idea into users, value, scope, risks, and a buildable first version.",
    difficulty: "Beginner",
    bestFor: ["Founders", "Indie builders", "Product-minded teams"],
    useWhen: ["You have an idea but no clear MVP", "You need a buildable first slice"],
    doNotUseWhen: ["You already have validated requirements", "You need financial modeling"],
    requiredContext: ["Idea", "Target user", "Constraints", "Success signal"],
    workflowSteps: [
      "Restate the idea in one sentence.",
      "Identify the target user and painful moment.",
      "Define the smallest useful version.",
      "List risks, open questions, and first experiments.",
    ],
    promptFocus: "Turn my rough idea into a practical MVP concept I can build or test.",
    expectedOutput: "A product brief with audience, MVP scope, risks, and next experiments.",
    tags: ["product", "mvp", "ideation"],
    featured: true,
  },
  {
    slug: "context-pack-builder-kit",
    title: "Context Pack Builder Kit",
    category: "context-kits",
    summary: "Package goals, constraints, examples, and success criteria for AI work.",
    description:
      "Build a reusable context pack that gives an AI assistant enough background to work with fewer restarts.",
    difficulty: "Beginner",
    bestFor: ["Codex users", "Writers", "Operators"],
    useWhen: ["A task keeps losing context", "You want reusable assistant instructions"],
    doNotUseWhen: ["The task is a one-line answer", "Sensitive data cannot be shared"],
    requiredContext: ["Project goal", "Audience", "Constraints", "Examples", "Anti-examples"],
    workflowSteps: [
      "Inventory the context the AI needs.",
      "Separate durable facts from task-specific details.",
      "Add examples, non-goals, and acceptance checks.",
      "Compress into a reusable context pack.",
    ],
    promptFocus: "Create a compact context pack for repeated AI-assisted work.",
    sourceInspiration:
      "Adapted from OpenAI prompt-engineering guidance about giving models relevant context, constraints, examples, and success criteria.",
    sourceReferences: [
      {
        title: "Prompt engineering",
        url: "https://developers.openai.com/api/docs/guides/prompt-engineering",
        publisher: "OpenAI",
        license: "OpenAI documentation terms; reference only for this kit.",
        note: "Used to ground the kit's emphasis on clear context, constraints, examples, and output expectations.",
      },
    ],
    licenseNote:
      "Original VibeKit wording adapted from public OpenAI prompt-engineering concepts. Do not copy OpenAI docs text or examples directly.",
    reuseStatus: "adapted_with_attribution",
    tags: ["context", "instructions", "reuse"],
    featured: true,
  },
  {
    slug: "codex-fix-until-green-kit",
    title: "Codex Fix Until Green Kit",
    category: "codex-kits",
    summary: "Guide a coding agent through failing checks until tests pass.",
    description:
      "A coding workflow for reading failures, making focused fixes, and rerunning checks until the repo is green.",
    difficulty: "Intermediate",
    bestFor: ["Codex", "Claude Code", "Cursor"],
    useWhen: ["Tests or builds fail", "You need a disciplined fix loop"],
    doNotUseWhen: ["Failures are unrelated to your change", "You cannot run verification commands"],
    requiredContext: ["Failure output", "Relevant files", "Allowed commands", "Expected behavior"],
    workflowSteps: [
      "Read the failure before editing.",
      "Trace the likely cause to the smallest code area.",
      "Make one focused fix.",
      "Rerun the failing check and repeat until green.",
    ],
    promptFocus: "Fix the current repo issue with a tight test-driven loop.",
    expectedOutput: "Passing checks plus a short summary of cause, fix, and verification.",
    sourceInspiration:
      "Adapted from OpenAI Codex concepts around repository instructions, agent context, tool use, and prompt guidance that emphasizes testing and validation for coding tasks.",
    sourceReferences: [
      {
        title: "Codex glossary",
        url: "https://developers.openai.com/codex/glossary",
        publisher: "OpenAI",
        license: "OpenAI documentation terms; reference only for this kit.",
        note: "Used to ground Codex concepts such as AGENTS.md, agent context, sandboxing, and verification-oriented coding work.",
      },
      {
        title: "Prompt engineering: coding guidance",
        url: "https://developers.openai.com/api/docs/guides/prompt-engineering",
        publisher: "OpenAI",
        license: "OpenAI documentation terms; reference only for this kit.",
        note: "Used to ground the kit's emphasis on explicit coding workflow, test commands, and validation.",
      },
    ],
    licenseNote:
      "Original VibeKit wording adapted from public OpenAI Codex and prompt-engineering concepts. Source links are attribution references, not copied prompt text.",
    reuseStatus: "adapted_with_attribution",
    tags: ["codex", "testing", "debugging"],
    featured: true,
  },
  {
    slug: "document-quality-loop-kit",
    title: "Document Quality Loop Kit",
    category: "loop-kits",
    summary: "Improve a document until it is clear, complete, and ready to ship.",
    description:
      "A review loop for memos, specs, docs, and proposals that need clarity and strong reader fit.",
    difficulty: "Beginner",
    bestFor: ["Docs", "Specs", "Internal comms"],
    useWhen: ["A draft feels messy", "You need a repeatable editorial pass"],
    doNotUseWhen: ["You need legal approval", "The facts are not verified"],
    requiredContext: ["Draft", "Audience", "Purpose", "Known concerns"],
    workflowSteps: [
      "State the document job and reader need.",
      "Find gaps, ambiguity, and unnecessary sections.",
      "Revise for structure and plain language.",
      "Run a final reader-focused checklist.",
    ],
    promptFocus: "Improve this document through a clear quality loop.",
    tags: ["writing", "docs", "review"],
  },
  {
    slug: "repeated-task-to-ai-skill-kit",
    title: "Repeated Task to AI Skill Kit",
    category: "skill-kits",
    summary: "Turn a task you repeat into reusable AI skill instructions.",
    description:
      "Capture triggers, steps, resources, and verification for a repeatable AI skill.",
    difficulty: "Intermediate",
    bestFor: ["Teams", "Creators", "Operators"],
    useWhen: ["You repeat the same AI workflow", "You want fewer custom prompts"],
    doNotUseWhen: ["The process changes every time", "The task has no quality checks"],
    requiredContext: ["Task trigger", "Inputs", "Process", "Examples", "Quality bar"],
    workflowSteps: [
      "Describe when the skill should trigger.",
      "Break the task into repeatable steps.",
      "Define required inputs and optional references.",
      "Add verification and failure handling.",
    ],
    promptFocus: "Convert this repeated task into reusable AI skill instructions.",
    tags: ["skills", "operations", "reuse"],
    featured: true,
  },
  {
    slug: "rag-source-summary-kit",
    title: "RAG Source Summary Kit",
    category: "rag-kits",
    summary: "Summarize sources for retrieval without losing attribution.",
    description:
      "Create grounded source cards for RAG systems, research notes, and answer generation.",
    difficulty: "Intermediate",
    bestFor: ["RAG builders", "Researchers", "Docs teams"],
    useWhen: ["You need source-aware summaries", "You are preparing documents for retrieval"],
    doNotUseWhen: ["The source license is unclear", "You need verbatim extraction"],
    requiredContext: ["Source title", "URL or citation", "Key excerpts", "Use case"],
    workflowSteps: [
      "Identify the source purpose and trust level.",
      "Summarize claims in original wording.",
      "Extract entities, terms, and retrieval keywords.",
      "Add citation and reuse notes.",
    ],
    promptFocus: "Turn a source into a grounded summary card for retrieval and reuse.",
    tags: ["rag", "sources", "attribution"],
    sourceInspiration:
      "Adapted from OpenAI documentation patterns for including relevant context and retrieval-augmented generation. VibeKit rewrites the workflow as a source-summary kit with attribution and reuse notes.",
    sourceReferences: [
      {
        title: "Prompt engineering: include relevant context information",
        url: "https://developers.openai.com/api/docs/guides/prompt-engineering#include-relevant-context-information",
        publisher: "OpenAI",
        license: "OpenAI documentation terms; reference only for this kit.",
        note: "Used as conceptual grounding for adding trusted source context and constraining model responses to selected resources.",
      },
    ],
    licenseNote:
      "Original VibeKit wording adapted from public OpenAI documentation concepts. Do not copy OpenAI examples or docs text directly; link to the source when publishing derivative guidance.",
    reuseStatus: "adapted_with_attribution",
  },
  {
    slug: "business-idea-validation-kit",
    title: "Business Idea Validation Kit",
    category: "business-kits",
    summary: "Test whether a business idea has a buyer, pain, and reachable path.",
    description:
      "A lightweight validation workflow for offers, audiences, evidence, and next experiments.",
    difficulty: "Beginner",
    bestFor: ["Founders", "Creators", "Consultants"],
    useWhen: ["You need evidence before building", "You want sharper customer assumptions"],
    doNotUseWhen: ["You need legal or financial advice", "You already have customer interviews"],
    requiredContext: ["Idea", "Customer segment", "Current evidence", "Constraints"],
    workflowSteps: [
      "Name the buyer and urgent pain.",
      "Score current evidence honestly.",
      "Define the riskiest assumption.",
      "Create three validation experiments.",
    ],
    promptFocus: "Validate this business idea with practical evidence and next tests.",
    tags: ["business", "validation", "customers"],
    featured: true,
  },
  {
    slug: "marketing-angle-generator-kit",
    title: "Marketing Angle Generator Kit",
    category: "business-kits",
    summary: "Generate grounded marketing angles from customers, pains, and proof.",
    description:
      "Create useful positioning angles without drifting into vague claims or hype.",
    difficulty: "Beginner",
    bestFor: ["Landing pages", "Launch posts", "Ads"],
    useWhen: ["You need message options", "You have customer pains and proof points"],
    doNotUseWhen: ["You have no evidence", "Regulated claims need review"],
    requiredContext: ["Product", "Audience", "Pain points", "Proof", "Tone"],
    workflowSteps: [
      "Restate the customer and painful moment.",
      "Generate distinct angle families.",
      "Write sample headlines and supporting lines.",
      "Rank angles by clarity, believability, and fit.",
    ],
    promptFocus: "Generate credible marketing angles from real customer context.",
    tags: ["marketing", "copy", "positioning"],
  },
  {
    slug: "prompt-refiner-kit",
    title: "Prompt Refiner Kit",
    category: "prompt-kits",
    summary: "Improve a prompt by tightening role, context, constraints, and output.",
    description:
      "A quick refinement pass for prompts that are too broad, vague, or hard to verify.",
    difficulty: "Beginner",
    bestFor: ["Prompt writers", "AI builders", "Teams"],
    useWhen: ["A prompt gives uneven output", "You want a reusable version"],
    doNotUseWhen: ["The task itself is undefined", "You need tool integration"],
    requiredContext: ["Current prompt", "Bad outputs", "Desired output", "Constraints"],
    workflowSteps: [
      "Diagnose missing role, context, constraints, and format.",
      "Rewrite the prompt with explicit inputs.",
      "Add examples or checks where useful.",
      "Explain what changed and why.",
    ],
    promptFocus: "Refine this prompt so it produces consistent, useful results.",
    tags: ["prompt", "quality", "templates"],
  },
  {
    slug: "research-until-confidence-kit",
    title: "Research Until Confidence Kit",
    category: "loop-kits",
    summary: "Research a question until evidence reaches a stated confidence level.",
    description:
      "A research loop that tracks claims, source quality, unknowns, and stopping criteria.",
    difficulty: "Intermediate",
    bestFor: ["Market research", "Technical research", "Decision support"],
    useWhen: ["You need an evidence-backed answer", "Confidence matters more than speed"],
    doNotUseWhen: ["You cannot inspect sources", "The topic requires expert advice"],
    requiredContext: ["Research question", "Decision to support", "Source constraints", "Deadline"],
    workflowSteps: [
      "Break the question into claims.",
      "Collect and rate sources.",
      "Track agreement, disagreement, and gaps.",
      "Stop at the requested confidence threshold.",
    ],
    promptFocus: "Research this question until the answer reaches a useful confidence level.",
    tags: ["research", "sources", "confidence"],
  },
  {
    slug: "claude-code-project-setup-kit",
    title: "Claude Code Project Setup Kit",
    category: "codex-kits",
    summary: "Prepare a repo for an AI coding assistant with context and commands.",
    description:
      "A setup checklist for coding assistants that need repo orientation, commands, and boundaries.",
    difficulty: "Intermediate",
    bestFor: ["Claude Code", "Codex", "Cursor"],
    useWhen: ["Starting AI-assisted work in a repo", "You need reliable project context"],
    doNotUseWhen: ["The repo cannot be inspected", "Commands are unknown and risky"],
    requiredContext: ["Repo purpose", "Stack", "Commands", "Coding rules", "Known risks"],
    workflowSteps: [
      "Map the repo structure and main workflows.",
      "Document commands for install, dev, build, lint, and test.",
      "Capture coding style and safety rules.",
      "Create a concise assistant context file.",
    ],
    promptFocus: "Prepare this project for reliable AI coding assistant work.",
    tags: ["codex", "setup", "repo"],
  },
  {
    slug: "cursor-refactor-kit",
    title: "Cursor Refactor Kit",
    category: "codex-kits",
    summary: "Plan and execute a small refactor with checks at each step.",
    description:
      "A controlled refactor workflow for Cursor, Codex, or any coding assistant.",
    difficulty: "Advanced",
    bestFor: ["Refactors", "Component cleanup", "Type cleanup"],
    useWhen: ["Behavior should stay the same", "You can run tests after edits"],
    doNotUseWhen: ["You are changing product behavior", "No verification exists"],
    requiredContext: ["Target files", "Reason for refactor", "Invariant behavior", "Checks"],
    workflowSteps: [
      "Define the behavior that must not change.",
      "Find references and dependencies.",
      "Make the smallest coherent refactor.",
      "Run checks and summarize residual risk.",
    ],
    promptFocus: "Refactor this code safely while preserving behavior.",
    tags: ["cursor", "refactor", "testing"],
  },
  {
    slug: "agent-skill-builder-kit",
    title: "Agent Skill Builder Kit",
    category: "agent-kits",
    summary: "Design an agent skill with trigger, tools, steps, and boundaries.",
    description:
      "A focused agent design kit for turning a workflow into a useful, bounded capability.",
    difficulty: "Advanced",
    bestFor: ["Agent builders", "Tool designers", "Automation workflows"],
    useWhen: ["An agent needs a repeatable capability", "You need clear tool boundaries"],
    doNotUseWhen: ["The task is one-off", "The agent cannot verify its output"],
    requiredContext: ["Trigger", "Allowed tools", "Inputs", "Workflow", "Failure modes"],
    workflowSteps: [
      "Define the skill trigger and non-trigger cases.",
      "List required inputs and tools.",
      "Write the step-by-step operating procedure.",
      "Add verification, escalation, and stop rules.",
    ],
    promptFocus: "Design a bounded, reusable skill for an AI agent.",
    tags: ["agents", "skills", "automation"],
  },
  {
    slug: "legal-document-review-support-kit",
    title: "Legal Document Review Support Kit",
    category: "writing-kits",
    summary: "Organize legal-document questions for human review without giving legal advice.",
    description:
      "A support workflow that flags clauses, questions, and plain-English summaries while keeping attorney review central.",
    difficulty: "Intermediate",
    bestFor: ["Contract prep", "Policy review", "Attorney handoff"],
    useWhen: ["You need to prepare questions for a lawyer", "You want a plain-language issue list"],
    doNotUseWhen: ["You need legal advice", "You plan to rely on AI as counsel"],
    requiredContext: ["Document text", "Jurisdiction if known", "Concern areas", "Reviewer role"],
    workflowSteps: [
      "Summarize the document purpose without advice.",
      "Flag unclear, risky, or negotiable sections.",
      "Draft questions for qualified counsel.",
      "Separate plain-language notes from legal conclusions.",
    ],
    promptFocus: "Review this legal document only as preparation for qualified human review.",
    tags: ["legal", "review", "writing"],
  },
  {
    slug: "youtube-script-improvement-kit",
    title: "YouTube Script Improvement Kit",
    category: "writing-kits",
    summary: "Improve a script for hook, flow, clarity, and retention.",
    description:
      "A creator-friendly script pass for stronger openings, structure, examples, and calls to action.",
    difficulty: "Beginner",
    bestFor: ["Creators", "Educators", "Product videos"],
    useWhen: ["A script drags", "The hook or structure needs work"],
    doNotUseWhen: ["You need factual research from scratch", "The video goal is unknown"],
    requiredContext: ["Draft script", "Audience", "Video goal", "Length target", "Tone"],
    workflowSteps: [
      "Identify the viewer promise.",
      "Rewrite the hook and section flow.",
      "Cut repetition and add concrete examples.",
      "Add retention notes and a clean ending.",
    ],
    promptFocus: "Improve this YouTube script while keeping my voice and goal intact.",
    tags: ["youtube", "script", "creator"],
  },
  {
    slug: "landing-page-copy-kit",
    title: "Landing Page Copy Kit",
    category: "writing-kits",
    summary: "Draft landing page copy from audience, pain, offer, and proof.",
    description:
      "A page-copy kit for concise sections, sharp CTAs, and believable proof points.",
    difficulty: "Beginner",
    bestFor: ["Launch pages", "Product pages", "Creator offers"],
    useWhen: ["You know the audience and offer", "You need a first page draft"],
    doNotUseWhen: ["You have no proof or audience", "You need regulated claims reviewed"],
    requiredContext: ["Offer", "Audience", "Pain", "Proof", "CTA"],
    workflowSteps: [
      "Clarify the page job and promise.",
      "Draft hero, benefits, proof, objections, and CTA.",
      "Make claims specific and supportable.",
      "Provide variants for headline and CTA.",
    ],
    promptFocus: "Create practical landing page copy from my offer context.",
    tags: ["landing-page", "copy", "conversion"],
  },
  {
    slug: "customer-pain-finder-kit",
    title: "Customer Pain Finder Kit",
    category: "business-kits",
    summary: "Find likely customer pains from notes, reviews, calls, or communities.",
    description:
      "A customer discovery kit for extracting pains, triggers, alternatives, and buying language.",
    difficulty: "Intermediate",
    bestFor: ["Customer discovery", "Positioning", "Product strategy"],
    useWhen: ["You have raw customer material", "You need patterns across complaints"],
    doNotUseWhen: ["You only have guesses", "You cannot cite the source of claims"],
    requiredContext: ["Customer notes", "Review excerpts", "Audience", "Product area"],
    workflowSteps: [
      "Cluster repeated pain signals.",
      "Separate symptoms from root causes.",
      "Capture exact customer-style language without overquoting.",
      "Prioritize pains by urgency and willingness to act.",
    ],
    promptFocus: "Extract customer pain patterns from the material I provide.",
    tags: ["customers", "pain", "research"],
  },
  {
    slug: "github-repo-pattern-extractor-kit",
    title: "GitHub Repo Pattern Extractor Kit",
    category: "rag-kits",
    summary: "Study a public repo for reusable patterns without copying code or text.",
    description:
      "A source-safe workflow for learning architecture, naming, and workflow ideas from public repositories.",
    difficulty: "Advanced",
    bestFor: ["Open-source research", "Architecture notes", "Pattern libraries"],
    useWhen: ["You want inspiration from a public repo", "You need attribution-aware notes"],
    doNotUseWhen: ["The license forbids reuse", "You intend to copy protected code"],
    requiredContext: ["Repo URL", "License if known", "Pattern to study", "Your project context"],
    workflowSteps: [
      "Identify license and reuse boundaries.",
      "Summarize patterns in original wording.",
      "Extract transferable ideas, not copied implementation.",
      "Add attribution and adaptation notes.",
    ],
    promptFocus: "Extract reusable patterns from a GitHub repository without copying protected content.",
    tags: ["github", "open-source", "patterns"],
    reuseStatus: "reference_only",
    sourceInspiration:
      "Inspired by open-source review workflows that separate learning from copying.",
  },
  {
    slug: "open-source-license-check-kit",
    title: "Open Source License Check Kit",
    category: "harness-kits",
    summary: "Check source inspiration for license, attribution, and reuse risk.",
    description:
      "A lightweight legal hygiene kit for documenting what can be copied, adapted, or only referenced.",
    difficulty: "Intermediate",
    bestFor: ["Content curation", "Open-source research", "Product teams"],
    useWhen: ["A kit is source-inspired", "You need clear reuse status"],
    doNotUseWhen: ["You need formal legal advice", "The source has no visible license"],
    requiredContext: ["Source URL", "License text", "Planned reuse", "Copied or adapted parts"],
    workflowSteps: [
      "Identify source, license, and owner signals.",
      "Classify planned use as original, adapted, reference-only, or do-not-copy.",
      "Write attribution and license notes.",
      "Flag issues for human review.",
    ],
    promptFocus: "Help classify open-source inspiration and write reuse notes for this kit.",
    tags: ["license", "attribution", "open-source"],
    sourceInspiration:
      "Adapted from GitHub Docs and ChooseALicense guidance about repository licensing, no-license defaults, and attribution hygiene.",
    sourceReferences: [
      {
        title: "Licensing a repository",
        url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository",
        publisher: "GitHub Docs",
        license: "GitHub documentation terms; reference only for this kit.",
        note: "Used to ground the distinction between public code visibility and open-source reuse permission.",
      },
      {
        title: "No License",
        url: "https://choosealicense.com/no-permission/",
        publisher: "ChooseALicense",
        license: "Creative Commons Attribution 3.0 Unported for site content.",
        note: "Used to ground the warning that missing licenses usually do not grant permission to use, modify, or share software.",
      },
    ],
    licenseNote:
      "Original VibeKit wording adapted from GitHub Docs and ChooseALicense concepts. This kit is not legal advice; treat unclear reuse rights as a human-review issue.",
    reuseStatus: "adapted_with_attribution",
  },
  {
    slug: "ai-workflow-qa-kit",
    title: "AI Workflow QA Kit",
    category: "harness-kits",
    summary: "Quality-check an AI workflow for inputs, outputs, risks, and finish conditions.",
    description:
      "A general QA harness for making AI workflows more reliable before reuse or publication.",
    difficulty: "Intermediate",
    bestFor: ["Prompt libraries", "Team workflows", "Published kits"],
    useWhen: ["A workflow will be reused", "You need a publication checklist"],
    doNotUseWhen: ["The workflow is experimental and intentionally loose", "No one can verify outputs"],
    requiredContext: ["Workflow draft", "Target user", "Allowed tools", "Known risks"],
    workflowSteps: [
      "Check whether inputs and output format are explicit.",
      "Find ambiguous steps and missing safeguards.",
      "Add verification and failure handling.",
      "Decide whether the workflow is ready to publish.",
    ],
    promptFocus: "QA this AI workflow so it is safe, clear, and reusable.",
    sourceInspiration:
      "Adapted from OpenAI evaluation guidance for agent workflows, graders, datasets, and repeatable quality checks.",
    sourceReferences: [
      {
        title: "Evaluate agent workflows",
        url: "https://developers.openai.com/api/docs/guides/agent-evals",
        publisher: "OpenAI",
        license: "OpenAI documentation terms; reference only for this kit.",
        note: "Used to ground the kit's focus on traces, graders, datasets, and eval runs as quality signals.",
      },
      {
        title: "Eval Driven System Design",
        url: "https://developers.openai.com/cookbook/examples/partners/eval_driven_system_design/receipt_inspection#graders",
        publisher: "OpenAI Cookbook",
        license: "OpenAI Cookbook/documentation terms; reference only for this kit.",
        note: "Used as conceptual inspiration for separating narrow checks, holistic review, and expected-output comparison.",
      },
    ],
    licenseNote:
      "Original VibeKit wording adapted from public OpenAI eval concepts. The checklist is a VibeKit QA pattern, not a copy of the source examples.",
    reuseStatus: "adapted_with_attribution",
    tags: ["qa", "workflow", "verification"],
    featured: true,
  },
];

export const kits: Kit[] = seeds.map((seed, index) => makeKit(index + 1, seed));

export const featuredKits = kits.filter((kit) => kit.featured);

export const allTags = Array.from(new Set(kits.flatMap((kit) => kit.tags))).sort();
