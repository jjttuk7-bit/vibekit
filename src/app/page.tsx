import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { KitCard } from "@/components/KitCard";
import { categories } from "@/data/categories";
import { featuredKits } from "@/data/kits";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container py-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
              Categories
            </p>
            <h2 className="text-3xl font-black">Pick the shape of your work</h2>
          </div>
          <Link href="/categories" className="text-sm font-black">
            View all categories →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
              Featured kits
            </p>
            <h2 className="text-3xl font-black">Copy-ready starters</h2>
          </div>
          <Link href="/kits" className="text-sm font-black">
            Browse every kit →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredKits.slice(0, 6).map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </section>

      <section className="container grid gap-4 py-10 md:grid-cols-3">
        {[
          ["Find a kit", "Search by workflow, category, tool, or tag."],
          ["Copy the block", "Grab the prompt, checklist, and exit condition in one place."],
          ["Run it and remix it", "Paste into ChatGPT, Claude, Codex, Cursor, or your own workflow."],
        ].map(([title, body], index) => (
          <div key={title} className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--coral)] font-black">
              {index + 1}
            </span>
            <h3 className="mt-5 text-xl font-black">{title}</h3>
            <p className="mt-2 leading-7 text-[var(--muted)]">{body}</p>
          </div>
        ))}
      </section>

      <section className="container grid gap-5 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-[var(--line)] bg-white p-7 shadow-sm">
          <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
            Open-source curation
          </p>
          <h2 className="mt-2 text-3xl font-black">Inspired by public builder patterns</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            VibeKit turns practical AI workflows, public open-source patterns, and
            builder habits into original, copy-ready kits. Source-inspired kits
            include reuse status, attribution notes, and license notes so you can
            learn from public work without pretending copied text is original.
          </p>
          <Link href="/sources" className="mt-5 inline-block font-black">
            Read the source policy →
          </Link>
        </div>
        <div className="rounded-lg border border-[var(--ink)] bg-[var(--yellow)] p-7 shadow-sm">
          <p className="text-sm font-black uppercase tracking-wide">Support</p>
          <h2 className="mt-2 text-3xl font-black">Keep VibeKit free to browse</h2>
          <p className="mt-4 leading-8">
            If these kits helped you build faster, you can support the project.
          </p>
          <Link
            href="/support"
            className="mt-6 inline-block rounded-md bg-[var(--ink)] px-5 py-3 font-black text-white"
          >
            Buy me a coffee
          </Link>
        </div>
      </section>
    </>
  );
}
