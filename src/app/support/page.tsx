import Link from "next/link";

export const metadata = {
  title: "Support",
  description: "Support VibeKit through Buy Me a Coffee.",
};

export default function SupportPage() {
  return (
    <div className="container py-12">
      <section className="rounded-lg border border-[var(--ink)] bg-[var(--yellow)] p-8 shadow-sm md:p-12">
        <p className="text-sm font-black uppercase tracking-wide">Support VibeKit</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
          VibeKit is free to browse and use.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8">
          If these kits helped you build faster, you can support the project.
        </p>
        <Link
          href="https://www.buymeacoffee.com/YOUR_HANDLE"
          className="mt-8 inline-block rounded-md bg-[var(--ink)] px-5 py-3 font-black text-white"
        >
          Buy me a coffee
        </Link>
      </section>
    </div>
  );
}
