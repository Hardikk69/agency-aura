import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import StarBorder from "@/components/site/StarBorder";
import {
  Bot,
  Workflow,
  Mail,
  Database,
  Network,
  Zap,
  ArrowRight,
  Terminal,
  Megaphone,
  ShoppingBag,
  Home,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { N8nWorkflowSimulator } from "@/components/automate/N8nWorkflowSimulator";
import { Reviews } from "@/components/site/Reviews";
import { SectionGlow } from "@/components/site/SectionGlow";

export const Route = createFileRoute("/automate")({
  head: () => ({
    meta: [
      { title: "Automation Services — Vertex Media House" },
      {
        name: "description",
        content: "AI agents, workflows and pipelines that run your business while you sleep.",
      },
      { property: "og:title", content: "Automation Services — Vertex Media House" },
      {
        property: "og:description",
        content: "AI agents, workflows and pipelines that run your business while you sleep.",
      },
    ],
  }),
  component: AutomatePage,
});

/* ---------- Doodles ---------- */
function NodeGraph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none">
      <circle cx="14" cy="40" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="66" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="106" cy="40" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 40 L54 18 M20 40 L54 62 M66 18 L100 40 M66 62 L100 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
function PlusGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      {[20, 50, 80].flatMap((y) =>
        [20, 50, 80].map((x) => (
          <g key={`${x}-${y}`} stroke="currentColor" strokeWidth="1.5">
            <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
            <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
          </g>
        )),
      )}
    </svg>
  );
}
function CircuitDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none">
      <path
        d="M4 20 L40 20 L48 12 L72 12 L80 20 L116 20 L124 28 L156 28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="4" cy="20" r="3" fill="currentColor" />
      <circle cx="156" cy="28" r="3" fill="currentColor" />
      <rect
        x="40"
        y="8"
        width="40"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-10 md:pt-20 pb-14">
      {/* liquid glass background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 liquid-glass dark:!bg-white/[0.02]"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <SectionGlow />
      <div className="absolute top-28 left-8 hidden md:block text-[#ff4d31]/60 doodle-float">
        <NodeGraph className="h-20 w-28" />
      </div>
      <div className="absolute top-32 right-10 hidden md:block text-[#ff4d31]/40 doodle-spin-slow">
        <PlusGrid className="h-20 w-20" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" />
              Automation Suite
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[0.95]"
            >
              Stop doing work<span className="text-[#ff4d31]"> a system can do for you.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
            >
              We build AI workflows, agents, and automation pipelines that handle the repetitive work — so you focus on the 20% that actually needs you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                className="rounded-xl px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#ff4d31] dark:text-white dark:hover:bg-[#e8462c]"
                data-cal-link="dhrumil-sanghvi/15min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a Call
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent"
              >
                <a href="#portfolio">See Workflows</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 h-[320px] sm:h-[420px] md:h-[480px] lg:h-[530px] relative w-full"
          >
            <div className="w-full h-full relative lg:max-w-[calc(100%-50px)] lg:ml-auto">
              <N8nWorkflowSimulator />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const autoServices = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Chat agents, voice bots, and task agents that don't just answer questions — they take action. From lead qualification to customer support, fully automated.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "n8n, Zapier, Make — wired into the tools you already use. We map your process, remove the manual steps, and build flows that just run.",
  },
  {
    icon: Mail,
    title: "Email & Outreach Automation",
    desc: "Personalised follow-ups, triaged inboxes, and cold outreach sequences — sent at the right time, to the right person, without you touching a keyboard.",
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    desc: "Automatic lead capture, enrichment, scoring, and routing. Your CRM stays clean and up to date — without anyone manually entering a thing.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    desc: "Complex pipelines where multiple AI agents work together to complete full workflows end to end — research, write, approve, publish. No human in the middle.",
  },
  {
    icon: Terminal,
    title: "Content Pipelines",
    desc: "From idea to published post — automated. We build systems that research, draft, format, and schedule your content across every platform on autopilot.",
  },
];

export function AutomateServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}) {
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
        <div
          className={cn(
            "relative flex flex-col items-start p-8 h-full w-full overflow-hidden",
            "liquid-glass dark:!bg-white/[0.03] border-none shadow-none",
            "backdrop-blur-xl backdrop-saturate-150",
          )}
        >
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
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-[#ff4d31] group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500"
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
                className="absolute inset-0 rounded-xl bg-[#ff4d31]/20 blur-xl"
              />
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">{desc}</p>
        </div>
      </StarBorder>
    </motion.div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40 overflow-hidden"
    >
      <SectionGlow />
      <div className="absolute top-16 right-8 hidden md:block text-[#ff4d31]/40 doodle-pulse">
        <CircuitDoodle className="h-8 w-40" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" />
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            Modular. Composable. <span className="text-[#ff4d31]">Always-on.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Every automation we build is custom to your business — not a template, not a shortcut. Built to run 24/7 without you in the loop.
          </motion.p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {autoServices.map((s, i) => (
            <AutomateServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              desc={s.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio (gorgeous scroll-stack and industry filtering) ---------- */

const industries = {
  realestate: {
    name: "Real Estate",
    icon: Home,
    items: [
      {
        title: "AI Lead Booking & Nurture Agent", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "/assets/imgs/Construction_Automation.png",
        },
        {
        title: "Property Listing Content Pipeline", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
        "/assets/imgs/BulkEmail_Automation.png",
      },
    ],
  },
  marketing: {
    name: "Marketing & Agencies",
    icon: Megaphone,
    items: [
      {
        title: "Multi-Agent Content Machine", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-cyber-security-system-scanning-digital-code-48567-large.mp4",
      },
      {
        title: "Clay Lead Enrichment & Outreach Pipeline", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-interface-showing-data-analysis-48571-large.mp4",
      },
    ],
  },
  ecommerce: {
    name: "E-Commerce & Retail",
    icon: ShoppingBag,
    items: [
      {
        title: "Automated Customer Support Agent",
        problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ],
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-with-neon-lights-48573-large.mp4",
      },
      {
        title: "Real-Time Inventory & Price Sync Pipeline",
        problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-with-flashing-lights-42284-large.mp4",
      },
    ],
  },
  saas: {
    name: "SaaS & Tech",
    icon: Cpu,
    items: [
      {
        title: "AI User Onboarding & Retention Agent", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-network-nodes-connecting-in-a-loop-48575-large.mp4",
      },
      {
        title: "DevOps & Error Resolution Pipeline", problemPoints: [
          "Content production requires multiple specialized roles",
          "Research and drafting consume excessive internal bandwidth",
          "Maintaining publishing consistency becomes difficult at scale",
        ],
        solutionPoints: [
          "Multi-agent workflow automates research and drafting",
          "Repurposes content into newsletters and social campaigns",
          "Maintains consistent output with minimal human oversight",
        ], videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-streams-of-digital-data-transferring-on-blue-background-48569-large.mp4",
      },
    ],
  },
};

