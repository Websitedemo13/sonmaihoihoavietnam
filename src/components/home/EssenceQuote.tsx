export function EssenceQuote() {
  return (
    <section className="relative px-6 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        {/* Slim vertical rectangular frame */}
        <div className="relative mx-auto border border-champagne/30 px-8 py-12 md:px-14 md:py-16">
          {/* Corner ticks */}
          <span className="absolute -top-px left-1/2 h-2 w-px -translate-x-1/2 bg-champagne" />
          <span className="absolute -bottom-px left-1/2 h-2 w-px -translate-x-1/2 bg-champagne" />

          <p className="text-center font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Sứ Mệnh Nghệ Thuật
          </p>

          <blockquote className="mt-6 text-center font-display text-xl leading-[1.4] tracking-[0.16em] text-champagne md:text-2xl lg:text-[1.75rem]">
            <span className="text-champagne/40">“</span>
            Chúng tôi không sáng tác — chúng tôi <span className="text-shimmer">kiến tạo</span> ngôn ngữ thị giác riêng biệt
            <span className="text-champagne/40">.”</span>
          </blockquote>

          <div className="mx-auto mt-6 h-px w-12 bg-champagne/50" />
          <p className="mt-4 text-center font-sans text-[10px] tracking-cinzel uppercase text-champagne/45">
            Sơn Mài Di Sản · Atelier
          </p>
        </div>
      </div>
    </section>
  );
}
