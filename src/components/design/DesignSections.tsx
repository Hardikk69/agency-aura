import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  Layers,
  Type,
  Sparkles,
  Frame,
  Brush,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/site/StarBorder";
import { PitchDeckSimulator } from "./PitchDeckSimulator";
import { MagicGrid, MagicCard } from "@/components/site/MagicBento";
import { SectionGlow } from "@/components/site/SectionGlow";

/* ---------- Doodles ---------- */
export function StarDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <path
        d="M30 4 L34 26 L56 30 L34 34 L30 56 L26 34 L4 30 L26 26 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SquiggleDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 24" fill="none" preserveAspectRatio="none">
      <path
        d="M2 12 C 15 2, 25 22, 38 12 S 62 2, 75 12 S 100 22, 118 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
export function CircleArrowDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <path
        d="M40 8 C 60 8, 72 22, 72 40 C 72 60, 56 72, 40 72 C 22 72, 10 58, 10 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4 36 L 10 40 L 14 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-10 md:pt-20 pb-12">
      <SectionGlow />
      <div className="absolute top-32 left-8 hidden md:block text-[#ff4d31]/70 rotate-12 doodle-float">
        <StarDoodle className="h-12 w-12" />
      </div>
      <div className="absolute top-20 right-16 hidden md:block text-amber-500/60 -rotate-12 doodle-spin-slow">
        <CircleArrowDoodle className="h-20 w-20" />
      </div>
      <div className="absolute bottom-8 right-20 hidden lg:block text-[#ff4d31]/50 doodle-float-slow">
        <SquiggleDoodle className="h-6 w-32" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 md:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31]" /> Design Suits
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[0.95]"
            >
              Design that makes <span className="text-[#ff4d31]">you,</span>
              <br /> look like the <span>best in room</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
            >
              From your website to your social feed — every touchpoint your audience sees, built to
              impress, built to convert, and built to be remembered.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                className="rounded-xl px-6 py-3 h-auto bg-[#ff4d31] text-white hover:bg-[#e0432a] dark:bg-[#ff4d31] dark:text-white dark:hover:bg-[#e0432a] border-none"
                data-cal-link="dhrumil-sanghvi-4kxjvq/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a Call
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent"
              >
                <a href="#portfolio">See Portfolio</a>
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-7 md:col-span-6 h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] relative w-full">
            <PitchDeckSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (WhyChooseUs-style layout) ---------- */
export const designServices = [
  {
    icon: Layers,
    title: "Website Design",
    description:
      "Your website is your best salesperson. We design sites that load with a story, guide visitors with intention, and turn browsers into buyers. ",
  },
  {
    icon: Frame,
    title: "Pitch Decks Design",
    description:
      "Your idea deserves better than a boring slide deck. We design pitch decks that are clear, visual, and impossible to ignore.",
  },
  {
    icon: Type,
    title: "LinkedIn Carousels",
    description:
      "Carousels that get saved, shared, and followed. We design scroll-stopping educational content that builds authority and grows your audience on autopilot. ",
  },
  {
    icon: Palette,
    title: "Social Media Posts",
    description:
      "Consistent, on-brand content for every platform. Designed to stop the scroll, reflect your brand identity, and keep your feed looking intentional — not random",
  },
  {
    icon: Brush,
    title: "Thumbnail Design",
    description:
      "Your thumbnail is your billboard. We design click-worthy covers for YouTube, Shorts, and Reels that compete at the highest level and actually get clicked.",
  },
  {
    icon: Sparkles,
    title: "Company Profiles",
    description:
      "Your company profile is the first thing a client reads about you. We design it to make the right impression — clean, professional, and built to win trust before you say a word.",
  },
];

