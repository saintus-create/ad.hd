import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SliderTabs } from "@/components/slider-tabs";

const categories = ["All", "Education", "Workplace", "Healthcare", "Federal", "State"];

const policies = [
  {
    id: 1,
    title: "Individuals with Disabilities Education Act (IDEA)",
    category: "Education",
    level: "Federal",
    year: 2004,
    summary: "Ensures students with ADHD receive free, appropriate public education through IEPs and 504 plans.",
    status: "Active",
  },
  {
    id: 2,
    title: "Section 504 of the Rehabilitation Act",
    category: "Education",
    level: "Federal",
    year: 1973,
    summary: "Prohibits discrimination against students with disabilities, including ADHD, in schools receiving federal funding.",
    status: "Active",
  },
  {
    id: 3,
    title: "Americans with Disabilities Act (ADA)",
    category: "Workplace",
    level: "Federal",
    year: 1990,
    summary: "Requires employers to provide reasonable accommodations for employees with ADHD.",
    status: "Active",
  },
  {
    id: 4,
    title: "Mental Health Parity and Addiction Equity Act",
    category: "Healthcare",
    level: "Federal",
    year: 2008,
    summary: "Requires insurers to cover mental health and ADHD treatment at parity with physical health care.",
    status: "Active",
  },
  {
    id: 5,
    title: "ADHD Medication Management Modernization Act",
    category: "Healthcare",
    level: "Federal",
    year: 2023,
    summary: "Expands telehealth prescribing authority for ADHD stimulant medications post-COVID.",
    status: "Pending",
  },
  {
    id: 6,
    title: "California AB 2822 — ADHD Awareness in Schools",
    category: "Education",
    level: "State",
    year: 2022,
    summary: "Requires California school districts to include ADHD in educator training programs.",
    status: "Active",
  },
  {
    id: 7,
    title: "New York ADHD Workplace Accommodation Guidelines",
    category: "Workplace",
    level: "State",
    year: 2021,
    summary: "State guidance expanding ADA workplace accommodations for ADHD in public sector roles.",
    status: "Active",
  },
  {
    id: 8,
    title: "Stimulant Drug Shortage Emergency Response Act",
    category: "Healthcare",
    level: "Federal",
    year: 2023,
    summary: "Directs HHS to address ongoing Adderall and amphetamine supply chain shortages.",
    status: "Active",
  },
];

export default function Policies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = policies.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory || p.level === activeCategory;
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0} duration={0.4}>
            <p className="text-xs font-semibold mb-2 opacity-60">Policy clearinghouse</p>
            <h1 className="text-4xl font-bold mb-3">ADHD policies and laws</h1>
            <p className="text-base opacity-75 max-w-xl">
              Federal and state policies indexed for education, workplace, and healthcare. Updated regularly.
            </p>
          </BlurFade>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <input
            type="search"
            placeholder="Search policies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-border rounded px-4 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
          />
        </div>

        <SliderTabs
          options={categories}
          value={activeCategory}
          onChange={setActiveCategory}
          className="mb-6"
        />

        <p className="text-xs text-muted-foreground mb-6">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </p>

        <div className="space-y-4">
          {filtered.map((p, i) => (
            <BlurFade key={p.id} delay={0.04 * i} duration={0.35} inView>
              <div className="rounded-lg p-5 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 hover:ring-foreground/25 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h2 className="text-base font-semibold">{p.title}</h2>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded shrink-0 bg-[#ffffff00] text-[#000000] border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] rounded-tl-[2px] rounded-tr-[2px] rounded-br-[2px] rounded-bl-[2px] pl-[7px] pr-[7px]"
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{p.summary}</p>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="ring-1 ring-foreground/15 px-2 py-0.5 rounded">{p.level}</span>
                  <span className="ring-1 ring-foreground/15 px-2 py-0.5 rounded">{p.category}</span>
                  <span className="ring-1 ring-foreground/15 px-2 py-0.5 rounded">{p.year}</span>
                </div>
              </div>
            </BlurFade>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground py-10 text-center">
              No policies match your search. Try a different term or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
