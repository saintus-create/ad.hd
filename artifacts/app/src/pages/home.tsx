import { Link } from "wouter";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

const highlights = [
  { label: "Federal policies tracked", value: "120+" },
  { label: "State-level laws indexed", value: "50" },
  { label: "Resources curated", value: "300+" },
  { label: "Languages supported", value: "12" },
];

const sections = [
  {
    href: "/policies",
    title: "Policy clearinghouse",
    description: "Browse and search federal and state ADHD policies — education, workplace, healthcare, and more.",
    tag: "USWDS certified",
  },
  {
    href: "/resources",
    title: "Resources",
    description: "Curated tools, guides, and research for individuals, families, educators, and healthcare providers.",
    tag: "Free access",
  },
  {
    href: "/about",
    title: "About this site",
    description: "Our mission, methodology, and how we maintain accuracy across federal and state policy data.",
    tag: "Open source",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <section className="bg-foreground text-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0} duration={0.5}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">
              ADHD Policy Clearinghouse
            </p>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              ADHD policy,<br />clear and accessible.
            </h1>
            <p className="text-lg opacity-80 max-w-xl mb-10">
              The definitive source for ADHD policy and law — indexed for individuals, families, educators, and government.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/policies"
                className="bg-background text-foreground px-6 py-3 text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Browse policies
              </Link>
              <Link
                href="/resources"
                className="border border-background/40 text-background px-6 py-3 text-sm font-semibold rounded hover:bg-background/10 transition-colors"
              >
                Find resources
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <BlurFade key={h.label} delay={0.05 * i} duration={0.4} inView>
              <div>
                <p className="text-3xl font-bold">{h.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{h.label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <BlurFade delay={0} duration={0.4} inView>
          <h2 className="text-2xl font-bold mb-8">What you'll find here</h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sections.map((s, i) => (
            <BlurFade key={s.href} delay={0.07 * i} duration={0.4} inView>
              <Link
                href={s.href}
                className="group relative block rounded-lg border border-border bg-card p-6 overflow-hidden hover:border-foreground/30 transition-colors"
              >
                <BorderBeam size={60} duration={10} colorFrom="#000" colorTo="#999" />
                <span className="inline-block text-xs font-medium bg-foreground text-background px-2 py-0.5 rounded mb-4">
                  {s.tag}
                </span>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="bg-card border-t border-border py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0} duration={0.4} inView>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Why it matters
            </p>
            <p className="text-2xl font-semibold max-w-2xl leading-snug">
              ADHD affects 1 in 10 children and millions of adults. Understanding the policy landscape shouldn't require a law degree.
            </p>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
