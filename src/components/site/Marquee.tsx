import { cn } from "@/lib/utils";
import vrgLogo from "@/assets/imgs/vrg.png";
import hireboundLogo from "@/assets/imgs/hirebound.png";
import carillonLogo from "@/assets/imgs/carillon.png";
import accruviaLogo from "@/assets/imgs/accruvia.png";
import planLogo from "@/assets/imgs/plan.png";

const logos = [
  { name: "VRG Bio Pharma", src: vrgLogo },
  { name: "HireBound", src: hireboundLogo },
  { name: "Carillon Parc", src: carillonLogo },
  { name: "AccRuvia", src: accruviaLogo },
  { name: "Plan Retire Travel", src: planLogo },
];

export function LogoMarquee() {
  const items = [...logos, ...logos, ...logos]; // Triple for smoother loop if few items
  return (
    <div className="marquee-mask overflow-hidden w-full py-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 px-6">
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className={cn(
              "liquid-glass",
              "flex items-center justify-center",
              "w-56 h-24 p-2 rounded-[0.75rem]",
              "border border-white/10 dark:border-white/5",
              "group transition-all duration-500 hover:scale-105",
            )}
          >
            <div
              className={cn(
                "liquid-glass",
                "flex items-center justify-center",
                "w-full h-full rounded-[0.75rem]",
                "border border-black/[0.08] dark:border-white/[0.12]",
                "shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.5)]",
                "transition-all duration-500 group-hover:scale-[0.98] group-hover:border-white/20",
              )}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-9 w-auto max-w-[70%] object-contain brightness-0 dark:invert opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.textContent = logo.name;
                  }
                }}
              />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
