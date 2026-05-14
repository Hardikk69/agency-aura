import * as React from "react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { title: "Web Design & UI/UX", subtitle: "Conversion-optimized websites" },
  { title: "Web Development", subtitle: "Next.js, React, TypeScript" },
  { title: "SEO Optimization", subtitle: "Better Google rankings" },
  { title: "AI Integration", subtitle: "ChatGPT, Automation, Bots" },
  { title: "AI Systems", subtitle: "Custom AI solutions" },
  { title: "Software Development", subtitle: "Custom applications" },
];

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-40 w-screen flex justify-center px-4 pt-4 animate-slide-down">
      <nav
        aria-label="Primary"
        className="liquid-glass w-full max-w-2xl rounded-2xl border border-white/30 dark:border-white/10 px-6 py-3 md:py-4 flex items-center justify-center backdrop-blur-s"
      >
        <Link to="/" className="flex items-center gap-2 mr-4">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm mr-4">
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className="group inline-flex items-center gap-1 px-3 py-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full pt-3 origin-top transition-all duration-200",
                open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none",
              )}
            >
              <div className="min-w-[300px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl p-2">
                {services.map((s) => (
                  <a
                    key={s.title}
                    href="#services"
                    className="block px-3 py-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {s.title}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {s.subtitle}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-x bg-green-500 text-white hover:bg-green-600 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 transition-transform hover:scale-[1.03] ml-4"
          >
            <a href="https://wa.me/+919734437070">Whatsapp</a>
          </Button>
          <Button
            asChild
            className="rounded-x bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-transform hover:scale-[1.03] ml-2"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] sm:w-96 rounded-l-3xl">
              <div className="flex flex-col gap-1 mt-8">
                <div className="px-2 pb-2 text-xs uppercase tracking-wider text-neutral-500">
                  Services
                </div>
                {services.map((s) => (
                  <a
                    key={s.title}
                    href="#services"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <div className="text-sm font-medium">{s.title}</div>
                    <div className="text-xs text-neutral-500">{s.subtitle}</div>
                  </a>
                ))}
                <div className="border-t border-neutral-200 dark:border-neutral-800 my-3" />
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header >
  );
}