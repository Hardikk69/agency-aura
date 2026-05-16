import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Film, Scissors, Music2, Zap, Clapperboard, Wand2, Play } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import SpotlightCard from "@/components/site/SpotlightCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/edit")({
  head: () => ({
    meta: [
      { title: "Editing Services — Vertex Media House" },
      { name: "description", content: "Short-form, long-form and cinematic edits engineered for retention." },
      { property: "og:title", content: "Editing Services — Vertex Media House" },
      { property: "og:description", content: "Short-form, long-form and cinematic edits engineered for retention." },
    ],
  }),
  component: EditPage,
});

/* ---------- Doodles ---------- */
function PlayDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 6" />
      <path d="M34 28 L56 40 L34 52 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
function WaveDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
      {[6, 18, 12, 24, 8, 22, 14, 30, 10, 20, 16, 26, 12, 18].map((h, i) => (
        <rect key={i} x={i * 14} y={20 - h / 2} width="6" height={h} rx="2" fill="currentColor" />
      ))}
    </svg>
  );
}
function FilmStrip({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 30" fill="none">
      <rect x="2" y="6" width="196" height="18" stroke="currentColor" strokeWidth="2" fill="none" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={6 + i * 19} y="2" width="14" height="3" fill="currentColor" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={6 + i * 19} y="25" width="14" height="3" fill="currentColor" />
      ))}
    </svg>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-10 md:pt-20 pb-14">
      <div className="absolute top-24 left-6 hidden md:block text-[#ff4d31]/60 rotate-12">
        <PlayDoodle className="h-16 w-16" />
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-neutral-400 dark:text-white/30">
        <WaveDoodle className="h-10 w-48" />
      </div>
      <div className="absolute top-1/2 left-0 right-0 hidden lg:block text-neutral-300 dark:text-white/10 -translate-y-1/2">
        <FilmStrip className="h-8 w-full" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" /> REC · Editing Suite
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-950 dark:text-white leading-[0.9]"
        >
          Footage in.<br/>
          <span className="text-[#ff4d31]">Scroll-stoppers</span> out.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          Reels, shorts, podcasts, long-form, ads — we cut frames the algorithm can't ignore.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button asChild className="rounded-full px-6 py-3 h-auto bg-[#ff4d31] text-white hover:bg-[#e8462c]">
            <a href="#contact">Send raw footage</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent">
            <a href="#portfolio">Watch reel</a>
          </Button>
        </motion.div>

        {/* film strip showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-14 liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-3 md:p-4"
        >
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
            {[
              "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600",
              "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600",
              "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=600",
              "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=600",
            ].map((src, i) => (
              <div key={i} className={cn("relative aspect-[9/16] overflow-hidden rounded-lg group", i > 2 && "hidden md:block")}>
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <Play className="absolute inset-0 m-auto h-8 w-8 text-white/90 opacity-80 group-hover:scale-110 transition-transform" fill="currentColor" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const editServices = [
  { icon: Scissors, title: "Short-Form Edits", desc: "Reels, TikToks, Shorts — built around the first 0.8s." },
  { icon: Clapperboard, title: "Long-Form & Podcasts", desc: "Retention-graphs guide every cut, b-roll and chapter." },
  { icon: Wand2, title: "VFX & Motion", desc: "Tracked text, transitions and graphics that feel premium." },
  { icon: Music2, title: "Sound Design", desc: "Mix, master, SFX and music — never an afterthought." },
  { icon: Film, title: "Color Grade", desc: "Cinematic looks tuned to your brand and platform." },
  { icon: Zap, title: "Content Repurposing", desc: "One shoot, twenty deliverables, multi-platform native." },
];
function Services() {
  return (
    <section id="services" className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40">
      <div className="absolute top-12 right-10 hidden md:block text-[#ff4d31]/50">
        <WaveDoodle className="h-8 w-40" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff4d31]">[ services ]</p>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Every cut, <span className="text-[#ff4d31]">engineered.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {editServices.map((s, i) => (
            <SpotlightCard
              key={s.title}
              className="group h-full p-7 rounded-2xl liquid-glass dark:!bg-white/[0.04] border-white/40 dark:border-white/10 backdrop-blur-xl"
              spotlightColor="rgba(255, 77, 49, 0.18)"
              darkSpotlightColor="rgba(255, 255, 255, 0.18)"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff4d31]/10 text-[#ff4d31]">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-neutral-400">CUT/{String(i+1).padStart(2,"0")}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-neutral-950 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio (vertical reel grid) ---------- */
const reels = [
  "https://play.gumlet.io/embed/69f733741dfaccdc957ab32f?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/698b8d45873071aec5f38ae9?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/69f733741dfaccdc957ab331?background=false&autoplay=true&loop=true&disable_player_controls=false",
  "https://play.gumlet.io/embed/69c250aac98b51e9c56f927e?background=false&autoplay=true&loop=true&disable_player_controls=false",
];
function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="absolute bottom-10 left-10 hidden md:block text-[#ff4d31]/40">
        <PlayDoodle className="h-14 w-14" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff4d31]">[ portfolio ]</p>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Recent reels.
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 dark:text-neutral-400">A snapshot of work shipped across creators, brands and founders this quarter.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((src, i) => (
            <SpotlightCard
              key={i}
              className="group p-3 rounded-2xl liquid-glass dark:!bg-white/[0.04] border-white/30 dark:border-white/10 backdrop-blur-xl"
              spotlightColor="rgba(255, 77, 49, 0.2)"
              darkSpotlightColor="rgba(255, 255, 255, 0.18)"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-neutral-900">
                <iframe loading="lazy" src={src} className="absolute inset-0 h-full w-full border-none" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-xs text-neutral-500">EP/{String(i+1).padStart(2,"0")}</span>
                <span className="text-xs text-neutral-500">9:16 · 30s</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (terminal-style cards) ---------- */
const editQuotes = [
  { quote: "Our retention graph went from a cliff to a plateau. Bookings doubled.", name: "Marcus Thorne", role: "Creator · 1.4M subs" },
  { quote: "Turnaround is unreal. We ship a week of content in 48 hours.", name: "Priya Sahni", role: "Head of Content, Halo" },
  { quote: "Their edits got two of my reels past 5M views. No paid promo.", name: "Leo Vasquez", role: "Founder, Loop&Co" },
];
function Testimonials() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff4d31]">[ what creators say ]</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Cut. Posted. <span className="text-[#ff4d31]">Performed.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {editQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-6 font-mono"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-neutral-400">~/feedback/{i+1}.txt</span>
              </div>
              <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">"{q.quote}"</p>
              <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-white/10">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white font-sans">{q.name}</p>
                <p className="text-xs text-neutral-500 font-sans">{q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditPage() {
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
