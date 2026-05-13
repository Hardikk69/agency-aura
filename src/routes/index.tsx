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
        <main className="relative w-full bg-white dark:bg-neutral-950">
          <div className="relative">
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
