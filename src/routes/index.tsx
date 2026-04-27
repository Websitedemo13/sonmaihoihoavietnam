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
      { title: "Sơn Mài Di Sản — Nghệ thuật cảm từ tĩnh lặng" },
      {
        name: "description",
        content:
          "Nơi sơn mài Việt Nam chạm đến linh hồn thời đại. Mỗi tác phẩm là một khoảnh khắc vĩnh cửu — nhựa sơn, ánh vàng và sự tĩnh lặng sâu thẳm.",
      },
      { property: "og:title", content: "Sơn Mài Di Sản — Nghệ thuật cảm từ tĩnh lặng" },
      {
        property: "og:description",
        content:
          "Nghệ thuật không chỉ được nhìn — nó được cảm nhận từ trong tĩnh lặng.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
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
