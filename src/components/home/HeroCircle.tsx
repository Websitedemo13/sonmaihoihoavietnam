import heroImg from "@/assets/lacquer-hero.jpg";

export function HeroCircle() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 pt-28 pb-16 md:pt-32">
        <div className="mb-6 flex items-center gap-3" style={{ animation: "fade-up 1s 0.1s both" }}>
          <span className="block h-px w-8 bg-champagne/60" />
          <span className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/70">
            MCMXXIV — MMXXVI · Heritage Edition
          </span>
          <span className="block h-px w-8 bg-champagne/60" />
        </div>

        <div
          className="relative mx-auto aspect-square w-[88vw] max-w-[640px] md:w-[65vmin] md:max-w-[680px]"
          style={{ animation: "blur-in 1.6s 0.2s both" }}
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-champagne/40" />
          <div className="absolute -inset-2 rounded-full ring-1 ring-champagne/15" />
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-champagne/10 blur-3xl" />

          <div className="absolute inset-2 overflow-hidden rounded-full bg-black">
            <img
              src={heroImg}
              alt="Panorama sơn mài Việt Nam — di sản trăm năm"
              className="h-full w-full object-cover grayscale contrast-110"
              width={1600}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
            <div className="absolute -top-10 left-1/3 h-[140%] w-px rotate-12 bg-gradient-to-b from-transparent via-champagne/50 to-transparent blur-[1px] opacity-70" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1
              className="font-display text-center text-[clamp(1.4rem,4.6vw,3.4rem)] leading-[1.05] tracking-cinzel"
              style={{ animation: "fade-up 1.2s 0.6s both" }}
            >
              <span className="block gold-leaf">Hành Trình</span>
              <span className="my-2 block text-champagne/70 text-[0.55em] tracking-[0.5em]">
                — 100 Năm —
              </span>
              <span className="block gold-leaf" style={{ animationDelay: "0.6s" }}>
                Sơn Mài Việt Nam
              </span>
            </h1>
          </div>
        </div>

        <p
          className="mt-8 max-w-[52ch] text-center font-sans text-[12px] leading-[1.9] tracking-[0.18em] text-champagne/60 md:text-[13px]"
          style={{ animation: "fade-up 1s 1s both" }}
        >
          Một thế kỷ của nhựa sơn, ánh vàng và tĩnh lặng — được nuôi dưỡng trong bóng tối và bừng
          sáng cùng thời đại.
        </p>

        <div
          className="mt-8 flex items-center gap-4 font-sans text-[10px] tracking-cinzel uppercase text-champagne/55"
          style={{ animation: "fade-up 1s 1.2s both" }}
        >
          <span className="block h-px w-8 bg-champagne/40" />
          Cuộn xuống
          <span className="block h-px w-8 bg-champagne/40" />
        </div>
      </div>
    </section>
  );
}
