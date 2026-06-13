# VibeKit 작업 결과 기록

이 문서는 VibeKit MVP를 실제로 만든 뒤 남기는 결과 기록이다. 앞선 문서들이
작업을 위한 기획과 실행 지시였다면, 이 문서는 무엇이 만들어졌고 어떤 판단을
했는지 다음 작업자가 빠르게 이해하도록 남기는 요약이다.

## 최종 상태

- 서비스 이름: VibeKit
- 포지션: copy-ready AI kit library
- 태그라인: Everything you need to vibe with AI, copy-ready.
- 배포 URL: https://vibekit-seven.vercel.app/
- GitHub 저장소: https://github.com/jjttuk7-bit/vibekit
- 현재 구현: Next.js App Router, TypeScript, Tailwind CSS, local static data

## 만들어진 것

VibeKit은 사용자가 AI kit를 탐색하고, 상세 페이지에서 prompt/workflow/checklist를
복사해 ChatGPT, Claude, Codex, Cursor 같은 도구에서 바로 실행할 수 있는 MVP로
구현되었다.

구현된 주요 화면:

- Home
- Kits listing
- Kit detail
- Categories
- Sources
- About
- Support
- Submit

핵심 기능:

- kit 검색
- category, difficulty, tag 필터
- copy-paste prompt block
- Copy 버튼
- source inspiration, license note, reuse status 표시
- related kits
- GitHub Issue Form 기반 kit submission 흐름

## 콘텐츠 상태

초기에는 MVP seed content로 20개 kit를 만들었다. 이후 실제 curated library로
확장하기 위해 source reference 구조를 추가했고, 일부 kit에는 공식 문서 기반
출처를 붙였다.

현재 kit 수:

- 21개

중요한 source-backed kit:

- Codex Fix Until Green Kit
- Context Pack Builder Kit
- RAG Source Summary Kit
- Open Source License Check Kit
- AI Workflow QA Kit
- Codex AGENTS.md Setup Kit

참조한 주요 출처:

- OpenAI Prompt Engineering
- OpenAI Codex Glossary
- OpenAI Custom instructions with AGENTS.md
- OpenAI Codex code review in GitHub
- OpenAI Agent Evals
- GitHub Licensing Docs
- ChooseALicense No License

중요한 원칙:

- 외부 문서를 직접 복사하지 않는다.
- VibeKit 원문으로 재작성한다.
- source-inspired kit에는 attribution, license note, reuse status를 남긴다.
- leaked prompt, proprietary prompt, unclear-rights content는 포함하지 않는다.

## 주요 코드 구조

주요 파일:

- `src/data/kits.ts`: kit content
- `src/data/categories.ts`: category content
- `src/lib/types.ts`: data model
- `src/app/kits/page.tsx`: kit listing
- `src/app/kits/[slug]/page.tsx`: kit detail
- `src/components/CopyBlock.tsx`: copy-paste block
- `src/components/FilterBar.tsx`: search/filter UI
- `.github/ISSUE_TEMPLATE/kit_submission.yml`: contribution flow
- `09_CONTENT_AUTOMATION_WORKFLOW.md`: future content automation workflow

## 검증한 것

작업 중 반복적으로 아래 명령을 실행했고 통과했다.

```bash
npm run typecheck
npm run lint
npm run build
```

배포 사이트에서 확인한 것:

- Home 정상 렌더링
- `/kits` 검색/필터 동작
- kit detail route 생성
- Copy 버튼 동작
- Source references 표시
- `/submit`의 Submit on GitHub 버튼 표시

## 커밋 흐름

핵심 커밋:

- `390992f` Build VibeKit MVP
- `c818684` Add source references to curated kits
- `a61612a` Connect kit submissions to GitHub issues
- `0b49548` Document content automation workflow
- `0c43638` Update README for live MVP
- `6085235` Add Codex AGENTS.md setup kit

## 남은 일

다음 작업에서 우선순위가 높은 것은 아래 순서다.

1. Buy Me a Coffee 가입 후 support 링크 교체
2. source-backed kit를 5-10개 더 추가
3. GitHub Issue로 들어온 kit submission review flow 운영
4. Vercel 배포 후 새 route와 source references 확인
5. 콘텐츠 자동화 workflow를 실제 recurring task로 전환

## 다음 작업자에게

이 프로젝트는 아직 backend, auth, database 없이 static MVP로 유지하는 것이 맞다.
콘텐츠 품질과 source policy가 제품의 핵심이므로, 기능을 늘리기 전에 kit 하나하나가
실제로 복사해서 쓸 만한지 확인하는 것이 중요하다.

새 kit를 추가할 때는 `src/data/kits.ts`에 바로 넣기 전에 source URL, license signal,
reuse status를 먼저 정리하라. 불확실한 source는 publish하지 말고 `reference_only`
또는 `do_not_copy_directly`로 다뤄라.
