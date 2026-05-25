import * as React from "react";

/**
 * Fully connected 5-node automation workflow
 * - Sequential execution
 * - Connected paths
 * - Traveling packets
 * - Larger nodes
 * - Shifted right for better composition
 * - Glassmorphism compatible
 */

export function AutomationAnimation() {
  const nodes = [
    {
      x: 70,
      y: 120,
      label: "TRIGGER",
      color: "#2f7a4a",
      icon: "⚡",
      phase: 0,
    },
    {
      x: 180,
      y: 70,
      label: "AI AGENT",
      color: "#ff4d31",
      icon: "✦",
      phase: 1,
    },
    {
      x: 180,
      y: 170,
      label: "FILTER",
      color: "#f5c343",
      icon: "≡",
      phase: 1,
    },
    {
      x: 310,
      y: 70,
      label: "PROCESS",
      color: "#7c5cff",
      icon: "◉",
      phase: 2,
    },
    {
      x: 310,
      y: 170,
      label: "SEND",
      color: "#5b8bd6",
      icon: "→",
      phase: 3,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#fff4e8] via-[#fde9d3] to-[#f7d6b3] dark:from-[#1b1b1f] dark:via-[#1f1f25] dark:to-[#15151a]">
      <style>{`
        @keyframes au-grid {
          from { background-position: 0 0; }
          to { background-position: 24px 24px; }
        }

        @keyframes au-dash {
          to { stroke-dashoffset: -28; }
        }

        @keyframes au-packet {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }

        @keyframes au-check {
          0%,70% {
            transform: scale(0);
            opacity: 0;
          }
          80% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .au-grid {
          background-image: radial-gradient(
            circle,
            rgba(0,0,0,0.08) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
          animation: au-grid 16s linear infinite;
        }

        .dark .au-grid {
          background-image: radial-gradient(
            circle,
            rgba(255,255,255,0.07) 1px,
            transparent 1px
          );
        }

        .au-flow {
          stroke-dasharray: 6 6;
          animation: au-dash 1.4s linear infinite;
          filter: drop-shadow(0 0 6px rgba(255,77,49,.35));
        }

        .au-check {
          animation: au-check 4s ease-out infinite;
        }

        .au-packet {
          offset-rotate: 0deg;
          animation: au-packet 4s linear infinite;
        }

        /* PACKET PATHS */

        .au-p1 {
          offset-path: path("M 100 120 C 130 120, 140 82, 160 82");
          animation-delay: .1s;
        }

        .au-p2 {
          offset-path: path("M 100 120 C 130 120, 140 158, 160 158");
          animation-delay: .2s;
        }

        .au-p3 {
          offset-path: path("M 200 82 C 240 82, 250 82, 288 82");
          animation-delay: 1s;
        }

        .au-p4 {
          offset-path: path("M 200 158 C 240 158, 250 158, 288 158");
          animation-delay: 1.2s;
        }

        .au-p5 {
          offset-path: path("M 320 82 C 330 82, 330 120, 320 158");
          animation-delay: 2s;
        }

        /* NODE PULSE */

        @keyframes au-node {
          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .au-node {
          animation: au-node 2s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 au-grid opacity-60 dark:opacity-40" />

      {/* CONNECTORS */}

      <svg
        viewBox="0 0 400 240"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* TRIGGER -> AI */}
        <path
          d="M 100 120 C 130 120, 140 82, 160 82"
          fill="none"
          stroke="#ff4d31"
          strokeWidth="2"
          strokeLinecap="round"
          className="au-flow"
        />

        {/* TRIGGER -> FILTER */}
        <path
          d="M 100 120 C 130 120, 140 158, 160 158"
          fill="none"
          stroke="#ff4d31"
          strokeWidth="2"
          strokeLinecap="round"
          className="au-flow"
          style={{ animationDelay: ".2s" }}
        />

        {/* AI -> PROCESS */}
        <path
          d="M 200 82 C 240 82, 250 82, 288 82"
          fill="none"
          stroke="#7c5cff"
          strokeWidth="2"
          strokeLinecap="round"
          className="au-flow"
          style={{ animationDelay: ".4s" }}
        />

        {/* FILTER -> SEND */}
        <path
          d="M 200 158 C 240 158, 250 158, 288 158"
          fill="none"
          stroke="#5b8bd6"
          strokeWidth="2"
          strokeLinecap="round"
          className="au-flow"
          style={{ animationDelay: ".6s" }}
        />

        {/* PROCESS -> SEND */}
        <path
          d="M 320 82 C 330 82, 330 120, 320 158"
          fill="none"
          stroke="#ff4d31"
          strokeWidth="2"
          strokeLinecap="round"
          className="au-flow"
          style={{ animationDelay: ".8s" }}
        />

        {/* PACKETS */}

        <circle
          r="3.5"
          fill="#ff4d31"
          className="au-packet au-p1"
        />

        <circle
          r="3.5"
          fill="#f5c343"
          className="au-packet au-p2"
        />

        <circle
          r="3.5"
          fill="#7c5cff"
          className="au-packet au-p3"
        />

        <circle
          r="3.5"
          fill="#5b8bd6"
          className="au-packet au-p4"
        />

        <circle
          r="3.5"
          fill="#ffffff"
          className="au-packet au-p5"
        />
      </svg>

      {/* NODES */}

      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute z-10"
          style={{
            left: `${(n.x / 400) * 100}%`,
            top: `${(n.y / 240) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
className="au-node flex flex-col items-center gap-1 rounded-lg border border-white/30 bg-white/90 dark:bg-neutral-100 px-2.5 py-2 shadow-lg backdrop-blur-xl"            style={{
              animationDelay: `${n.phase * 0.3}s`,
            }}
          >
            <div
className="flex h-7 w-7 items-center justify-center rounded-md text-white text-[10px] font-bold shadow-md"              style={{
                background: n.color,
              }}
            >
              {n.icon}
            </div>

            <div className="text-[6px] font-bold tracking-[0.18em] text-neutral-700 whitespace-nowrap">
              {n.label}
            </div>
          </div>
        </div>
      ))}

      {/* SUCCESS CHECK */}

      <div
        className="absolute z-20 au-check"
        style={{
          left: `${(310 / 400) * 100}%`,
          top: `${(170 / 240) * 100}%`,
          transform: "translate(55%, -120%)",
        }}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f7a4a] text-white shadow-lg ring-2 ring-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12l4 4 10-10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}