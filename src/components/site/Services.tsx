import * as React from "react";
import {
  Sparkles,
  Code2,
  Search,
  Bot,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./SpotlightCard";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
};

const services: Service[] = [
  {
    icon: Sparkles,
    title: "Web Design & UI/UX",
    description:
      "Conversion-focused interfaces crafted with obsessive attention to typography, spacing and motion.",
    tag: "Design",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Production-grade Next.js, React and TypeScript builds engineered for performance and scale.",
    tag: "Engineering",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical SEO, content architecture and Core Web Vitals tuned to climb Google rankings.",
    tag: "Growth",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "ChatGPT-powered assistants, automations and bots embedded directly into your product.",
    tag: "AI",
  },
  {
    icon: Cpu,
    title: "AI Systems",
    description:
      "Custom AI pipelines, RAG, and agent workflows tailored to your data and operations.",
    tag: "Systems",
  },
  {
    icon: Layers,
    title: "Software Development",
    description:
      "Bespoke applications, internal tools and platforms built end-to-end by a senior team.",
    tag: "Product",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <SpotlightCard
      className={cn(
        "group h-full p-7 md:p-8 rounded-2xl",
        "liquid-glass dark:!bg-white/[0.04] dark:!shadow-none",
        "border-white/40 dark:border-white/10",
        "backdrop-blur-xl backdrop-saturate-150",
      )}
      spotlightColor="rgba(120, 140, 180, 0.28)"
      darkSpotlightColor="rgba(255, 255, 255, 0.18)"
    >
      <div style={{ animationDelay: `${index * 60}ms` }} className="relative">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl",
              "border border-neutral-200/70 dark:border-white/10",
              "bg-white/80 dark:bg-white/[0.04]",
              "text-neutral-800 dark:text-neutral-100",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            {service.tag}
          </span>
        </div>

        <h3 className="mt-7 text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {service.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <span>Learn more</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-24 md:py-32"
    >
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Services
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Everything you need, <span className="text-neutral-400 dark:text-neutral-500">under one roof.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            From design to deployment to AI — a senior team executing on every
            layer of your product, with restraint and precision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}