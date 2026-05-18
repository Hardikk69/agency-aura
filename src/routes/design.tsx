import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import { Reviews } from "@/components/site/Reviews";
import { CombinedPackage } from "@/components/site/CombinedPackage";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design Services — Vertex Media House" },
      {
        name: "description",
        content:
          "Brand-first design — websites, decks, social, and identity systems crafted to convert.",
      },
      { property: "og:title", content: "Design Services — Vertex Media House" },
      {
        property: "og:description",
        content:
          "Brand-first design — websites, decks, social, and identity systems crafted to convert.",
      },
    ],
  }),
  component: DesignPage,
});

import { Hero, Services, Portfolio, designReviews, Packages } from "@/components/design/DesignSections";

function DesignPage() {
  return (
    <PageShell>
      <Hero />
      <div className="py-8 md:py-10">
        <LogoMarquee />
      </div>
      <Services />
      <Portfolio />
      <Reviews rows={1} items={designReviews} />
      <Packages />
      <CombinedPackage />
    </PageShell>
  );
}
