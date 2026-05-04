import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomePresence } from "@/components/home/HomePresence";
import { HomeFeatured } from "@/components/home/HomeFeatured";
import { HomeReflections } from "@/components/home/HomeReflections";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";
import { HomeManifesto } from "@/components/home/HomeManifesto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sơn Mài Di Sản — Nghệ thuật cảm từ tĩnh lặng" },
      {
        name: "description",
        content:
          "Nơi sơn mài Việt Nam chạm đến linh hồn thời đại. Mỗi tác phẩm là một khoảnh khắc vĩnh cửu — nhựa sơn, ánh vàng và sự tĩnh lặng sâu thẳm.",
      },
      {
        property: "og:title",
        content: "Sơn Mài Di Sản — Nghệ thuật cảm từ tĩnh lặng",
      },
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
        <HomeBanner />
        <HomeIntro />
        <HomePresence />
        <HomeFeatured />
        <HomeManifesto />
        <HomeReflections />
        <HomeNewsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
