import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { cn } from "@/lib/utils";

interface Review {
  review: string;
  name: string;
  position: string;
  service: string;
}

const reviews: Review[] = [
  {
    review: "Vertex transformed our brand's visual identity completely. Highly recommended!",
    name: "Sarah Chen",
    position: "CEO at TechFlow",
    service: "Web Design",
  },
  {
    review: "Their video editing speed and quality are unmatched in the industry.",
    name: "Marcus Thorne",
    position: "YouTube Personality",
    service: "Video Editing",
  },
  {
    review: "The AI automation they implemented saved us over 20 hours a week.",
    name: "Elena Rodriguez",
    position: "Operations Manager",
    service: "AI Automation",
  },
  {
    review: "Incredible attention to detail. Every frame is a masterpiece.",
    name: "David Kim",
    position: "Filmmaker",
    service: "Post Production",
  },
  {
    review: "The most creative team we've ever worked with. Truly visionary.",
    name: "Jessica Walsh",
    position: "Art Director",
    service: "Creative Direction",
  },
  {
    review: "They understood our vision from day one and exceeded all expectations.",
    name: "Liam O'Connor",
    position: "Marketing Head",
    service: "Brand Strategy",
  },
  {
    review: "Results-driven approach that actually moved the needle for our sales.",
    name: "Aisha Patel",
    position: "E-commerce Founder",
    service: "Viral Content",
  },
  {
    review: "Professional, responsive, and incredibly talented. A joy to work with.",
    name: "Tom Harrison",
    position: "Product Lead",
    service: "UI/UX Design",
  },
];

const ReviewCard = ({ review, name, position, service }: Review) => {
  return (
    <div className="w-[380px] shrink-0 p-4">
      <SpotlightCard 
        className={cn(
          "flex flex-col h-full p-8 rounded-xl",
          "liquid-glass dark:!bg-white/[0.03] border-white/40 dark:border-white/10",
          "backdrop-blur-xl backdrop-saturate-150 shadow-2xl shadow-orange-500/5"
        )}
        spotlightColor="rgba(120, 140, 180, 0.28)"
        darkSpotlightColor="rgba(255, 255, 255, 0.18)"
      >
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-xl font-bold text-neutral-900 dark:text-white leading-tight mb-8 line-clamp-2">
            "{review}"
          </p>
          
          <div className="mt-auto pt-6 border-t border-neutral-200/50 dark:border-white/5">
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold text-neutral-950 dark:text-neutral-100 tracking-tight">
                {name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {position}
                </span>
                <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-sm font-semibold text-orange-500 dark:text-orange-400">
                  {service}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export function Reviews() {
  // Split reviews into two rows of 4 unique cards each
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4, 8);

  return (
    <section id="reviews" className="relative w-full overflow-hidden py-16 md:py-24 bg-white dark:bg-black">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/[0.03] blur-[120px] pointer-events-none rounded-full" />
      
      {/* Doodle Sketch - Left Side */}
      <div className="absolute top-1/4 -left-12 w-48 h-48 pointer-events-none opacity-20 dark:opacity-30">
        <img
          src="https://cdn.prod.website-files.com/6778043699a2f913f47628dd/67cf96eb6ef7b334f3a6e2a2_sketch%20orange.svg"
          alt=""
          className="w-full h-full object-contain -rotate-12 scale-x-[-1]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-20 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
          Testimonials
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white"
        >
          The Proof is in <span className="text-orange-500 dark:text-orange-400">the Results</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
        >
          Don't just take our word for it. We've helped dozens of creators and brands scale their content through strategic editing and automation.
        </motion.p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Row 1: Moving Left */}
        <div className="marquee-mask relative flex overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1].map((review, i) => (
              <ReviewCard key={`row1-${i}`} {...review} />
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="marquee-mask relative flex overflow-hidden py-4">
          <div className="flex animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused]">
            {[...row2, ...row2, ...row2].map((review, i) => (
              <ReviewCard key={`row2-${i}`} {...review} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
}
