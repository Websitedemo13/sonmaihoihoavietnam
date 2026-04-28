import { useEffect, useRef, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const cols = [
  {
    img: g1,
    label: "Phòng Trưng Bày",
    title: "Phòng Trưng Bày Thành Phố",
    city: "Hà Nội",
    shape: "circle",
  },
  {
    img: g2,
    label: "Bảo Tàng",
    title: "Bảo Tàng Trung Nhân",
    city: "Hà Nội",
    shape: "square",
  },
  {
    img: g3,
    label: "Bảo Tàng Hiện Đại",
    title: "Bảo Tàng Nghệ Thuật Hiện Đại",
    city: "Hà Nội",
    shape: "circle",
  },
] as const;

export function HomePresence() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-black px-6 py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-[1280px]">
        <div className="mb-12 text-center">
          <p className="font-sans text-[10px] tracking-cinzel uppercase text-champagne/60">
            Hiện Diện
          </p>
          <h2 className="font-display mt-3 text-2xl leading-[1.1] text-champagne md:text-3xl">
            Nơi tác phẩm <span className="text-champagne/55">hiện hữu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {cols.map((c, i) => (
            <article
              key={c.title}
              className="group flex flex-col items-center text-center"
              style={{
                transitionDelay: `${i * 180}ms`,
              }}
            >
              {/* Mask expansion frame */}
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-black transition-[clip-path] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    clipPath:
                      c.shape === "circle"
                        ? visible
                          ? "circle(75% at 50% 50%)"
                          : "circle(0% at 50% 50%)"
                        : visible
                          ? "inset(0% 0% 0% 0%)"
                          : "inset(50% 50% 50% 50%)",
                    transitionDelay: `${i * 220}ms`,
                  }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full scale-110 object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-125"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_30%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
                </div>
                {/* Gold ring on hover */}
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-champagne/0 transition-all duration-700 group-hover:ring-champagne/40"
                  style={{
                    borderRadius: c.shape === "circle" ? "9999px" : "0px",
                  }}
                />
              </div>

              <p className="mt-6 font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                {c.label}
              </p>
              <h3 className="font-display mt-3 text-base leading-tight text-champagne md:text-lg">
                {c.title}
              </h3>
              <p className="mt-2 font-sans text-[10px] tracking-cinzel uppercase text-champagne/45">
                {c.city}
              </p>
              <div className="mt-4 h-px w-8 bg-champagne/40 transition-all duration-700 group-hover:w-16 group-hover:bg-champagne" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
