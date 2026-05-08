import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ResearchGlobe } from "@/components/research-globe";

const drugData = [
  { name: "Adderall",  concomitant: 92.9, suspected: 6.8,  reports: 560 },
  { name: "Ritalin",   concomitant: 84.6, suspected: 14.7, reports: 136 },
  { name: "Strattera", concomitant: 68.3, suspected: 31.7, reports: 60  },
  { name: "Vyvanse",   concomitant: 58.5, suspected: 41.3, reports: 472 },
  { name: "Concerta",  concomitant: 55.3, suspected: 44.1, reports: 170 },
];

const otcData = [
  { name: "Adderall",     pct: 6.8,  tag: "adhd" },
  { name: "Tylenol",      pct: 11.0, tag: "otc"  },
  { name: "Aspirin",      pct: 13.3, tag: "otc"  },
  { name: "Advil",        pct: 13.8, tag: "otc"  },
  { name: "Ritalin",      pct: 14.7, tag: "adhd" },
  { name: "Atorvastatin", pct: 19.7, tag: "rx"   },
  { name: "Metformin",    pct: 24.5, tag: "rx"   },
];

function DonutRing({
  pct, size = 130, stroke = 13, color = "#005ea2",
  trackColor = "rgba(128,128,128,0.15)", label, sublabel,
}: {
  pct: number; size?: number; stroke?: number; color?: string;
  trackColor?: string; label: string; sublabel?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const cx = size / 2;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle cx={cx} cy={cx} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
          <circle
            cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cx})`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tabular-nums">{pct}%</span>
          {sublabel && <span className="text-[10px] text-muted-foreground mt-0.5">{sublabel}</span>}
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-[130px] leading-snug">{label}</p>
    </div>
  );
}

function Bar({ pct, accent = false }: { pct: number; accent?: boolean }) {
  return (
    <div className="h-2 rounded-full overflow-hidden bg-foreground/10 w-full">
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background: accent ? "#005ea2" : "currentColor",
          opacity: accent ? 1 : 0.35,
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* Hero */}
      <section className="bg-foreground text-background px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0} duration={0.5}>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold mb-4 opacity-60 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                Source: FDA FAERS Database · Q1 2024
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                ADHD stimulants appear in reports — they rarely cause them
              </h1>
              <p className="text-base opacity-75 leading-relaxed mb-8 max-w-xl">
                In Q1 2024, FDA logged 169,640 adverse event reports. ADHD medications appear in 1,341 of them.
                In 75% of those cases, the drug was listed as a bystander — not the suspected cause.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/studies"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-5 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity"
                >
                  <FileText className="w-4 h-4" />
                  Browse the research
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded ring-1 ring-current opacity-60 hover:opacity-90 transition-opacity"
                >
                  What is FDA FAERS?
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Summary stats bar */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "169,640", label: "Total FAERS reports Q1 2024" },
              { value: "1,341",   label: "Reports mentioning ADHD meds" },
              { value: "75.2%",   label: "Listed as bystander (concomitant)" },
              { value: "0.79%",   label: "ADHD share of all reports" },
            ].map(({ value, label }) => (
              <div key={label} className="px-6 py-5 first:pl-0 last:pr-0">
                <div className="text-xl font-bold tabular-nums">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe / Research map */}
      <ResearchGlobe />

      {/* Donut stats */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <BlurFade delay={0} duration={0.4} inView>
            <h2 className="text-xl font-bold mb-2">Bystander vs. suspected cause</h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-xl">
              FDA FAERS distinguishes between drugs that may have caused an adverse event and drugs that were
              simply present. For ADHD medications, three out of four reports say "just present."
            </p>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
            <BlurFade delay={0.05} duration={0.4} inView>
              <div className="rounded-lg p-6 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 flex flex-col items-center text-center">
                <DonutRing pct={75.2} label="listed as concomitant (bystander)" sublabel="bystander" />
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  3 of 4 reports: the drug was on board, not blamed.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.1} duration={0.4} inView>
              <div className="rounded-lg p-6 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 flex flex-col items-center text-center">
                <DonutRing
                  pct={25.2}
                  color="currentColor"
                  trackColor="rgba(128,128,128,0.15)"
                  label="suspected of causing an adverse event"
                  sublabel="suspected"
                />
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Compare: most drugs in FAERS are suspected in nearly every report they appear in.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Per-drug breakdown */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <BlurFade delay={0} duration={0.4} inView>
            <h2 className="text-xl font-bold mb-2">Bystander rate by medication</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              How often each ADHD drug appeared as concomitant rather than suspected. Higher bar = cleaner signal.
            </p>
          </BlurFade>
          <div className="space-y-4 max-w-xl">
            {drugData.map((drug, i) => (
              <BlurFade key={drug.name} delay={0.05 * i} duration={0.35} inView>
                <div>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-sm font-medium">{drug.name}</span>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{drug.reports.toLocaleString()} reports</span>
                      <span className="font-semibold text-foreground tabular-nums">{drug.concomitant}%</span>
                    </div>
                  </div>
                  <Bar pct={drug.concomitant} accent />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* OTC comparison */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <BlurFade delay={0} duration={0.4} inView>
            <h2 className="text-xl font-bold mb-2">Compared to everyday drugs</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-xl">
              Adderall's suspected-cause rate is lower than Tylenol's. Shorter bar = less often blamed.
            </p>
          </BlurFade>
          <div className="space-y-4 max-w-xl">
            {otcData.map((d, i) => {
              const isAdhd = d.tag === "adhd";
              return (
                <BlurFade key={d.name} delay={0.05 * i} duration={0.35} inView>
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${isAdhd ? "" : "text-muted-foreground"}`}>
                          {d.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {isAdhd ? "ADHD stimulant" : d.tag === "otc" ? "OTC" : "Common Rx"}
                        </span>
                      </div>
                      <span className="text-xs tabular-nums text-muted-foreground">{d.pct}%</span>
                    </div>
                    <Bar pct={(d.pct / 25) * 100} accent={isAdhd} />
                  </div>
                </BlurFade>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Source: FDA FAERS Q1 2024. Bar lengths normalized to 25% max for comparison.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <BlurFade delay={0} duration={0.4} inView>
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-3">Peer-reviewed research from 25 countries</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                U.S. LDX trials, international clinical research, and published guidelines — all in one searchable place.
              </p>
              <Link
                href="/studies"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Browse all studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

    </div>
  );
}
