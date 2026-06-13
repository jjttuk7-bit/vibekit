import Link from "next/link";

const navItems = [
  { href: "/kits", label: "Kits" },
  { href: "/categories", label: "Categories" },
  { href: "/sources", label: "Sources" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(255,250,242,0.88)] backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--ink)] bg-[var(--yellow)] font-black">
            VK
          </span>
          <span>
            <span className="block text-base font-black leading-none">VibeKit</span>
            <span className="hidden text-xs font-semibold text-[var(--muted)] sm:block">
              copy-ready AI kits
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-[var(--muted)] transition hover:bg-white hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kits"
          className="focus-ring rounded-md bg-[var(--ink)] px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5"
        >
          Browse
        </Link>
      </div>
    </header>
  );
}
