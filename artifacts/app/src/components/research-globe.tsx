import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import rawData from "@assets/studies_1777742126967.json";
import { ldxStudies } from "@/data/ldx-studies";
import { FadeIn } from "@/components/fade-in";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Study {
  _id: string;
  country: string;
  [key: string]: unknown;
}

const jsonStudies: Study[] = (rawData as { status: string; value: Study[] }).value;
const allStudies: Study[] = [...jsonStudies, ...(ldxStudies as Study[])];

const CANONICAL: Record<string, string> = {
  GER: "Germany", ESP: "Spain",  ITA: "Italy",  NED: "Netherlands",
  POL: "Poland",  HUN: "Hungary", GRE: "Greece", TUR: "Turkey",
  KOR: "South Korea", TWN: "Taiwan", JPN: "Japan",
};

const ISO_TO_NAME: Record<string, string> = {
  "840": "USA",          "276": "Germany",       "124": "Canada",
  "076": "Brazil",       "724": "Spain",          "826": "UK",
  "036": "Australia",    "392": "Japan",           "156": "China",
  "250": "France",       "380": "Italy",           "528": "Netherlands",
  "752": "Sweden",       "756": "Switzerland",     "410": "South Korea",
  "158": "Taiwan",       "056": "Belgium",         "208": "Denmark",
  "616": "Poland",       "348": "Hungary",         "300": "Greece",
  "792": "Turkey",       "203": "Czech Republic",  "032": "Argentina",
  "152": "Chile",
};

const COUNTS = allStudies.reduce<Record<string, number>>((acc, s) => {
  if (!s.country) return acc;
  const key = CANONICAL[s.country] ?? s.country;
  if (Object.values(ISO_TO_NAME).includes(key)) {
    acc[key] = (acc[key] ?? 0) + 1;
  }
  return acc;
}, {});

const MAX_COUNT = Math.max(...Object.values(COUNTS), 1);
const COUNTRY_LIST = Object.entries(COUNTS).sort((a, b) => b[1] - a[1]);

const ISO_COUNTS: Record<string, number> = {};
for (const [iso, name] of Object.entries(ISO_TO_NAME)) {
  if (COUNTS[name]) ISO_COUNTS[iso] = COUNTS[name];
}

function getCountryFill(isoId: string): string {
  const count = ISO_COUNTS[isoId];
  if (!count) return "#171717";
  const t = count / MAX_COUNT;
  if (t < 0.15) return "#162d47";
  if (t < 0.3)  return "#1a4480";
  if (t < 0.5)  return "#005ea2";
  if (t < 0.75) return "#1464b0";
  return "#1a9af5";
}

function getIsoForCountry(name: string): string {
  return Object.entries(ISO_TO_NAME).find(([, n]) => n === name)?.[0] ?? "";
}

export function ResearchGlobe() {
  return (
    <div className="bg-[#0a0a0a] border-b border-white/8">
      <FadeIn distance={40} duration={700} threshold={0.05}>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "min(620px, 62vh)" }}
        >
          <FadeIn delay={120} distance={20} duration={550}>
            <div className="absolute top-0 left-0 z-10 px-4 md:px-8 pt-8 pb-4 pointer-events-none">
              <div className="inline-block border border-white/12 px-3 py-1 mb-3">
                <span className="t-sub text-[10px] font-semibold uppercase tracking-widest">
                  Global Research Coverage
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {COUNTRY_LIST.length} countries represented
              </h2>
              <p className="mt-1.5 t-sub text-sm max-w-xs md:max-w-sm leading-relaxed">
                Brighter blue = more studies. Scroll/pinch to zoom.
              </p>
            </div>
          </FadeIn>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 45% 55%, rgba(0,94,162,0.07) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 195, center: [10, 10] }}
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 960 500"
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const id = String(geo.id).padStart(3, "0");
                    const isStudy = !!ISO_COUNTS[id];
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={getCountryFill(id)}
                        stroke={isStudy ? "#005ea2" : "#0d0d0d"}
                        strokeWidth={isStudy ? 0.5 : 0.25}
                        style={{
                          default: { outline: "none" },
                          hover:   { outline: "none", fill: isStudy ? "#39a4f5" : "#252525" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          <div
            className="absolute inset-y-0 left-0 w-12 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 w-12 md:w-72 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0a0a0a 0%, #0a0a0a 30%, transparent 100%)" }}
            aria-hidden="true"
          />

          <FadeIn delay={300} distance={16} duration={500}>
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-64 flex-col justify-center pointer-events-none">
              <div
                className="mx-4 my-6 p-4 border border-white/8 pointer-events-auto"
                style={{ background: "rgba(10,10,10,0.88)", backdropFilter: "blur(8px)" }}
              >
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[9px] t-muted uppercase tracking-widest mr-0.5">Less</span>
                  {(["#162d47","#1a4480","#005ea2","#1464b0","#1a9af5"] as const).map((c) => (
                    <div key={c} className="flex-1 h-2" style={{ background: c }} aria-hidden="true" />
                  ))}
                  <span className="text-[9px] t-muted uppercase tracking-widest ml-0.5">More</span>
                </div>

                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {COUNTRY_LIST.map(([country, count]) => (
                    <div key={country} className="flex items-center gap-2">
                      <div
                        className="shrink-0 h-2"
                        style={{
                          width: `${Math.round(4 + (count / MAX_COUNT) * 12)}px`,
                          background: getCountryFill(getIsoForCountry(country)),
                        }}
                        aria-hidden="true"
                      />
                      <span className="text-xs t-body flex-1 truncate">{country}</span>
                      <span className="text-xs t-muted tabular-nums">{count}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/8 grid grid-cols-3 gap-1 text-center">
                  {[
                    { v: String(COUNTRY_LIST.length), l: "Countries" },
                    { v: String(allStudies.length),   l: "Studies" },
                    { v: String(MAX_COUNT),            l: "Max / ctry" },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <div className="text-base font-bold text-white tabular-nums">{v}</div>
                      <div className="text-[9px] t-muted mt-0.5 leading-tight">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div
            className="absolute inset-x-0 bottom-0 h-8 pointer-events-none"
            style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
            aria-hidden="true"
          />
        </div>
      </FadeIn>

      <FadeIn delay={200} distance={16}>
        <div className="md:hidden max-w-screen-xl mx-auto px-4 py-5">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-[9px] t-muted uppercase tracking-widest mr-0.5">Less</span>
            {(["#162d47","#1a4480","#005ea2","#1464b0","#1a9af5"] as const).map((c) => (
              <div key={c} className="flex-1 h-2.5" style={{ background: c }} aria-hidden="true" />
            ))}
            <span className="text-[9px] t-muted uppercase tracking-widest ml-0.5">More</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {COUNTRY_LIST.map(([country, count]) => (
              <div key={country} className="flex items-center gap-2">
                <div
                  className="shrink-0 h-2"
                  style={{
                    width: `${Math.round(4 + (count / MAX_COUNT) * 10)}px`,
                    background: getCountryFill(getIsoForCountry(country)),
                  }}
                  aria-hidden="true"
                />
                <span className="text-xs t-sub truncate">{country}</span>
                <span className="text-xs t-ghost tabular-nums ml-auto">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
