import atelier from "@/assets/about-atelier.jpg";
import hands from "@/assets/about-hands.jpg";
import material from "@/assets/about-material.jpg";

const chapters = [
  {
    n: "I",
    label: "Xưởng",
    title: "Trong bóng tối, di sản được nuôi dưỡng",
    body: "Những lò ủ trầm mặc, ánh đèn vàng yếu — nơi nhựa sơn ta được nuôi qua từng mùa ẩm. Đây là khởi nguyên của mọi tác phẩm: kiên nhẫn, tĩnh lặng và niềm tin vào thời gian.",
    img: atelier,
    alt: "Xưởng sơn mài Việt Nam — những tấm vóc đen xếp hàng dưới ánh đèn vàng",
    ratio: "aspect-[16/10]",
  },
  {
    n: "II",
    label: "Bàn Tay",
    title: "Mỗi nét vàng — một lời thề",
    body: "Bàn tay nghệ nhân chạm vào lá vàng mỏng hơn hơi thở. Mỗi đường nét là sự tiếp nối của bốn thế hệ: kỹ thuật ủ, mài, dát vàng được giữ nguyên bản từ những năm 1930.",
    img: hands,
    alt: "Bàn tay nghệ nhân dát vàng lá lên tấm sơn mài đen",
    ratio: "aspect-[4/5]",
  },
  {
    n: "III",
    label: "Chất Liệu",
    title: "Ngôn ngữ không thể sao chép",
    body: "Sơn ta Phú Thọ, vỏ trứng, vàng lá, son trai — bốn ngôn ngữ Việt Nam độc bản. Khi gặp nhau dưới mài và đánh bóng, chúng tạo ra một ngôn ngữ thị giác mà không nền văn hoá nào khác có thể tái tạo.",
    img: material,
    alt: "Macro sơn mài đen với mạch vàng và vỏ trứng khảm tinh tế",
    ratio: "aspect-[4/5]",
  },
];

export function AboutStory() {
  return (
    <section className="relative px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Câu Chuyện · Ba Chương
          </p>
          <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne tracking-cinzel md:text-3xl">
            Di sản qua <span className="text-champagne/55">ba lát cắt</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-[12px] leading-[1.9] tracking-[0.1em] text-champagne/50">
            Xưởng — Bàn tay — Chất liệu. Ba chương kể câu chuyện về một thế kỷ sơn mài Việt Nam được
            giữ gìn và tái sinh.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {chapters.map((c, i) => (
            <article
              key={c.n}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-14"
            >
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <figure
                  className={`relative ${c.ratio} overflow-hidden bg-black ring-1 ring-champagne/15 transition-all duration-700 hover:ring-champagne/40`}
                >
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-champagne/[0.05] mix-blend-overlay" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.14),transparent_60%)]" />
                </figure>
              </div>

              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-champagne/40">{c.n}</span>
                  <span className="font-sans text-[9px] tracking-cinzel uppercase text-crimson">
                    {c.label}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl leading-[1.2] text-champagne md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-5 font-sans text-[12px] leading-[1.9] tracking-[0.08em] text-champagne/55 md:text-[13px]">
                  {c.body}
                </p>
                <div className="mt-7 h-px w-12 bg-champagne/40" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
