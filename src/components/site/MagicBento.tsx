import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

/* 
  MagicBento - A premium card system with particles, spotlights, and interactive effects.
  Adapted for the Liquid Glass aesthetic.
*/

const DEFAULT_PARTICLE_COUNT = 24;
const DEFAULT_SPOTLIGHT_RADIUS = 400;
const DEFAULT_GLOW_COLOR = "255, 77, 49"; // Primary site color (#ff4d31)
const MOBILE_BREAKPOINT = 768;

// --- Utilities ---

const createParticleElement = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "magic-particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 10px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
    opacity: 0;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.85,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number,
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

// --- Components ---

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  particleCount?: number;
  glowColor?: string;
  enableStars?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  enableBorderGlow?: boolean;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableStars = true,
  enableTilt = true,
  enableMagnetism = false,
  clickEffect = true,
  enableBorderGlow = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach((p) => {
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        onComplete: () => p.remove(),
      });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const x = Math.random() * width;
        const y = Math.random() * height;
        const particle = createParticleElement(x, y, glowColor);

        cardRef.current?.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.to(particle, {
          opacity: Math.random() * 0.6 + 0.4,
          scale: Math.random() * 1.5 + 1.0,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(particle, {
          x: "+=" + (Math.random() - 0.5) * 40,
          y: "+=" + (Math.random() - 0.5) * 40,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, i * 150);

      timeoutsRef.current.push(timeoutId);
    }
  }, [particleCount, glowColor]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      if (enableStars) spawnParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearParticles();

      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        gsap.to(el, {
          rotateX,
          rotateY,
          duration: 0.2,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magX = (x - centerX) * 0.1;
        const magY = (y - centerY) * 0.1;
        gsap.to(el, {
          x: magX,
          y: magY,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("div");
      ripple.className = "magic-ripple";
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 2px;
        height: 2px;
        background: rgba(${glowColor}, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 5;
        transform: translate(-50%, -50%);
      `;
      el.appendChild(ripple);

      gsap.to(ripple, {
        scale: 400,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("click", handleClick);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("click", handleClick);
      clearParticles();
    };
  }, [enableStars, enableTilt, enableMagnetism, clickEffect, spawnParticles, clearParticles]);

  return (
    <div
      ref={cardRef}
      className={cn("magic-card card relative", enableBorderGlow && "card--border-glow", className)}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

export const MagicGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  children,
  className,
  enableSpotlight = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableSpotlight || !gridRef.current) return;

    const grid = gridRef.current;

    // Create global spotlight element
    const spotlight = document.createElement("div");
    spotlight.className = "magic-global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: ${spotlightRadius * 2}px;
      height: ${spotlightRadius * 2}px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.1) 0%,
        rgba(${glowColor}, 0.05) 30%,
        transparent 70%
      );
      z-index: 100;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      filter: blur(20px);
    `;
    document.body.appendChild(spotlight);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.5 });
        return;
      }

      gsap.to(spotlight, {
        left: e.clientX,
        top: e.clientY,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      const cards = grid.querySelectorAll(".card");
      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);

      cards.forEach((card) => {
        const cardEl = card as HTMLElement;
        const cRect = cardEl.getBoundingClientRect();
        const cX = cRect.left + cRect.width / 2;
        const cY = cRect.top + cRect.height / 2;

        const dist =
          Math.hypot(e.clientX - cX, e.clientY - cY) - Math.max(cRect.width, cRect.height) / 2;
        const effDist = Math.max(0, dist);

        let intensity = 0;
        if (effDist <= proximity) intensity = 1;
        else if (effDist <= fadeDistance) {
          intensity = (fadeDistance - effDist) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardEl, e.clientX, e.clientY, intensity, spotlightRadius);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      spotlight.remove();
    };
  }, [enableSpotlight, spotlightRadius, glowColor]);

  return (
    <div ref={gridRef} className={cn("magic-grid", className)}>
      <style>{`
        .magic-card {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 400px;
        }
        
        .card--border-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: radial-gradient(
            var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(var(--glow-color), calc(var(--glow-intensity) * 1)) 0%,
            rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 40%,
            transparent 80%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          z-index: 2;
        }
      `}</style>
      {children}
    </div>
  );
};
