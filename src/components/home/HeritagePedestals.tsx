const pedestals = [
  {
    sym: "✦",
    label: "Tác Phẩm",
    title: "The Eternal · N° 01",
    body: "Tác phẩm khai sinh của bộ sưu tập 100 năm — biểu tượng cho sự vĩnh cửu trong nhựa sơn ta.",
  },
  {
    sym: "❖",
    label: "Tổ Chức Đồng Hành",
    title: "Bảo Tàng Mỹ Thuật",
    body: "Đối tác di sản — nơi tác phẩm được trưng bày, lưu trữ và lan toả tới công chúng quốc tế.",
  },
  {
    sym: "✥",
    label: "Chứng Nhận Di Sản",
    title: "Mã Định Danh DS",
    body: "Mỗi tác phẩm được giám định, gắn mã DS độc nhất và bảo chứng bằng hồ sơ kỷ lục riêng.",
  },
];

export function HeritagePedestals() {
  return (
    <section className="relative px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 text-center">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Những Chứng Nhân Di Sản
          </p>
          <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne tracking-cinzel md:text-3xl">
            Ba bục <span className="text-champagne/55">vinh danh</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {pedestals.map((p) => (
            <article
              key={p.label}
              className="group relative bg-black px-6 py-8 transition-all duration-700 hover:-translate-y-1"
            >
              {/* Top thin gold line */}
              <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-champagne/40 transition-all duration-700 group-hover:w-24 group-hover:bg-champagne group-hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]" />

              <div className="text-center">
                <span className="font-display text-3xl text-champagne/45 transition-all duration-500 group-hover:text-champagne">
                  {p.sym}
                </span>
                <p className="mt-3 font-sans text-[9px] tracking-cinzel uppercase text-champagne/45">
                  {p.label}
                </p>
                <h3 className="font-display mt-3 text-base tracking-cinzel text-champagne md:text-lg">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-[12px] leading-[1.8] tracking-[0.06em] text-champagne/55">
                  {p.body}
                </p>
              </div>

              {/* Bottom thin gold line — pedestal base */}
              <div className="absolute bottom-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-champagne/60 to-transparent transition-all duration-700 group-hover:w-32 group-hover:via-champagne group-hover:shadow-[0_0_24px_rgba(212,175,55,0.6)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
