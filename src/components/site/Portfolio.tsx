import * as React from "react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./SpotlightCard";
import { Button } from "../ui/button";

const editVideos = [
  "https://play.gumlet.io/embed/69f733741dfaccdc957ab32f?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/698b8d45873071aec5f38ae9?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/69f733741dfaccdc957ab331?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/69c250aac98b51e9c56f927e?background=false&autoplay=true&loop=true&disable_player_controls=false",
];

const designImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613909209432-7b4a422374dc?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518151-0e07553bb465?q=80&w=2328&auto=format&fit=crop",
];

const automateVideos = [
  "https://play.gumlet.io/embed/69f733741dfaccdc957ab32f?background=false&autoplay=true&loop=true&disable_player_controls=false", // Placeholder
  "https://play.gumlet.io/embed/698b8d45873071aec5f38ae9?background=false&autoplay=true&loop=true&disable_player_controls=false", // Placeholder
];

type Tab = "design" | "edit" | "automate";

export function Portfolio() {
  const [activeTab, setActiveTab] = React.useState<Tab>("edit");

  return (
    <section id="portfolio" className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-24 md:py-32 bg-white dark:bg-black/50">
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(80% 50% at 50% 100%, rgba(249,115,22,0.06), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent"
      />

      {/* Doodle Placeholder - Right Side */}
      <div className="absolute top-1/2 -right-12 md:right-0 -translate-y-1/2 w-32 md:w-64 h-64 pointer-events-none opacity-20 dark:opacity-30">
        <img
          src="https://cdn.prod.website-files.com/6778043699a2f913f47628dd/67cf96eb6ef7b334f3a6e2a2_sketch%20orange.svg"
          alt=""
          className="w-full h-full object-contain rotate-12"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Portfolio
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white max-w-4xl">
            Your footage into world class <span className="text-orange-600 dark:text-orange-400">edits that go viral</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            The unparalleled production standard behind the biggest names in media. Podcasts. Shows. Long form. We got it all.
          </p>

          {/* Tab Buttons */}
          <div className="mt-10 flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 w-fit">
            {(["design", "edit", "automate"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 capitalize",
                  activeTab === tab
                    ? "bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content based on Active Tab */}
        <div className="relative min-h-[400px]">
          {activeTab === "edit" && (
            <div className="marquee-mask overflow-hidden w-full animate-in fade-in duration-700">
              <div className="flex w-max gap-4 md:gap-6 animate-marquee hover:[animation-play-state:paused] py-4">
                {[...editVideos, ...editVideos, ...editVideos].map((src, index) => (
                  <div key={index} className="w-[170px] md:w-[300px] flex-shrink-0">
                    <SpotlightCard
                      className="group h-full p-4 md:p-5 rounded-[2.5rem] liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
                      spotlightColor="rgba(120, 140, 180, 0.28)"
                      darkSpotlightColor="rgba(255, 255, 255, 0.18)"
                    >
                      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] bg-neutral-900/50">
                        <iframe loading="lazy" src={src} className="absolute inset-0 h-full w-full border-none" />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem]" />
                      </div>
                    </SpotlightCard>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "design" && (
            <div className="marquee-mask overflow-hidden w-full animate-in fade-in duration-700">
              <div className="flex w-max gap-6 md:gap-8 animate-marquee hover:[animation-play-state:paused] py-4">
                {[...designImages, ...designImages, ...designImages].map((src, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex-shrink-0 transition-transform duration-500",
                      "w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw]",
                      "h-[300px] sm:h-[340px] md:h-[400px] lg:h-[440px]"
                    )}
                  >
                    <SpotlightCard
                      className="group h-full p-3 md:p-4 rounded-[2rem] liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
                      spotlightColor="rgba(59, 130, 246, 0.15)"
                      darkSpotlightColor="rgba(59, 130, 246, 0.2)"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900/50">
                        <img 
                          src={src} 
                          alt="Design portfolio" 
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white font-semibold text-2xl">Premium Interface</p>
                            <p className="text-white/60 text-base mt-2">Web Design & Brand Identity</p>
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "automate" && (
            <div className="marquee-mask overflow-hidden w-full animate-in fade-in duration-700">
              <div className="flex w-max gap-8 md:gap-10 animate-marquee hover:[animation-play-state:paused] py-4">
                {[...automateVideos, ...automateVideos, ...automateVideos].map((src, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex-shrink-0",
                      "w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[48vw]",
                      "h-[300px] sm:h-[340px] md:h-[400px] lg:h-[440px]"
                    )}
                  >
                    <SpotlightCard
                      className="group h-full p-6 rounded-[2.5rem] liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
                      spotlightColor="rgba(139, 92, 246, 0.15)"
                      darkSpotlightColor="rgba(139, 92, 246, 0.2)"
                    >
                      <div className="flex flex-col h-full">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900/50 mb-6">
                           <iframe loading="lazy" src={src} className="absolute inset-0 h-full w-full border-none" />
                        </div>
                        <div className="mt-auto">
                          <h4 className="text-2xl font-semibold text-neutral-900 dark:text-white">AI Automation System {index + 1}</h4>
                          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Advanced RAG-powered agentic workflows integrated with enterprise ecosystems.</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="rounded-xl px-8 py-4 h-auto border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all hover:scale-[1.03] shadow-sm"
          >
            <a href="#portfolio">View Full Portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
