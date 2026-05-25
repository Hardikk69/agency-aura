import * as React from "react";

/**
 * Editor UI: preview window cycles through 4 scenes, multi-track timeline,
 * sweeping playhead, live audio waveform. Themed for light + dark.
 */
export function EditAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#fff4e8] via-[#fde9d3] to-[#fcd7b6] text-neutral-800 dark:bg-none dark:bg-[#1b1b1f] dark:text-white">
      <style>{`
        @keyframes ea-playhead { 0% { left: 8%; } 100% { left: 92%; } }
        @keyframes ea-wave { 0%,100% { transform: scaleY(.4); } 50% { transform: scaleY(1); } }
        @keyframes ea-scene { 0%, 24% { opacity: 1; } 28%, 100% { opacity: 0; } }
        @keyframes ea-pan { 0% { transform: translateX(0) scale(1.05); } 100% { transform: translateX(-6%) scale(1.1); } }
        @keyframes ea-pop { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .ea-playhead { animation: ea-playhead 6s linear infinite; }
        .ea-wave > span { display:inline-block; width:2px; margin-right:1px; background:#ff4d31; transform-origin:center; animation: ea-wave 1s ease-in-out infinite; }
        .dark .ea-wave > span { background:#f5c343; }
        .ea-pan { animation: ea-pan 6s ease-in-out infinite alternate; }
        .ea-pop { animation: ea-pop 1.6s ease-in-out infinite; }
      `}</style>

      <div className="flex h-[calc(100%-28px)]">
        <div className="flex-1 flex flex-col">
          {/* preview area */}
          <div className="relative flex-1 m-2 rounded-md overflow-hidden border border-black/10 dark:border-white/10 bg-black">
            {/* Scene 1: sunset */}
            <div className="absolute inset-0 ea-pan" style={{ animation: "ea-scene 4s infinite, ea-pan 6s ease-in-out infinite alternate", animationDelay: "0s, 0s" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a3d] via-[#ff4d31] to-[#5a1c2e]" />
              <div className="absolute left-1/2 top-[55%] -translate-x-1/2 h-10 w-10 rounded-full bg-[#ffd166] shadow-[0_0_40px_#ffb84d]" />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            {/* Scene 2: green field */}
            <div className="absolute inset-0" style={{ animation: "ea-scene 4s infinite", animationDelay: "1s" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#8ec7f0] to-[#2f7a4a]" />
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-[#2f7a4a]" />
              <div className="absolute bottom-[40%] left-[30%] ea-pop">
                <div className="h-6 w-6 rounded-full bg-[#f5c343]" />
              </div>
            </div>
            {/* Scene 3: title card */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#fde9d3]" style={{ animation: "ea-scene 4s infinite", animationDelay: "2s" }}>
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-2.5 w-20 rounded-sm bg-[#ff4d31]" />
                <div className="h-2 w-14 rounded-sm bg-neutral-800" />
                <div className="h-1.5 w-10 rounded-sm bg-neutral-400" />
              </div>
            </div>
            {/* Scene 4: portrait */}
            <div className="absolute inset-0" style={{ animation: "ea-scene 4s infinite", animationDelay: "3s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a45] to-[#1b1b1f]" />
              <div className="absolute left-1/2 top-[35%] -translate-x-1/2 h-8 w-8 rounded-full bg-[#f0c2a1]" />
              <div className="absolute left-1/2 top-[58%] -translate-x-1/2 h-10 w-16 rounded-t-full bg-[#2f7a4a]" />
            </div>

            {/* play overlay */}
            <div className="absolute left-2 bottom-2 flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-full bg-[#ff4d31] flex items-center justify-center">
                <svg width="6" height="6" viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z" fill="white" /></svg>
              </div>
              <div className="text-[8px] text-white/70 tracking-wider">00:00:24</div>
            </div>

            {/* film grain overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
          </div>

          {/* timeline */}
          <div className="relative m-2 mt-0 rounded-md bg-white/70 backdrop-blur border border-black/10 dark:bg-[#15151a] dark:border-white/10 p-2">
            {/* ruler */}
            <div className="flex justify-between px-1 text-[7px] text-neutral-500 dark:text-white/40 mb-1">
              {["0s","2s","4s","6s","8s","10s"].map((t)=>(<span key={t}>{t}</span>))}
            </div>

            {/* V2 track — graphics */}
            <div className="relative h-3 mb-1 rounded-sm bg-black/[0.04] dark:bg-white/[0.04]">
              <div className="absolute top-0 bottom-0 left-[40%] w-[30%] rounded-sm bg-[#ff4d31]/80 border border-[#ff4d31]" />
            </div>
            {/* V1 track — main clips */}
            <div className="relative h-4 mb-1 rounded-sm bg-black/[0.04] dark:bg-white/[0.04]">
              <div className="absolute top-0 bottom-0 left-[5%] w-[28%] rounded-sm bg-[#5b8bd6]/80 border border-[#5b8bd6]" />
              <div className="absolute top-0 bottom-0 left-[34%] w-[20%] rounded-sm bg-[#2f7a4a]/80 border border-[#2f7a4a]" />
              <div className="absolute top-0 bottom-0 left-[55%] w-[18%] rounded-sm bg-[#f5c343]/90 border border-[#f5c343]" />
              <div className="absolute top-0 bottom-0 left-[74%] w-[22%] rounded-sm bg-[#5b8bd6]/80 border border-[#5b8bd6]" />
            </div>
            {/* A1 track — waveform */}
            <div className="relative h-4 rounded-sm bg-[#ff4d31]/10 dark:bg-[#2a2410]/60 overflow-hidden flex items-center px-1">
              <div className="ea-wave h-full w-full flex items-center">
                {Array.from({ length: 70 }).map((_, i) => (
                  <span key={i} style={{ animationDelay: `${(i % 12) * 0.08}s`, height: `${30 + ((i * 17) % 70)}%` }} />
                ))}
              </div>
            </div>

            {/* playhead */}
            <div className="ea-playhead absolute top-0 bottom-0 w-px bg-[#ff4d31]">
              <div className="absolute -top-1 -left-[3px] h-0 w-0 border-x-[4px] border-x-transparent border-t-[6px] border-t-[#ff4d31]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}