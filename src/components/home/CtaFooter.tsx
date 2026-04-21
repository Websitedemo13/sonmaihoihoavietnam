import { Link } from "@tanstack/react-router";

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden bg-pitch px-6 py-44 md:py-56">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
          Lời Mời
        </p>

        <h2 className="font-display mt-10 text-4xl uppercase leading-[1.05] text-champagne md:text-6xl lg:text-[5rem]">
          Đồng hành <br />
          <span className="text-shimmer italic">Trăm năm tới</span>
        </h2>

        <p className="mx-auto mt-12 max-w-[42ch] text-xs leading-loose tracking-[0.15em] text-champagne/55 md:text-sm">
          Từ 2026 đến 2030, Sơn Mài Di Sản mở kho lưu trữ cho một vòng tròn
          nhỏ những nhà sưu tầm. Sở hữu, xem riêng và những tác phẩm chưa công bố.
        </p>

        <div className="mt-20 flex flex-col items-center gap-8">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            {/* The shimmering gold seal button */}
            <span className="relative inline-flex items-center gap-6 border border-champagne bg-pitch px-12 py-5 font-sans text-[10px] tracking-luxury uppercase text-champagne transition-all duration-700 hover:bg-champagne hover:text-pitch">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-champagne/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">Gửi lời mời</span>
              <span className="relative font-display">→</span>
            </span>
          </Link>

          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/35">
            Chỉ tiếp khách theo lịch hẹn · Không phát hành catalogue
          </p>
        </div>
      </div>
    </section>
  );
}
