import panel from "@/assets/lacquer-panel.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const venues = [
  {
    place: "Triển lãm Hà Nội",
    year: "2024",
    img: panel,
    shape: "rounded-full",
    span: "md:col-span-4",
  },
  {
    place: "Triển lãm Huế",
    year: "2025",
    img: gallery3,
    shape: "rounded-none",
    span: "md:col-span-3",
  },
  {
    place: "Triển lãm Đà Nẵng",
    year: "2026",
    img: gallery2,
    shape: "rounded-none",
    span: "md:col-span-5",
  },
  {
    place: "Bảo tàng Mỹ thuật VN",
    year: "2027",
    img: gallery4,
    shape: "rounded-full",
    span: "md:col-span-5",
  },
  {
    place: "Triển lãm Quốc tế",
    year: "2028",
    img: panel,
    shape: "rounded-none",
    span: "md:col-span-7",
  },
];

export function PresenceGrid() {
  return (
    <section className="relative bg-pitch px-6 py-32 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
              Hiện diện · Sân Khấu Thế Giới
            </p>
            <h2 className="font-display mt-6 max-w-[16ch] text-4xl uppercase leading-[1] text-champagne md:text-6xl">
              Triển lãm <span className="text-champagne/55 italic">khắp</span> năm châu
            </h2>
          </div>
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Năm châu lục · Mười hai bảo tàng
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {venues.map((v, i) => (
            <article
              key={v.place}
              className={`group relative ${v.span} ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${v.shape} aspect-square bg-pitch ring-1 ring-champagne/15 transition-all duration-700 group-hover:ring-champagne`}
              >
                <img
                  src={v.img}
                  alt={v.place}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/30 to-transparent" />
                <div className="absolute inset-0 bg-pitch/30 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />

                {/* Gloss sweep */}
                <div className="absolute -inset-x-full top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-champagne/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
              </div>

              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-serif-cap text-xs text-champagne md:text-sm">
                  {v.place}
                </h3>
                <span className="font-display text-sm text-champagne/40">
                  {v.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
