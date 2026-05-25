import * as React from "react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./SpotlightCard";
import { Button } from "../ui/button";

const editVideos = [
  "/assets/video/1.mp4",
  "/assets/video/2.mp4",
  "/assets/video/3.mp4",
  "/assets/video/4.mp4",
];

const designImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613909209432-7b4a422374dc?q=80&w=2328&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518151-0e07553bb465?q=80&w=2328&auto=format&fit=crop",
];

const automateItems = [
  {
    title: "Construction Automation Pipeline",
    description: "Automates project tracking, reporting, and resource allocation across sites.",
    media: "/assets/imgs/Construction_Automation.png",
  },
  {
    title: "Bulk Email Automation Engine",
    description: "Handles segmented outreach, personalization, and delivery optimization.",
    media: "/assets/imgs/BulkEmail_Automation.png",
  },
];

type Tab = "design" | "edit" | "automate";

export function Portfolio() {
  const [activeTab, setActiveTab] = React.useState<Tab>("edit");

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-white dark:bg-black/50"
    >
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31]" />
            Our Work
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white max-w-4xl">
            From idea to design to execution ─{" "}
            <span className="text-[#ff4d31] dark:text-[#ff4d31]">we handle all three</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Design that builds brands. Edits that stop the scroll. Automation that runs while you
            sleep. Pick a category and see what we've built.
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
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white",
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
                      className="group h-full p-4 md:p-5 rounded-x liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
                      spotlightColor="rgba(120, 140, 180, 0.28)"
                      darkSpotlightColor="rgba(255, 255, 255, 0.18)"
                    >
                      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-x bg-neutral-900/50">
                        <video
                          src={src}
                          loop
                          muted
                          playsInline
                          autoPlay
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-x" />
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
                      "h-[300px] sm:h-[340px] md:h-[400px] lg:h-[440px]",
                    )}
                  >
                    <SpotlightCard
                      className="group h-full p-3 md:p-4 rounded-x liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
                      spotlightColor="rgba(59, 130, 246, 0.15)"
                      darkSpotlightColor="rgba(59, 130, 246, 0.2)"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-md bg-neutral-900/50">
                        <img
                          src={src}
                          alt="Design portfolio"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white font-semibold text-2xl">Premium Interface</p>
                            <p className="text-white/60 text-base mt-2">
                              Web Design & Brand Identity
                            </p>
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
                {[...automateItems, ...automateItems, ...automateItems].map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[48vw] h-[440px]">
                    <SpotlightCard className="group h-full p-6 rounded-x liquid-glass">

                      <div className="flex flex-col h-full">
                        <div className="relative aspect-video w-full overflow-hidden rounded-x bg-neutral-900/50 mb-6">
                          <img
                            src={item.media}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <div className="mt-auto">
                          <h4 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-neutral-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
