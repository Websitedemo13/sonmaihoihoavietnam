import valueVision from "@/assets/value-vision.jpg";
import valuePassion from "@/assets/value-passion.jpg";
import valueIdentity from "@/assets/value-identity.jpg";

const values = [
  {
    n: "I",
    label: "Tầm Nhìn",
    title: "Bản Đồ Thế Giới",
    body: "Đưa sơn mài Việt Nam lên bản đồ nghệ thuật thế giới — như một ngôn ngữ độc bản, bền vững và không thể thay thế.",
    img: valueVision,
    alt: "Bản đồ thế giới dát vàng trên nền sơn mài đen",
  },
  {
    n: "II",
    label: "Đam Mê",
    title: "Lửa Của Di Sản",
    body: "Gìn giữ di sản qua từng lớp nhựa và ánh vàng. Mỗi giọt sơn ta là một lời thề với những bàn tay đi trước.",
    img: valuePassion,
    alt: "Ngọn lửa son đỏ và vàng lá trên nền sơn ta",
  },
  {
    n: "III",
    label: "Bản Sắc",
    title: "Không Thể Sao Chép",
    body: "Ngôn ngữ nghệ thuật độc bản — nơi kỹ thuật trăm năm gặp gỡ tư duy thế kỷ XXI để khai sinh một dấu ấn riêng.",
    img: valueIdentity,
    alt: "Vỏ trứng khảm với mạch vàng trên nền sơn mài",
  },
];

export function RecordValues() {
  return (
    <section className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
              Giá Trị Cốt Lõi · Ba Trụ Cột
            </p>
            <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne tracking-cinzel md:text-3xl">
              Những giá trị <span className="text-champagne/55">khác biệt</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-[12px] leading-[1.8] tracking-[0.1em] text-champagne/50">
            Tầm Nhìn — Đam Mê — Bản Sắc. Ba trụ cột định hình mọi nhát cọ, mọi lớp ủ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.n}
              className="group relative bg-black transition-all duration-700 hover:bg-champagne/[0.02]"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.35)" }}
            >
              {/* Image — high-gloss lacquer panel */}
              <figure className="relative aspect-[4/5] overflow-hidden bg-black ring-1 ring-champagne/10 transition-all duration-700 group-hover:ring-champagne/40">
                <img
                  src={v.img}
                  alt={v.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                {/* High-gloss specular overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.06] via-transparent to-black/70 mix-blend-overlay" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
                {/* Sweep gloss on hover */}
                <div className="pointer-events-none absolute -inset-x-full top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-champagne/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
                {/* Bottom fade for legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
              </figure>

              <div className="px-6 py-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl text-champagne/35 transition-colors duration-500 group-hover:text-champagne">
                    {v.n}
                  </span>
                  <span className="font-sans text-[9px] tracking-cinzel uppercase text-champagne/45">
                    {v.label}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-lg leading-[1.2] text-champagne tracking-cinzel md:text-xl">
                  {v.title}
                </h3>

                <p className="mt-4 font-sans text-[12px] leading-[1.8] tracking-[0.06em] text-champagne/55">
                  {v.body}
                </p>

                {/* Bottom accent line — animates on hover */}
                <div className="mt-6 h-px w-8 bg-champagne/40 transition-all duration-700 group-hover:w-20 group-hover:bg-champagne" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
