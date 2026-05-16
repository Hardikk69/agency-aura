import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Layers, Type, Sparkles, Frame, Brush } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design Services — Vertex Media House" },
      { name: "description", content: "Brand-first design — websites, decks, social, and identity systems crafted to convert." },
      { property: "og:title", content: "Design Services — Vertex Media House" },
      { property: "og:description", content: "Brand-first design — websites, decks, social, and identity systems crafted to convert." },
    ],
  }),
  component: DesignPage,
});

/* ---------- Doodles ---------- */
function StarDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <path d="M30 4 L34 26 L56 30 L34 34 L30 56 L26 34 L4 30 L26 26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function SquiggleDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 24" fill="none" preserveAspectRatio="none">
      <path d="M2 12 C 15 2, 25 22, 38 12 S 62 2, 75 12 S 100 22, 118 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function CircleArrowDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <path d="M40 8 C 60 8, 72 22, 72 40 C 72 60, 56 72, 40 72 C 22 72, 10 58, 10 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M4 36 L 10 40 L 14 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-10 md:pt-20 pb-12">
      <div className="absolute top-32 left-8 hidden md:block text-[#ff4d31]/70 rotate-12">
        <StarDoodle className="h-12 w-12" />
      </div>
      <div className="absolute top-20 right-16 hidden md:block text-amber-500/60 -rotate-12">
        <CircleArrowDoodle className="h-20 w-20" />
      </div>
      <div className="absolute bottom-8 right-20 hidden lg:block text-[#ff4d31]/50">
        <SquiggleDoodle className="h-6 w-32" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31]" /> Design Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[0.95]"
            >
              Design that <em className="font-serif italic text-[#ff4d31]">whispers</em>,<br/> brand that <em className="font-serif italic">roars</em>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
            >
              From the first pixel of your website to the last frame of your pitch deck — we craft design systems people actually feel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild className="rounded-full px-6 py-3 h-auto bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                <a href="#contact">Start a project</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent">
                <a href="#portfolio">See the work</a>
              </Button>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="relative aspect-[4/5] w-full liquid-glass rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200" alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-80">Case 01</p>
                  <p className="font-semibold">Brand · Web · Print</p>
                </div>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const designServices = [
  { icon: Layers, title: "Website Design", desc: "Conversion-led websites with story, motion, and craft." },
  { icon: Frame, title: "Pitch Decks", desc: "Investor decks that make the room lean forward." },
  { icon: Type, title: "Brand Identity", desc: "Logo systems, typography, color, voice — the whole soul." },
  { icon: Palette, title: "Social Creatives", desc: "Feeds, carousels and thumbnails built to stop scrolls." },
  { icon: Brush, title: "Print & Editorial", desc: "Books, magazines and merch that feel like artifacts." },
  { icon: Sparkles, title: "Design Systems", desc: "Tokens, components, docs — design that scales with you." },
];
function Services() {
  return (
    <section id="services" className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="absolute top-10 right-10 hidden md:block text-amber-500/40">
        <StarDoodle className="h-10 w-10" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff4d31]">— Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Six disciplines.<br/><span className="font-serif italic text-neutral-500 dark:text-neutral-400">One studio.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {designServices.map((s, i) => (
            <SpotlightCard
              key={s.title}
              className={cn("group h-full p-7 rounded-2xl liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl")}
              spotlightColor="rgba(255, 100, 80, 0.18)"
              darkSpotlightColor="rgba(255, 255, 255, 0.18)"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 dark:bg-white/[0.05] border border-white/40 dark:border-white/10">
                  <s.icon className="h-5 w-5 text-[#ff4d31]" />
                </div>
                <span className="text-xs font-mono text-neutral-400">0{i+1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-950 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio (asymmetric editorial grid) ---------- */
const designWork = [
  { img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400", title: "Lumen — Brand Identity", tag: "Identity" },
  { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400", title: "Northwind Studio", tag: "Web Design" },
  { img: "https://images.unsplash.com/photo-1581291518151-0e07553bb465?q=80&w=1400", title: "Atlas Pitch Deck", tag: "Deck" },
  { img: "https://images.unsplash.com/photo-1613909209432-7b4a422374dc?q=80&w=1400", title: "Mira Editorial", tag: "Print" },
  { img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1400", title: "Soft Goods Co.", tag: "Packaging" },
];
function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40">
      <div className="absolute top-20 left-10 hidden md:block text-[#ff4d31]/40 -rotate-6">
        <SquiggleDoodle className="h-5 w-28" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff4d31]">— Selected Work</p>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              A gallery,<br/><span className="font-serif italic text-neutral-500 dark:text-neutral-400">not a portfolio.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 dark:text-neutral-400">Recent collaborations across identity, product, editorial and packaging.</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {[
            { item: designWork[0], span: "col-span-12 md:col-span-7 aspect-[4/3]" },
            { item: designWork[1], span: "col-span-12 md:col-span-5 aspect-[4/3]" },
            { item: designWork[2], span: "col-span-6 md:col-span-4 aspect-square" },
            { item: designWork[3], span: "col-span-6 md:col-span-4 aspect-square" },
            { item: designWork[4], span: "col-span-12 md:col-span-4 aspect-square" },
          ].map(({ item, span }, i) => (
            <SpotlightCard
              key={i}
              className={cn("group rounded-2xl p-2 liquid-glass dark:!bg-white/[0.04] border-white/30 dark:border-white/10 backdrop-blur-xl", span)}
              spotlightColor="rgba(255, 100, 80, 0.2)"
              darkSpotlightColor="rgba(255, 255, 255, 0.16)"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs uppercase tracking-widest opacity-80">{item.tag}</p>
                  <p className="font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (editorial pull-quote stack) ---------- */
const designQuotes = [
  { quote: "They turned a vague mood-board into a brand we actually want to wear.", name: "Iris Lange", role: "Founder, Lumen" },
  { quote: "The pitch deck closed our seed round in three meetings.", name: "Daniel Park", role: "CEO, Atlas" },
  { quote: "Every page feels considered. Nothing accidental.", name: "Maya Okafor", role: "Head of Brand, Northwind" },
];
function Testimonials() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="absolute top-10 right-12 hidden md:block text-[#ff4d31]/50">
        <CircleArrowDoodle className="h-16 w-16" />
      </div>
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#ff4d31] text-center">— Words from clients</p>
        <div className="mt-12 grid gap-6">
          {designQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={cn("liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-8 md:p-12", i % 2 ? "md:ml-16" : "md:mr-16")}
            >
              <p className="text-2xl md:text-3xl font-serif italic leading-snug text-neutral-900 dark:text-white">"{q.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-neutral-300 dark:bg-white/10" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{q.name}</span>
                <span className="text-sm text-neutral-500">· {q.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignPage() {
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
