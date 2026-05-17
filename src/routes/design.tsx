import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Palette, Layers, Type, Sparkles, Frame, Brush } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import StarBorder from "@/components/site/StarBorder";
import { cn } from "@/lib/utils";
import CardSwap, { Card } from "@/components/site/CardSwap";
import { Reviews } from "@/components/site/Reviews";
import { CombinedPackage } from "@/components/site/CombinedPackage";
import { Footer } from "@/components/site/Footer";
import { MagicGrid, MagicCard } from "@/components/site/MagicBento";

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

          <div className="md:col-span-5 h-[500px] md:h-[600px] relative">
            <CardSwap
              width="100%"
              height="100%"
              cardDistance={50}
              verticalDistance={60}
              delay={2000}
              pauseOnHover={true}
            >
              {[
                { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200", title: "Brand Identity", case: "Case 01" },
                { img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", title: "Digital Experience", case: "Case 02" },
                { img: "https://images.unsplash.com/photo-1581291518151-0e07553bb465?q=80&w=1200", title: "Motion Systems", case: "Case 03" },
              ].map((item, idx) => (
                <Card key={idx} className="overflow-hidden group/card border-white/30 dark:border-white/10">
                  <img src={item.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 mb-1">{item.case}</p>
                      <p className="font-semibold text-lg leading-tight">{item.title}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (WhyChooseUs-style layout) ---------- */
const designServices = [
  { icon: Layers, title: "Website Design", description: "Conversion-led websites with story, motion, and craft — built to turn visitors into customers from the first scroll." },
  { icon: Frame, title: "Pitch Decks", description: "Investor decks that make the room lean forward. Narrative-driven slides with data visualization that actually persuades." },
  { icon: Type, title: "Brand Identity", description: "Logo systems, typography, color palettes, voice — the whole soul of your brand, distilled into a system that scales." },
  { icon: Palette, title: "Social Creatives", description: "Feeds, carousels and thumbnails built to stop the scroll. Platform-native design that drives engagement and shares." },
  { icon: Brush, title: "Print & Editorial", description: "Books, magazines and merch that feel like artifacts. Tactile design crafted for the real world, not just screens." },
  { icon: Sparkles, title: "Design Systems", description: "Tokens, components, documentation — design infrastructure that scales with your team without losing consistency." },
];

function DesignServiceCard({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) {
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
}

function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-white dark:bg-black">
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

      <div className="relative mx-auto max-w-7xl">
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
            Six disciplines. <span className="text-[#ff4d31]">One studio.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            From brand identity to pixel-perfect interfaces — every detail is crafted to convert and captivate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {designServices.map((service, index) => (
            <DesignServiceCard key={index} {...service} index={index} />
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

        <MagicGrid className="grid grid-cols-12 gap-2 md:gap-3" spotlightRadius={400}>
          {[
            { item: designWork[0], span: "col-span-12 md:col-span-7 aspect-[4/3]" },
            { item: designWork[1], span: "col-span-12 md:col-span-5 aspect-[99/105]" },
            { item: designWork[2], span: "col-span-6 md:col-span-4 aspect-square" },
            { item: designWork[3], span: "col-span-6 md:col-span-4 aspect-square" },
            { item: designWork[4], span: "col-span-12 md:col-span-4 aspect-square" },
          ].map(({ item, span }, i) => (
            <MagicCard
              key={i}
              className={cn(
                "group rounded-x p-2 md:p-4 liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10",
                span
              )}
              enableStars={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              glowColor="255, 77, 49"
              particleCount={32}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[calc(0.75rem-2px)] md:rounded-[calc(0.75rem-4px)]">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs uppercase tracking-widest opacity-80">{item.tag}</p>
                  <p className="font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            </MagicCard>
          ))}
        </MagicGrid>
      </div>
    </section>
  );
}

const designReviews = [
  { review: "They turned a vague mood-board into a brand we actually want to wear.", name: "Iris Lange", position: "Founder", service: "Lumen" },
  { review: "The pitch deck closed our seed round in three meetings.", name: "Daniel Park", position: "CEO", service: "Atlas" },
  { review: "Every page feels considered. Nothing accidental.", name: "Maya Okafor", position: "Head of Brand", service: "Northwind" },
  { review: "Precision across every frame. They obsess over the details so we don't have to.", name: "Liam O'Connor", position: "Marketing Head", service: "Soft Goods Co." },
];

function DesignPage() {
  return (
    <PageShell>
      <Hero />
      <div className="py-8 md:py-10">
        <LogoMarquee />
      </div>
      <Services />
      <Portfolio />
      <Reviews rows={1} items={designReviews} />
      <CombinedPackage />
    </PageShell>
  );
}
