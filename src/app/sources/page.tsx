export const metadata = {
  title: "Sources",
  description: "How VibeKit handles source inspiration, attribution, and reuse status.",
};

export default function SourcesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
          Sources
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">Source inspiration stays visible</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
          VibeKit is inspired by public AI workflows, open-source repositories,
          and practical builder patterns. The kits use original wording and keep
          source inspiration, reuse status, and license notes visible.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ["Do not copy directly", "VibeKit does not present copied GitHub content, README text, leaked prompts, or proprietary prompts as original work."],
          ["Rewrite and attribute", "Source-inspired kits should be rewritten in original wording and include attribution plus license notes when known."],
          ["Mark reuse status", "Every kit can be marked original, adapted with attribution, reference only, or do not copy directly."],
          ["Use human judgment", "License classification is a support step, not legal advice. Unclear sources should be treated carefully."],
        ].map(([title, body]) => (
          <section key={title} className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
