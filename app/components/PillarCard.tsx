import Link from "next/link";
import { Pillar, cadenceMix, activityCount } from "@/app/data";

const cadenceOrder = ["per-project", "as-needed", "daily", "weekly", "monthly", "quarterly", "half-yearly", "annual"] as const;
const cadenceColor: Record<(typeof cadenceOrder)[number], string> = {
  "per-project": "bg-cad-per-project",
  "as-needed": "bg-cad-as-needed",
  daily: "bg-cad-daily",
  weekly: "bg-cad-weekly",
  monthly: "bg-cad-monthly",
  quarterly: "bg-cad-quarterly",
  "half-yearly": "bg-cad-half-yearly",
  annual: "bg-cad-annual",
};

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  const mix = cadenceMix(pillar);
  const total = activityCount(pillar);

  return (
    <Link
      href={`/pillar/${pillar.slug}`}
      className="flex flex-col gap-3.5 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent-strong"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[17px] font-semibold tracking-tight text-ink">{pillar.name}</h3>
        <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted">
          {pillar.index}
        </span>
      </div>
      <div className="text-[12.5px] text-ink-2">
        Head: <em className="border-b border-dashed border-border-strong text-muted not-italic">assign owner</em>
      </div>
      <div className="flex h-2 gap-0.5 overflow-hidden rounded">
        {cadenceOrder.map((c) =>
          mix[c] > 0 ? (
            <span key={c} className={cadenceColor[c]} style={{ flex: mix[c] }} />
          ) : null
        )}
      </div>
      <div className="flex justify-between font-mono text-[11.5px] text-muted">
        <span>{pillar.workstreams.length} workstreams</span>
        <span>{total} activities</span>
      </div>
    </Link>
  );
}
