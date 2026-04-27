const milestones = [
  {
    year: "1930",
    label: "Gốc Rễ",
    body: "Sơn ta Phú Thọ và những lò ủ đầu tiên đặt nền móng cho ngôn ngữ sơn mài Việt Nam hiện đại.",
  },
  {
    year: "1975 — 2020",
    label: "Tiếp Nối",
    body: "Hơn nửa thế kỷ truyền thừa qua bốn thế hệ — kỹ thuật ủ, mài, dát vàng được giữ trọn.",
  },
  {
    year: "2026",
    label: "Kỷ Lục",
    body: "Khởi tạo bộ sưu tập Di Sản 100 Năm — đưa sơn mài Việt vào đấu trường nghệ thuật toàn cầu.",
  },
];

export function HeritageTimeline() {
  return (
    <section className="relative bg-black px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Dòng Chảy Kỷ Lục
          </p>
          <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne tracking-cinzel md:text-3xl">
            Một thế kỷ <span className="text-shimmer">không ngừng</span>
          </h2>
        </div>

        <div className="relative">
          {/* 1px gold thread */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-champagne/70 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-6 md:space-y-8">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-6 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Node */}
                <span className="absolute left-4 top-2 size-2 -translate-x-1/2 rotate-45 bg-champagne shadow-[0_0_12px_rgba(212,175,55,0.8)] md:left-1/2" />

                <div className={i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}>
                  <p className="font-display text-xl tracking-cinzel text-champagne md:text-2xl">
                    {m.year}
                  </p>
                  <p className="mt-1 font-sans text-[9px] tracking-cinzel uppercase text-crimson">
                    {m.label}
                  </p>
                </div>
                <div className={i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}>
                  <p className="font-sans text-[12px] leading-[1.8] tracking-[0.08em] text-champagne/55">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
