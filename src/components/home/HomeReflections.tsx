import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import r1 from "@/assets/journal-artisan.jpg";
import r2 from "@/assets/journal-forest.jpg";
import r3 from "@/assets/value-passion.jpg";

const posts = [
  {
    img: r1,
    cat: "Suy ngẫm",
    title: "Ánh sáng trong sự tĩnh lặng",
    excerpt:
      "Khi bóng tối được nâng niu đủ lâu, ánh vàng tự tìm đường trở về.",
    date: "12 · 04 · 2026",
    hash: "uy-son",
  },
  {
    img: r2,
    cat: "Chất liệu",
    title: "Khi chất liệu cất lời",
    excerpt:
      "Nhựa sơn ta, vỏ trứng, vàng lá — ba ngôn ngữ kể một câu chuyện.",
    date: "28 · 03 · 2026",
    hash: "chat-lieu",
  },
  {
    img: r3,
    cat: "Di sản",
    title: "Một thế kỷ trong bóng tối",
    excerpt:
      "Trăm năm ủ trong im lặng — để khoảnh khắc bừng sáng được vĩnh cửu.",
    date: "05 · 03 · 2026",
    hash: "ky-luc-100-nam",
  },
];

function MagneticCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    el.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="will-change-transform"
      style={{ transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </div>
  );
}

export function HomeReflections() {
  return (
    <section className="relative px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
              Góc Suy Ngẫm
            </p>
            <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne md:text-3xl">
              Những trang <span className="text-champagne/55">tản mạn</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-[12px] leading-[1.8] tracking-[0.1em] text-champagne/50">
            Ba lát cắt tĩnh lặng từ xưởng — về chất liệu, ánh sáng, và thời gian.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <MagneticCard key={p.title}>
              <Link
                to="/journal"
                hash={p.hash}
                className="group flex flex-col bg-black ring-1 ring-champagne/10 transition-all duration-700 hover:ring-champagne/40"
              >
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.16),transparent_60%)]" />
                  <span className="absolute left-4 top-4 font-sans text-[8px] tracking-eyebrow uppercase text-champagne/80">
                    {p.cat}
                  </span>
                </figure>
                <div className="flex flex-col gap-4 p-6">
                  <p className="font-sans text-[9px] tracking-cinzel uppercase text-champagne/40">
                    {p.date}
                  </p>
                  <h3 className="font-display text-base leading-[1.25] text-champagne md:text-lg">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[13px] leading-[1.95] tracking-[0.06em] text-foreground/80">
                    {p.excerpt}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-px w-8 bg-champagne/40 transition-all duration-700 group-hover:w-20 group-hover:bg-champagne" />
                    <span className="font-sans text-[9px] tracking-cinzel uppercase text-champagne/50 transition-colors group-hover:text-champagne">
                      Đọc bài →
                    </span>
                  </div>
                </div>
              </Link>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
