import Link from "next/link";

export function Hero() {
  return (
    <section className="container grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <p className="chip inline-flex">Copy-ready AI kit library</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
          VibeKit
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-black leading-tight">
          Everything you need to vibe with AI, copy-ready.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Browse copy-ready prompts, context packs, harnesses, loops, agent
          skills, and Codex workflows curated from practical AI patterns and
          open-source inspiration.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kits"
            className="focus-ring rounded-md bg-[var(--ink)] px-5 py-3 font-black text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Browse Kits
          </Link>
          <Link
            href="/kits?category=codex-kits"
            className="focus-ring rounded-md border border-[var(--ink)] bg-white px-5 py-3 font-black transition hover:-translate-y-0.5"
          >
            Start with Codex Kits
          </Link>
          <Link
            href="/submit"
            className="focus-ring rounded-md border border-[var(--line)] bg-white px-5 py-3 font-black transition hover:-translate-y-0.5"
          >
            Submit a Kit
          </Link>
          <Link
            href="/support"
            className="focus-ring rounded-md bg-[var(--yellow)] px-5 py-3 font-black transition hover:-translate-y-0.5"
          >
            Support VibeKit
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-lg">
        <div className="rounded-md border border-[var(--ink)] bg-[var(--mint)] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-wide">Kit preview</p>
            <span className="rounded-md bg-white px-2 py-1 text-xs font-black">Copy</span>
          </div>
          <div className="mt-6 grid gap-3">
            {["Context", "Workflow", "Prompt", "Verification"].map((item, index) => (
              <div
                key={item}
                className="rounded-md border border-[var(--ink)] bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--yellow)] text-sm font-black">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-black">{item}</p>
                    <p className="text-sm text-[var(--muted)]">
                      Ready to paste into the tool you already use.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
