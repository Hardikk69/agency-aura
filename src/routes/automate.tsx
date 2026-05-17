import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Workflow, Mail, Database, Network, Zap, ArrowRight, Terminal } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          color: "#10b981",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute top-28 left-8 hidden md:block text-emerald-500/60">
        <NodeGraph className="h-20 w-28" />
      </div>
      <div className="absolute top-32 right-10 hidden md:block text-emerald-500/40">
        <PlusGrid className="h-20 w-20" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ./agents --status running
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[0.95]"
          >
            Build the <span className="text-emerald-500">system</span>,<br />
            not the busywork.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400"
          >
            We design AI agents, workflows and pipelines that quietly handle 80% of the work — so
            your team can ship the other 20%.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button
              asChild
              className="rounded-full px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-emerald-500 dark:text-neutral-900 dark:hover:bg-emerald-400"
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

        {/* workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-14 liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-5 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-2 items-center">
            {[
              { icon: Mail, label: "Inbound" },
              { icon: Bot, label: "AI Agent" },
              { icon: Database, label: "CRM" },
              { icon: Workflow, label: "Workflow" },
              { icon: Zap, label: "Action" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex-1 flex flex-col items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-4">
                  <step.icon className="h-5 w-5 text-emerald-500" />
                  <span className="font-mono text-xs text-neutral-700 dark:text-neutral-300">
                    {step.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="hidden md:block h-4 w-4 text-emerald-500 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
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
function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40"
    >
      <div className="absolute top-16 right-8 hidden md:block text-emerald-500/40">
        <CircuitDoodle className="h-8 w-40" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-500">
            // services
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Modular. Composable.
            <br />
            <span className="text-emerald-500">Always-on.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {autoServices.map((s, i) => (
            <SpotlightCard
              key={s.title}
              className={cn(
                "group h-full p-7 rounded-2xl liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl",
              )}
              spotlightColor="rgba(16, 185, 129, 0.18)"
              darkSpotlightColor="rgba(16, 185, 129, 0.22)"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-emerald-500/70">
                  SYS.{String(i + 1).padStart(3, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-neutral-950 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</p>
              <div className="mt-5 pt-4 border-t border-dashed border-neutral-300/60 dark:border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> deployed
              </div>
            </SpotlightCard>
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
      <div className="absolute bottom-10 left-12 hidden md:block text-emerald-500/40">
        <NodeGraph className="h-16 w-24" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-500">
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
              spotlightColor="rgba(16, 185, 129, 0.18)"
              darkSpotlightColor="rgba(16, 185, 129, 0.22)"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-emerald-500">
                    BUILD/{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-neutral-950 dark:text-white">
                    {b.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-neutral-500 uppercase">Impact</p>
                  <p className="text-lg font-bold text-emerald-500">{b.metric}</p>
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

/* ---------- Testimonials ---------- */
const autoQuotes = [
  {
    quote: "Felt like we hired five people overnight. The system just runs.",
    name: "Elena Rodriguez",
    role: "COO, NorthStack",
  },
  {
    quote: "Our sales team finally talks to leads while they're still warm.",
    name: "Jamal Brooks",
    role: "Head of Growth, Coil",
  },
  {
    quote: "Saved roughly 30 hours a week across ops. Zero new hires.",
    name: "Aiko Tanaka",
    role: "Founder, Tsuki Labs",
  },
];
function Testimonials() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-500">// signal</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            From ops leaders <span className="text-emerald-500">running it.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {autoQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-7 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-6 -right-6 text-emerald-500/10 text-[140px] font-serif leading-none"
              >
                "
              </div>
              <p className="relative text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                "{q.quote}"
              </p>
              <div className="relative mt-6 pt-4 border-t border-neutral-200/60 dark:border-white/10">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{q.name}</p>
                <p className="text-xs text-neutral-500 font-mono">{q.role}</p>
              </div>
            </motion.div>
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
      <Testimonials />
    </PageShell>
  );
}