export function DesignServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
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

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-white dark:bg-black"
    >
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
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
            From brand identity to pixel-perfect interfaces — every detail is crafted to convert and
            captivate.
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
export const designWork = [
  {
    img: "/assets/imgs/design_1.png",
    title: "Lumen — Brand Identity",
    tag: "Identity",
  },
  {
    img: "/assets/imgs/design_2.png",
    title: "Northwind Studio",
    tag: "Web Design",
  },
  {
    img: "/assets/imgs/design_3.png",
    title: "Atlas Pitch Deck",
    tag: "Deck",
  },
  {
    img: "/assets/imgs/design_4.png",
    title: "Mira Editorial",
    tag: "Print",
  },
  {
    img: "/assets/imgs/design_5.png",
    title: "Soft Goods Co.",
    tag: "Packaging",
  },
];
export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40"
    >
      <SectionGlow />
      <div className="absolute top-20 left-10 hidden md:block text-[#ff4d31]/40 -rotate-6 doodle-float">
        <SquiggleDoodle className="h-5 w-28" />
      </div>
      <div className="mx-auto max-w-7xl">
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
            Work that <span className="text-[#ff4d31]">speaks for itself.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Real projects across websites, pitch decks, and social content.
          </motion.p>
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
                "group rounded-x p-2 md:p-4 liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10",
                span,
              )}
              enableStars={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              glowColor="255, 77, 49"
              particleCount={32}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[calc(0.75rem-2px)] md:rounded-[calc(0.75rem-4px)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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

export const designReviews = [
  {
    review: "They turned a vague mood-board into a brand we actually want to wear.",
    name: "Iris Lange",
    position: "Founder",
    service: "Lumen",
  },
  {
    review: "The pitch deck closed our seed round in three meetings.",
    name: "Daniel Park",
    position: "CEO",
    service: "Atlas",
  },
  {
    review: "Every page feels considered. Nothing accidental.",
    name: "Maya Okafor",
    position: "Head of Brand",
    service: "Northwind",
  },
  {
    review: "Precision across every frame. They obsess over the details so we don't have to.",
    name: "Liam O'Connor",
    position: "Marketing Head",
    service: "Soft Goods Co.",
  },
];

/* ---------- Packages ---------- */
export const packages = [
  {
    name: "Starter",
    tagline: "Perfect for brands needing consistent asset design",
    features: [
      "10 Custom Designs / Month",
      "Static Social Media Posts",
      "Carousel Post Designs",
      "Cover Page / Thumbnail Designs",
      "Thumbnail & Cover Graphics",
      "3 Revisions Included",
      "36–48 Hour Delivery",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "For brands scaling their design assets and decks",
    features: [
      "20 Custom Designs / Month",
      "Static Social Media Posts",
      "Carousel Post Designs",
      "Story Designs",
      "Thumbnail & Cover Graphics",
      "Motion Design",
      "1 Presentation / Pitch Deck Design",
      "Check-in Calls",
      "Dedicated Support",
      "Unlimited Revisions",
      "24 Hour Delivery",
    ],
    cta: "Scale now",
    highlighted: true,
  },
  {
    name: "Premium",
    tagline: "Your complete product and brand design squad",
    features: [
      "30 Custom Designs / Month",
      "Static Social Media Posts",
      "Carousel Post Designs",
      "Story Designs",
      "Thumbnail & Cover Graphics",
      "Motion Design",
      "3 Presentation / Pitch Deck Designs",
      "Check-in Calls",
      "Dedicated Support",
      "Unlimited Revisions",
      "Priority 24 Hour Delivery",
    ],
    cta: "Get premium",
    highlighted: false,
  },
];

export function PackageCard({ pkg, index }: { pkg: (typeof packages)[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative transition-all duration-500 ease-out hover:-translate-y-3 h-full",
      )}
    >
      <StarBorder
        className="w-full h-full"
        color={pkg.highlighted ? "rgba(255, 77, 49, 0.8)" : "rgba(255, 255, 255, 0.6)"}
        speed={pkg.highlighted ? "10s" : "16s"}
        thickness={pkg.highlighted ? 4 : 3}
      >
        <div
          className={cn(
            "relative flex flex-col p-8 h-full w-full overflow-hidden",
            "liquid-glass backdrop-blur-xl backdrop-saturate-150",
            pkg.highlighted
              ? "dark:!bg-white/[0.06] border-none shadow-none"
              : "dark:!bg-white/[0.03] border-none shadow-none",
          )}
        >
          {/* Spotlight hover */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  ${pkg.highlighted ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.12)"},
                  transparent 80%
                )
              `,
            }}
          />
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

          {/* Recommended badge */}
          {pkg.highlighted && (
            <div className="absolute top-0 right-6 z-10">
              <div className="bg-[#ff4d31] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg shadow-lg shadow-[#ff4d31]/30">
                Recommended
              </div>
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <h3
              className={cn(
                "text-2xl font-bold tracking-tight mb-1",
                pkg.highlighted ? "text-[#ff4d31]" : "text-neutral-900 dark:text-white",
              )}
            >
              {pkg.name}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{pkg.tagline}</p>
          </div>

          {/* Features list */}
          <ul className="space-y-3 mb-8 flex-grow">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <div
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5",
                    pkg.highlighted
                      ? "bg-[#ff4d31]/15 text-[#ff4d31]"
                      : "bg-white/10 dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400",
                  )}
                >
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            className={cn(
              "w-full rounded-full h-12 text-sm font-semibold transition-all duration-300",
              pkg.highlighted
                ? "bg-[#ff4d31] text-white hover:bg-[#e8462c] shadow-lg shadow-[#ff4d31]/20 hover:shadow-xl hover:shadow-[#ff4d31]/30"
                : "bg-white/10 dark:bg-white/[0.06] text-neutral-900 dark:text-white border border-neutral-200/50 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/[0.1]",
            )}
            data-cal-link="dhrumil-sanghvi-4kxjvq/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            {pkg.cta}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </StarBorder>
    </motion.div>
  );
}

export function Packages() {
  return (
    <section
      id="packages"
      className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-white dark:bg-black"
    >
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" />
            Packages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            Work that speaks <span className="text-[#ff4d31]">for itself.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Real projects across websites, pitch decks, and social content
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
