import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import panel from "@/assets/lacquer-panel.jpg";
import hero from "@/assets/lacquer-hero.jpg";

const items = [
  { img: g1, span: "md:col-span-5 md:row-span-2 aspect-[3/4]", alt: "Ánh Sáng Trong Vóc" },
  { img: g2, span: "md:col-span-4 aspect-[4/3]", alt: "Đối Thoại Bóng Tối" },
  { img: g3, span: "md:col-span-3 aspect-square", alt: "Bình Phong Sương" },
  { img: panel, span: "md:col-span-3 aspect-square", alt: "Tấm Sơn Vương Giả" },
  { img: g4, span: "md:col-span-4 aspect-[4/3]", alt: "Bản Đồ Vỏ Trứng" },
  { img: hero, span: "md:col-span-5 aspect-[3/4]", alt: "Nhựa Của Rừng" },
];

export function PresenceGrid() {
  return (
    <section className="relative px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
              Sảnh Trưng Bày · Masonry
            </p>
            <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne tracking-cinzel md:text-3xl">
              Tác phẩm <span className="text-champagne/55">tiêu biểu</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-[12px] leading-[1.8] tracking-[0.1em] text-champagne/50">
            Lưới ảnh không đối xứng — mỗi tác phẩm phản chiếu ánh kim như một tấm gương sơn ta.
          </p>
        </div>

        {/* Asymmetric masonry, gap 10px */}
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-12">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden bg-black ring-1 ring-champagne/10 transition-all duration-700 hover:ring-champagne/60 ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              {/* High-gloss specular */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.06] via-transparent to-black/60 mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
              {/* Sweep gloss */}
              <div className="pointer-events-none absolute -inset-x-full top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-champagne/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-4">
                <span className="font-display text-xs tracking-cinzel text-champagne md:text-sm">
                  {it.alt}
                </span>
                <span className="font-sans text-[9px] tracking-cinzel uppercase text-champagne/55">
                  Xem →
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
