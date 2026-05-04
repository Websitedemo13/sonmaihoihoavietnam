import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    n: "I",
    title: "Kiến Trúc Di Sản",
    body: "Đưa sơn mài vào không gian sống đương đại — từ kiến trúc nội thất đến công trình biểu tượng.",
  },
  {
    n: "II",
    title: "Thời Trang Xa Xỉ",
    body: "Hợp tác với các nhà mốt cao cấp — biến chất liệu sơn ta, vàng lá thành ngôn ngữ thời trang Việt.",
  },
  {
    n: "III",
    title: "Di Sản Số",
    body: "Số hoá từng tác phẩm — mã định danh, giám định và lưu trữ vĩnh cửu trên nền tảng di sản số.",
  },
];

export function HomeManifesto() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const slide = (delay: string) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${delay} ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-6 py-14 md:py-18"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(243,229,171,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Vision Quote */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`font-sans text-[10px] tracking-cinzel uppercase text-champagne/75 ${slide("delay-0")}`}
          >
            — Tầm Nhìn Hành Trình —
          </p>
          <blockquote
            className={`font-display mt-6 text-2xl leading-[1.25] text-champagne md:text-[2rem] ${slide("delay-100")}`}
          >
            <span className="gold-leaf">
              “Di sản không chỉ để gìn giữ, mà cần được kích hoạt, phát triển.”
            </span>
          </blockquote>
          <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        </div>

        {/* World Record Proposal */}
        <div
          className={`mx-auto mt-16 max-w-2xl text-center ${slide("delay-150")}`}
        >
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
            Đề Cử Kỷ Lục Thế Giới
          </p>
          <h2 className="font-display mt-5 text-xl leading-[1.3] tracking-cinzel text-champagne md:text-2xl">
            Việt Nam — Quốc gia tiên phong
            <br />
            đổi mới Nghệ thuật Sơn Mài Hội Hoạ
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] font-sans text-[13px] leading-[2] tracking-[0.08em] text-foreground/85 md:text-sm">
            Một hồ sơ đề cử trang trọng — đưa sơn mài Việt trở thành ngôn ngữ
            nghệ thuật quốc gia đầu tiên được ghi danh trên bản đồ kỷ lục thế giới.
          </p>
        </div>

        {/* Multi-industry Ecosystem */}
        <div className="mt-20">
          <p
            className={`text-center font-sans text-[10px] tracking-cinzel uppercase text-champagne/65 ${slide("delay-200")}`}
          >
            Hệ Sinh Thái Đa Ngành
          </p>
          <div className="mt-10 grid grid-cols-1 gap-px bg-champagne/15 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.n}
                className={`relative bg-black p-8 md:p-10 ${slide(`delay-[${250 + i * 80}ms]`)}`}
              >
                <p className="font-display text-[11px] tracking-cinzel text-crimson">
                  {p.n}
                </p>
                <h3 className="font-display mt-4 text-base leading-[1.3] tracking-cinzel text-champagne md:text-lg">
                  {p.title}
                </h3>
                <div className="mt-5 h-px w-10 bg-champagne/50" />
                <p className="mt-5 font-sans text-[13px] leading-[2] tracking-[0.08em] text-foreground/80">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Launch */}
        <div
          className={`mx-auto mt-20 max-w-3xl border border-champagne/25 px-8 py-10 md:px-14 md:py-12 ${slide("delay-[500ms]")}`}
        >
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Sự Kiện Khởi Động
              </p>
              <p className="font-display mt-3 text-[11px] tracking-cinzel text-champagne">
                Lễ Công Bố
              </p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/55">
                Thời gian
              </p>
              <p className="font-display mt-3 text-base tracking-cinzel text-champagne md:text-lg">
                27 — 29 · 05 · 2026
              </p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/55">
                Địa điểm
              </p>
              <p className="mt-3 font-sans text-[13px] leading-[1.7] tracking-[0.08em] text-foreground/90">
                Saigon Innovation Hub (SIHUB)
                <br />
                <span className="text-foreground/65">
                  123 Trương Định, TP. Hồ Chí Minh
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
