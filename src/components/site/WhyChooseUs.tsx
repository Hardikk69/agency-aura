import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Sparkles, Zap, Shield, Target, Rocket, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import StarBorder from "./StarBorder";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative transition-all duration-500 ease-out hover:-translate-y-3"
    >
      <StarBorder 
        className="w-full h-full" 
        color="rgba(255, 255, 255, 0.6)" 
        speed="16s" 
        thickness={3}
      >
        <div className={cn(
          "relative flex flex-col items-start p-8 h-full w-full overflow-hidden",
          "liquid-glass dark:!bg-white/[0.03] border-none shadow-none",
          "backdrop-blur-xl backdrop-saturate-150"
        )}>
          {/* Spotlight Effect (Light Mode) */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:hidden"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(120, 140, 180, 0.28),
                  transparent 80%
                )
              `,
            }}
          />
          {/* Spotlight Effect (Dark Mode) */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.18),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Animated Icon Container */}
          <div className="relative mb-6">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500"
            >
              <Icon className="h-7 w-7 transition-transform duration-500 group-hover:rotate-[360deg]" />
              
              {/* Icon Glow Animation */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-xl bg-orange-500/20 blur-xl"
              />
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
            {description}
          </p>
        </div>
      </StarBorder>
    </motion.div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "Elite Production",
    description: "The unparalleled standard behind the biggest names in media. We don't just edit; we craft cinematic experiences.",
  },
  {
    icon: Zap,
    title: "Blazing Speed",
    description: "Lightning-fast turnarounds without compromising on quality. Your content moves at the speed of culture.",
  },
  {
    icon: Shield,
    title: "Obsessive Detail",
    description: "Pixel-perfect precision in every frame. We obsess over typography and motion so you don't have to.",
  },
  {
    icon: Rocket,
    title: "Viral Engineering",
    description: "We understand the algorithms. Our edits are engineered to capture attention and hold it until the final second.",
  },
  {
    icon: Target,
    title: "Conversion First",
    description: "ROI-driven creative direction that turns viewers into customers and followers into fans.",
  },
  {
    icon: Users,
    title: "Strategic Partners",
    description: "We don't just work for you; we work with you as a long-term growth partner for your brand.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-white dark:bg-black">
      {/* Background Ambience / Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Our Edge
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            We bridge the gap between creative vision and technical execution, delivering results that dominate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
