import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWidgets } from "./FloatingWidgets";
import { GradualBlur } from "./GradualBlur";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-neutral-100 dark:bg-black">
        <main className="relative w-full bg-white dark:bg-neutral-950">
          <div className="relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
        <FloatingWidgets />
        <GradualBlur position="bottom" height="4rem" strength={1.5} divCount={6} exponential opacity={1} />
      </div>
    </ThemeProvider>
  );
}
