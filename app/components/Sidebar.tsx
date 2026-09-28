"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pillars, activityCount } from "@/app/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 flex h-screen w-64 flex-none flex-col gap-6 overflow-y-auto border-r border-border bg-surface px-4.5 py-7 max-md:h-auto max-md:w-full max-md:flex-row max-md:items-center max-md:gap-3.5 max-md:overflow-x-auto max-md:border-r-0 max-md:border-b max-md:px-4 max-md:py-3.5">
      <div className="flex flex-col gap-0.5 px-2 max-md:flex-none max-md:px-0">
        <div className="font-mono text-[11px] tracking-wide text-muted uppercase">OmniCloud Consulting</div>
        <div className="text-[19px] font-bold tracking-tight text-ink">
          Ops <span className="text-accent-strong">Atlas</span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 max-md:flex-row max-md:gap-1.5">
        <Link
          href="/"
          className={`flex items-center justify-between gap-2.5 rounded-lg border-l-2 px-3 py-2.5 text-[13.5px] font-medium max-md:rounded-md max-md:border-l-0 max-md:border-b-2 max-md:px-2.5 max-md:py-2 ${
            pathname === "/"
              ? "border-accent-strong bg-accent-wash font-semibold text-ink"
              : "border-transparent text-ink-2 hover:bg-accent-wash hover:text-ink"
          }`}
        >
          Overview
        </Link>
        <div className="my-1 h-px bg-border max-md:my-0 max-md:h-5 max-md:w-px" />
        {pillars.map((p, i) => {
          const href = `/pillar/${p.slug}`;
          const active = pathname === href;
          const showGroupLabel = pillars[i - 1]?.group !== p.group;
          return (
            <div key={p.slug} className="contents">
              {showGroupLabel && (
                <div className="mt-2 mb-0.5 px-3 font-mono text-[10px] tracking-wide text-muted uppercase first:mt-0 max-md:hidden">
                  {p.group}
                </div>
              )}
              <Link
                href={href}
                className={`flex items-center justify-between gap-2.5 rounded-lg border-l-2 px-3 py-2.5 text-[13.5px] font-medium whitespace-nowrap max-md:rounded-md max-md:border-l-0 max-md:border-b-2 max-md:px-2.5 max-md:py-2 ${
                  active
                    ? "border-accent-strong bg-accent-wash font-semibold text-ink"
                    : "border-transparent text-ink-2 hover:bg-accent-wash hover:text-ink"
                }`}
              >
                {p.name.split(" & ")[0]}
                <span className="rounded-full border border-border bg-surface-raised px-1.5 py-px font-mono text-[11px] text-muted">
                  {activityCount(p)}
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-3 rounded-xl border border-border bg-surface-raised p-3.5 text-[11.5px] text-ink-2 max-md:hidden">
        <div>
          <div className="mb-2 text-[11px] tracking-wide text-muted uppercase">Cadence</div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-per-project" /> Per Project
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-as-needed" /> As Needed
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-daily" /> Daily
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-weekly" /> Weekly
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-monthly" /> Monthly
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-quarterly" /> Quarterly
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-half-yearly" /> Half-Yearly
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cad-annual" /> Annual
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 mb-2 text-[11px] tracking-wide text-muted uppercase">RACI</div>
          <div className="flex flex-col gap-1">
            <div>
              <b className="font-mono text-muted">R</b> Responsible — does the work
            </div>
            <div>
              <b className="font-mono text-accent">A</b> Accountable — owns the outcome
            </div>
            <div>
              <b className="font-mono text-muted">C</b> Consulted — gives input
            </div>
            <div>
              <b className="font-mono text-muted">I</b> Informed — kept in the loop
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
