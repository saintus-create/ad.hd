import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SliderTabs } from "@/components/slider-tabs";

const audiences = ["All", "Individuals", "Families", "Educators", "Healthcare", "Employers"];

const resources = [
  {
    id: 1,
    title: "CHADD — Children and Adults with ADHD",
    audience: "Individuals",
    type: "Organization",
    description: "The leading nonprofit for ADHD support, education, and advocacy. Includes a help line and local chapter finder.",
    url: "https://chadd.org",
  },
  {
    id: 2,
    title: "ADDitude Magazine",
    audience: "Families",
    type: "Publication",
    description: "Expert-reviewed articles and strategies for managing ADHD at home, school, and work.",
    url: "https://additudemag.com",
  },
  {
    id: 3,
    title: "IDEA Parent Guide — Wrights Law",
    audience: "Families",
    type: "Legal guide",
    description: "Plain-language guide to understanding your child's rights under IDEA, including IEPs and 504 plans.",
    url: "https://wrightslaw.com",
  },
  {
    id: 4,
    title: "504 Accommodation Plan Template",
    audience: "Educators",
    type: "Template",
    description: "A federal-compliant 504 plan template for K-12 educators, approved for USWDS environments.",
    url: "#",
  },
  {
    id: 5,
    title: "ADHD in the Workplace — JAN Resource",
    audience: "Employers",
    type: "Guide",
    description: "Job Accommodation Network guidance on reasonable accommodations for ADHD under the ADA.",
    url: "https://askjan.org",
  },
  {
    id: 6,
    title: "CDC — ADHD Data & Statistics",
    audience: "Healthcare",
    type: "Data",
    description: "Prevalence data, diagnosis trends, and treatment statistics from the Centers for Disease Control.",
    url: "https://cdc.gov/adhd",
  },
  {
    id: 7,
    title: "NIMH — ADHD Overview",
    audience: "Healthcare",
    type: "Clinical",
    description: "Evidence-based clinical overview of ADHD from the National Institute of Mental Health.",
    url: "https://nimh.nih.gov",
  },
  {
    id: 8,
    title: "Understood.org",
    audience: "Individuals",
    type: "Community",
    description: "Peer-reviewed tools and community for people with ADHD and other learning differences.",
    url: "https://understood.org",
  },
  {
    id: 9,
    title: "ADA Accommodation Request Letter — Template",
    audience: "Individuals",
    type: "Template",
    description: "A plain-language template for requesting ADHD accommodations from your employer under the ADA.",
    url: "#",
  },
];

export default function Resources() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? resources : resources.filter((r) => r.audience === active);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0} duration={0.4}>
            <p className="text-xs font-semibold mb-2 opacity-60">Resources</p>
            <h1 className="text-4xl font-bold mb-3">Find what you need</h1>
            <p className="text-base opacity-75 max-w-xl">
              Curated resources for individuals, families, educators, employers, and healthcare providers.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <SliderTabs
          options={audiences}
          value={active}
          onChange={setActive}
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((r, i) => (
            <BlurFade key={r.id} delay={0.04 * i} duration={0.35} inView>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-lg p-5 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 hover:ring-foreground/25 transition-all"
              >
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="text-xs ring-1 ring-foreground/15 px-2 py-0.5 rounded text-muted-foreground">
                    {r.type}
                  </span>
                  <span className="text-xs font-medium bg-foreground text-background px-2 py-0.5 rounded">
                    {r.audience}
                  </span>
                </div>
                <h2 className="text-base font-semibold mb-2 group-hover:underline">{r.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{r.description}</p>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
