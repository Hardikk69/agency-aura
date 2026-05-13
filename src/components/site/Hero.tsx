import { Button } from "@/components/ui/button";
import { LogoMarquee } from "./Marquee";
import { RotatingWord } from "./RotatingWord";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-checker" />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-checker-fade" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h1
          className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-neutral-950 dark:text-white"
          style={{ animationDelay: "0.05s" }}
        >
          We build what makes
          <br />
          your <RotatingWord words={["Designing", "Editing", "Automation"]} /> grow
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 md:mt-8 max-w-2xl text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300"
          style={{ animationDelay: "0.2s" }}
        >
          Websites, web apps and custom software all from one hand, perfectly tailored to your business.
        </p>
        <div
          className="animate-fade-up mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.35s" }}
        >
          <Button
            asChild
            className="rounded-full px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-transform hover:scale-[1.03]"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <a href="#portfolio">See Portfolio</a>
          </Button>
        </div>

        <div
          className="animate-fade-up mt-16 md:mt-24"
          style={{ animationDelay: "0.5s" }}
        >
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}