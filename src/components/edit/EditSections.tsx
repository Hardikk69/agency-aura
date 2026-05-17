import { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Film,
  Scissors,
  Music2,
  Zap,
  Clapperboard,
  Wand2,
  Play,
  Check,
  ArrowRight,
} from "lucide-react";
import StarBorder from "@/components/site/StarBorder";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------- Doodles ---------- */
export function PlayDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <circle
        cx="40"
        cy="40"
        r="34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="4 6"
      />
      <path
        d="M34 28 L56 40 L34 52 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function WaveDoodle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
      {[6, 18, 12, 24, 8, 22, 14, 30, 10, 20, 16, 26, 12, 18].map((h, i) => (
        <rect key={i} x={i * 14} y={20 - h / 2} width="6" height={h} rx="2" fill="currentColor" />
      ))}
    </svg>
  );
}
export function FilmStrip({ className }: { className?: string }) {
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

/* ---------- Interactive After Effects Simulator ---------- */
export function VideoEditorSimulator() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClip, setActiveClip] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");

  const progressRef = useRef(0);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let accumulatedTime = (progressRef.current / 100) * 8000;

    const update = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (isPlayingRef.current) {
        accumulatedTime = (accumulatedTime + delta) % 8000;
        const currentProgress = (accumulatedTime / 8000) * 100;
        progressRef.current = currentProgress;
        setProgress(currentProgress);

        // Determine active clip index
        let clipIdx = 0;
        if (currentProgress < 35) {
          clipIdx = 0;
        } else if (currentProgress < 75) {
          clipIdx = 1;
        } else {
          clipIdx = 2;
        }
        setActiveClip(clipIdx);

        const secs = Math.floor((accumulatedTime / 1000) % 60);
        const frames = Math.floor((accumulatedTime % 1000) / 33.3); // ~30 fps
        const frameText = String(frames).padStart(2, "0");
        setTimecode(`0:00:0${secs}:${frameText}`);
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Audio VU bouncing logic
  const [vuHeight, setVuHeight] = useState(40);
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setVuHeight(20 + Math.random() * 65);
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const clips = [
    {
      video: "https://framerusercontent.com/assets/OvEhiZOEQzLDyQgOeNVhfvDC50.mp4",
      poster:
        "https://framerusercontent.com/images/FHS0pgop7yjZHlGI56VGYUZULS0.png?width=260&height=462",
      subtitle: "Wait... how did I get 10M views?",
    },
    {
      video: "https://framerusercontent.com/assets/9d7Q1tAYAEPaUo7PQrKcC2G00Qg.mp4",
      poster:
        "https://framerusercontent.com/images/4kp2KImAJicjmXIczDErqcpt9FI.png?width=528&height=938",
      subtitle: "It all starts in the first 0.8 seconds.",
    },
    {
      video: "https://framerusercontent.com/assets/5rWhVdIvfX2ypMArjXiZ5ZIbyQ.mp4",
      poster:
        "https://framerusercontent.com/images/RJn1eKEVAnvuDEpP5MAM11elvU.png?width=260&height=462",
      subtitle: "Stop posting raw footage. Start editing.",
    },
  ];

  // Helper to check if playhead is near a keyframe position
  const isKeyframeActive = (kfPercent: number) => {
    return isPlaying && Math.abs(progress - kfPercent) < 2.5;
  };

  return (
    <div className="w-full h-full bg-[#1b1b1e]/85 backdrop-blur-2xl rounded-2xl border border-white/[0.12] shadow-2xl shadow-black/30 ring-1 ring-white/[0.05] p-3 flex flex-col justify-between overflow-hidden relative select-none font-mono text-[9px] text-[#8e8e93]">
      {/* 1. After Effects Application Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] tracking-wide text-neutral-300 font-medium">
          Adobe After Effects 2026 —{" "}
          <em className="text-[#ff4d31] not-italic font-semibold">Vertex_Edit.aep</em> *
        </span>
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-[#ff4d31]/10 text-[#ff4d31] text-[8px] font-bold uppercase tracking-wider animate-pulse">
            Render Queue
          </span>
        </div>
      </div>

      {/* 2. Workspace Panels (Project / aspect-9:16 Composition Monitor / Effects) */}
      <div className="flex gap-2 my-2 flex-grow h-[270px] justify-between overflow-hidden">
        {/* LEFT COLUMN: Project Assets Panel */}
        <div className="hidden sm:flex flex-1 bg-[#151518] border border-white/5 rounded p-2 flex-col justify-between h-full overflow-hidden">
          <div>
            <div className="pb-1.5 border-b border-white/5 mb-1.5 text-neutral-400 font-semibold uppercase text-[8px] tracking-wider flex items-center justify-between">
              <span>Project</span>
              <span className="text-[#ff4d31]">Active</span>
            </div>

            {/* Project Folder list */}
            <div className="space-y-1.5 text-neutral-500 text-left">
              <div className="flex items-center gap-1">
                <span className="text-[#a78bfa]">📁</span>
                <span className="text-neutral-300 font-bold">Compositions</span>
              </div>
              <div className="flex items-center gap-1 pl-3 text-[#ff4d31]">
                <span>└─ 📺</span>
                <span className="underline">Main_Render_01</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#facc15]">📁</span>
                <span className="text-neutral-300">Footage Assets</span>
              </div>
              <div className="flex items-center gap-1 pl-3 truncate">
                <span>└─ 📹 Hook_Reel.mp4</span>
              </div>
              <div className="flex items-center gap-1 pl-3 truncate">
                <span>└─ 📹 Cinematic_Broll.mp4</span>
              </div>
              <div className="flex items-center gap-1 pl-3 truncate">
                <span>└─ 📹 CTA_Outro.mp4</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#4ade80]">🎵</span>
                <span className="text-neutral-300 font-bold">Audio Track.wav</span>
              </div>
            </div>
          </div>

          <div className="text-[7.5px] border-t border-white/5 pt-1.5 text-neutral-600 truncate text-left">
            <span>29.97 fps • 1080x1920 (9:16)</span>
          </div>
        </div>

        {/* CENTER COLUMN: composition view screen (styled as aspect-[9/16] to perfectly fit video!) */}
        <div className="h-full aspect-[9/16] bg-[#111113] border border-white/5 rounded p-1 flex flex-col justify-between relative overflow-hidden flex-shrink-0 mx-auto">
          {/* Active Composition Monitor Tab */}
          <div className="absolute top-1 left-1.5 right-1.5 flex items-center justify-between text-[7px] text-neutral-500 z-30 pointer-events-none">
            <span className="bg-black/60 px-1 py-0.5 rounded border border-white/5 truncate">
              Comp_01
            </span>
            <span className="bg-black/60 px-1 py-0.5 rounded border border-white/5 text-[#ff4d31] font-bold">
              50.0%
            </span>
          </div>

          {/* Canvas video output viewport (fits 100% of aspect-[9/16] monitor with 0 margin gaps!) */}
          <div className="relative w-full h-full overflow-hidden rounded flex items-center justify-center">
            {clips.map((clip, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center"
                style={{ opacity: activeClip === idx ? 1 : 0 }}
              >
                {/* Video canvas container */}
                <div className="w-full h-full relative">
                  <video
                    src={clip.video}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover border border-white/10 relative z-10"
                  />

                  {/* ACTIVE TRANSFORM OVERLAY (Cyan bounding frame with resize square anchors) */}
                  <div className="absolute inset-0 border border-[#4ee2ec] z-20 pointer-events-none">
                    {/* Anchor point center target crosshair */}
                    <div className="absolute inset-0 m-auto w-3 h-3 border border-[#4ee2ec] rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-[1px] bg-[#4ee2ec]" />
                      <span className="h-1.5 w-[1px] bg-[#4ee2ec]" />
                    </div>
                    {/* Corner hollow anchor handles */}
                    <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    {/* Center point handle triggers */}
                    <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute top-1/2 -left-0.5 -translate-y-1/2 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                    <span className="absolute top-1/2 -right-0.5 -translate-y-1/2 w-1.5 h-1.5 bg-[#111113] border border-[#4ee2ec]" />
                  </div>
                </div>
              </div>
            ))}

            {/* Dynamic subtitles render layer */}
            <div className="absolute bottom-2 left-1.5 right-1.5 z-30 text-center">
              <span className="bg-[#111113]/95 backdrop-blur-md text-[#4ee2ec] border border-[#4ee2ec]/20 text-[8px] font-sans font-bold px-1.5 py-0.5 rounded shadow-lg uppercase tracking-wide inline-block">
                {clips[activeClip].subtitle}
              </span>
            </div>

            {/* Sound channel bouncing meters */}
            <div className="absolute right-1 top-0 bottom-0 w-1 flex flex-col justify-end gap-0.5 py-4 z-30 pointer-events-none">
              <div className="w-[3px] bg-neutral-900/60 rounded-sm relative flex-grow overflow-hidden border border-white/5">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-[#ff4d31] rounded-sm transition-all duration-100 shadow-[0_0_8px_#ff4d31]"
                  style={{ height: `${isPlaying ? vuHeight : 10}%` }}
                />
              </div>
            </div>
          </div>

          {/* AE Composition controls footer */}
          <div className="flex items-center justify-between border-t border-white/5 pt-1.5 text-[7px] px-0.5 text-neutral-600">
            <span className="text-[#ff4d31] font-bold">{timecode}</span>
            <span className="truncate">Full</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Effects & Presets library (Hidden on small screens, flex-1 to fill space) */}
        <div className="hidden sm:flex flex-1 bg-[#151518] border border-white/5 rounded p-2 flex-col justify-between h-full overflow-hidden">
          <div>
            <div className="pb-1.5 border-b border-white/5 mb-1.5 text-neutral-400 font-semibold uppercase text-[8px] tracking-wider flex items-center justify-between">
              <span>Effects & Presets</span>
              <span>🔍</span>
            </div>

            {/* Preset folder stack */}
            <div className="space-y-1.5 text-neutral-500 text-left">
              <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded px-1.5 py-0.5 text-neutral-400">
                <span>🔍 Fast Blur</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-neutral-400">
                <span>📁 *Vertex VFX Pack*</span>
              </div>
              <div className="flex items-center gap-1 pl-3 text-[#ff4d31] truncate">
                <span>└─ ✨ High_Hook</span>
              </div>
              <div className="flex items-center gap-1 pl-3 text-[#ff4d31] truncate">
                <span>└─ ✨ Cinematic_LUT</span>
              </div>
              <div className="flex items-center gap-1 pl-3 text-[#ff4d31] truncate">
                <span>└─ ✨ Subtitle_Engine</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📁 Color Correction</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📁 Distort & Warp</span>
              </div>
            </div>
          </div>

          <div className="text-[7.5px] border-t border-white/5 pt-1.5 text-[#ff4d31] font-semibold flex items-center gap-1 truncate">
            <span className="h-1 w-1 rounded-full bg-[#ff4d31] animate-pulse" />
            <span>Preset applied</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Timeline: Composition Layers list and Keyframe Editor */}
      <div className="bg-[#17171a] border border-white/5 rounded p-2 flex flex-col h-[180px] relative">
        {/* Timeline top tabs */}
        <div className="flex items-center justify-between pb-1.5 border-b border-white/5 mb-2 text-[8px]">
          <div className="flex items-center gap-1">
            <span className="bg-[#1b1b1e] text-[#ff4d31] px-2 py-0.5 rounded-t border-t border-x border-white/10 font-bold">
              Comp 1
            </span>
            <span className="text-neutral-600 px-2 py-0.5 font-medium">Comp 2</span>
          </div>

          {/* Toggle control trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1 text-white hover:bg-[#ff4d31]/10 hover:border-[#ff4d31]/30 transition-colors text-[7.5px]"
            >
              {isPlaying ? (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>Stop Rendering</span>
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span>Start Render</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Timeline main split grid */}
        <div className="flex-grow flex gap-2 relative overflow-hidden">
          {/* Left panel: AE Layer Stack (Columns modes, lock state) */}
          <div className="w-[45%] flex flex-col justify-between border-r border-white/5 pr-2">
            <div className="flex flex-col text-[7.5px] text-neutral-500">
              <div className="flex items-center font-bold text-[8px] uppercase tracking-wider pb-1 text-neutral-400 border-b border-white/5 mb-1.5">
                <span className="w-6">No.</span>
                <span className="w-24">Layer Name</span>
                <span className="w-12 text-center">Switches</span>
                <span className="flex-grow text-right">Mode</span>
              </div>

              {/* Layer 1: Title/Hook */}
              <div className="flex items-center h-6 border-b border-white/[0.02]">
                <span className="w-6 text-red-500 font-bold">1</span>
                <span className="w-24 truncate text-neutral-300 flex items-center gap-1">
                  <span className="h-2 w-2 bg-yellow-400 rounded-sm" /> T Subtitles_Hook
                </span>
                <span className="w-12 text-center text-red-400 font-bold font-mono">🔊 🔴 🔓</span>
                <span className="flex-grow text-right text-[#ff4d31]">Screen</span>
              </div>

              {/* Layer 2: Core video clip */}
              <div className="flex items-center h-6 border-b border-white/[0.02]">
                <span className="w-6 text-blue-400 font-bold">2</span>
                <span className="w-24 truncate text-neutral-300 flex items-center gap-1">
                  <span className="h-2 w-2 bg-blue-500 rounded-sm" /> 📹 Video_Cinematic
                </span>
                <span className="w-12 text-center text-neutral-600 font-bold font-mono">
                  🔕 🔴 🔓
                </span>
                <span className="flex-grow text-right text-neutral-400">Normal</span>
              </div>

              {/* Layer 3: Audio track */}
              <div className="flex items-center h-6">
                <span className="w-6 text-green-400 font-bold">3</span>
                <span className="w-24 truncate text-neutral-300 flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-500 rounded-sm" /> 🎵 Soundscape_FX
                </span>
                <span className="w-12 text-center text-green-400 font-bold font-mono">
                  🔊 🔲 🔒
                </span>
                <span className="flex-grow text-right text-neutral-400">Normal</span>
              </div>
            </div>

            {/* Toggle Switches / Modes AE footer bar */}
            <div className="text-[7px] text-neutral-600 flex items-center justify-between border-t border-white/5 pt-1.5">
              <span>🗲 Toggle Switches / Modes</span>
              <span>Parent: Link</span>
            </div>
          </div>

          {/* Right panel: Timeline Track Grid & Keyframes */}
          <div className="w-[55%] flex flex-col justify-between relative pl-2 overflow-hidden">
            {/* Timeline Ruler numbers */}
            <div className="relative h-4 border-b border-white/5 text-[7px] text-neutral-600 flex justify-between px-1 mb-1.5 font-bold">
              <span>00f</span>
              <span>15f</span>
              <span>30f</span>
              <span>45f</span>
              <span>60f</span>
            </div>

            {/* Vertically sliding playhead cursor bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-40 pointer-events-none shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              style={{ left: `calc(${progress}% + 8px)` }}
            >
              {/* Playhead marker at top */}
              <div className="absolute top-0 -left-1.5 w-3 h-3 bg-red-500 rotate-45 border-b border-r border-red-600 shadow" />
            </div>

            {/* Keyframe rows */}
            <div className="flex-grow space-y-1.5 relative flex flex-col justify-center">
              {/* Layer 1 Keyframes (Text segment triggers) */}
              <div className="h-6 w-full bg-white/[0.01] rounded border border-white/5 flex items-center relative">
                {/* Simulated Keyframe diamond markers ◆ */}
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(10)
                      ? "text-yellow-400 drop-shadow-[0_0_8px_#facc15] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "10%" }}
                >
                  ◆
                </span>
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(40)
                      ? "text-yellow-400 drop-shadow-[0_0_8px_#facc15] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "40%" }}
                >
                  ◆
                </span>
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(75)
                      ? "text-yellow-400 drop-shadow-[0_0_8px_#facc15] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "75%" }}
                >
                  ◆
                </span>

                {/* Highlighted track background for active segment */}
                <div
                  className="absolute inset-y-1 bg-yellow-500/10 border-y border-yellow-500/20 rounded-sm z-0 pointer-events-none"
                  style={{ left: "10%", right: "25%" }}
                />
              </div>

              {/* Layer 2 Keyframes (Video segments) */}
              <div className="h-6 w-full bg-white/[0.01] rounded border border-white/5 flex items-center relative">
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(20)
                      ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "20%" }}
                >
                  ◆
                </span>
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(55)
                      ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "55%" }}
                >
                  ◆
                </span>
                <span
                  className={cn(
                    "absolute text-[12px] font-extrabold transition-all duration-300 font-sans cursor-pointer",
                    isKeyframeActive(85)
                      ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee] scale-125"
                      : "text-neutral-600 hover:text-white",
                  )}
                  style={{ left: "85%" }}
                >
                  ◆
                </span>

                {/* Video active track block */}
                <div
                  className="absolute inset-y-1 bg-[#ff4d31]/10 border-y border-[#ff4d31]/20 rounded-sm z-0 pointer-events-none"
                  style={{ left: "20%", right: "15%" }}
                />
              </div>

              {/* Layer 3 Keyframes (Audio waveforms track) */}
              <div className="h-6 w-full bg-[#111113] rounded border border-white/5 flex items-center relative overflow-hidden">
                <div className="absolute inset-y-0.5 left-2 right-2 flex items-center justify-between opacity-40">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const heightPercent = 20 + Math.sin(i / 2 + progress * 0.05) * 60;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "w-[2px] rounded-sm transition-all duration-100",
                          isPlaying ? "bg-green-500" : "bg-neutral-700",
                        )}
                        style={{ height: `${heightPercent}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Frame rate indicator right footer */}
            <div className="text-[7px] text-neutral-600 text-right border-t border-white/5 pt-1.5">
              <span>(29.97 fps)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-10 md:pt-20 pb-12">
      <div className="absolute top-24 left-6 hidden md:block text-[#ff4d31]/60 rotate-12">
        <PlayDoodle className="h-16 w-16" />
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-neutral-400 dark:text-white/30">
        <WaveDoodle className="h-10 w-48" />
      </div>
      <div className="absolute top-1/2 left-0 right-0 hidden lg:block text-neutral-300 dark:text-white/10 -translate-y-1/2">
        <FilmStrip className="h-8 w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full liquid-glass border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d31] animate-pulse" /> REC · Editing
              Suite
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-neutral-950 dark:text-white leading-[0.95]"
            >
              Footage in.
              <br />
              <span className="text-[#ff4d31]">Scroll-stoppers</span> out.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
            >
              Reels, shorts, podcasts, long-form, ads — we cut frames the algorithm can't ignore.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                className="rounded-full px-6 py-3 h-auto bg-[#ff4d31] text-white hover:bg-[#e8462c]"
              >
                <a href="#contact">Send raw footage</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-3 h-auto border-neutral-300 dark:border-neutral-700 bg-transparent"
              >
                <a href="#portfolio">See portfolio</a>
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-7 h-[530px] relative w-full">
            <div className="w-full h-full relative lg:max-w-[calc(100%-50px)] lg:ml-auto">
              <VideoEditorSimulator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (WhyChooseUs-style layout) ---------- */
const editServices = [
  {
    icon: Scissors,
    title: "Short-Form Edits",
    description:
      "Reels, TikToks, Shorts — hook-first pacing built around the critical first 0.8 seconds to maximize scroll-stopping power.",
  },
  {
    icon: Clapperboard,
    title: "Long-Form & Podcasts",
    description:
      "Retention-graphs guide every cut, b-roll placement and chapter marker. We keep viewers watching to the end.",
  },
  {
    icon: Wand2,
    title: "VFX & Motion Graphics",
    description:
      "Tracked text, seamless transitions and motion graphics that feel premium — without the Hollywood timeline or budget.",
  },
  {
    icon: Music2,
    title: "Sound Design",
    description:
      "Mix, master, SFX layers and music selection — audio is never an afterthought. Every frame sounds as good as it looks.",
  },
  {
    icon: Film,
    title: "Cinematic Color Grade",
    description:
      "Film-grade color science tuned to your brand palette and platform. Consistent, cinematic looks across every deliverable.",
  },
  {
    icon: Zap,
    title: "Content Repurposing",
    description:
      "One shoot, twenty deliverables. We natively adapt your content across platforms — no lazy crops, no letterboxing.",
  },
];

export function ServiceCard({
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
            Every cut, <span className="text-[#ff4d31]">engineered.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            From raw footage to scroll-stopping content — every frame is precision-cut for maximum
            impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {editServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio (skewed continuous video marquee) ---------- */
const editItems = [
  {
    id: "MB7",
    video: "https://framerusercontent.com/assets/OvEhiZOEQzLDyQgOeNVhfvDC50.mp4",
    poster:
      "https://framerusercontent.com/images/FHS0pgop7yjZHlGI56VGYUZULS0.png?width=260&height=462",
    href: "https://vimeo.com/1143953311/8aab1a81e8?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB11",
    video: "https://framerusercontent.com/assets/9d7Q1tAYAEPaUo7PQrKcC2G00Qg.mp4",
    poster:
      "https://framerusercontent.com/images/4kp2KImAJicjmXIczDErqcpt9FI.png?width=528&height=938",
    href: "https://vimeo.com/1174145986/427225ea49?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB2",
    video: "https://framerusercontent.com/assets/5rWhVdIvfX2ypMArjXiZ5ZIbyQ.mp4",
    poster:
      "https://framerusercontent.com/images/RJn1eKEVAnvuDEpP5MAM11elvU.png?width=260&height=462",
    href: "https://vimeo.com/1143954132/bec4bf157e?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB3",
    video: "https://framerusercontent.com/assets/6nawiUynXIrwh0Yac0RbYzyXjM.mp4",
    poster:
      "https://framerusercontent.com/images/JZOcw2Qtn21puWJbHgarML3XE.png?width=260&height=462",
    href: "https://vimeo.com/1143953917/41ab983854?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB9",
    video: "https://framerusercontent.com/assets/R8zFZposMFloj5yVm7va2axnx0.mp4",
    poster:
      "https://framerusercontent.com/images/5jOtcgkwh7AOIWMWAQXhjcUGSuk.png?width=528&height=938",
    href: "https://vimeo.com/1174146179/0f7296afc1?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB4",
    video: "https://framerusercontent.com/assets/c70NvOV7x7cK8CCz0kQRT9DJltU.mp4",
    poster:
      "https://framerusercontent.com/images/GQAeNbLUrqex9RGI2FfI439LBk.png?width=260&height=462",
    href: "https://vimeo.com/1143954375/0a03fb4ec3?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB12",
    video: "https://framerusercontent.com/assets/BgPlLUiH1jFRHkeCvF2QGKhaUQA.mp4",
    poster:
      "https://framerusercontent.com/images/wwd7Oo6fI1uymPjy9wsEth6V7o.png?width=528&height=938",
    href: "https://vimeo.com/1174146059/ad16312f5c?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB8",
    video: "https://framerusercontent.com/assets/1G4pPgqcaGPnj3ThDhFwyzD9juQ.mp4",
    poster:
      "https://framerusercontent.com/images/NtF9fOocoLKR8ft90SP7R6ESM.png?width=260&height=462",
    href: "https://vimeo.com/1143953734/af4106fe21?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB6",
    video: "https://framerusercontent.com/assets/SMpnsxQquq79MZxfVeLjCdSGGjk.mp4",
    poster:
      "https://framerusercontent.com/images/v0GaV0fEBKAk5YB6pTctysPxo.png?width=260&height=462",
    href: "https://vimeo.com/1143954014/e70a41db6b?share=copy&fl=sv&fe=ci",
  },
  {
    id: "MB10",
    video: "https://framerusercontent.com/assets/E9QNaYVhbnAn1ieUe9lvdpc8Z8.mp4",
    poster:
      "https://framerusercontent.com/images/BnuLIU2FE0lmg7cx1EyRcombots.png?width=528&height=938",
    href: "https://vimeo.com/1174146107/908cbc0828?share=copy&fl=sv&fe=ci",
  },
];

export const shortFormItems = [
  editItems[0],
  editItems[1],
  editItems[2],
  editItems[3],
  editItems[4],
];

export const cinematicItems = [
  editItems[5],
  editItems[6],
  editItems[7],
  editItems[8],
  editItems[9],
];

interface PortfolioProps {
  items: typeof editItems;
  title: string;
  subtitle: string;
  direction?: "left" | "right";
}

export function Portfolio({ items, title, subtitle, direction = "left" }: PortfolioProps) {
  // Repeat items 5 times to ensure seamless infinite looping for smaller lists
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-12 md:py-16 overflow-hidden">
      <div className="absolute bottom-10 left-10 hidden md:block text-[#ff4d31]/40">
        <PlayDoodle className="h-14 w-14" />
      </div>

      <div className="mx-auto max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff4d31]">
              [ portfolio ]
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 dark:text-neutral-400">{subtitle}</p>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden flex items-center py-6 select-none"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div
          className="w-full flex justify-center"
          style={{
            transform: "perspective(1200px) skewX(4deg) skewY(4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="flex w-max gap-4 animate-marquee py-2 hover:[animation-play-state:paused]"
            style={{
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {repeatedItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[234px] md:w-[288px] h-[416px] md:h-[512px] flex-shrink-0 relative overflow-hidden group transition-all duration-300 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  {/* Poster Image */}
                  <img
                    src={item.poster}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    loading="lazy"
                  />

                  {/* Video File */}
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <video
                      src={item.video}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative Play Overlay */}
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Play className="w-4 h-4 text-white fill-white translate-x-[1px]" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (terminal-style cards) ---------- */
const editQuotes = [
  {
    quote: "Our retention graph went from a cliff to a plateau. Bookings doubled.",
    name: "Marcus Thorne",
    role: "Creator · 1.4M subs",
  },
  {
    quote: "Turnaround is unreal. We ship a week of content in 48 hours.",
    name: "Priya Sahni",
    role: "Head of Content, Halo",
  },
  {
    quote: "Their edits got two of my reels past 5M views. No paid promo.",
    name: "Leo Vasquez",
    role: "Founder, Loop&Co",
  },
];
export function Testimonials() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-white dark:bg-black/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff4d31]">
            [ what creators say ]
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Cut. Posted. <span className="text-[#ff4d31]">Performed.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {editQuotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass rounded-2xl border border-white/30 dark:border-white/10 p-6 font-mono"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-neutral-400">~/feedback/{i + 1}.txt</span>
              </div>
              <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
                "{q.quote}"
              </p>
              <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-white/10">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white font-sans">
                  {q.name}
                </p>
                <p className="text-xs text-neutral-500 font-sans">{q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Packages ---------- */
export const packages = [
  {
    name: "Starter",
    tagline: "Perfect for creators just getting started",
    price: "$499",
    period: "/month",
    features: [
      "4 short-form edits per month",
      "Basic color grading",
      "Licensed music & SFX",
      "2 revision rounds",
      "48h turnaround",
      "Vertical + square formats",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "For brands scaling their content engine",
    price: "$999",
    period: "/month",
    features: [
      "10 short-form edits per month",
      "2 long-form edits per month",
      "Cinematic color grading",
      "Motion graphics & text overlays",
      "Sound design & mixing",
      "Unlimited revisions",
      "24h priority turnaround",
      "Multi-platform delivery",
    ],
    cta: "Scale now",
    highlighted: true,
  },
  {
    name: "Studio",
    tagline: "Full production team on retainer",
    price: "$2,499",
    period: "/month",
    features: [
      "Unlimited short-form edits",
      "6 long-form edits per month",
      "Advanced VFX & compositing",
      "Custom motion graphics",
      "Dedicated editor assigned",
      "Same-day turnaround",
      "Raw project files included",
      "Slack/Discord direct access",
      "Monthly strategy call",
    ],
    cta: "Go studio",
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
                  ${pkg.highlighted ? "rgba(255, 77, 49, 0.12)" : "rgba(255, 255, 255, 0.12)"},
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
            <div className="absolute top-0 right-6">
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
            asChild
            className={cn(
              "w-full rounded-full h-12 text-sm font-semibold transition-all duration-300",
              pkg.highlighted
                ? "bg-[#ff4d31] text-white hover:bg-[#e8462c] shadow-lg shadow-[#ff4d31]/20 hover:shadow-xl hover:shadow-[#ff4d31]/30"
                : "bg-white/10 dark:bg-white/[0.06] text-neutral-900 dark:text-white border border-neutral-200/50 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/[0.1]",
            )}
          >
            <a href="#contact" className="flex items-center justify-center gap-2">
              {pkg.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
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
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255, 77, 49, 0.06), transparent 70%)",
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
            Simple pricing. <span className="text-[#ff4d31]">No surprises.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Pick the plan that fits your content volume. Scale up or down anytime — no contracts, no
            lock-ins.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-500"
        >
          Need something custom?{" "}
          <a href="#contact" className="text-[#ff4d31] font-semibold hover:underline">
            Let's talk →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
