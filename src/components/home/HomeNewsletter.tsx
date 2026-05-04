import { useEffect, useRef, useState } from "react";

export function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setEmail("");
  };

  const slide = (delay: string) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${delay} ${
      visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-20 md:py-28"
    >
      {/* Top & bottom gold threads */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p
          className={`font-sans text-[10px] tracking-cinzel uppercase text-champagne/65 ${slide("delay-0")}`}
        >
          Ghi Danh Vào Lịch Sử
        </p>

        <h2
          className={`font-display mt-5 text-2xl leading-[1.15] text-champagne tracking-cinzel md:text-4xl ${slide("delay-100")}`}
        >
          <span className="gold-leaf">Khoảnh Khắc Vĩnh Cửu</span>
        </h2>

        <p
          className={`mx-auto mt-5 max-w-[44ch] font-sans text-[13px] leading-[2] tracking-[0.1em] text-foreground/80 md:text-sm ${slide("delay-200")}`}
        >
          Trở thành một phần của hành trình trăm năm — nơi nhựa sơn,
          lá vàng và tĩnh lặng cùng viết tiếp di sản.
        </p>

        <form
          onSubmit={onSubmit}
          className={`mx-auto mt-10 flex max-w-md items-center justify-center ${slide("delay-300")}`}
        >
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-champagne/70 bg-transparent px-10 py-4 font-sans text-[10px] tracking-cinzel uppercase text-champagne transition-colors duration-500 hover:text-black"
          >
            {/* Sliding gold fill */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#8a6a1a] via-[#f3dc8a] to-[#8a6a1a] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative">Theo dõi hành trình</span>
            <span className="relative font-display transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
        </form>

        {sent && (
          <p className="mt-5 font-sans text-[10px] tracking-cinzel uppercase text-champagne/80">
            Cảm ơn bạn — chúng tôi sẽ gửi những khoảnh khắc đầu tiên sớm nhất.
          </p>
        )}

        <p
          className={`mt-8 font-sans text-[9px] tracking-cinzel uppercase text-champagne/35 ${slide("delay-[400ms]")}`}
        >
          Mỗi tác phẩm · Giám định · Mã định danh di sản
        </p>
      </div>
    </section>
  );
}
