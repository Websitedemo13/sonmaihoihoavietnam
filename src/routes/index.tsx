import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { EssenceQuote } from "@/components/home/EssenceQuote";
import { RecordValues } from "@/components/home/RecordValues";
import { PresenceGrid } from "@/components/home/PresenceGrid";
import { CtaFooter } from "@/components/home/CtaFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vũ Gia — The 100-Year Era of Lacquer" },
      {
        name: "description",
        content:
          "A century of Vietnamese lacquer mastery. Maison Vũ Gia preserves the fire of tradition through resin, time, and silence.",
      },
      { property: "og:title", content: "Vũ Gia — The 100-Year Era of Lacquer" },
      {
        property: "og:description",
        content:
          "Born in 1924, perfected over a century. The definitive archive of Vietnamese lacquer.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-pitch text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <EssenceQuote />
        <RecordValues />
        <PresenceGrid />
        <CtaFooter />
      </main>
      <SiteFooter />
    </div>
  );
}
