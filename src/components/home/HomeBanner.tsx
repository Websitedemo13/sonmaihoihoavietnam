import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/lacquer-hero.jpg";

export function HomeBanner() {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-dvh w-full overflow-hidden bg-black"
    >
      {/* Cinematic background */}
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
        style={{
          transform: `scale(1.08) translate(${pos.x * -12}px, ${pos.y * -12}px)`,
        }}
      >
        <img
          src={heroImg}
          alt="Chi tiết nghệ thuật sơn mài Việt — nhựa sơn đen tuyền và ánh vàng"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        {/* Slow zoom for cinematic feel */}
        <div
          className="absolute inset-0"
          style={{ animation: "blur-in 2.4s 0.1s both" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
      </div>

      {/* Cursor-following gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 380px at ${50 + pos.x * 30}% ${50 + pos.y * 30}%, rgba(212,175,55,0.10), transparent 60%)`,
        }}
      />

      {/* Vertical rails */}
      <div className="pointer-events-none absolute inset-y-0 left-12 hidden w-px bg-gradient-to-b from-transparent via-champagne/15 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-12 hidden w-px bg-gradient-to-b from-transparent via-champagne/15 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 pt-32">
        <div
          className="mx-auto w-full max-w-4xl text-center"
          style={{
            transform: `translate(${pos.x * 6}px, ${pos.y * 6}px)`,
            transition: "transform 600ms ease-out",
          }}
        >
          <p
            className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/65"
            style={{ animation: "fade-up 1.2s 0.2s both" }}
          >
            Sơn Mài Việt Nam · Tĩnh Lặng & Vĩnh Cửu
          </p>

          <h1
            className="font-display mt-6 text-3xl uppercase leading-[1] text-champagne md:text-5xl lg:text-6xl"
            style={{ animation: "blur-in 1.6s 0.4s both" }}
          >
            <span className="block text-champagne/95">Nghệ thuật</span>
            <span className="block text-champagne/55">không chỉ được nhìn</span>
            <span className="text-shimmer mt-2 block">
              cảm từ tĩnh lặng
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl font-sans text-[12px] leading-[2] tracking-[0.14em] text-foreground/80 md:text-[13px]"
            style={{ animation: "fade-up 1.2s 1s both" }}
          >
            Một thế kỷ ủ nhựa sơn trong bóng tối — nay bừng sáng cùng thời đại.
            Mỗi tác phẩm là một khoảnh khắc vĩnh cửu.
          </p>

          <div
            className="mt-10 flex justify-center"
            style={{ animation: "fade-up 1.2s 1.3s both" }}
          >
            <Link
              to="/gallery"
              className="group btn-gold inline-flex items-center gap-4 px-8 py-3 font-sans text-[10px] tracking-cinzel uppercase"
            >
              <span>Khám phá tác phẩm</span>
              <span className="font-display">→</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-8 pb-8 md:px-12">
          <div className="flex items-end gap-3">
            <div className="h-12 w-px bg-gradient-to-t from-champagne via-champagne/50 to-transparent" />
            <span className="font-sans text-[8px] tracking-eyebrow uppercase text-champagne/50 [writing-mode:vertical-rl]">
              Cuộn xuống
            </span>
          </div>
          <div className="text-right font-sans text-[8px] tracking-eyebrow uppercase text-champagne/30">
            <p>Xưởng · Hà Nội</p>
            <p className="mt-1">Triển lãm · Toàn cầu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
