export const metadata = {
  title: "Submit a Kit",
  description: "How to prepare a VibeKit contribution.",
};

export default function SubmitPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
          Submit a Kit
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">Bring a useful workflow</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
          A good VibeKit contribution is practical, original, copy-ready, and
          clear about source inspiration. For the MVP, prepare the fields below
          and add the kit to the local static data.
        </p>
      </div>
      <section className="mt-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Contribution checklist</h2>
        <ul className="mt-4 grid gap-3 text-[var(--muted)]">
          {[
            "Slug, title, category, summary, and description",
            "Use when, do not use when, and required context",
            "Workflow steps and copy-paste prompt",
            "Verification checklist, exit condition, and expected output",
            "Tags, source inspiration, license note, and reuse status",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
