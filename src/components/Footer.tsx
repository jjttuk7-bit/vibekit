import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-white/55">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-black">VibeKit</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
            Everything you need to vibe with AI, copy-ready. Browse, copy, run it,
            remix it, and keep the source notes clean.
          </p>
        </div>
        <div>
          <p className="text-sm font-black">Explore</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-[var(--muted)]">
            <Link href="/kits">Kits</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/sources">Sources</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black">Project</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-[var(--muted)]">
            <Link href="/about">About</Link>
            <Link href="/submit">Submit a Kit</Link>
            <Link href="/support">Support VibeKit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
