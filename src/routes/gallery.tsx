import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import panel from "@/assets/lacquer-panel.jpg";
import hero from "@/assets/lacquer-hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Thư Viện · Sơn Mài Di Sản" },
      {
        name: "description",
        content:
          "Bảo tàng số những kiệt tác sơn mài Việt Nam — vỏ trứng, vàng lá, nhựa sơn ta.",
      },
      { property: "og:title", content: "Thư Viện · Sơn Mài Di Sản" },
      {
        property: "og:description",
        content: "Khám phá kho tác phẩm tuyển chọn của Sơn Mài Di Sản.",
      },
    ],
  }),
  component: GalleryPage,
});

type Work = {
  id: number;
  title: string;
  year: string;
  img: string;
  materials: string;
  concept: string;
  edition: string;
  height: "tall" | "short" | "wide";
};

const works: Work[] = [
  { id: 1, title: "Bình Của Hoàng Hậu", year: "MMXXIII", img: g1, materials: "Vàng lá 24K · sơn ta · gỗ mun hoá", concept: "Một chiếc bình duy nhất, ủ trong bóng tối, khắc lên những nét bút thư pháp hoàng cung. Ba năm để hoàn tất.", edition: "Độc bản", height: "tall" },
  { id: 2, title: "Đoá Cánh Gián", year: "MMXXII", img: g2, materials: "Cánh gián · khảm vàng · nhựa sơn ta", concept: "Sắc đỏ xếp thành mười bảy lớp trong suốt, vàng lá vẽ kiến trúc rễ lan ẩn bên dưới.", edition: "Phiên bản 3 chiếc", height: "short" },
  { id: 3, title: "Bình Phong Đêm", year: "MMXXIV", img: g3, materials: "Sơn mài · vàng lá · khung gỗ sồi chạm", concept: "Một phong cảnh sương mù và thông trỗi dậy từ sắc đen tuyệt đối — chỉ hiện hữu với đôi mắt kiên nhẫn.", edition: "Độc bản", height: "tall" },
  { id: 4, title: "Bản Đồ Vỏ Trứng", year: "MMXXI", img: g4, materials: "Vỏ trứng nghiền · sơn ta", concept: "Mười nghìn mảnh vỡ xếp tay. Một bản đồ vũ trụ vẽ bằng chất liệu mong manh nhất trên đời.", edition: "Độc bản", height: "short" },
  { id: 5, title: "Nhựa Của Rừng", year: "MMXX", img: hero, materials: "Nhựa sơn ta nguyên chất · obsidian", concept: "Tấm gương không được vẽ. Nó được nuôi — qua kiên nhẫn, qua từng lớp, qua sự tĩnh lặng của phòng ủ.", edition: "Phiên bản 5 chiếc", height: "wide" },
  { id: 6, title: "Tấm Sơn Vương Giả", year: "MMXXV", img: panel, materials: "Vàng 24K · cánh gián · vỏ trứng · sơn ta", concept: "Một tấm panel cô đọng toàn bộ ngôn ngữ của xưởng. Tác phẩm sẽ định nghĩa Kỷ Lục 2026.", edition: "Độc bản", height: "tall" },
];

