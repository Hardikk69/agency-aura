import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CombinedPackage() {
  return (
    <section id="combined-package" className="py-24 md:py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Deep ambient glow at the bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff4d31]/10 via-[#0a0a0a] to-[#0a0a0a]"></div>
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
            DESIGN 
            <span className="text-neutral-800 hidden md:block">✕</span>
            <span className="text-neutral-800 md:hidden text-4xl">✕</span>
            EDIT
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl mx-auto">
            The ultimate content engine. One team. Complete visual alignment.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-neutral-900/40 border border-white/5 p-2 md:p-3 backdrop-blur-3xl shadow-2xl overflow-hidden"
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

          <div className="relative z-10 bg-gradient-to-b from-neutral-900/80 to-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 p-8 md:p-12">
            
            {/* Left Column (Info & CTA) */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center -space-x-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 border border-white/10 shadow-lg z-10">
                    <Layers className="h-5 w-5 text-[#ff4d31]" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 border border-white/10 shadow-lg z-0">
                    <Clapperboard className="h-5 w-5 text-[#ff4d31]" />
                  </div>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-[#ff4d31]">
                  The Ultimate Bundle
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                The Full Content <br className="hidden md:block" /> Engine.
              </h3>
              
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                Why hire a designer and an editor separately? Get a unified visual identity across your brand and your videos. One team. Complete consistency.
              </p>

              <Button
                asChild
                className="w-full md:w-auto self-start rounded-full h-14 px-8 text-base font-bold transition-all duration-300 bg-[#ff4d31] text-white hover:bg-[#e8462c] shadow-lg shadow-[#ff4d31]/25 hover:shadow-xl hover:shadow-[#ff4d31]/40 hover:-translate-y-0.5"
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Claim Bundle Offer
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Right Column (Features) */}
            <div className="flex-1 bg-white/5 rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner">
              <div className="mb-6 pb-6 border-b border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">What's Included</h4>
                <p className="text-sm text-neutral-400">Everything from our premium Design and Edit packages, perfectly integrated.</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Complete Brand Identity & Guidelines",
                  "Unlimited Short-Form Edits",
                  "Custom Motion Graphics Package",
                  "Platform-Native Social Creatives",
                  "Dedicated Designer & Editor",
                  "Priority 24h Turnarounds",
                  "Unified Strategy & Content Sync"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-[#ff4d31] shrink-0" />
                    <span className="text-neutral-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
