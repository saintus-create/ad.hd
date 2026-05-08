import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const principles = [
  {
    title: "Write like a human",
    body: "A human voice builds trust. Write directly to the user — not at them or about them.",
    do: "You're 50 points away from Gold.",
    dont: "You are 50 points away from Gold.",
  },
  {
    title: "Lead with what matters",
    body: "Put the most important information first — in placement, size, and style.",
    do: "This card was declined by your bank.",
    dont: "The issuing bank declined your card.",
  },
  {
    title: "Be conversational",
    body: "Write as if you're speaking to someone. Use contractions. Skip the formality.",
    do: "Where to?",
    dont: "Enter destination of ride",
  },
  {
    title: "Be concise",
    body: "Every word should earn its place. If it doesn't add meaning, cut it.",
    do: "Use navigation for an efficient route.",
    dont: "You should use navigation to ensure an efficient route.",
  },
  {
    title: "Use active voice",
    body: "Active voice is clearer and more direct. Use passive voice only when it softens a message.",
    do: "Learn how to improve your ratings.",
    dont: "Learn how your ratings could be improved.",
  },
  {
    title: "Use sentence case",
    body: "Capitalize proper nouns and branded terms only. Extra capitals add cognitive load.",
    do: "Add items",
    dont: "Add Items",
  },
  {
    title: "Avoid jargon",
    body: "Plain language works for everyone. Jargon, acronyms, and slang break when localized.",
    do: "Enter your Social Security number.",
    dont: "Enter your SSN so we can begin your BGC.",
  },
  {
    title: "Skip the editorializing",
    body: "Don't tell users how to feel. Give them the information and let them decide.",
    do: "Get started",
    dont: "It's easy to get started",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border sticky top-0 z-10 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Content design</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-xs font-medium">Writing for users</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <BlurFade delay={0} duration={0.5}>
          <div className="mb-2">
            <AnimatedShinyText className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Content design
            </AnimatedShinyText>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Writing for users
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-2">
            Before you write, immerse yourself in your users' needs, priorities, and goals. You're their advocate.
          </p>
        </BlurFade>

        <BlurFade delay={0.1} duration={0.5}>
          <div className="relative mt-10 mb-14 rounded-lg border border-border bg-card p-6 overflow-hidden">
            <BorderBeam size={80} duration={8} colorFrom="#000" colorTo="#888" />
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                "Focus on your users' needs, priorities, and goals",
                "Lead with the most important information",
                "Be clear, conversational, concise, and consistent",
                "Write in sentence case",
                "Avoid jargon, slang, idioms, acronyms, and technical language",
                "Remember that your words will be translated into 50+ languages",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <BlurFade key={p.title} delay={0.05 * i} duration={0.45} inView>
              <div className="rounded-lg border border-border bg-card p-5 h-full flex flex-col gap-3">
                <h2 className="text-base font-semibold">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.body}</p>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-3 border-t border-border">
                  <div>
                    <p className="text-xs font-medium text-green-700 dark:text-green-400 mb-1">Do</p>
                    <p className="text-xs text-foreground">{p.do}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">Don't</p>
                    <p className="text-xs text-muted-foreground line-through">{p.dont}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.4} duration={0.5} inView>
          <div className="mt-14 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Based on Uber Base — Content design / Writing for users
            </p>
          </div>
        </BlurFade>
      </main>
    </div>
  );
}
