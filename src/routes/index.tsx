import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-neutral-100 dark:bg-black">
        <main className="relative mx-auto max-w-7xl my-4 md:my-6 rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 shadow-2xl shadow-neutral-900/15 dark:shadow-black/60 border border-neutral-200/60 dark:border-neutral-800/60">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[600px] hero-glow-light dark:hidden"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[600px] hidden dark:block hero-glow-dark"
            />
            <Navbar />
            <Hero />

            <section id="services" className="min-h-[20vh]" />
            <section id="portfolio" className="min-h-[20vh]" />
            <section id="faq" className="min-h-[20vh]" />
            <section id="about" className="min-h-[20vh]" />
            <section id="contact" className="min-h-[10vh]" />
          </div>
        </main>
        <FloatingWidgets />
      </div>
    </ThemeProvider>
  );
}
