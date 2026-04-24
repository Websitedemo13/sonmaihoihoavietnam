import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import img1925 from "@/assets/journey-1925.jpg";
import img2026 from "@/assets/journey-2026.jpg";
import img2028 from "@/assets/journey-2028.jpg";
import imgPanel from "@/assets/lacquer-panel.jpg";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Hành Trình 2026—2030 · Sơn Mài Di Sản" },
      {
        name: "description",
        content:
          "Một thập kỷ của sự hoàn mỹ. Năm cột mốc xác lập di sản: Khởi Tạo, Khai Phá, Toả Sáng, Lan Toả, Di Sản.",
      },
      { property: "og:title", content: "Hành Trình 2026—2030 · Sơn Mài Di Sản" },
      {
        property: "og:description",
        content:
          "Năm năm để tạo nên di sản — biến sơn mài truyền thống thành biểu tượng sáng tạo đương đại.",
      },
    ],
  }),
  component: JourneyPage,
});

const milestones = [
  {
    year: "2026",
    label: "Khởi Tạo",
    title: "Thiết Lập Bản Nguyên",
    body: "Ra mắt Studio và công bố ngôn ngữ nghệ thuật riêng biệt — nơi nhựa sơn ta gặp gỡ tư duy thị giác đương đại.",
    img: img1925,
    shape: "rect",
    side: "left",
  },
  {
    year: "2027",
    label: "Khai Phá",
    title: "Chinh Phục Không Gian",
    body: "Tổ chức chuỗi triển lãm cá nhân đầu tiên và mở rộng vào những bộ sưu tập cao cấp trong nước và khu vực.",
    img: img2026,
    shape: "circle",
    side: "right",
    glow: true,
  },
  {
    year: "2028",
    label: "Toả Sáng",
    title: "Vinh Quang Quốc Tế",
    body: "Đạt giải thưởng danh giá và được công nhận trên đấu trường nghệ thuật toàn cầu — sơn mài Việt Nam ghi tên trên bản đồ thế giới.",
    img: img2028,
    shape: "square",
    side: "left",
  },
  {
    year: "2029",
    label: "Lan Toả",
    title: "Kết Nối Di Sản",
    body: "Hợp tác với các thương hiệu xa xỉ và đưa nghệ thuật sơn mài vào những không gian biểu tượng của thời đại.",
    img: imgPanel,
    shape: "rect",
    side: "right",
  },
  {
    year: "2030",
    label: "Di Sản",
    title: "Biểu Tượng Vĩnh Cửu",
    body: "Thành lập bảo tàng cá nhân và khẳng định vị thế của một nghệ sĩ có tầm ảnh hưởng thời đại — di sản được trao lại.",
    img: imgPanel,
    shape: "orb",
    side: "left",
    glow: true,
  },
];

function JourneyPage() {
  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />

      <main className="relative pt-40">
        {/* Header */}
        <section className="px-6 pb-32 text-center">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
            MMXXVI — MMXXX · Hành Trình Nghệ Thuật
          </p>
          <h1 className="font-display mx-auto mt-8 max-w-[16ch] text-5xl uppercase leading-[0.95] text-champagne md:text-7xl lg:text-[6.5rem]">
            Một Thập Kỷ <span className="text-shimmer">Hoàn Mỹ</span>
          </h1>
          <p className="mx-auto mt-12 max-w-[52ch] text-xs leading-loose tracking-[0.15em] text-champagne/55">
            Năm năm để tạo nên di sản. Trong một thập kỷ tới, chúng tôi
            biến sơn mài từ một nghệ thuật truyền thống thành biểu tượng
            của sáng tạo đương đại — mỗi tác phẩm là một câu chuyện, mỗi
            triển lãm là một sự kiện.
          </p>
        </section>

        {/* The Golden Path */}
        <section className="relative mx-auto max-w-[1400px] px-6 pb-44">
          {/* Vertical gold thread */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block">
            <div
              className="h-full origin-top bg-gradient-to-b from-transparent via-champagne/60 to-transparent"
              style={{ animation: "draw-line 3s 0.2s both" }}
            />
          </div>

          <ul className="space-y-44 md:space-y-52">
            {milestones.map((m) => (
              <li
                key={m.year}
                className={`relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24`}
              >
                {/* Node on thread */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-champagne bg-pitch md:block" />

                {/* Text */}
                <div
                  className={`${
                    m.side === "left" ? "md:order-1 md:text-right" : "md:order-2"
                  }`}
                >
                  <span className="font-display text-7xl text-champagne/15 md:text-8xl">
                    {m.year}
                  </span>
                  <p className="mt-2 font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                    {m.label}
                  </p>
                  <h3 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-4xl">
                    {m.title}
                  </h3>
                  <p
                    className={`mt-8 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55 ${
                      m.side === "left" ? "md:ml-auto" : ""
                    }`}
                  >
                    {m.body}
                  </p>
                </div>

                {/* Image with shape */}
                <div className={m.side === "left" ? "md:order-2" : "md:order-1"}>
                  <div className="relative mx-auto w-full max-w-md">
                    <div
                      className={`relative aspect-square overflow-hidden ring-1 ring-champagne/25 ${
                        m.shape === "circle" || m.shape === "orb"
                          ? "rounded-full"
                          : m.shape === "square"
                            ? "rounded-none"
                            : "aspect-[3/4] rounded-none"
                      } ${m.glow ? "shadow-[0_0_80px_oklch(0.78_0.13_85_/_0.25)]" : ""}`}
                    >
                      <img
                        src={m.img}
                        alt={m.title}
                        loading="lazy"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-pitch/20 mix-blend-multiply" />
                      {m.glow && (
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-champagne/20 to-transparent" />
                      )}
                    </div>
                    {m.glow && (
                      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-champagne/15 blur-3xl" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="border-t border-champagne/15 px-6 py-32 text-center">
          <p className="font-display text-2xl uppercase leading-[1.4] text-champagne/70 md:text-3xl">
            Mỗi tác phẩm là một <span className="text-shimmer">câu chuyện</span>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
