export function EssenceQuote() {
  return (
    <section className="relative bg-pitch/30 backdrop-blur-[1px] px-6 py-40 md:py-56">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-16 flex items-center justify-center gap-4">
          <span className="block h-px w-12 bg-champagne/40" />
          <span className="font-sans text-[10px] tracking-eyebrow uppercase text-champagne/60">
            Sứ mệnh nghệ thuật
          </span>
          <span className="block h-px w-12 bg-champagne/40" />
        </div>

        <blockquote className="font-display text-3xl leading-[1.3] text-champagne/85 md:text-5xl lg:text-[3.75rem] lg:leading-[1.25]">
          <span className="text-champagne/40">"</span>
          Chúng tôi không đơn thuần sáng tác — chúng tôi{" "}
          <em className="not-italic text-champagne">kiến tạo</em>
          <br className="hidden md:block" /> ngôn ngữ thị giác{" "}
          <span className="text-shimmer">riêng biệt</span>.
          <span className="text-champagne/40">"</span>
        </blockquote>

        <p className="mx-auto mt-12 max-w-[58ch] text-xs leading-loose tracking-[0.12em] text-champagne/55 md:text-sm">
          Nơi kỹ thuật sơn mài truyền thống hòa quyện với tư duy đương đại.
          Mỗi tác phẩm là một tuyên ngôn về bản sắc, về chiều sâu và về
          những giá trị bền vững vượt thời gian.
        </p>

        <div className="mx-auto mt-16 h-px w-24 bg-champagne/40" />
        <p className="mt-8 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/45">
          Tạo ra những giá trị · Khác biệt
        </p>
      </div>
    </section>
  );
}