function GalleryPage() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />

      <main className="pt-40">
        {/* Header */}
        <section className="px-6 pb-24 md:px-12">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Tuyển Tập · Tập III
              </p>
              <h1 className="font-display mt-8 text-5xl uppercase leading-[0.9] text-champagne md:text-7xl lg:text-[6rem]">
                Thư <span className="text-shimmer italic">Viện</span>
              </h1>
            </div>
            <p className="max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/50">
              Sáu kiệt tác được tuyển chọn từ kho lưu trữ. Nhấp vào mỗi tác
              phẩm để xem hồ sơ di sản đầy đủ.
            </p>
          </div>
        </section>

        {/* Asymmetric masonry */}
        <section className="px-6 pb-44 md:px-12">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {works.map((w, i) => (
              <button
                key={w.id}
                onClick={() => setActive(w)}
                className={`group relative text-left transition-transform duration-700 hover:-translate-y-1 ${
                  i === 0
                    ? "md:col-span-5 md:col-start-1"
                    : i === 1
                      ? "md:col-span-4 md:col-start-8 md:mt-32"
                      : i === 2
                        ? "md:col-span-6 md:col-start-2"
                        : i === 3
                          ? "md:col-span-4 md:col-start-9"
                          : i === 4
                            ? "md:col-span-7 md:col-start-1"
                            : "md:col-span-4 md:col-start-9 md:-mt-32"
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-card ring-1 ring-champagne/10 transition-all duration-700 group-hover:ring-champagne/60 ${
                    w.height === "tall"
                      ? "aspect-[3/4]"
                      : w.height === "wide"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                  }`}
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    width={800}
                    height={1066}
                    className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  {/* Lacquer finish gloss */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/[0.04] via-transparent to-pitch/40 mix-blend-overlay" />
                  <div className="absolute -inset-x-full top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-champagne/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />

                  {/* Frame corners on hover */}
                  <span className="absolute left-3 top-3 size-3 border-l border-t border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 size-3 border-r border-t border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 size-3 border-b border-l border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 size-3 border-b border-r border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="mt-6 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-base uppercase leading-tight text-champagne md:text-lg">
                      {w.title}
                    </h3>
                    <p className="mt-2 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                      {w.materials.split(" · ")[0]}
                    </p>
                  </div>
                  <span className="font-display text-sm text-champagne/50">
                    {w.year}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Split-Screen Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pitch/85 px-4 backdrop-blur-md"
          style={{ animation: "fade-up 0.4s ease both" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative grid h-[88dvh] w-full max-w-7xl grid-cols-1 overflow-hidden bg-pitch ring-1 ring-champagne/30 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: pedestal */}
            <div className="relative bg-[oklch(0.18_0.005_85)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.005_85)] via-[oklch(0.16_0.005_85)] to-[oklch(0.08_0.005_0)]" />
              <div className="absolute inset-x-1/4 bottom-1/4 top-1/2 bg-pitch/20 blur-2xl" />
              <div className="relative flex h-full items-center justify-center p-12">
                <div className="relative">
                  {/* The pedestal */}
                  <div className="absolute -bottom-12 left-1/2 h-12 w-72 -translate-x-1/2 bg-gradient-to-b from-[oklch(0.95_0_0)] to-[oklch(0.7_0_0)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]" />
                  <img
                    src={active.img}
                    alt={active.title}
                    className="relative max-h-[60dvh] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* Right: data sheet */}
            <div className="relative flex flex-col overflow-y-auto bg-pitch p-10 md:p-14">
              <button
                onClick={() => setActive(null)}
                className="absolute right-6 top-6 font-sans text-[10px] tracking-eyebrow uppercase text-champagne/50 transition-colors hover:text-champagne"
              >
                Đóng ✕
              </button>

              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Mã N° {String(active.id).padStart(3, "0")} · {active.year}
              </p>
              <h2 className="font-display mt-6 text-4xl uppercase leading-[1.05] text-champagne md:text-5xl">
                {active.title}
              </h2>

              <div className="my-10 h-px w-16 bg-champagne/40" />

              <div className="space-y-8 text-sm">
                <div>
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                    Chất liệu
                  </p>
                  <p className="mt-3 leading-loose tracking-[0.1em] text-champagne/80">
                    {active.materials}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                    Tuyên ngôn ý niệm
                  </p>
                  <p className="mt-3 leading-loose tracking-[0.1em] text-champagne/65">
                    {active.concept}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                    Phiên bản
                  </p>
                  <p className="mt-3 font-display text-lg text-champagne">
                    {active.edition}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-12">
                <button className="group relative inline-flex items-center justify-center border border-champagne bg-pitch px-10 py-4 font-sans text-[10px] tracking-luxury uppercase text-champagne transition-all duration-700 hover:bg-champagne hover:text-pitch">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-champagne/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <span className="relative">Liên hệ sở hữu</span>
                </button>
                <button className="border border-crimson bg-crimson/10 px-10 py-4 font-sans text-[10px] tracking-luxury uppercase text-champagne/85 transition-colors duration-500 hover:bg-crimson/30">
                  Đặt lịch xem riêng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
