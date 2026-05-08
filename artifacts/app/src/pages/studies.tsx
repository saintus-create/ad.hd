import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SliderTabs } from "@/components/slider-tabs";
import { ResearchGlobe } from "@/components/research-globe";
import { ldxStudies } from "@/data/ldx-studies";

const sources = ["All", "US Studies", "International"];

export default function Studies() {
  const [source, setSource] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ldxStudies.filter((s) => {
    const matchesSource =
      source === "All" ||
      (source === "US Studies" && s.country === "USA") ||
      (source === "International" && s.country !== "USA");
    const matchesSearch =
      search === "" ||
      s.subject.toLowerCase().includes(search.toLowerCase()) ||
      s.summary.toLowerCase().includes(search.toLowerCase()) ||
      s.author.toLowerCase().includes(search.toLowerCase());
    return matchesSource && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0} duration={0.4}>
            <p className="text-xs font-semibold mb-2 opacity-60">Research library</p>
            <h1 className="text-4xl font-bold mb-3">ADHD research by country</h1>
            <p className="text-base opacity-75 max-w-xl">
              Peer-reviewed studies from the US and abroad, indexed by subject, author, and year.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Interactive globe */}
      <ResearchGlobe />

      {/* Filter + list */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <input
            type="search"
            placeholder="Search by subject, author, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-border rounded px-4 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
          />
        </div>

        <SliderTabs
          options={sources}
          value={source}
          onChange={setSource}
          className="mb-6"
        />

        <p className="text-xs text-muted-foreground mb-6">
          {filtered.length} {filtered.length === 1 ? "study" : "studies"}
        </p>

        <div className="space-y-3">
          {filtered.map((s, i) => (
            <BlurFade key={s._id} delay={0.03 * i} duration={0.3} inView>
              <div className="rounded-lg p-5 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 hover:ring-foreground/25 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h2 className="text-sm font-semibold leading-snug flex-1">{s.subject}</h2>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs ring-1 ring-foreground/15 px-2 py-0.5 rounded text-muted-foreground">
                      {s.country}
                    </span>
                    <span className="text-xs ring-1 ring-foreground/15 px-2 py-0.5 rounded text-muted-foreground">
                      {s.year}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{s.summary}</p>
                <p className="text-xs text-muted-foreground opacity-60">
                  {s.author} · {s.journal}
                </p>
              </div>
            </BlurFade>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground py-10 text-center">
              No studies match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
