import { categories } from "@/data/categories";
import { kits } from "@/data/kits";
import type { CategorySlug, Difficulty, Kit, ReuseStatus } from "@/lib/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getCategory(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug);
}

export function getKit(slug: string) {
  return kits.find((kit) => kit.slug === slug);
}

export function getRelatedKits(kit: Kit, limit = 3) {
  return kits
    .filter(
      (candidate) =>
        candidate.slug !== kit.slug &&
        (candidate.category === kit.category ||
          candidate.tags.some((tag) => kit.tags.includes(tag))),
    )
    .slice(0, limit);
}

export function formatReuseStatus(status: ReuseStatus) {
  return status
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export const difficultyOptions: Difficulty[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];
