import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { LogoMarquee } from "@/components/site/Marquee";
import { Reviews } from "@/components/site/Reviews";
import { CombinedPackage } from "@/components/site/CombinedPackage";

export const Route = createFileRoute("/edit")({
  head: () => ({
    meta: [
      { title: "Editing Services — Vertex Media House" },
      {
        name: "description",
        content: "Short-form, long-form and cinematic edits engineered for retention.",
      },
      { property: "og:title", content: "Editing Services — Vertex Media House" },
      {
        property: "og:description",
        content: "Short-form, long-form and cinematic edits engineered for retention.",
      },
    ],
  }),
  component: EditPage,
});

import {
  Hero,
  Services,
  Portfolio,
  Packages,
  shortFormItems,
  cinematicItems,
} from "@/components/edit/EditSections";

function EditPage() {
  return (
    <PageShell>
      <Hero />
      <div className="py-8 md:py-10">
        <LogoMarquee />
      </div>
      <Services />
      <Portfolio
        items={shortFormItems}
        title="Short-form Reels."
        subtitle="Hook in the first second. Captions that keep eyes on screen. Pacing that earns every extra second of watch time. "
        direction="left"
      />
      {/* <Portfolio
        items={cinematicItems}
        title="Cinematic Commercials."
        subtitle="Premium corporate messaging, rich sound design, and color grading tuned for conversion."
        direction="right"
      /> */}
      <Reviews rows={1} />
      <Packages />
      <CombinedPackage />
    </PageShell>
  );
}
