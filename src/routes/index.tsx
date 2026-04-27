import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { HeritageTimeline } from "@/components/home/HeritageTimeline";
import { HeritagePedestals } from "@/components/home/HeritagePedestals";
import { EssenceQuote } from "@/components/home/EssenceQuote";
import { RecordValues } from "@/components/home/RecordValues";
import { PresenceGrid } from "@/components/home/PresenceGrid";
import { CtaFooter } from "@/components/home/CtaFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sơn Mài Di Sản — Hành Trình 100 Năm" },
      {
        name: "description",
        content:
          "Một thế kỷ sơn mài Việt Nam — nhựa sơn, ánh vàng và tĩnh lặng. Bộ sưu tập di sản được giám định và gắn mã định danh.",
      },
      { property: "og:title", content: "Sơn Mài Di Sản — Hành Trình 100 Năm" },
      {
        property: "og:description",
        content:
          "Kỷ nguyên trăm năm sơn mài — Minimalist Gala · Champagne Gold · Cinzel Decorative.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-black text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <EssenceQuote />
        <HeritageTimeline />
        <HeritagePedestals />
        <RecordValues />
        <PresenceGrid />
        <CtaFooter />
      </main>
      <SiteFooter />
    </div>
  );
}
