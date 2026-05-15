import { Button } from "@/components/ui/button";
import { LogoMarquee } from "./Marquee";
import { RotatingWord } from "./RotatingWord";
import { LightRays } from "./LightRays";
import { useTheme } from "@/components/theme-provider";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-20 md:py-28">
      {theme === "dark" && (
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.25}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl text-center z-10">
        <div
          className="animate-fade-up text-6xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-neutral-950 dark:text-white flex flex-col items-center justify-center font-Bricolage Grotesque"
          style={{ animationDelay: "0.05s" }}
        >
          <span>We help business & creators with</span>
          <div className="flex flex-col items-center mt-4" >
            <div className="text-6xl md:text-8xl lg:text-9xl leading-none font-extrabold">
              <RotatingWord words={["Designing", "Editing", "Automation"]} />
            </div>
          </div>
        </div>
        <p
          className="animate-fade-up mx-auto mt-6 md:mt-8 max-w-2xl text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300"
          style={{ animationDelay: "0.2s" }}
        >
          We work as creative and tech team handaling boring stuff so that you can focus on taking your business to <b> the mooooooooon!</b>
        </p>
        <div
          className="animate-fade-up mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.35s" }}
        >
          <Button
            asChild
            className="rounded-x px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-transform hover:scale-[1.03]"
          >
            <a href="#contact">Book a Call</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-x px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <a href="#portfolio">Our Services</a>
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