"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";
import { allTags, featuredKits, kits } from "@/data/kits";
import { difficultyOptions } from "@/lib/utils";
import { KitCard } from "@/components/KitCard";

export function FilterBar() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "all";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState("all");
  const [tag, setTag] = useState("all");

  const filteredKits = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return kits.filter((kit) => {
      const matchesQuery =
        !normalizedQuery ||
        [kit.title, kit.summary, kit.description, ...kit.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "all" || kit.category === category;
      const matchesDifficulty = difficulty === "all" || kit.difficulty === difficulty;
      const matchesTag = tag === "all" || kit.tags.includes(tag);

      return matchesQuery && matchesCategory && matchesDifficulty && matchesTag;
    });
  }, [category, difficulty, query, tag]);

  return (
    <div className="grid gap-8">
      <section className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <label className="grid gap-2 text-sm font-bold">
            Search
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search prompts, Codex, RAG..."
              className="focus-ring min-h-11 rounded-md border border-[var(--line)] px-3"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="focus-ring min-h-11 rounded-md border border-[var(--line)] px-3"
            >
              <option value="all">All categories</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Difficulty
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="focus-ring min-h-11 rounded-md border border-[var(--line)] px-3"
            >
              <option value="all">All levels</option>
              {difficultyOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Tag
            <select
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              className="focus-ring min-h-11 rounded-md border border-[var(--line)] px-3"
            >
              <option value="all">All tags</option>
              {allTags.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
              {filteredKits.length} kits
            </p>
            <h2 className="text-2xl font-black">Browse the library</h2>
          </div>
        </div>
        {filteredKits.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredKits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[var(--line)] bg-white p-10 text-center">
            <h3 className="text-xl font-black">No kits found</h3>
            <p className="mt-2 text-[var(--muted)]">
              Try a broader search, another category, or clear the tag filter.
            </p>
          </div>
        )}
      </section>

      <section>
        <div className="mb-4">
          <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
            Featured
          </p>
          <h2 className="text-2xl font-black">Good places to start</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredKits.slice(0, 3).map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </section>
    </div>
  );
}
