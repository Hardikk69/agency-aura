const logos = [
  "OpenAI",
  "Claude",
  "xAI",
  "Grok",
  "Supabase",
  "Vercel",
  "Cloudflare",
  "Plesk",
  "Next.js",
  "shadcn/ui",
  "Tailwind CSS",
  "Prisma",
];

export function LogoMarquee() {
  const items = [...logos, ...logos];
  return (
    <div className="marquee-mask overflow-hidden w-full">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center px-8 md:px-12 py-2 text-sm md:text-base font-medium tracking-tight text-neutral-500 dark:text-neutral-400 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}