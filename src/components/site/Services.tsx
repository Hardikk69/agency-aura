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
  features: string[];
  proofLabel: string;
  proofValue: string;
  images: string;
};

const services: Service[] = [
  {
    icon: Sparkles,
    title: "Pitch Decks",
    description:
      "We research the market, build the narrative arc, and design the slides, so your round closes on the...",
    tag: "EDIT",
    features: ["Narrative arc + Storyline", "Market research", "Custom-designed slides"],
    proofLabel: "PROOF",
    proofValue: "$25M+ raised",
    images: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
  },
  {
    icon: Code2,
    title: "Web Design & UI/UX",
    description:
      "Conversion-focused interfaces crafted with obsessive attention to typography, spacing and motion.",
    tag: "DESIGN",
    features: ["Obsessive attention to detail", "High-fidelity prototypes", "Design systems & tokens"],
    proofLabel: "PROOF",
    proofValue: "100+ projects",
    images: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2328&auto=format&fit=crop",
    
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
    "ChatGPT-powered assistants, automations and bots embedded directly into your product.",
    tag: "AUTOMATE",
    features: ["Custom RAG pipelines", "LLM fine-tuning", "Agentic workflows"],
    proofLabel: "PROOF",
    proofValue: "50% efficiency gain",
    images: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2328&auto=format&fit=crop",
  },
];


function ServiceCard({ service, index }: { service: Service; index: number }) {
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
      <div style={{ animationDelay: `${index * 60}ms` }} className="relative flex flex-col h-full">
        {/* Image Grid Container */}
        <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-xl bg-black/40 mb-8">
        
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-900/50">
                <img
                  src={service.images}
                  alt=""
                  className="h-full w-full object-cover opacity-80"
                />
          
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-lg border border-neutral-200/50 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-800 dark:text-neutral-200">
            {service.tag}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/50 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] text-neutral-500 dark:text-neutral-400">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          {service.title}
        </h3>
        
        <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {service.description}
        </p>

        <ul className="mt-7 space-y-3.5">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-[14px] text-neutral-600 dark:text-neutral-400">
              <div className="h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-10 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
            {service.proofLabel}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            {service.proofValue}
          </span>
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