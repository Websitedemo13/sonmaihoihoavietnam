import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "1930",
    label: "Gốc Rễ",
    title: "Khởi nguyên sơn ta",
    body: "Sơn ta Phú Thọ và những lò ủ đầu tiên đặt nền móng cho ngôn ngữ sơn mài Việt Nam hiện đại.",
  },
  {
    year: "1975 — 2020",
    label: "Tiếp Nối",
    title: "Bốn thế hệ truyền thừa",
    body: "Hơn nửa thế kỷ truyền thừa qua bốn thế hệ — kỹ thuật ủ, mài, dát vàng được giữ trọn.",
  },
  {
    year: "2026",
    label: "Kỷ Lục",
    title: "Bộ sưu tập Di Sản",
    body: "Khởi tạo bộ sưu tập Di Sản 100 Năm — đưa sơn mài Việt vào đấu trường nghệ thuật toàn cầu.",
  },
];

export function HeritageTimeline() {
  const [visible, setVisible] = useState<boolean[]>(() => milestones.map(() => false));
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.35 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="section-overlay section-overlay--timeline relative overflow-hidden px-6 py-10 md:py-14">
      {/* Ambient gold radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
      {/* Gold threads top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/65">
            — Dòng Chảy Kỷ Lục —
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.1] tracking-cinzel md:text-5xl">
            <span className="gold-leaf">Một thế kỷ</span>
            <br />
            <span className="text-champagne/90 italic font-light">không ngừng chảy</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central gold thread with glow */}
          <div className="absolute bottom-0 left-6 top-0 w-px md:left-1/2 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-champagne/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-champagne/30 to-transparent blur-[3px]" />
          </div>

          <ul className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const show = visible[i];
              return (
                <li
                  key={m.year}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  {/* Diamond node with halo */}
                  <span className="absolute left-6 top-3 -translate-x-1/2 md:left-1/2">
                    <span
                      className={`absolute inset-0 -m-4 rounded-full bg-champagne/20 blur-xl transition-all duration-1000 ${
                        show ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                    />
                    <span
                      className={`relative block size-3 rotate-45 bg-gradient-to-br from-champagne-soft to-champagne shadow-[0_0_18px_rgba(212,175,55,0.9)] transition-all duration-700 ${
                        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                    />
                  </span>

                  {/* Year side */}
                  <div
                    className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      show ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                    } ${isLeft ? "md:order-1 md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}
                  >
                    <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-crimson/90">
                      {m.label}
                    </p>
                    <p className="font-display mt-3 text-4xl leading-none tracking-cinzel md:text-6xl">
                      <span className="gold-leaf">{m.year}</span>
                    </p>
                    <div
                      className={`mt-4 h-px w-16 bg-gradient-to-r from-champagne/60 to-transparent ${
                        isLeft ? "md:ml-auto md:bg-gradient-to-l" : ""
                      }`}
                    />
                  </div>

                  {/* Content side */}
                  <div
                    className={`mt-4 md:mt-0 transition-all duration-[900ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      show ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    } ${isLeft ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16 md:text-right"}`}
                  >
                    <h3 className="font-display text-base tracking-cinzel text-champagne md:text-lg">
                      {m.title}
                    </h3>
                    <p className="mt-3 font-sans text-[13px] leading-[2] tracking-[0.08em] text-foreground/80 md:text-[13.5px]">
                      {m.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Closing emblem */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
          <span className="font-display text-[10px] tracking-cinzel text-champagne/60">
            ✦ Một Thế Kỷ ✦
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
