import * as React from "react";

/**
 * Pitch-deck designer: 3 slides cycle forward on a loop while a cursor
 * draws elements onto the active slide (text bars retype, chart bars rise,
 * a shape pops in). Light + dark themes.
 */
export function DesignAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#fff4e8] via-[#fde9d3] to-[#fcd7b6] dark:from-[#1b1b1f] dark:via-[#1f1f25] dark:to-[#15151a]">
      <style>{`
        /* Carousel: 3 slides rotate through back -> mid -> front -> back every 9s */
        @keyframes da-cycle {
          0%, 28%   { transform: translate(var(--bx), var(--by)) rotate(var(--br)) scale(.86); opacity: .55; z-index: 1; }
          33%, 61%  { transform: translate(var(--mx), var(--my)) rotate(var(--mr)) scale(.92); opacity: .8;  z-index: 2; }
          66%, 94%  { transform: translate(var(--fx), var(--fy)) rotate(var(--fr)) scale(1);   opacity: 1;  z-index: 3; }
          100%      { transform: translate(var(--bx), var(--by)) rotate(var(--br)) scale(.86); opacity: .55; z-index: 1; }
        }
        @keyframes da-bar  { 0% { width: 0%; } 60%, 100% { width: var(--w, 60%); } }
        @keyframes da-rise { 0% { transform: scaleY(0); } 60%, 100% { transform: scaleY(1); } }
        @keyframes da-pop  { 0%, 100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.12); } }
        @keyframes da-cursor {
          0%   { transform: translate(20%, 75%) rotate(-6deg); }
          18%  { transform: translate(62%, 28%) rotate(-2deg); }
          36%  { transform: translate(78%, 55%) rotate(4deg); }
          54%  { transform: translate(40%, 78%) rotate(-3deg); }
          72%  { transform: translate(28%, 38%) rotate(-8deg); }
          100% { transform: translate(20%, 75%) rotate(-6deg); }
        }
        @keyframes da-click { 0%,100% { opacity: 0; transform: translate(-50%,-50%) scale(.6); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.6); } }
        @keyframes da-drift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(0,-4px); } }

        .da-slot   { animation: da-cycle 9s cubic-bezier(.65,.05,.36,1) infinite; transform-origin: center; }
        .da-bar    { animation: da-bar 1.6s ease-out both infinite; }
        .da-rise   { transform-origin: bottom; animation: da-rise 1.8s ease-out both infinite; }
        .da-pop    { animation: da-pop 2.4s ease-in-out infinite; }
        .da-cursor { animation: da-cursor 9s ease-in-out infinite; }
        .da-click  { animation: da-click 1.8s ease-out infinite; }
        .da-drift  { animation: da-drift 4s ease-in-out infinite; }
      `}</style>

      {/* status chip */}
      {/* positions: back (top-left, tilted), mid (slight tilt), front (centered, hero) */}
      <div
        className="absolute left-1/2 top-1/2 w-[64%] aspect-[16/10]"
        style={{ marginLeft: "-32%", marginTop: "-20%" }}
      >
        {/* Slot A */}
        <SlideFrame
          delay="0s"
          vars={{
            "--bx": "-22%", "--by": "-12%", "--br": "-9deg",
            "--mx": "-6%",  "--my": "8%",   "--mr": "3deg",
            "--fx": "8%",   "--fy": "28%",  "--fr": "0deg",
          }}
        >
          <SlideA />
        </SlideFrame>

        {/* Slot B (offset by -3s of 9s cycle) */}
        <SlideFrame
          delay="-3s"
          vars={{
            "--bx": "-22%", "--by": "-12%", "--br": "-9deg",
            "--mx": "-6%",  "--my": "8%",   "--mr": "3deg",
            "--fx": "8%",   "--fy": "28%",  "--fr": "0deg",
          }}
        >
          <SlideB />
        </SlideFrame>

        {/* Slot C (offset by -6s) */}
        <SlideFrame
          delay="-6s"
          vars={{
            "--bx": "-22%", "--by": "-12%", "--br": "-9deg",
            "--mx": "-6%",  "--my": "8%",   "--mr": "3deg",
            "--fx": "8%",   "--fy": "28%",  "--fr": "0deg",
          }}
        >
          <SlideC />
        </SlideFrame>
      </div>
    </div>
  );
}

