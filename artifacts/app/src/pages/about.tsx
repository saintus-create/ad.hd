import { BlurFade } from "@/components/magicui/blur-fade";

const faqs = [
  {
    q: "Who runs this site?",
    a: "This clearinghouse is maintained by a team of ADHD advocates, policy researchers, and accessibility specialists committed to making policy data open and understandable.",
  },
  {
    q: "How do you keep policies up to date?",
    a: "We monitor federal registers, state legislative databases, and agency announcements on a rolling basis. Each entry is reviewed before publication.",
  },
  {
    q: "Is this site USWDS compliant?",
    a: "Yes. This site is built with the U.S. Web Design System (USWDS) to meet federal accessibility and design standards, making it eligible for use in government contexts.",
  },
  {
    q: "Is the content free to use?",
    a: "Yes. All policy summaries and resources are free to access, share, and use without a login.",
  },
  {
    q: "How do I submit a policy or resource?",
    a: "Use the contact form below. We review all submissions and aim to respond within 5 business days.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="bg-foreground text-background px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0} duration={0.4}>
            <p className="text-xs font-semibold mb-2 opacity-60">About</p>
            <h1 className="text-4xl font-bold mb-3">Our mission</h1>
            <p className="text-base opacity-75 max-w-xl">
              ADHD policy is scattered, dense, and hard to act on. We fix that.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <BlurFade delay={0} duration={0.4} inView>
            <h2 className="text-xl font-bold mb-3">What we do</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We index federal and state ADHD-related laws, regulations, and policies in one searchable place.
              Whether you're a parent navigating an IEP, an employer figuring out ADA obligations, or a
              researcher tracking legislative trends — this site gives you what you need without the legal jargon.
            </p>
          </BlurFade>
          <BlurFade delay={0.05} duration={0.4} inView>
            <h2 className="text-xl font-bold mb-3">Why USWDS</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We built this site on the U.S. Web Design System so it meets federal accessibility and
              usability standards. That means it works for government agencies, schools, and anyone
              who needs to reference or embed this content in a federally funded context.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.1} duration={0.4} inView>
          <div className="rounded-lg p-8 bg-card/60 backdrop-blur-sm ring-1 ring-foreground/10 mb-14">
            <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm font-semibold mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.15} duration={0.4} inView>
          <h2 className="text-xl font-bold mb-5">Contact us</h2>
          <form className="space-y-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                placeholder="Share a policy, resource, or correction..."
              />
            </div>
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>
        </BlurFade>
      </div>
    </div>
  );
}
