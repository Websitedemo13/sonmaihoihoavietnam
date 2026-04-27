import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroCircle } from "@/components/home/HeroCircle";
import { HeritageTimeline } from "@/components/home/HeritageTimeline";
import { HeritagePedestals } from "@/components/home/HeritagePedestals";
import { CtaFooter } from "@/components/home/CtaFooter";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Trang Chủ · Hành Trình 100 Năm Sơn Mài" },
      {
        name: "description",
        content:
          "Một thế kỷ sơn mài Việt Nam — Minimalist Gala, Champagne Gold. Dòng chảy kỷ lục, ba bục vinh danh và lời mời ghi danh vào lịch sử.",
      },
      { property: "og:title", content: "Trang Chủ · Hành Trình 100 Năm Sơn Mài" },
      {
        property: "og:description",
        content:
          "Khung tròn di sản, dòng chảy kỷ lục và ba chứng nhân di sản — phiên bản 100 năm.",
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
        <HeroCircle />
        <HeritageTimeline />
        <HeritagePedestals />
        <CtaFooter />
      </main>
      <SiteFooter />
    </div>
  );
}
