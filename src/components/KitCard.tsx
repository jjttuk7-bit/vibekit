import Link from "next/link";
import { getCategory } from "@/lib/utils";
import type { Kit } from "@/lib/types";

export function KitCard({ kit }: { kit: Kit }) {
  const category = getCategory(kit.category);

  return (
    <Link
      href={`/kits/${kit.slug}`}
      className="focus-ring group flex h-full flex-col rounded-lg border border-[var(--line)] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{category?.name ?? kit.category}</span>
        <span className="text-xs font-black uppercase tracking-wide text-[var(--muted)]">
          {kit.difficulty}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black leading-tight">{kit.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{kit.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {kit.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-md bg-[var(--mint)] px-2 py-1 text-xs font-bold">
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-5 text-sm font-black transition group-hover:translate-x-1">
        Open kit →
      </span>
    </Link>
  );
}
