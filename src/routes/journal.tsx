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
      { title: "Sảnh trưng bày Kiến thức · Sơn Mài Di Sản" },
      {
        name: "description",
        content:
          "Kể chuyện 100 năm · Đối thoại với bóng tối · Giao thoa di sản. Những bài viết chuyên sâu được trình bày như các bức tranh.",
      },
      { property: "og:title", content: "Sảnh trưng bày Kiến thức · Sơn Mài Di Sản" },
      {
        property: "og:description",
        content: "Nơi di sản và tầm nhìn tương lai hội tụ.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <div className="min-h-dvh text-foreground">
      <SiteHeader />

      <main className="overflow-hidden pt-40">
        {/* Masthead */}
        <section className="border-b border-champagne/15 px-6 pb-20 md:px-12">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex items-center gap-6">
              <span className="block h-px w-12 bg-crimson" />
              <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                Khối Cảm Hứng · Số MMXXVI
              </p>
            </div>
            <h1 className="font-display mt-12 text-6xl uppercase leading-[0.85] text-champagne md:text-8xl lg:text-[10rem]">
              Sảnh <span className="italic text-shimmer">Kiến Thức</span>
            </h1>
            <p className="mt-12 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/50">
              Kể chuyện 100 năm · Đối thoại với bóng tối · Giao thoa di sản — nơi những bài viết
              chuyên sâu được trình bày như các bức tranh.
            </p>
          </div>
        </section>

        {/* Floating editorial layout */}
        <section className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-[1600px] space-y-44">
            {/* Article 1 */}
            <article id="uy-son" className="grid grid-cols-12 items-center gap-8 scroll-mt-32">
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Khối cảm hứng · 01
                </p>
                <h2 className="font-display mt-6 text-5xl uppercase leading-[0.95] text-champagne md:text-7xl">
                  Nghệ Thuật <br />
                  <span className="italic text-champagne/60">Uỷ Sơn</span>
                </h2>
                <p className="mt-10 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Khám phá quy trình ủ sơn truyền thống — nơi màu sắc được sinh ra từ{" "}
                  <em className="not-italic text-champagne">bóng tối</em>. Ánh sáng trong sự tĩnh
                  lặng, khi mọi chuyển động dừng lại, ánh sáng bắt đầu kể chuyện.
                </p>
                <button className="mt-12 font-sans text-[9px] tracking-luxury uppercase text-champagne/60 transition-colors hover:text-champagne">
                  Đọc bài →
                </button>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-champagne/10 transition-all duration-700 hover:ring-champagne/40">
                  <img
                    src={forest}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover"
                  />
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
                Sơn mài không vẽ cái ta thấy,
                <br />
                mà vẽ cái <span className="italic text-shimmer">ta cảm</span>.
              </blockquote>
              <p className="mt-12 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Tư tưởng từ xưởng vẽ · Sơn Mài Di Sản
              </p>
            </article>

            {/* Article 2 */}
            <article id="chat-lieu" className="grid grid-cols-12 gap-8 scroll-mt-32">
              <div className="col-span-12 md:col-span-7">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-champagne/10">
                  <img
                    src={artisan}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-pitch/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:-ml-24 md:mt-32 md:translate-y-12">
                <div className="bg-pitch p-8 ring-1 ring-champagne/15 md:p-12">
                  <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                    Bí mật vàng lá · 02
                  </p>
                  <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                    Khi Chất Liệu <br /> <span className="italic text-champagne/60">Cất Lời</span>
                  </h2>
                  <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                    Nhựa sơn không chỉ là vật liệu — đó là ngôn ngữ. Mỗi lớp sơn là một câu, mỗi tác
                    phẩm hoàn chỉnh là một bài thơ về căn tính dân tộc.
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
                  <img
                    src={panel}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-pitch/30 to-transparent" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Bí mật cánh gián · 03
                </p>
                <h2 className="font-display mt-6 text-4xl uppercase leading-[1.1] text-champagne md:text-6xl">
                  Màu Cánh Gián <br /> <span className="italic text-champagne/60">Biểu Tượng</span>
                </h2>
                <p className="mt-8 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Khám phá nguồn gốc và quy trình tạo ra màu cánh gián — biểu tượng của sơn mài Việt
                  Nam. Hướng dẫn chi tiết để phân biệt sơn ta thật, từ độ bóng đến cảm giác khi
                  chạm.
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article
              id="ky-luc-100-nam"
              className="mx-auto grid max-w-5xl grid-cols-12 items-end gap-8 scroll-mt-32"
            >
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Giao thoa di sản · 04
                </p>
                <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                  Kỷ Lục <br />
                  <span className="italic text-champagne/60">100 Năm</span>
                </h2>
                <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Hành trình của sơn mài Việt Nam qua 100 năm — từ Cao đẳng Mỹ thuật Đông Dương đến
                  ngày hôm nay. Nơi 100 năm tinh hoa gặp gỡ tư duy thế kỷ XXI.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-champagne/10">
                  <img
                    src={g3}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1536}
                    className="h-full w-full object-cover"
                  />
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
