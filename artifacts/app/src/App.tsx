import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { Sun, Moon } from "lucide-react";
import { ThemeProvider, useTheme } from "@/contexts/theme";
import Home from "@/pages/home";
import Policies from "@/pages/policies";
import Resources from "@/pages/resources";
import About from "@/pages/about";
import Studies from "@/pages/studies";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studies", label: "Research" },
  { href: "/policies", label: "Policies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

function Nav() {
  const [location] = useLocation();
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm tracking-tight font-normal">ADHD</Link>
        <div className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                location === l.href
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Built with USWDS · Open access · No login required
        </p>
        <div className="flex gap-4">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/studies" component={Studies} />
          <Route path="/policies" component={Policies} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route>
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
              <h1 className="text-2xl font-bold mb-2">Page not found</h1>
              <p className="text-sm text-muted-foreground mb-6">Check the URL or go back home.</p>
              <Link href="/" className="text-sm font-medium underline">Go home</Link>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </ThemeProvider>
  );
}
