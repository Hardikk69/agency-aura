import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ── Static Mock Slides data ── */
const SLIDES = [
  {
    id: 1,
    title: "01. Introduction",
    tagline: "VERTEX MEDIA HOUSE",
    headline: "Design that whispers, brand that roars.",
    desc: "Crafting modern design systems & pitch decks built to convert.",
    type: "cover",
  },
  {
    id: 2,
    title: "02. Market Size",
    tagline: "TOTAL ADDRESSABLE MARKET",
    headline: "Opportunity is infinite.",
    desc: "Visualizing market sectors with high growth projections.",
    type: "chart",
  },
  {
    id: 3,
    title: "03. The Solution",
    tagline: "OUR 3-IN-1 MODEL",
    headline: "Design • Edit • Automate",
    desc: "Consolidating key creative disciplines under one unified studio.",
    type: "features",
  },
];

export function PitchDeckSimulator() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPlayMode, setIsPlayMode] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [chartValue, setChartValue] = useState(0);
  const [transitionSpeed, setTransitionSpeed] = useState("0.8s");
  const [transitionType, setTransitionType] = useState("Dissolve"); // Dissolve, Push, Fade
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const activeSlide = SLIDES[activeSlideIdx];

  /* ── Autoplay slides cycle ── */
  useEffect(() => {
    if (!isAutoplay) return;

    let cancelled = false;

    function next() {
      if (cancelled) return;
      setActiveSlideIdx((prev) => (prev + 1) % SLIDES.length);
      timerRef.current = setTimeout(next, 3800);
    }

    timerRef.current = setTimeout(next, 3800);

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
    };
  }, [isAutoplay]);

  /* ── Animate Chart Columns on Slide Switch ── */
  useEffect(() => {
    if (activeSlide.type === "chart") {
      setChartValue(0);
      const startTimer = setTimeout(() => {
        setChartValue(100);
      }, 200);
      return () => clearTimeout(startTimer);
    }
  }, [activeSlideIdx]);

  return (
    <div className="w-full h-full liquid-glass rounded-2xl border border-black/10 dark:border-white/[0.12] shadow-2xl shadow-black/10 dark:shadow-black/40 flex flex-col overflow-hidden relative select-none font-mono text-[9px] text-neutral-600 dark:text-neutral-400">
      {/* ─── Presentation Top Bar ─── */}
      <div className="h-10 border-b border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 flex items-center justify-between px-3 shrink-0 text-neutral-800 dark:text-neutral-200">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-[10px] tracking-wide text-neutral-700 dark:text-neutral-300 font-medium ml-2 border-l border-black/10 dark:border-white/10 pl-3">
            Deck_Editor — <em className="text-[#ff4d31] not-italic font-semibold">Series_A_Pitch.key</em>
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlayMode(!isPlayMode)}
            className={cn(
              "px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border transition-colors cursor-pointer",
              isPlayMode
                ? "bg-[#ff4d31]/20 border-[#ff4d31] text-[#ff4d31]"
                : "border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 bg-black/5 dark:bg-white/5"
            )}
          >
            {isPlayMode ? "⏹ Close Present" : "▶ Present"}
          </button>
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={cn(
              "px-1.5 py-0.5 rounded text-[8px] font-bold uppercase transition-colors cursor-pointer",
              isAutoplay
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
            )}
          >
            {isAutoplay ? "Autoplay On" : "Autoplay Off"}
          </button>
        </div>
      </div>

      {/* ─── Presentation Canvas + Panels ─── */}
      <div className="flex flex-grow overflow-hidden min-h-0">
        
        {/* LEFT PANEL: Slides List (PowerPoint Style) */}
        {!isPlayMode && (
          <div className="hidden md:flex w-[110px] bg-white/30 dark:bg-black/30 border-r border-black/5 dark:border-white/5 flex-col shrink-0 overflow-y-auto p-1.5 gap-2 select-none">
            <div className="text-[7.5px] font-semibold uppercase tracking-wider text-neutral-500 px-1 py-0.5">
              SLIDES
            </div>
            
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => setActiveSlideIdx(idx)}
                className={cn(
                  "relative rounded border p-1 cursor-pointer transition-all duration-300 flex flex-col gap-1",
                  activeSlideIdx === idx
                    ? "border-[#ff4d31] bg-[#ff4d31]/10 dark:bg-[#ff4d31]/5 text-[#ff4d31]"
                    : "border-black/5 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.01] hover:bg-white/60 dark:hover:bg-white/[0.03] text-neutral-500 dark:text-neutral-400"
                )}
              >
                {/* Visual miniature of the slide type */}
                <div className="h-10 rounded bg-white/50 dark:bg-[#0b0b0c] border border-black/5 dark:border-white/5 flex items-center justify-center overflow-hidden relative">
                  {slide.type === "cover" && (
                    <div className="flex flex-col items-center justify-center scale-50">
                      <span className="h-1 w-4 rounded-full bg-[#ff4d31]" />
                      <span className="text-[6px] text-neutral-700 dark:text-white font-bold mt-1">TITLE</span>
                    </div>
                  )}
                  {slide.type === "chart" && (
                    <div className="flex items-end gap-[2px] h-6 scale-50">
                      <span className="w-1.5 h-3 bg-neutral-300 dark:bg-neutral-700 rounded-t-[1px]" />
                      <span className="w-1.5 h-6 bg-[#ff4d31] rounded-t-[1px]" />
                      <span className="w-1.5 h-4 bg-neutral-400 dark:bg-neutral-600 rounded-t-[1px]" />
                    </div>
                  )}
                  {slide.type === "features" && (
                    <div className="grid grid-cols-3 gap-[2px] w-full px-1.5 scale-70">
                      <span className="h-2 rounded bg-neutral-300 dark:bg-neutral-850" />
                      <span className="h-2 rounded bg-[#ff4d31]/40" />
                      <span className="h-2 rounded bg-neutral-300 dark:bg-neutral-850" />
                    </div>
                  )}
                </div>
                <span className="text-[7.5px] font-bold text-neutral-600 dark:text-neutral-450 truncate px-0.5">
                  {slide.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CENTER PANEL: Interactive Slide Presenter */}
        <div className="flex-grow bg-black/5 dark:bg-[#151518] relative overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4">
          
          {/* Main Presentation Slide Viewport */}
          <div 
            onClick={() => setActiveSlideIdx((prev) => (prev + 1) % SLIDES.length)}
            className="relative w-full aspect-[16/9] bg-white dark:bg-[#0c0c0e] rounded-xl border border-black/10 dark:border-white/5 flex flex-col justify-between p-4 sm:p-6 shadow-xl dark:shadow-2xl overflow-hidden text-neutral-900 dark:text-white cursor-pointer select-none"
          >
            {/* Ambient Background glow layer */}
            <div
              className="absolute inset-0 transition-all duration-1000 opacity-[0.12] dark:opacity-20 blur-[50px] pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, #ff4d31, transparent 75%)`,
              }}
            />

            {/* Slide Header tag */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[6.5px] sm:text-[7.5px] tracking-[0.25em] uppercase text-[#ff4d31] font-bold">
                {activeSlide.tagline}
              </span>
              <span className="text-[6.5px] sm:text-[7.5px] text-neutral-400 dark:text-neutral-600 font-bold">VERTEX SERIES A</span>
            </div>

            {/* Slide Body Content */}
            <div className="my-auto flex flex-col gap-1 sm:gap-2.5 z-10">
              {/* Slide Headline */}
              <h2
                className="text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition-all duration-700 leading-snug"
                style={{
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {activeSlide.headline}
              </h2>
              
              {/* Dynamic Slide Visual components */}
              <div className="h-16 sm:h-24 flex items-center mt-1">
                
                {/* COVER SLIDE VISUAL */}
                {activeSlide.type === "cover" && (
                  <div className="w-full flex items-center justify-between bg-black/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-lg p-2 sm:p-3">
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <span className="text-[6px] sm:text-[7.5px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider">
                        Active Presentation Deck
                      </span>
                      <span className="text-[5.5px] sm:text-[7px] text-neutral-600 dark:text-neutral-500 leading-normal max-w-[150px] sm:max-w-[200px]">
                        {activeSlide.desc}
                      </span>
                    </div>
                    {/* Presentation Badge */}
                    <div className="h-6 sm:h-8 px-2 sm:px-2.5 rounded border border-[#ff4d31]/30 bg-[#ff4d31]/10 flex items-center justify-center text-[5.5px] sm:text-[7px] text-[#ff4d31] font-black uppercase tracking-widest animate-pulse">
                      100% Craft
                    </div>
                  </div>
                )}

                {/* CHART SLIDE VISUAL (Market size opportunity) */}
                {activeSlide.type === "chart" && (
                  <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
                    {/* Interactive Animated growing bar chart */}
                    <div className="flex-grow flex items-end justify-between h-14 sm:h-20 bg-black/[0.02] dark:bg-white/[0.01] border-b border-black/10 dark:border-white/10 px-2 sm:px-4">
                      {[
                        { label: "SAM ($1.2B)", height: "30%", colorClass: "bg-neutral-300 dark:bg-neutral-700" },
                        { label: "TAM ($4.8B)", height: "85%", colorClass: "bg-[#ff4d31]" },
                        { label: "SOM ($0.4B)", height: "15%", colorClass: "bg-neutral-400 dark:bg-neutral-600" },
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1 max-w-[40px] sm:max-w-[50px] group/bar relative">
                          {/* Grow height of chart using scale/transition */}
                          <div
                            className={cn("w-2.5 sm:w-4 rounded-t-sm transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)", bar.colorClass)}
                            style={{
                              height: chartValue > 0 ? bar.height : "0%",
                              boxShadow: bar.colorClass === "bg-[#ff4d31]" ? "0 0 12px rgba(255, 77, 49, 0.4)" : "none",
                            }}
                          />
                          <span className="text-[5px] sm:text-[6.5px] text-neutral-500 truncate text-center w-full">
                            {bar.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Chart legends */}
                    <div className="w-[70px] sm:w-[100px] flex flex-col gap-0.5 sm:gap-1 shrink-0">
                      <div className="text-[6.5px] sm:text-[7.5px] font-bold text-neutral-800 dark:text-neutral-300">Market Insights</div>
                      <p className="text-[5.5px] sm:text-[6.5px] text-neutral-600 dark:text-neutral-500 leading-normal">
                        TAM grows at +24% YoY, positioning the studio at the apex.
                      </p>
                    </div>
                  </div>
                )}

                {/* FEATURES SLIDE VISUAL */}
                {activeSlide.type === "features" && (
                  <div className="w-full grid grid-cols-3 gap-1.5 sm:grid-cols-3 sm:gap-3">
                    {[
                      { icon: "🎨", title: "Design", value: "Website & Decks" },
                      { icon: "🎬", title: "Edit", value: "Social & Premium" },
                      { icon: "🤖", title: "Automate", value: "n8n Workflows" },
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="bg-black/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.04] rounded-lg p-1.5 sm:p-2.5 flex flex-col gap-0.5 sm:gap-1 text-center transition-all duration-500 hover:border-[#ff4d31]/20 hover:bg-[#ff4d31]/10 dark:hover:bg-[#ff4d31]/5"
                      >
                        <span className="text-[9px] sm:text-[12px]">{feature.icon}</span>
                        <span className="text-[6.5px] sm:text-[7.5px] font-bold text-neutral-850 dark:text-neutral-300">{feature.title}</span>
                        <span className="text-[5.5px] sm:text-[6.5px] text-neutral-600 dark:text-neutral-500 truncate">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* Slide Footer */}
            <div className="flex items-center justify-between z-10 border-t border-black/5 dark:border-white/5 pt-1.5 sm:pt-2">
              <span className="text-[5.5px] sm:text-[6.5px] text-neutral-500 dark:text-neutral-600">CONFIDENTIAL PRESENTATION</span>
              <span className="text-[5.5px] sm:text-[6.5px] text-neutral-500 dark:text-neutral-600">Slide {activeSlideIdx + 1} of {SLIDES.length}</span>
            </div>
          </div>

          {/* Mobile bottom navigator dots */}
          <div className="flex md:hidden items-center justify-between w-full mt-2 px-1 text-neutral-400">
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlideIdx(idx);
                  }}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300",
                    activeSlideIdx === idx 
                      ? "bg-[#ff4d31] w-3" 
                      : "bg-neutral-300 dark:bg-neutral-700"
                  )}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[7.5px] text-neutral-450 dark:text-neutral-500 font-bold uppercase tracking-wider animate-pulse">
              👉 Tap slide to advance
            </span>
          </div>

        </div>

        {/* RIGHT PANEL: Slide Editor Inspector */}
        {!isPlayMode && (
          <div className="hidden md:flex w-[130px] bg-white/30 dark:bg-black/30 border-l border-black/5 dark:border-white/5 flex-col shrink-0 overflow-y-auto p-2.5 gap-3.5 select-none">
            
            {/* Slide Transitions */}
            <div className="space-y-1.5">
              <span className="text-[7.5px] font-semibold text-neutral-500 uppercase tracking-widest">
                TRANSITION
              </span>
              <div className="bg-white/50 dark:bg-[#1a1a1c] p-2 rounded border border-black/5 dark:border-white/5 space-y-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-neutral-500 text-[6.5px]">Transition Effect</span>
                  <select
                    value={transitionType}
                    onChange={(e) => setTransitionType(e.target.value)}
                    className="bg-white dark:bg-[#121214] text-neutral-800 dark:text-white border border-black/10 dark:border-white/10 rounded px-1 py-0.5 outline-none font-sans text-[7.5px] cursor-pointer"
                  >
                    <option>Dissolve</option>
                    <option>Push Left</option>
                    <option>Zoom Fade</option>
                  </select>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-neutral-500 text-[6.5px]">Duration</span>
                  <select
                    value={transitionSpeed}
                    onChange={(e) => setTransitionSpeed(e.target.value)}
                    className="bg-white dark:bg-[#121214] text-neutral-800 dark:text-white border border-black/10 dark:border-white/10 rounded px-1 py-0.5 outline-none font-sans text-[7.5px] cursor-pointer"
                  >
                    <option value="0.4s">0.4s (Fast)</option>
                    <option value="0.8s">0.8s (Medium)</option>
                    <option value="1.5s">1.5s (Slow)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Slide Layout Inspector */}
            <div className="space-y-1.5">
              <span className="text-[7.5px] font-semibold text-neutral-500 uppercase tracking-widest">
                PROPERTIES
              </span>
              <div className="bg-white/50 dark:bg-[#1a1a1c] p-2 rounded border border-black/5 dark:border-white/5 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-500">Aspect Ratio</span>
                  <span className="text-neutral-800 dark:text-neutral-300 font-bold">16:9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-500">Theme</span>
                  <span className="text-[#ff4d31] font-bold">Apex Brand</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-500">Export PDF</span>
                  <span className="text-neutral-800 dark:text-neutral-400 underline cursor-pointer hover:text-neutral-900 dark:hover:text-white">Ready</span>
                </div>
              </div>
            </div>

            {/* Brand Colors applied */}
            <div className="space-y-1.5">
              <span className="text-[7.5px] font-semibold text-neutral-500 uppercase tracking-widest">
                BRAND COLORS
              </span>
              <div className="flex items-center gap-1">
                <span className="h-4 w-4 rounded bg-[#ff4d31] border border-black/10 dark:border-white/10" title="Primary Accent" />
                <span className="h-4 w-4 rounded bg-[#ffffff] border border-black/10 dark:border-white/10" title="Primary Text" />
                <span className="h-4 w-4 rounded bg-[#0c0c0e] border border-black/10 dark:border-white/10" title="Canvas Background" />
              </div>
            </div>

            {/* Presenter footer notes */}
            <div className="mt-auto text-[6.5px] text-neutral-500 dark:text-neutral-600 bg-black/[0.02] dark:bg-white/[0.01] p-1.5 rounded border border-black/5 dark:border-white/[0.03]">
              Pitch deck updates auto-save. Ready for pitch export.
            </div>
          </div>
        )}
      </div>

      {/* ─── Editor Bottom status bar ─── */}
      <div className="h-7 border-t border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 flex items-center justify-between px-3 shrink-0 text-[7.5px] text-neutral-500 dark:text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Slide synced with Cloud Drive</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Pitch v1.2.0</span>
          <span>Connected</span>
        </div>
      </div>
    </div>
  );
}
