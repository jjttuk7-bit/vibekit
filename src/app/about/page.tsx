export const metadata = {
  title: "About",
  description: "About VibeKit, a copy-ready AI kit library for builders.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
          About
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">A practical library for AI builders</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          VibeKit helps builders skip the blank page. Each kit gives you a
          workflow, a copy-paste block, verification checks, and an exit
          condition so you can run the pattern in ChatGPT, Claude, Codex,
          Cursor, or another AI tool.
        </p>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          The MVP is intentionally lightweight: static local content, no
          database, no authentication, and no paid subscription logic. The goal
          is a useful library that is easy to deploy, remix, and expand.
        </p>
      </div>
    </div>
  );
}
