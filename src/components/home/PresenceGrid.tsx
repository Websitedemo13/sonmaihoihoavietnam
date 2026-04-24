import panel from "@/assets/lacquer-panel.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const venues = [
  {
    place: "Triển lãm Hà Nội",
    note: "Không gian đương đại tại trung tâm Hà Nội — nơi nghệ thuật gặp gỡ đời sống đô thị hiện đại.",
    img: panel,
    shape: "rounded-full",
  },
  {
    place: "Triển lãm Huế",
    note: "Di sản và truyền thống được tôn vinh trong không gian bảo tàng mang đậm hồn Việt cổ kính.",
    img: gallery3,
    shape: "rounded-none",
  },
  {
    place: "Triển lãm Đà Nẵng",
    note: "Nơi giao thoa giữa ngôn ngữ sơn mài truyền thống và tư duy thẩm mỹ đương đại toàn cầu.",
    img: gallery2,
    shape: "rounded-full",
  },
];

export function PresenceGrid() {
  return (
    <section className="relative bg-pitch/30 backdrop-blur-[1px] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
              Hiện diện nghệ thuật
            </p>
            <h2 className="font-display mt-6 max-w-[16ch] text-4xl uppercase leading-[1] text-champagne md:text-6xl">
              Dấu ấn <span className="text-champagne/55 italic">tại</span> ba miền
            </h2>
          </div>
          <p className="max-w-md font-sans text-[10px] leading-relaxed tracking-[0.12em] text-champagne/45 md:text-right">
            Ba không gian nghệ thuật tiêu biểu — nơi tác phẩm đối thoại với
            công chúng và lịch sử
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {venues.map((v, i) => (
            <article
              key={v.place}
              className={`group relative ${i === 1 ? "md:mt-20" : ""}`}
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

              <div className="mt-6">
                <h3 className="font-serif-cap text-xs text-champagne md:text-sm">
                  {v.place}
                </h3>
                <p className="mt-3 text-xs leading-loose tracking-[0.1em] text-champagne/55">
                  {v.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
