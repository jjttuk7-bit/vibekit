import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kits?category=${category.slug}`}
      className="focus-ring group rounded-lg border border-[var(--line)] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-[var(--blue)] text-xl font-black">
          {category.icon}
        </span>
        <span className="text-sm font-black text-[var(--muted)] transition group-hover:text-[var(--ink)]">
          Browse
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
      <p className="mt-4 text-sm font-bold">{category.useCase}</p>
    </Link>
  );
}
