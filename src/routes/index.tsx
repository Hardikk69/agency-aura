import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { GradualBlur } from "@/components/site/GradualBlur";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-neutral-100 dark:bg-black">
        <main className="relative w-full bg-white dark:bg-neutral-950">
          <div className="relative">
            <Navbar />
            <Hero />
            <Services />

            <section id="portfolio" className="min-h-[20vh]" />
            <section id="faq" className="min-h-[20vh]" />
            <section id="about" className="min-h-[20vh]" />
            <section id="contact" className="min-h-[10vh]" />
          </div>
        </main>
        <FloatingWidgets />
        <GradualBlur position="bottom" height="8rem" strength={1.5} divCount={6} exponential opacity={1} />
      </div>
    </ThemeProvider>
  );
}
