import { useEffect, useRef, useState } from "react";
import featured from "@/assets/lacquer-hero.jpg";

export function HomeFeatured() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (above) to 1 (below)
      const p = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
      setOffset(Math.max(-1, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-0 py-0">
      <div className="mx-auto grid min-h-[80dvh] max-w-[1600px] grid-cols-1 md:grid-cols-2">
        {/* Left — large image with parallax */}
        <div className="relative h-[60dvh] overflow-hidden md:h-auto">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(0, ${offset * -80}px, 0) scale(1.15)`,
              transition: "transform 100ms linear",
            }}
          >
            <img
              src={featured}
              alt="Tác phẩm tiêu biểu — The Eternal #01"
              className="h-full w-full object-cover"
              width={1200}
              height={1500}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.14),transparent_60%)]" />
          </div>
          {/* Edition stamp */}
          <div className="absolute bottom-6 left-6 z-10">
            <span className="block size-2 rotate-45 bg-crimson" />
            <p className="mt-3 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/60">
              Edition · 1 / 1
            </p>
          </div>
        </div>

        {/* Right — title */}
        <div className="relative flex flex-col justify-center px-8 py-16 md:px-16">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Tác phẩm tiêu biểu
          </p>
          <h2 className="font-display mt-6 text-4xl uppercase leading-[0.95] text-champagne md:text-5xl lg:text-6xl">
            <span className="block">The</span>
            <span className="text-shimmer block">Eternal</span>
            <span className="mt-2 block text-champagne/55">#01</span>
          </h2>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="block h-px w-10 bg-champagne/50" />
            <span className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
              MMXXVI · 2026
            </span>
          </div>

          <p className="mt-8 max-w-md font-sans text-[13px] leading-[2] tracking-[0.08em] text-foreground/85">
            Sơn ta · Vàng lá 24K · Vỏ trứng — trên gỗ ván ép truyền thống. 120 × 180 cm · Hà Nội.
          </p>

          <div className="mt-10">
            <button className="group flex items-center gap-6 font-sans text-[10px] tracking-cinzel uppercase text-champagne/75 transition-colors duration-700 hover:text-champagne">
              <span className="block h-px w-12 bg-champagne/30 transition-all duration-700 group-hover:w-24 group-hover:bg-champagne" />
              Xem chi tiết tác phẩm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
