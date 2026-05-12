import { Link } from "@tanstack/react-router";

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden glossy-black px-6 py-10 md:py-14">
      {/* Top gold thread */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/65">
          Ghi Danh Vào Lịch Sử
        </p>

        <h2 className="font-display mt-5 text-2xl leading-[1.15] text-champagne tracking-cinzel md:text-3xl lg:text-4xl">
          <span className="gold-leaf">Khoảnh Khắc Vĩnh Cửu</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[44ch] font-sans text-[12px] leading-[1.9] tracking-[0.14em] text-champagne/60 md:text-[13px]">
          Trở thành một phần của hành trình trăm năm — nơi nhựa sơn, lá vàng và tĩnh lặng cùng viết
          tiếp di sản.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-champagne/70 bg-transparent px-10 py-4 font-sans text-[10px] tracking-cinzel uppercase text-champagne transition-colors duration-500 hover:text-black"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#8a6a1a] via-[#f3dc8a] to-[#8a6a1a] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative">Theo dõi hành trình</span>
            <span className="relative font-display transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <p className="font-sans text-[9px] tracking-cinzel uppercase text-champagne/35">
            Mỗi tác phẩm · Giám định · Mã định danh di sản
          </p>
        </div>
      </div>
    </section>
  );
}
