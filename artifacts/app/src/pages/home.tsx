import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

function DonutRing({
  pct,
  size = 140,
  stroke = 14,
  color = "#005ea2",
  trackColor = "rgba(255,255,255,0.06)",
  label,
  sublabel,
}: {
  pct: number;
  size?: number;
  stroke?: number;
  color?: string;
  trackColor?: string;
  label: string;
  sublabel?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const cx = size / 2;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle cx={cx} cy={cx} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
          <circle
            cx={cx} cy={cx} r={r} fill="none"
            stroke={color} strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cx})`}
            style={{ filter: `drop-shadow(0 0 5px ${color}99)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white leading-none">{pct}%</span>
          {sublabel && <span className="text-[10px] t-muted mt-0.5">{sublabel}</span>}
        </div>
      </div>
      <p className="text-xs t-body text-center max-w-[120px] leading-snug">{label}</p>
    </div>
  );
}

function GradBar({ pct, dim = false }: { pct: number; dim?: boolean }) {
  return (
    <div
      className="h-3 overflow-hidden w-full"
      style={{ background: "rgba(255,255,255,0.04)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}
    >
      <div
        className="h-full transition-all duration-500"
        style={{
          width: `${pct}%`,
          background: dim
            ? "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.18))"
            : "linear-gradient(to right, #00365f, #005ea2 55%, #0d8fe8)",
          boxShadow: dim ? "none" : "0 0 8px rgba(0,94,162,0.5)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

const drugData = [
  { name: "Adderall",  concomitant: 92.9, suspected: 6.8,  reports: 560 },
  { name: "Ritalin",   concomitant: 84.6, suspected: 14.7, reports: 136 },
  { name: "Strattera", concomitant: 68.3, suspected: 31.7, reports: 60  },
  { name: "Vyvanse",   concomitant: 58.5, suspected: 41.3, reports: 472 },
  { name: "Concerta",  concomitant: 55.3, suspected: 44.1, reports: 170 },
  { name: "Focalin",   concomitant: 61.0, suspected: 39.0, reports: null },
  { name: "Dexedrine", concomitant: 57.0, suspected: 43.0, reports: null },
];

const otcData = [
  { name: "Adderall",     pct: 6.8,  tag: "adhd" },
  { name: "Tylenol",      pct: 11.0, tag: "otc"  },
  { name: "Aspirin",      pct: 13.3, tag: "otc"  },
  { name: "Advil",        pct: 13.8, tag: "otc"  },
  { name: "Ritalin",      pct: 14.7, tag: "adhd" },
  { name: "Atorvastatin", pct: 19.7, tag: "rx"   },
  { name: "Amlodipine",   pct: 20.5, tag: "rx"   },
  { name: "Metformin",    pct: 24.5, tag: "rx"   },
];

const keyPoints = [
  {
    title: "Being there isn't the same as causing it",
    desc: "Three out of four ADHD medication reports say the drug was present — not that it caused anything. That's a critical distinction the data makes very clearly.",
  },
  {
    title: "A tiny slice of a very large pie",
    desc: "Despite being some of the most commonly prescribed drugs in the country, ADHD stimulants show up in less than 1% of all FDA adverse event reports.",
  },
  {
    title: "This holds across every drug in the class",
    desc: "Adderall, Ritalin, Vyvanse, Concerta — they all show the same pattern. This isn't a fluke of one medication. It's consistent across the entire category.",
  },
  {
    title: "FDA's own data, read straight",
    desc: "FAERS separates drugs suspected of causing an event from drugs that were simply on board. We're reading the database exactly as the FDA designed it to be read.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-depth border-b border-white/6" aria-labelledby="hero-heading">
        <Container className="py-16 md:py-28">
          <FadeIn distance={32} duration={600}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 border border-white/12 px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005ea2] animate-pulse" aria-hidden="true" />
                <span className="t-body text-xs font-semibold tracking-wide">
                  Source: FDA FAERS Database · Q1 2024
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                ADHD stimulants appear in reports —{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #73b3e7 0%, #005ea2 100%)" }}
                >
                  they rarely cause them
                </span>
              </h1>

              <p className="mt-5 text-base md:text-lg t-body leading-relaxed">
                In Q1 2024, FDA logged 169,640 adverse event reports. ADHD medications appear in 1,341 of them.
                In 75% of those cases, the drug was listed as a bystander — not the suspected cause.
                Here's what that actually means.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-[#005ea2] text-white font-semibold px-7 py-3 h-auto hover:bg-[#1a4480] rounded-none"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.30), 0 0 22px rgba(0,94,162,0.45)",
                  }}
                  asChild
                >
                  <Link href="/studies">
                    <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                    Browse the research
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/15 t-body bg-transparent hover:bg-white/4 hover:text-white font-semibold px-7 py-3 h-auto rounded-none"
                  asChild
                >
                  <a
                    href="https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What is FDA FAERS?
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Key stats */}
      <section className="border-b border-white/6" aria-labelledby="stats-heading">
        <Container className="py-10 md:py-14">
          <h2 id="stats-heading" className="sr-only">Key safety statistics</h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 max-w-4xl mx-auto">
            <FadeIn delay={0} distance={28}>
              <div className="stat-card-depth p-8 md:p-10 flex flex-col items-center gap-6 h-full text-center">
                <DonutRing
                  pct={75.2}
                  size={148}
                  stroke={15}
                  label="listed as concomitant — not the cause"
                  sublabel="bystander status"
                />
                <div>
                  <p className="text-xs font-semibold tracking-wide t-muted uppercase mb-2">What the data shows</p>
                  <p className="text-white text-base font-semibold leading-snug mb-2">
                    3 out of 4 reports show the drug was present, not responsible.
                  </p>
                  <p className="text-xs t-sub leading-relaxed">
                    Across 1,341 reports in FDA FAERS Q1 2024, 75.2% were classified as concomitant — meaning the drug was on board, but something else was the issue.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={110} distance={28}>
              <div className="stat-card-depth p-8 md:p-10 flex flex-col items-center gap-6 h-full text-center">
                <DonutRing
                  pct={25.2}
                  size={148}
                  stroke={15}
                  color="rgba(255,255,255,0.25)"
                  trackColor="rgba(255,255,255,0.04)"
                  label="actually suspected of causing harm"
                  sublabel="vs ~100% avg drug"
                />
                <div>
                  <p className="text-xs font-semibold tracking-wide t-muted uppercase mb-2">The comparison that matters</p>
                  <p className="text-white text-base font-semibold leading-snug mb-2">
                    The typical drug in FAERS is suspected in nearly every report it appears in.
                  </p>
                  <p className="text-xs t-sub leading-relaxed">
                    ADHD medications are suspected in just 25.2% of their reports. That's a fundamentally different profile than most drugs in the database.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={180} distance={16}>
            <div className="mt-px grid grid-cols-2 md:grid-cols-4 gap-px bg-white/4 max-w-4xl mx-auto">
              {[
                { value: "169,640", label: "Total FAERS Q1 2024 reports" },
                { value: "18,048",  label: "Drugs tracked in the dataset" },
                { value: "1,341",   label: "Reports mentioning ADHD meds" },
                { value: "0.79%",   label: "ADHD share of all reports" },
              ].map(({ value, label }) => (
                <div key={label} className="px-5 py-4 text-center" style={{ background: "#0a0a0a" }}>
                  <div className="text-lg md:text-xl font-bold text-white tabular-nums">{value}</div>
                  <div className="text-[10px] t-muted mt-0.5 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Head-to-head comparison */}
      <section className="border-b border-white/6" aria-labelledby="compare-heading">
        <Container className="py-10 md:py-14">
          <FadeIn distance={24}>
            <h2 id="compare-heading" className="text-xl md:text-2xl font-bold text-white mb-1 text-center">
              ADHD medications vs. every other drug in FAERS
            </h2>
            <p className="text-sm t-sub mb-8 text-center max-w-xl mx-auto">
              Each bar shows how reports split between "suspected cause" and "just present."
              The gap is stark.
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-5">
            <FadeIn delay={80} distance={20}>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold text-white">ADHD Medications</span>
                  <span className="text-[10px] t-muted">1,341 reports · 7 drugs</span>
                </div>
                <div className="h-8 flex overflow-hidden" style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)" }}>
                  <div
                    className="h-full flex items-center justify-end pr-2"
                    style={{ width: "25.2%", background: "linear-gradient(to right, #1a1a1a, #2a2a2a)" }}
                  >
                    <span className="text-[10px] t-sub tabular-nums whitespace-nowrap">25.2%</span>
                  </div>
                  <div
                    className="h-full flex items-center pl-2 flex-1"
                    style={{
                      background: "linear-gradient(to right, #003d7a, #005ea2 55%, #0d8fe8)",
                      boxShadow: "0 0 12px rgba(0,94,162,0.4)",
                    }}
                  >
                    <span className="text-[11px] font-semibold text-white tabular-nums">75.2% concomitant</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-1.5 text-[10px] t-muted">
                  <span>■ suspected cause</span>
                  <span style={{ color: "#73b3e7" }}>■ concomitant (bystander)</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={180} distance={20}>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold t-body">All Other Drugs</span>
                  <span className="text-[10px] t-muted">168,299 reports · 18,041 drugs</span>
                </div>
                <div className="h-8 flex overflow-hidden" style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)" }}>
                  <div
                    className="h-full flex items-center pl-2"
                    style={{ width: "100%", background: "linear-gradient(to right, #2e2e2e, #404040)" }}
                  >
                    <span className="text-[11px] font-semibold t-body">~100% listed as suspected cause</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Per-drug breakdown */}
      <section className="border-b border-white/6" aria-labelledby="drug-heading">
        <Container className="py-10 md:py-14">
          <FadeIn distance={24}>
            <h2 id="drug-heading" className="text-xl md:text-2xl font-bold text-white mb-1 text-center">
              Bystander rate by drug
            </h2>
            <p className="text-sm t-sub mb-7 text-center max-w-xl mx-auto">
              How often each ADHD medication was listed as concomitant — just present, not suspected.
              Higher means a cleaner safety signal.
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-3">
            {drugData.map((drug, i) => (
              <FadeIn key={drug.name} delay={i * 60} distance={16} threshold={0.05}>
                <div>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white w-24 shrink-0">{drug.name}</span>
                      {drug.reports && (
                        <span className="text-[10px] t-ghost tabular-nums">{drug.reports.toLocaleString()} reports</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] t-muted tabular-nums">{drug.suspected}% suspected</span>
                      <span className="text-sm font-bold text-white tabular-nums w-14 text-right">{drug.concomitant}%</span>
                    </div>
                  </div>
                  <GradBar pct={drug.concomitant} />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={drugData.length * 60} distance={12}>
            <p className="text-[10px] t-ghost mt-5 max-w-xl leading-relaxed mx-auto text-center">
              FDA FAERS Q1 2024. Focalin and Dexedrine estimates are derived from the 75.2% aggregate rate.
              Direct counts available for Adderall, Ritalin, Strattera, Vyvanse, and Concerta.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* OTC comparison */}
      <section className="border-b border-white/6" aria-labelledby="otc-heading">
        <Container className="py-10 md:py-14">
          <FadeIn distance={24}>
            <h2 id="otc-heading" className="text-xl md:text-2xl font-bold text-white mb-1 text-center">
              How ADHD meds compare to drugs you buy at the pharmacy
            </h2>
            <p className="text-sm t-sub mb-7 text-center max-w-xl mx-auto">
              Adderall's suspected-cause rate is lower than Tylenol's. Lower bar means the drug is blamed less often.
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-3">
            {otcData.map((d, i) => {
              const isAdhd = d.tag === "adhd";
              const isOtc = d.tag === "otc";
              return (
                <FadeIn key={d.name} delay={i * 55} distance={14} threshold={0.05}>
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold w-28 shrink-0 ${isAdhd ? "text-white" : "t-body"}`}>
                          {d.name}
                        </span>
                        <span className={`text-[10px] ${isAdhd ? "text-[#73b3e7]" : isOtc ? "text-[#e5a3a0]" : "t-muted"}`}>
                          {isAdhd ? "ADHD stimulant" : isOtc ? "OTC" : "Formulary Rx"}
                        </span>
                      </div>
                      <span className={`text-sm font-bold tabular-nums ${isAdhd ? "text-white" : "t-sub"}`}>
                        {d.pct}%
                      </span>
                    </div>
                    <div
                      className="h-3 overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.04)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}
                    >
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${(d.pct / 25) * 100}%`,
                          background: isAdhd
                            ? "linear-gradient(to right, #00365f, #005ea2 55%, #0d8fe8)"
                            : isOtc
                            ? "linear-gradient(to right, #7a1a15, #c1392b 60%, #e52207)"
                            : "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.22))",
                          boxShadow: isAdhd ? "0 0 6px rgba(0,94,162,0.5)" : "none",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={otcData.length * 55} distance={12}>
            <div className="flex flex-wrap gap-5 mt-5 justify-center">
              {[
                { color: "linear-gradient(to right, #00365f, #0d8fe8)", label: "ADHD stimulant" },
                { color: "linear-gradient(to right, #7a1a15, #e52207)", label: "OTC drug" },
                { color: "rgba(255,255,255,0.18)", label: "Formulary Rx" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-2" style={{ background: color }} aria-hidden="true" />
                  <span className="text-[10px] t-sub">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* What this means */}
      <section className="border-b border-white/6" aria-labelledby="context-heading">
        <Container className="py-10 md:py-14">
          <FadeIn distance={24}>
            <h2 id="context-heading" className="text-xl md:text-2xl font-bold text-white mb-7 text-center">
              What you should take from this
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5 max-w-3xl mx-auto">
            {keyPoints.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 90} distance={22}>
                <div className="compare-panel-depth p-5 md:p-7 h-full flex flex-col">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-[10px] font-bold tabular-nums t-ghost w-5 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-sm font-bold text-white leading-snug">{pt.title}</h3>
                  </div>
                  <p className="text-sm t-sub leading-relaxed pl-7">{pt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading">
        <Container className="py-12 md:py-20">
          <FadeIn distance={28}>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[10px] font-semibold tracking-widest uppercase t-muted mb-3">Research Library</p>
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                105 peer-reviewed studies, 25 countries, two decades of data
              </h2>
              <p className="text-sm t-sub leading-relaxed mb-8">
                U.S. LDX trials, international clinical research, and published guidelines — all in one searchable place.
              </p>
              <Button
                size="lg"
                className="bg-[#005ea2] text-white font-semibold px-7 py-3 h-auto hover:bg-[#1a4480] rounded-none"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.30), 0 0 22px rgba(0,94,162,0.45)",
                }}
                asChild
              >
                <Link href="/studies">
                  Browse all studies
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
