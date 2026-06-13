import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { kits } from "@/data/kits";

export const metadata = {
  title: "Categories",
  description: "Explore VibeKit categories for AI prompts, context, loops, agents, RAG, and writing.",
};

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
          Categories
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">Ten ways to start</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
          VibeKit groups kits by the kind of AI work you are doing, from a
          single prompt to a reusable workflow with checks.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.slug} className="grid gap-3">
            <CategoryCard category={category} />
            <p className="px-1 text-sm font-bold text-[var(--muted)]">
              {kits.filter((kit) => kit.category === category.slug).length} kits
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
