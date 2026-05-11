import { useEffect, useRef, useState } from "react";
import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { Sun, Moon, Menu, X } from "lucide-react";
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
      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-20" ref={menuRef}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-sm font-semibold tracking-tight">ADHD</Link>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span>Menu</span>
          </button>
        </div>
      </div>
      {/* Popover dropdown */}
      <div
        aria-hidden={!open}
        className={`absolute right-0 left-0 bg-background border-b border-border overflow-hidden transition-all duration-200 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((l) => {
              const active = location === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex items-center gap-3 px-2 py-2.5 text-sm rounded transition-colors group ${
                      active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full shrink-0 transition-colors ${
                        active ? "bg-foreground" : "bg-transparent group-hover:bg-foreground/30"
                      }`}
                    />
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
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
          ADHD Policy Clearinghouse · Open access · No login required
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
