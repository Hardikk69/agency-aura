import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionGlow } from "@/components/site/SectionGlow";

const bundlePackages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For creators building consistency · For founders getting started with content",
    title: "Starter Content Engine",
    description:
      "Get complete brand alignment and start your social media video engine with our standard professional support.",
    features: [
      "10 Video Reels per month",
      "Content Planning",
      "Script Assistance",
      "5 Static Posts",
      "2 Carousel Posts",
      "Thumbnail/Cover Design",
      "3 Revisions",
      "Delivery within 36–48 Hours",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For creators scaling their reach · For founders growing their online presence",
    title: "Growth Content Engine",
    description:
      "Scale your audience growth with premium edits, hooks, dedicated support and rapid turnaround times.",
    features: [
      "20 Video Reels per month",
      "Content Planning",
      "Script Assistance",
      "Hook Creation",
      "8 Static Posts",
      "3 Carousel Posts",
      "Thumbnail/Cover Design",
      "Motion Graphics",
      "Check-in Calls",
      "Dedicated Support",
      "5 Revisions",
      "Delivery within 24 Hours",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For creators going full-time · For founders who want content working 24/7",
    title: "Premium Content Engine",
    description:
      "Our all-inclusive visual engine retainer for dominating every platform with maximum quality and strategy.",
    features: [
      "30 Video Reels per month",
      "Content Planning",
      "Script Assistance",
      "Hook Creation",
      "10 Static Posts",
      "5 Carousel Posts",
      "Thumbnail/Cover Design",
      "Motion Graphics",
      "3D Animations",
      "Check-in Calls",
      "Dedicated Support",
      "Unlimited Revisions",
      "Delivery within 24 Hours",
      "Monthly Performance Report",
    ],
  },
];

export function CombinedPackage() {
  const [selectedPackage, setSelectedPackage] = useState("growth");
  const currentPkg = bundlePackages.find((p) => p.id === selectedPackage) || bundlePackages[1];

  return (
    <section
      id="combined-package"
      className="py-10 md:py-14 relative overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <SectionGlow />
      {/* Deep ambient glow at the bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff4d31]/5 dark:from-[#ff4d31]/10 via-neutral-50 dark:via-[#0a0a0a] to-neutral-50 dark:to-[#0a0a0a] pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl md:text-6xl font-black text-neutral-950 dark:text-white tracking-tighter mb-2 flex flex-col md:flex-row items-center justify-center gap-4">
            DESIGN
            <span className="text-neutral-300 dark:text-neutral-800 hidden md:block">✕</span>
            <span className="text-neutral-300 dark:text-neutral-800 md:hidden text-4xl">✕</span>
            EDIT
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
            The ultimate content engine. One team. Complete visual alignment.
          </p>
        </motion.div>

        {/* Tab Buttons for Starter, Growth, Premium */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-neutral-200/50 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 w-fit backdrop-blur-md">
            {bundlePackages.map((pkg) => {
              const isActive = selectedPackage === pkg.id;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 capitalize cursor-pointer",
                    isActive
                      ? "bg-white dark:bg-white/10 text-[#ff4d31] dark:text-white shadow-lg border border-black/5 dark:border-white/10"
                      : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white",
                  )}
                >
                  {pkg.name}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-white/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/5 p-2 md:p-3 backdrop-blur-3xl shadow-2xl overflow-hidden"
        >
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          ></div>

          <div className="relative z-10 bg-gradient-to-b from-white/90 dark:from-neutral-900/80 to-neutral-50/90 dark:to-[#0a0a0a] rounded-[2rem] border border-neutral-100 dark:border-white/5 overflow-hidden p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPackage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Left Column (Info & CTA) */}
                <div className="flex-grow flex-shrink flex-col justify-center flex-[1.2]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center -space-x-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-lg z-10">
                        <Layers className="h-4.5 w-4.5 text-[#ff4d31]" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-lg z-0">
                        <Clapperboard className="h-4.5 w-4.5 text-[#ff4d31]" />
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#ff4d31]">
                      Design ✕ Edit Bundle Offer
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-neutral-950 dark:text-white leading-tight">
                    {currentPkg.title}
                  </h3>

                  <p className="text-xs text-[#ff4d31] font-bold uppercase tracking-wider mb-4 leading-normal">
                    {currentPkg.tagline}
                  </p>

                  <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {currentPkg.description}
                  </p>

                  <Button
                    className="w-full md:w-auto self-start rounded-full h-12 px-6 text-sm font-bold transition-all duration-300 bg-[#ff4d31] text-white hover:bg-[#e8462c] shadow-lg shadow-[#ff4d31]/25 hover:shadow-xl hover:shadow-[#ff4d31]/40 hover:-translate-y-0.5"
                    data-cal-link="dhrumil-sanghvi/15min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Claim {currentPkg.name} Offer
                    <ArrowRight className="h-4.5 w-4.5 ml-2" />
                  </Button>
                </div>

                {/* Right Column (Features) */}
                <div className="flex-grow flex-shrink p-6 md:p-8 bg-neutral-100/50 dark:bg-white/5 rounded-2xl border border-neutral-200/50 dark:border-white/5 shadow-inner flex-1">
                  <div className="mb-6 pb-6 border-b border-neutral-200/80 dark:border-white/10">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-950 dark:text-white mb-2">
                      What's Included
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                      Tailored Design x Edit retention-focused assets for your brand:
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {currentPkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="h-5 w-5 text-[#ff4d31] shrink-0" />
                        <span className="text-neutral-800 dark:text-neutral-300 font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
