import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyBlock } from "@/components/CopyBlock";
import { KitCard } from "@/components/KitCard";
import { kits } from "@/data/kits";
import { formatReuseStatus, getCategory, getKit, getRelatedKits } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return kits.map((kit) => ({ slug: kit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kit = getKit(slug);

  if (!kit) {
    return {
      title: "Kit not found",
    };
  }

  return {
    title: kit.title,
    description: kit.summary,
  };
}

export default async function KitDetailPage({ params }: Props) {
  const { slug } = await params;
  const kit = getKit(slug);

  if (!kit) {
    notFound();
  }

  const category = getCategory(kit.category);
  const relatedKits = getRelatedKits(kit);

  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_0.22fr]">
        <article className="min-w-0">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="chip">{category?.name}</span>
            <span className="chip">{kit.difficulty}</span>
            <span className="chip">{formatReuseStatus(kit.reuseStatus)}</span>
          </div>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{kit.title}</h1>
          <p className="mt-4 text-xl leading-8 text-[var(--muted)]">{kit.summary}</p>
          <p className="mt-5 text-lg leading-8">{kit.description}</p>

          <div className="mt-8">
            <CopyBlock text={kit.copyPastePrompt} />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoList title="Best for" items={kit.bestFor} />
            <InfoList title="Required context" items={kit.requiredContext} />
            <InfoList title="Use when" items={kit.useWhen} />
            <InfoList title="Do not use when" items={kit.doNotUseWhen} />
          </div>

          <section className="mt-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Workflow steps</h2>
            <ol className="mt-4 grid gap-3">
              {kit.workflowSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[var(--blue)] text-sm font-black">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-[var(--muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoList title="Verification checklist" items={kit.verificationChecklist} />
            <section className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">Exit condition</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{kit.exitCondition}</p>
              <h3 className="mt-6 font-black">Expected output</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">{kit.expectedOutput}</p>
            </section>
          </div>

          <section className="mt-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Tool-specific versions</h2>
            <div className="mt-4 grid gap-3">
              {kit.toolVersions.map((version) => (
                <div key={version.tool} className="rounded-md bg-[var(--paper)] p-4">
                  <h3 className="font-black">{version.tool}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{version.prompt}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Source and reuse notes</h2>
            <dl className="mt-4 grid gap-4">
              <div>
                <dt className="font-black">Source inspiration</dt>
                <dd className="mt-1 leading-7 text-[var(--muted)]">{kit.sourceInspiration}</dd>
              </div>
              {kit.sourceReferences && kit.sourceReferences.length > 0 && (
                <div>
                  <dt className="font-black">Source references</dt>
                  <dd className="mt-3 grid gap-3">
                    {kit.sourceReferences.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring block rounded-md border border-[var(--line)] bg-[var(--paper)] p-4 transition hover:border-[var(--ink)]"
                      >
                        <span className="block font-black">{source.title}</span>
                        <span className="mt-1 block text-sm font-bold text-[var(--muted)]">
                          {source.publisher} · {source.license}
                        </span>
                        <span className="mt-2 block leading-7 text-[var(--muted)]">
                          {source.note}
                        </span>
                      </a>
                    ))}
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-black">License note</dt>
                <dd className="mt-1 leading-7 text-[var(--muted)]">{kit.licenseNote}</dd>
              </div>
              <div>
                <dt className="font-black">Reuse status</dt>
                <dd className="mt-1 leading-7 text-[var(--muted)]">
                  {formatReuseStatus(kit.reuseStatus)}
                </dd>
              </div>
            </dl>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
              Tags
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {kit.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[var(--mint)] px-2 py-1 text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {relatedKits.length > 0 && (
        <section className="mt-12">
          <h2 className="text-3xl font-black">Related kits</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedKits.map((relatedKit) => (
              <KitCard key={relatedKit.id} kit={relatedKit} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black">{title}</h2>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li key={item} className="leading-7 text-[var(--muted)]">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
