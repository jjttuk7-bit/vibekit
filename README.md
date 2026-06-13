# VibeKit — Codex Build Document Pack

이 문서 세트는 Codex/Claude Code/Cursor 같은 코딩 에이전트에게 `VibeKit` 서비스를 만들게 하기 위한 실행 문서입니다.

## Service Concept

VibeKit is a copy-ready AI kit library. It curates useful open-source AI patterns from GitHub and converts them into practical, license-aware kits for prompt engineering, context engineering, harness engineering, loop engineering, and reusable AI skills.

The product should feel less like a rigid developer documentation site and more like a friendly AI builder toolkit: users pick a kit, copy it, remix it, and run it.

## Brand Position

**Tagline:** Everything you need to vibe with AI, copy-ready.

**One-line value:** Copy-ready AI kits for prompts, context, loops, agents, and skills.

**Core promise:** Stop collecting random prompts. Start using practical AI kits that help you build, research, write, debug, and automate.

## Document Map

1. `00_PROJECT_BRIEF.md` — 서비스 개요와 핵심 포지션
2. `01_PRODUCT_REQUIREMENTS.md` — PRD, 기능 요구사항, 비기능 요구사항
3. `02_INFORMATION_ARCHITECTURE.md` — 페이지 구조, 라우트, 화면 구성
4. `03_DATA_MODEL.md` — 콘텐츠 모델, JSON 스키마, 태그 구조
5. `04_KIT_ENGINE.md` — GitHub 자료를 VibeKit으로 바꾸는 내부 운영 프로세스
6. `05_CODEX_BUILD_PROMPTS.md` — Codex에게 단계별로 입력할 프롬프트
7. `06_CONTENT_OPERATIONS.md` — 콘텐츠 작성 규칙, 품질 기준, 초기 콘텐츠 30개 설계
8. `07_LEGAL_LICENSE_POLICY.md` — 라이선스/출처/복제 위험 관리 정책
9. `08_MVP_EXECUTION_PLAN.md` — 7일 MVP 실행 계획
10. `AGENTS.md` — Codex가 저장소에서 따라야 할 작업 지침

## Recommended Stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Content: Markdown/MDX or local JSON first
- Search: Fuse.js first, Algolia later
- Hosting: Vercel
- Donation: Buy Me a Coffee external link

## MVP Goal

Build a clean, friendly, searchable, copy-ready AI kit library with 30 initial kit cards and a safe source attribution system.

## Naming Rules

Use `VibeKit` everywhere in the product UI. Avoid `Copyflow AI`, `workflow library`, or overly technical naming in user-facing copy. Internally, the product can still use terms such as `kit`, `source`, `license`, `verification`, and `exit condition`.
