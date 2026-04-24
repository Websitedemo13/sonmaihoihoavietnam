import heroImg from "@/assets/lacquer-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Hero background — wet lacquer */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Nhựa sơn ta đen tuyền phản chiếu một tia ánh vàng"
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pitch/80 via-pitch/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch/60 via-transparent to-pitch/20" />
      </div>

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -right-20 top-[-10%] h-[800px] w-[800px] rounded-full bg-champagne/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-[-20%] h-[600px] w-[600px] rounded-full bg-crimson/[0.06] blur-[120px]" />

      {/* Vertical structural rails */}
      <div className="pointer-events-none absolute inset-y-0 left-12 hidden w-px bg-gradient-to-b from-transparent via-champagne/15 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-12 hidden w-px bg-gradient-to-b from-transparent via-champagne/15 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh items-center pt-32">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-8 px-6 lg:px-24">
          <div className="col-span-12 flex flex-col justify-center lg:col-span-8">
            <div
              className="mb-8 ml-2 flex items-center gap-4 lg:ml-12"
              style={{ animation: "fade-up 1.2s 0.2s both" }}
            >
              <span className="block h-px w-8 bg-crimson" />
              <span className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Một Thế Kỷ Trong Bóng Tối · 1924 — 2030
              </span>
            </div>

            <h1
              className="font-display flex flex-col text-5xl uppercase leading-[0.85] text-champagne md:text-7xl lg:text-[110px]"
              style={{ animation: "blur-in 1.6s 0.3s both" }}
            >
              <span className="block tracking-tight text-champagne/95">
                Kỷ Nguyên
              </span>
              <span className="ml-12 block tracking-tight text-champagne/55 lg:ml-32">
                Trăm Năm
              </span>
              <span className="text-shimmer block tracking-tight">
                Sơn Mài
              </span>
            </h1>

            <p
              className="mt-16 ml-12 max-w-[44ch] text-xs leading-[2.2] tracking-[0.15em] text-champagne/55 lg:ml-32 lg:text-sm"
              style={{ animation: "fade-up 1.2s 1s both" }}
            >
              Ba mươi lớp sơn ta. Một thập kỷ ủ trong bóng tối. Chúng tôi
              không vẽ lên bề mặt — chúng tôi nuôi dưỡng những tấm gương
              phản chiếu sức nặng của thời gian.
            </p>

            <div
              className="mt-16 ml-12 flex items-center gap-8 lg:ml-32"
              style={{ animation: "fade-up 1.2s 1.3s both" }}
            >
              <button className="group flex items-center gap-6 font-sans text-[9px] tracking-luxury uppercase text-champagne/75 transition-colors duration-700 hover:text-champagne">
                <span className="block h-px w-16 bg-champagne/30 transition-all duration-700 group-hover:w-32 group-hover:bg-champagne" />
                Khám phá tác phẩm
              </button>
            </div>
          </div>

          {/* The Lacquer Panel */}
          <div className="relative col-span-4 mt-24 hidden lg:block">
            <div
              className="vault-frame absolute -inset-6 border border-champagne/10"
              style={{ animation: "fade-up 1.4s 0.6s both" }}
            >
              <div className="absolute -right-px -top-px size-[3px] bg-crimson" />
              <div className="absolute -bottom-px -left-px size-[3px] bg-crimson" />
            </div>

            <div
              className="group relative aspect-[3/4] w-full overflow-hidden bg-pitch"
              style={{ animation: "blur-in 1.8s 0.5s both" }}
            >
              <img
                src={heroImg}
                alt=""
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 mix-blend-luminosity transition-transform duration-[20s] ease-out group-hover:scale-110"
                width={800}
                height={1066}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-pitch via-transparent to-pitch/60" />
              {/* Specular highlight */}
              <div className="absolute right-[20%] top-0 h-full w-px -skew-x-[15deg] bg-gradient-to-b from-transparent via-champagne/60 to-transparent opacity-40 blur-[1px] transition-all duration-1000 group-hover:translate-x-12 group-hover:opacity-80" />
              <div className="absolute right-[22%] top-[10%] h-[40%] w-[2px] -skew-x-[15deg] bg-gradient-to-b from-transparent via-champagne/40 to-transparent opacity-20 blur-[3px]" />
            </div>

            <p className="mt-6 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
              Tác phẩm N° 042 · Cánh Gián & Sơn Then
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-8 pb-10 md:px-12">
          <div className="flex items-end gap-3">
            <div className="h-16 w-px bg-gradient-to-t from-champagne via-champagne/50 to-transparent" />
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