function SlideFrame({
  children,
  delay,
  vars,
}: {
  children: React.ReactNode;
  delay: string;
  vars: Record<string, string>;
}) {
  return (
    <div
      className="da-slot absolute inset-0 rounded-lg bg-white shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] ring-1 ring-black/5 overflow-hidden"
      style={{ animationDelay: delay, ...(vars as React.CSSProperties) }}
    >
      {children}
    </div>
  );
}

/* Three slide layouts — each shows live "being designed" motion */
function SlideA() {
  return (
    <div className="p-3 flex gap-3 h-full">
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="inline-flex w-fit items-center gap-1 rounded-sm bg-[#ff4d31]/10 px-1.5 py-0.5">
          <span className="h-1 w-1 rounded-full bg-[#ff4d31]" />
          <span className="block h-1 w-6 rounded-sm bg-[#ff4d31]/80" />
        </div>
        <div className="h-3 w-3/4 rounded-sm bg-neutral-900" />
        <div className="h-3 w-1/2 rounded-sm bg-neutral-900" />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300 mt-1" style={{ ["--w" as any]: "95%", animationDelay: ".2s" }} />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "85%", animationDelay: ".4s" }} />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "60%", animationDelay: ".6s" }} />
        <div className="mt-auto flex items-end gap-1 h-7">
          <div className="da-rise w-2 rounded-sm bg-[#2f7a4a]" style={{ height: "40%", animationDelay: ".5s" }} />
          <div className="da-rise w-2 rounded-sm bg-[#2f7a4a]" style={{ height: "70%", animationDelay: ".7s" }} />
          <div className="da-rise w-2 rounded-sm bg-[#2f7a4a]" style={{ height: "55%", animationDelay: ".9s" }} />
          <div className="da-rise w-2 rounded-sm bg-[#ff4d31]" style={{ height: "90%", animationDelay: "1.1s" }} />
          <div className="da-rise w-2 rounded-sm bg-[#f5c343]" style={{ height: "65%", animationDelay: "1.3s" }} />
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-1.5">
        <div className="flex-1 rounded-md bg-[#fde9d3] relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 da-pop">
            <div className="h-6 w-6 rounded-full bg-[#ff4d31]" />
          </div>
        </div>
        <div className="h-5 rounded-md bg-gradient-to-r from-[#f5c343] to-[#ff4d31]" />
      </div>
    </div>
  );
}

function SlideB() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <div className="h-2 w-1/3 rounded-sm bg-[#2f7a4a]" />
      <div className="h-3 w-2/3 rounded-sm bg-neutral-900" />
      <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "80%", animationDelay: ".3s" }} />
      <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "60%", animationDelay: ".5s" }} />
      <div className="mt-1 grid grid-cols-3 gap-1.5 flex-1">
        <div className="rounded-md bg-[#ff4d31]/90" />
        <div className="rounded-md bg-[#f5c343]/90" />
        <div className="rounded-md bg-[#2f7a4a]/90" />
      </div>
    </div>
  );
}

function SlideC() {
  return (
    <div className="p-3 flex gap-3 h-full">
      <div className="w-2/5 rounded-md bg-gradient-to-br from-[#5b8bd6] to-[#2f7a4a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2 w-12 rounded-sm bg-[#ff4d31]" />
        <div className="h-3 w-full rounded-sm bg-neutral-900" />
        <div className="h-3 w-3/4 rounded-sm bg-neutral-900" />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300 mt-1" style={{ ["--w" as any]: "90%", animationDelay: ".4s" }} />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "70%", animationDelay: ".6s" }} />
        <div className="da-bar h-1.5 rounded-sm bg-neutral-300" style={{ ["--w" as any]: "55%", animationDelay: ".8s" }} />
        <div className="mt-auto flex gap-1">
          <div className="h-4 w-10 rounded-sm bg-[#ff4d31]" />
          <div className="h-4 w-8 rounded-sm bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}