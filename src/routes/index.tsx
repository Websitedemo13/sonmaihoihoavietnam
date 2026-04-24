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
      { title: "Sơn Mài Di Sản — Kỷ Nguyên Trăm Năm" },
      {
        name: "description",
        content:
          "Một thế kỷ tinh hoa sơn mài Việt Nam. Sơn Mài Di Sản gìn giữ ngọn lửa truyền thống qua nhựa sơn, thời gian và tĩnh lặng.",
      },
      { property: "og:title", content: "Sơn Mài Di Sản — Kỷ Nguyên Trăm Năm" },
      {
        property: "og:description",
        content:
          "Khai sinh năm 1924, hoàn thiện qua một thế kỷ. Kho lưu trữ chính thức của sơn mài Việt Nam.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh text-foreground">
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
