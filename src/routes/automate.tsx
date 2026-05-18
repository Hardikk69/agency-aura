import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import StarBorder from "@/components/site/StarBorder";
import { Bot, Workflow, Mail, Database, Network, Zap, ArrowRight, Terminal } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { N8nWorkflowSimulator } from "@/components/automate/N8nWorkflowSimulator";
import { Reviews } from "@/components/site/Reviews";

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
      {/* grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: "#ff4d31",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute top-28 left-8 hidden md:block text-[#ff4d31]/60">
        <NodeGraph className="h-20 w-28" />
      </div>
      <div className="absolute top-32 right-10 hidden md:block text-[#ff4d31]/40">
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
              ./agents --status running
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[0.95]"
            >
              Build the <span className="text-[#ff4d31]">system</span>,<br />
              not the busywork.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
            >
              We design AI agents, workflows and pipelines that quietly handle 80% of the work — so
              your team can ship the other 20%.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                className="rounded-full px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-[#ff4d31] dark:text-white dark:hover:bg-[#e8462c]"
              >
                <a href="#contact">Audit my workflow</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent"
              >
                <a href="#portfolio">See builds</a>
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
  { icon: Bot, title: "AI Agents", desc: "Chat, voice and task agents that act, not just answer." },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "n8n, Zapier, Make — wired into your real stack.",
  },
  {
    icon: Mail,
    title: "Email & Outreach",
    desc: "Triaged inboxes, personalized sends, follow-ups on auto.",
  },
  {
    icon: Database,
    title: "CRM & Data Ops",
    desc: "Lead enrichment, scoring and routing in seconds.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    desc: "Agents that talk to each other to finish full pipelines.",
  },
  {
    icon: Terminal,
    title: "Content Pipelines",
    desc: "From idea to published asset, no human in the middle.",
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
        color="rgba(255, 77, 49, 0.6)"
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
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
            {desc}
          </p>

          <div className="mt-5 pt-4 border-t border-dashed border-neutral-300/60 dark:border-white/10 w-full flex items-center gap-2 text-xs font-mono text-orange-600 dark:text-orange-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" /> deployed
          </div>
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
      <div className="absolute top-16 right-8 hidden md:block text-[#ff4d31]/40">
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
            We design AI agents, workflows and pipelines that quietly handle 80% of the work — so your team can ship the other 20%.
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

/* ---------- Portfolio (case-study cards) ---------- */
const builds = [
  {
    title: "Inbox Triage Agent",
    metric: "−87% reply time",
    desc: "AI agent that reads, classifies and drafts replies for a 12k-email/mo inbox.",
    stack: ["GPT-4", "n8n", "Gmail", "Notion"],
  },
  {
    title: "Content Pipeline",
    metric: "40 posts / week",
    desc: "Idea → script → caption → schedule, fully automated with human approval gate.",
    stack: ["Claude", "Make", "Airtable", "Buffer"],
  },
  {
    title: "Lead Scoring System",
    metric: "3.2× conversion",
    desc: "Enriches inbound leads and routes hot accounts to sales in under 60 seconds.",
    stack: ["Clay", "HubSpot", "Slack"],
  },
  {
    title: "Voice Booking Agent",
    metric: "24/7 coverage",
    desc: "Inbound voice agent that books, reschedules and confirms calendar slots.",
    stack: ["Vapi", "Cal.com", "OpenAI"],
  },
];
function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="absolute bottom-10 left-12 hidden md:block text-[#ff4d31]/40">
        <NodeGraph className="h-16 w-24" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#ff4d31]">
              // case studies
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Systems we've shipped.
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 dark:text-neutral-400">
            Real builds, real metrics. Every system is monitored and improved post-launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {builds.map((b, i) => (
            <SpotlightCard
              key={b.title}
              className="group p-7 md:p-8 rounded-2xl liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
              spotlightColor="rgba(120, 140, 180, 0.28)"
              darkSpotlightColor="rgba(255, 255, 255, 0.18)"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[#ff4d31]">
                    BUILD/{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-neutral-950 dark:text-white">
                    {b.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-neutral-500 uppercase">Impact</p>
                  <p className="text-lg font-bold text-[#ff4d31]">{b.metric}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">{b.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {b.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded-md border border-neutral-300/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] text-neutral-700 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomatePage() {
  return (
    <PageShell>
      <Hero />
      <div className="py-8 md:py-10">
        <LogoMarquee />
      </div>
      <Services />
      <Portfolio />
      <Reviews rows={1} />
    </PageShell>
  );
}
