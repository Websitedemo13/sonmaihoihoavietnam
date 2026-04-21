import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import artisan from "@/assets/journal-artisan.jpg";
import forest from "@/assets/journal-forest.jpg";
import panel from "@/assets/lacquer-panel.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Tin Tức · Sơn Mài Di Sản" },
      {
        name: "description",
        content:
          "Những bài viết từ xưởng vẽ: hậu trường nhựa sơn, người nghệ nhân, và những căn phòng tĩnh lặng.",
      },
      { property: "og:title", content: "Tin Tức · Sơn Mài Di Sản" },
      {
        property: "og:description",
        content: "Biên niên sử về một thế kỷ sơn mài Việt Nam.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <div className="min-h-dvh bg-pitch text-foreground">
      <SiteHeader />

      <main className="overflow-hidden pt-40">
        {/* Masthead */}
        <section className="border-b border-champagne/15 px-6 pb-20 md:px-12">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex items-center gap-6">
              <span className="block h-px w-12 bg-crimson" />
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Tập IV · Số MMXXVI
              </p>
            </div>
            <h1 className="font-display mt-12 text-6xl uppercase leading-[0.85] text-champagne md:text-8xl lg:text-[10rem]">
              Tin <span className="italic text-shimmer">Tức</span>
            </h1>
            <p className="mt-12 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/50">
              Những bài viết từ căn phòng tĩnh lặng — nơi nhựa sơn ủ và người
              nghệ nhân biến mất vào chính bàn tay mình.
            </p>
          </div>
        </section>

        {/* Floating editorial layout */}
        <section className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-[1600px] space-y-44">
            {/* Article 1 */}
            <article className="grid grid-cols-12 items-center gap-8">
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Ghi chép · 01
                </p>
                <h2 className="font-display mt-6 text-5xl uppercase leading-[0.95] text-champagne md:text-7xl">
                  Cạo <br />
                  <span className="italic text-champagne/60">cây sơn</span>
                </h2>
                <p className="mt-10 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Trước bình minh, trong rừng sơn Phú Thọ, một người nghệ nhân
                  cúi đầu trước <em className="not-italic text-champagne">cây sơn</em> năm mươi tuổi và
                  hứng từ nó dòng nhựa sẽ — sau một thập kỷ — trở thành tấm gương.
                </p>
                <button className="mt-12 font-sans text-[9px] tracking-luxury uppercase text-champagne/60 transition-colors hover:text-champagne">
                  Đọc bài →
                </button>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-champagne/10 transition-all duration-700 hover:ring-champagne/40">
                  <img src={forest} alt="" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch/60 via-transparent to-transparent" />
                </div>
              </div>
            </article>

            {/* Quote-only */}
            <article className="relative mx-auto max-w-4xl text-center">
              <span className="font-display absolute -left-8 -top-8 text-[12rem] leading-none text-champagne/10">
                "
              </span>
              <blockquote className="font-display relative text-3xl leading-[1.4] text-champagne/85 md:text-5xl md:leading-[1.3]">
                Một lớp sơn mất một ngày để phủ. Một tuần để khô. Một tháng để quên.
                <br />
                Rồi chúng tôi phủ <span className="italic text-shimmer">lớp khác</span>.
              </blockquote>
              <p className="mt-12 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Nghệ nhân Lê · Xưởng N° II
              </p>
            </article>

            {/* Article 2 */}
            <article className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-champagne/10">
                  <img src={artisan} alt="" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-pitch/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:-ml-24 md:mt-32 md:translate-y-12">
                <div className="bg-pitch p-8 ring-1 ring-champagne/15 md:p-12">
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                    Xưởng vẽ · 02
                  </p>
                  <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                    Mười Lăm <br /> <span className="italic text-champagne/60">Bàn Tay</span>
                  </h2>
                  <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                    Một tấm panel đi qua mười lăm đôi bàn tay trong mười một
                    tháng. Mỗi bàn tay kế thừa sự tĩnh lặng của bàn tay trước,
                    rồi thêm vào lớp của riêng mình.
                  </p>
                  <button className="mt-10 font-sans text-[9px] tracking-luxury uppercase text-champagne/60 transition-colors hover:text-champagne">
                    Đọc bài →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="grid grid-cols-12 items-center gap-8">
              <div className="col-span-12 md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-champagne/10">
                  <img src={panel} alt="" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-pitch/30 to-transparent" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Chất liệu · 03
                </p>
                <h2 className="font-display mt-6 text-4xl uppercase leading-[1.1] text-champagne md:text-6xl">
                  Vỏ Trứng <br /> <span className="italic text-champagne/60">Nghiền Vụn</span>
                </h2>
                <p className="mt-8 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Chất liệu mong manh nhất trên đời, được đập vỡ có chủ ý và
                  khảm vào nhựa sơn. Vết nứt không bị che giấu — nó chính là
                  bố cục.
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article className="mx-auto grid max-w-5xl grid-cols-12 items-end gap-8">
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Phòng ủ · 04
                </p>
                <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                  Căn Phòng <br /><span className="italic text-champagne/60">Tĩnh Lặng</span>
                </h2>
                <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Tại Hà Nội, một căn phòng không cửa sổ giữ ba trăm tấm panel
                  trong bóng tối vĩnh viễn. Thời gian, chứ không phải nghệ
                  nhân, hoàn tất tác phẩm.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-champagne/10">
                  <img src={g3} alt="" loading="lazy" width={1024} height={1536} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-pitch/30 mix-blend-multiply" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-champagne/15 px-6 py-32 text-center">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Bài viết tiếp theo · Mùa xuân MMXXVI
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
