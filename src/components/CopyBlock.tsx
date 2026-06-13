"use client";

import { useState } from "react";

export function CopyBlock({
  title = "Copy-paste prompt",
  text,
}: {
  title?: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="rounded-lg border border-[var(--ink)] bg-[#171412] text-white shadow-lg">
      <div className="flex flex-col gap-3 border-b border-white/15 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[var(--yellow)]">
            {title}
          </p>
          <p className="text-sm text-white/70">Paste this into your AI tool and add context.</p>
        </div>
        <button
          type="button"
          onClick={copyText}
          className="focus-ring rounded-md bg-[var(--yellow)] px-4 py-2 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap p-4 text-sm leading-6 text-white/88">
        {text}
      </pre>
    </section>
  );
}
