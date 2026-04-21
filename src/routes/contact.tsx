import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Liên Hệ · Sơn Mài Di Sản" },
      {
        name: "description",
        content:
          "Một lời mời, chỉ theo lịch hẹn. Kết nối với văn phòng riêng của Sơn Mài Di Sản.",
      },
      { property: "og:title", content: "Liên Hệ · Sơn Mài Di Sản" },
      {
        property: "og:description",
        content: "Yêu cầu vào kho lưu trữ riêng của Sơn Mài Di Sản.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [particles, setParticles] = useState<
    { id: number; tx: number; ty: number; left: number; top: number; delay: number }[]
  >([]);
  const [sealed, setSealed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSealed(true);
    const next = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      tx: (Math.random() - 0.5) * 800,
      ty: (Math.random() - 0.5) * 800 - 200,
      left: 50 + (Math.random() - 0.5) * 4,
      top: 50 + (Math.random() - 0.5) * 4,
      delay: Math.random() * 0.4,
    }));
    setParticles(next);
    setTimeout(() => setParticles([]), 2200);
    setTimeout(() => setSealed(false), 4500);
  };

  return (
    <div className="min-h-dvh bg-pitch text-foreground">
      <SiteHeader />

      <main className="relative pt-40">
        <section className="px-6 pb-32 text-center">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
            Theo lịch hẹn · MMXXVI
          </p>
          <h1 className="font-display mx-auto mt-8 max-w-[14ch] text-5xl uppercase leading-[0.95] text-champagne md:text-7xl lg:text-[6rem]">
            Kết Nối <span className="italic text-shimmer">Di Sản</span>
          </h1>
          <p className="mx-auto mt-12 max-w-[44ch] text-xs leading-loose tracking-[0.15em] text-champagne/55">
            Chúng tôi không quảng cáo. Chúng tôi không phát hành catalogue.
            Chúng tôi trả lời, bằng văn bản, cho những ai gửi lời. Hãy để lại
            chữ ký của bạn bên dưới.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-0 px-0 lg:grid-cols-2">
          {/* Form */}
          <div className="relative border-t border-champagne/15 bg-pitch px-6 py-20 md:px-16 lg:border-r lg:py-32">
            <div className="mx-auto max-w-md">
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Thư từ
              </p>
              <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-4xl">
                Để lại <span className="italic text-champagne/60">dấu ấn</span>
              </h2>

              <form onSubmit={handleSubmit} className="mt-16 space-y-10">
                {[
                  { label: "Danh xưng", id: "name", type: "text" },
                  { label: "Tổ chức / Đơn vị", id: "house", type: "text" },
                  { label: "Email · Số điện thoại", id: "email", type: "text" },
                ].map((f) => (
                  <div key={f.id} className="group relative">
                    <label
                      htmlFor={f.id}
                      className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/45 transition-colors group-focus-within:text-champagne"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      className="mt-3 block w-full bg-transparent pb-3 font-serif-cap text-base text-champagne outline-none transition-colors"
                    />
                    <div className="relative h-px w-full bg-champagne/20">
                      <div className="absolute inset-0 origin-left scale-x-0 bg-champagne transition-transform duration-700 group-focus-within:scale-x-100" />
                    </div>
                  </div>
                ))}

                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/45 transition-colors group-focus-within:text-champagne"
                  >
                    Lời nhắn gửi
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    required
                    className="mt-3 block w-full resize-none bg-transparent pb-3 font-sans text-sm text-champagne outline-none"
                  />
                  <div className="relative h-px w-full bg-champagne/20">
                    <div className="absolute inset-0 origin-left scale-x-0 bg-champagne transition-transform duration-700 group-focus-within:scale-x-100" />
                  </div>
                </div>

                {/* The Red Lacquer Seal Submit */}
                <div className="flex items-center justify-between pt-8">
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/35">
                    Đóng dấu & gửi đi
                  </p>
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="group relative flex size-24 items-center justify-center transition-transform duration-700 hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full bg-crimson shadow-seal transition-shadow duration-700 group-hover:shadow-[0_0_60px_oklch(0.45_0.2_25_/_0.7)]" />
                    <div className="absolute inset-1.5 rounded-full border border-champagne/40" />
                    <div className="absolute inset-3 rounded-full border border-champagne/60" />
                    <div className="relative flex flex-col items-center">
                      <span className="font-display text-2xl text-champagne">
                        印
                      </span>
                      <span className="font-sans text-[7px] tracking-eyebrow uppercase text-champagne/80">
                        Triện
                      </span>
                    </div>
                    <div className="absolute -inset-3 rounded-full border border-crimson/0 transition-colors duration-700 group-hover:border-crimson/40" />
                  </button>
                </div>
              </form>

              {sealed && (
                <p
                  className="mt-12 text-center font-display text-base uppercase tracking-[0.2em] text-champagne"
                  style={{ animation: "fade-up 1s both" }}
                >
                  Dấu triện đã được nhận. Chúng tôi hồi đáp trong vài ngày.
                </p>
              )}
            </div>
          </div>

          {/* Map + info */}
          <div className="border-t border-champagne/15 bg-pitch px-6 py-20 md:px-16 lg:py-32">
            <div className="mx-auto max-w-md">
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Toạ độ
              </p>
              <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-4xl">
                Tìm <span className="italic text-champagne/60">đến</span>
              </h2>

              <div className="mt-16 flex justify-center">
                <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full ring-1 ring-champagne/30">
                  <iframe
                    title="Xưởng Hà Nội"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d105.852!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzQyLjYiTiAxMDXCsDUxJzA3LjMiRQ!5e0!3m2!1sen!2s!4v1700000000000"
                    className="h-full w-full grayscale-[80%] invert-[0.92] hue-rotate-180 contrast-125"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-pitch/40 via-transparent to-pitch/20 mix-blend-multiply" />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-champagne/20 ring-offset-4 ring-offset-pitch" />
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-10 text-xs tracking-[0.12em] text-champagne/55">
                <div>
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                    Studio
                  </p>
                  <p className="mt-3 font-serif-cap text-[11px] text-champagne">
                    Hà Nội
                  </p>
                  <p className="mt-2">28 Phố Hàng Khay · Hoàn Kiếm</p>
                  <p className="mt-1 text-champagne/40">Mở cửa theo lịch hẹn</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                    Đường dây
                  </p>
                  <p className="mt-3 font-serif-cap text-[11px] text-champagne">
                    Kết nối
                  </p>
                  <p className="mt-2">+84 123 456 789</p>
                  <p className="mt-1">heritage@sonmai.vn</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Gold particle fireworks overlay */}
      {particles.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[200]">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute size-1.5 rounded-full bg-champagne shadow-[0_0_10px_oklch(0.85_0.13_85)]"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                ["--tx" as string]: `${p.tx}px`,
                ["--ty" as string]: `${p.ty}px`,
                animation: `particle 1.8s ${p.delay}s ease-out forwards`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
