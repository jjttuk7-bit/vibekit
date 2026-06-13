import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-black">Kit not found</h1>
      <p className="mt-3 text-[var(--muted)]">
        That page is not in the VibeKit library yet.
      </p>
      <Link
        href="/kits"
        className="mt-6 inline-block rounded-md bg-[var(--ink)] px-5 py-3 font-black text-white"
      >
        Browse kits
      </Link>
    </div>
  );
}
