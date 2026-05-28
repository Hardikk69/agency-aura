import * as React from "react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Menu,
  Palette,
  Video,
  Cpu,
  FolderHeart,
  HelpCircle,
  Info,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { title: "Design", subtitle: "Brand, web, decks & social", to: "/design", icon: Palette },
  { title: "Edit", subtitle: "Short-form, long-form & cinematic", to: "/edit", icon: Video },
  { title: "Automate", subtitle: "AI agents, workflows & pipelines", to: "/automate", icon: Cpu },
] as const;

const navLinks = [
  { label: "Portfolio", href: "#portfolio", icon: FolderHeart },
  { label: "Why Us", href: "#why-choose-us", icon: Info },
  { label: "Reviews", href: "#reviews", icon: HelpCircle },
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
    <header className="sticky top-0 z-50 w-full flex justify-center px-4 py-4 pointer-events-none">
      <nav
        aria-label="Primary"
        className="pointer-events-auto relative w-full max-w-4xl rounded-2xl border border-white/40 dark:border-white/10 px-4 md:px-6 py-2.5 md:py-4 flex items-center justify-between liquid-glass dark:!bg-neutral-900/80 backdrop-blur-2xl saturate-150 shadow-lg shadow-black/5"
        style={{
          transform: "translateZ(0)",
        }}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm mr-4">
          <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button
              className="group inline-flex items-center gap-1 px-3 py-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
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
                "absolute left-1/2 -translate-x-1/2 top-full pt-3 origin-top transition-all duration-300 ease-out z-50",
                open
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
              )}
            >
              <div className="min-w-[280px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl p-2 overflow-hidden">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 group/item"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover/item:text-primary transition-colors">
                        {s.title}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        {s.subtitle}
                      </div>
                    </div>
                  </Link>
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
            className="rounded-x bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-transform hover:scale-[1.03] ml-2"
            data-cal-link="dhrumil-sanghvi/15min"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Call
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
                  <Link
                    key={s.title}
                    to={s.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{s.title}</div>
                      <div className="text-xs text-neutral-500">{s.subtitle}</div>
                    </div>
                  </Link>
                ))}
                <div className="border-t border-neutral-200 dark:border-neutral-800 my-3" />
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 px-3 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <l.icon className="h-5 w-5 text-neutral-400" />
                    <span className="text-sm font-medium">{l.label}</span>
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 rounded-full bg-green-500 text-white hover:bg-green-600 dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
                >
                  <a href="https://wa.me/+919734437070" onClick={() => setMobileOpen(false)}>
                    Whatsapp
                  </a>
                </Button>
                <Button
                  className="mt-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                  data-cal-link="dhrumil-sanghvi/15min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
