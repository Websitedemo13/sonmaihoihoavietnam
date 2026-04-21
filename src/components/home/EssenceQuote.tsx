export function EssenceQuote() {
  return (
    <section className="relative bg-pitch px-6 py-40 md:py-56">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-16 flex items-center justify-center gap-4">
          <span className="block h-px w-12 bg-champagne/40" />
          <span className="font-sans text-[10px] tracking-eyebrow uppercase text-champagne/60">
            Tinh thần
          </span>
          <span className="block h-px w-12 bg-champagne/40" />
        </div>

        <blockquote className="font-display text-3xl leading-[1.3] text-champagne/85 md:text-5xl lg:text-[3.75rem] lg:leading-[1.25]">
          <span className="text-champagne/40">“</span>
          Truyền thống không phải là tôn thờ <em className="not-italic text-champagne">tro tàn</em>,
          <br className="hidden md:block" /> mà là gìn giữ{" "}
          <span className="text-shimmer">ngọn lửa</span>.
          <span className="text-champagne/40">”</span>
        </blockquote>

        <div className="mx-auto mt-16 h-px w-24 bg-champagne/40" />
        <p className="mt-8 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/45">
          Sơn Mài Di Sản · Tuyên Ngôn N° I
        </p>
      </div>
    </section>
  );
}
