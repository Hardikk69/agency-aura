import * as React from "react";

export function RotatingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
  return (
    <span className="relative inline-grid align-baseline">
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <span className="col-start-1 row-start-1 relative overflow-hidden pb-8">
        {words.map((w, idx) => (
          <div
            key={w}
            className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out"
            style={{
              opacity: idx === i ? 1 : 0,
              transform: `translateY(${idx === i ? "0" : idx < i ? "-100%" : "100%"})`,
            }}
          >
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              {w}
            </span>
          </div>
        ))}
      </span>
    </span>
  );
}
