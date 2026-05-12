import { useEffect, useRef, useState } from "react";
import introImg from "@/assets/lacquer-panel.jpg";

const TEXT =
  "Chúng tôi không sáng tác — chúng tôi kiến tạo một ngôn ngữ thị giác Việt Nam độc bản, nơi nhựa sơn, lá vàng và sự tĩnh lặng cùng kể câu chuyện về di sản, tầm nhìn và niềm đam mê tạo ra những giá trị không thể sao chép.";

export function HomeIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Map scroll progress: start when section enters bottom, end at center
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.85)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = TEXT.split(" ");
  const lit = Math.floor(progress * words.length);

  return (
    <section ref={ref} className="relative px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        {/* Left — image */}
        <div className="md:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden bg-black ring-1 ring-champagne/15">
            <img
              src={introImg}
              alt="Tấm sơn mài đen tuyền với mạch vàng tinh tế"
              loading="lazy"
              className="h-full w-full object-cover"
              width={800}
              height={1000}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-champagne/[0.06] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.16),transparent_60%)]" />
          </figure>
          <p className="mt-4 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Atelier · Hà Nội · 2026
          </p>
        </div>

        {/* Right — scroll-highlight text */}
        <div className="md:col-span-7">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Giới thiệu
          </p>
          <h2 className="font-display mt-4 text-2xl leading-[1.15] text-champagne md:text-3xl">
            Sứ mệnh <span className="text-champagne/55">của chúng tôi</span>
          </h2>

          <p className="mt-8 font-sans text-base leading-[1.85] tracking-[0.04em] md:text-lg">
            {words.map((w, i) => (
              <span
                key={i}
                className="transition-colors duration-500"
                style={{
                  color: i < lit ? "#F9F9F9" : "rgba(243,229,171,0.28)",
                }}
              >
                {w}{" "}
              </span>
            ))}
          </p>

          {/* progress thread */}
          <div className="mt-8 h-px w-full bg-champagne/10">
            <div
              className="h-px bg-champagne transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
