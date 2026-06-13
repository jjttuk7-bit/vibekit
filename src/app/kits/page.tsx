import { Suspense } from "react";
import { FilterBar } from "@/components/FilterBar";

export const metadata = {
  title: "Kits",
  description: "Browse copy-ready AI kits for prompts, context, loops, agents, and skills.",
};

export default function KitsPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-[var(--muted)]">
          Kit library
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">Find a kit and run it</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
          Search practical AI workflows by category, difficulty, and tag. Open a
          kit, copy the block, and paste it into the AI tool you already use.
        </p>
      </div>
      <Suspense fallback={<div className="rounded-lg bg-white p-6">Loading kits...</div>}>
        <FilterBar />
      </Suspense>
    </div>
  );
}