function Portfolio() {
  const [activeIndustry, setActiveIndustry] = useState<keyof typeof industries>("marketing");
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  
  // Reset active item index when changing industry
  React.useEffect(() => {
    setActiveItemIndex(0);
  }, [activeIndustry]); 
  const activeItems = industries[activeIndustry].items;
  const activeItem = activeItems[activeItemIndex] || activeItems[0];
console.log(activeItemIndex);
  return (
    <section
      id="portfolio"
      className="relative w-full px-4 sm:px-6 md:px-8 py-20 md:py-28 bg-white dark:bg-black/20"
    >
      <SectionGlow />

      {/* Decorative doodles */}
      <div className="absolute bottom-10 left-12 hidden md:block text-[#ff4d31]/30 doodle-float">
        <NodeGraph className="h-16 w-24" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" />
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            What <span className="text-[#ff4d31]">We Build.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            These are real systems we've built — here's exactly how they work and what they automate.
          </motion.p>
        </div>

        {/* Industry Tabs Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {Object.entries(industries).map(([key, ind]) => {
            const Icon = ind.icon;
            const isActive = activeIndustry === key;
            return (
              <button
                key={key}
                onClick={() => setActiveIndustry(key as keyof typeof industries)}
                className={cn(
                  "group relative flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden",
                  isActive
                    ? "text-white shadow-lg shadow-[#ff4d31]/20"
                    : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-white/5",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndustryBg"
                    className="absolute inset-0 bg-[#ff4d31] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 group-hover:scale-110",
                      isActive ? "text-white" : "text-neutral-500 dark:text-neutral-400",
                    )}
                  />
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Side-Tab Layout Grid */}
        <div className="mt-10 flex flex-col gap-0 sm:mt-14 lg:grid lg:grid-cols-[2.5fr_1px_9.5fr]">
          {/* Column 1: Vertical Button Selector List */}
          <div className="flex flex-col pr-0 lg:pr-6 xl:pr-8">
            {activeItems.map((item, idx) => {
              const isActive = activeItemIndex === idx;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveItemIndex(idx)}
                  className="group relative flex items-center gap-5 py-4 text-left transition-colors duration-200 focus:outline-none cursor-pointer w-full"
                >
                  {/* Sliding vertical active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeVerticalIndicator"
                      className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[#ff4d31] origin-top"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="pl-5">
                    <span
                      className={cn(
                        "block text-[10px] font-bold tabular-nums transition-colors duration-200",
                        isActive ? "text-[#ff4d31]" : "text-neutral-400/40 dark:text-white/20",
                      )}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-display text-[13px] sm:text-[14.5px] font-semibold leading-snug transition-colors duration-200",
                        isActive
                          ? "text-neutral-950 dark:text-white font-bold"
                          : "text-neutral-500/85 dark:text-neutral-400/60 font-medium group-hover:text-neutral-800 dark:group-hover:text-neutral-200",
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Column 2: Vertical Divider Line */}
          <div className="hidden lg:block bg-neutral-200 dark:bg-white/10 w-px h-full"></div>

          {/* Column 3: Active Card Content Details */}
          <div className="relative mt-10 overflow-hidden lg:mt-0 lg:pl-8 xl:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry}-${activeItemIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative flex h-full flex-col justify-start py-4 lg:py-8"
              >
                {/* Overlined Category */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff4d31]">
                  {industries[activeIndustry].name} / BUILD{" "}
                  {String(activeItemIndex + 1).padStart(2, "0")}
                </p>

                {/* Grid layout splitting Text on Left, Video on Right */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mt-4 items-start">     
                  {/* Left sub-column: Text Details */}
                  <div className="lg:col-span-5 flex flex-col self-start">
                    {/* Problem Section */}
                    <div className="mt-5">
                      <p className="text-[20px] font-bold text-[#ff0000] uppercase tracking-wider mb-1.5">Problem</p>
                      <ul className="mt-2 space-y-2">
                        {activeItem.problemPoints.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs leading-relaxed text-neutral-650 dark:text-neutral-400 sm:text-[13.5px]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution Section */}
                    <div className="mt-4">
                      <p className="text-[20px] font-bold text-[#00ff00] uppercase tracking-wider mb-1.5">Solution</p>
                      <ul className="mt-2 space-y-2">
                        {activeItem.solutionPoints.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs leading-relaxed text-neutral-650 dark:text-neutral-400 sm:text-[13.5px]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ff00]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA link */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-1/2 rounded-xl px-6 py-3 mt-6 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent"
                    >
                      <a
                        data-cal-link="dhrumil-sanghvi/15min"
                        data-cal-config='{"layout":"month_view"}'
                      >
                        Book a Live Demo
                      </a>
                    </Button>
                  </div>

                  {/* Right sub-column: Premium Mock Browser Video Player */}
                  <div className="lg:col-span-7 flex flex-col w-full self-start">
                    <div className="mb-5">
                      <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-2xl lg:text-[1.7rem]">
                        {activeItem.title}
                      </h3>

                      <div className="mt-3 h-[3px] w-14 rounded-full bg-[#ff4d31]" />
                    </div>
                    <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-950 shadow-2xl group/video">
                      {/* Browser header bar */}
                      <div className="h-7 bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/5 px-3 flex items-start justify-between">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="text-[9px] font-mono text-neutral-555 dark:text-neutral-500 bg-white dark:bg-neutral-900 px-2 py-0.5 rounded truncate max-w-[120px]">
                          active_run.sh
                        </div>
                        <div className="w-4" />
                      </div>

                      {/* Video wrapper */}
                      <div className="w-full h-[calc(100%-28px)] relative bg-black">
                        <img
                          src={activeItem.videoUrl}
                          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2.5 right-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md">
                          <span className="h-1 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          active simulation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Big decorative transparent number at the background corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 right-0 select-none font-display text-[5rem] font-extrabold leading-none text-black/[0.03] dark:text-white/[0.02] sm:text-[8rem] md:text-[10rem] lg:text-[13rem]"
                >
                  {String(activeItemIndex + 1).padStart(2, "0")}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const automateReviews = [
  {
    review: "Our lead response time went from 4 hours to 90 seconds. Incredible system.",
    name: "James T.",
    position: "Operations Director",
    service: "AI Agents",
  },
  {
    review: "The content pipeline automation saves us literally 30 hours a week.",
    name: "Sarah Jenkins",
    position: "Marketing VP",
    service: "Workflow Automation",
  },
  {
    review: "Fully automated our customer support tier 1. Flawless execution.",
    name: "Michael Chen",
    position: "E-Commerce Founder",
    service: "Support Automation",
  },
  {
    review: "Our onboarding is now completely hands-off yet feels incredibly personal.",
    name: "David Ross",
    position: "SaaS CEO",
    service: "Outreach Pipelines",
  },
];

function AutomatePage() {
  return (
    <PageShell>
      <h1 className="sr-only">
        Design, Automation & Media Production Services
      </h1>
      <Hero />
      <div className="py-8 md:py-10">
        <LogoMarquee />
      </div>
      <Services />
      <Portfolio />
      <Reviews rows={1} items={automateReviews} />
    </PageShell>
  );
}
