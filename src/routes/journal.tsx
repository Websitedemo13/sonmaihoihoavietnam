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
      { title: "The Journal · Vũ Gia" },
      {
        name: "description",
        content:
          "Editorial dispatches from the Maison: behind the resin, the artisans, the slow rooms.",
      },
      { property: "og:title", content: "The Journal · Vũ Gia" },
      {
        property: "og:description",
        content: "An editorial chronicle of a century of Vietnamese lacquer.",
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
                Vol. IV · Issue MMXXVI
              </p>
            </div>
            <h1 className="font-display mt-12 text-6xl uppercase leading-[0.85] text-champagne md:text-8xl lg:text-[10rem]">
              The <span className="italic text-shimmer">Journal</span>
            </h1>
            <p className="mt-12 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/50">
              Dispatches from the slow rooms — where resin cures and artisans
              vanish into their own hands.
            </p>
          </div>
        </section>

        {/* Floating editorial layout */}
        <section className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-[1600px] space-y-44">
            {/* Article 1: large vertical image left, headline right */}
            <article className="grid grid-cols-12 items-center gap-8">
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Field Notes · 01
                </p>
                <h2 className="font-display mt-6 text-5xl uppercase leading-[0.95] text-champagne md:text-7xl">
                  Tapping <br />
                  the <span className="italic text-champagne/60">Tree</span>
                </h2>
                <p className="mt-10 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  Before dawn, in the lacquer forests of Phú Thọ, a man bows to
                  a fifty-year-old <em className="not-italic text-champagne">cây sơn</em> and
                  draws from it the sap that will, in a decade, become a mirror.
                </p>
                <button className="mt-12 font-sans text-[9px] tracking-luxury uppercase text-champagne/60 transition-colors hover:text-champagne">
                  Read essay →
                </button>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="relative aspect-[3/4] overflow-hidden ring-1 ring-champagne/10 transition-all duration-700 hover:ring-champagne/40">
                  <img src={forest} alt="" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch/60 via-transparent to-transparent" />
                </div>
              </div>
            </article>

            {/* Quote-only article */}
            <article className="relative mx-auto max-w-4xl text-center">
              <span className="font-display absolute -left-8 -top-8 text-[12rem] leading-none text-champagne/10">
                "
              </span>
              <blockquote className="font-display relative text-3xl leading-[1.4] text-champagne/85 md:text-5xl md:leading-[1.3]">
                A coat takes a day to apply. A week to dry. A month to forget.
                <br />
                And then we apply <span className="italic text-shimmer">another</span>.
              </blockquote>
              <p className="mt-12 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Master Lê · Atelier N° II
              </p>
            </article>

            {/* Article 2: two-column overlap */}
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
                    Atelier · 02
                  </p>
                  <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                    The Fifteen <br /> <span className="italic text-champagne/60">Hands</span>
                  </h2>
                  <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                    A single panel passes through fifteen pairs of hands across
                    eleven months. Each hand inherits the previous one's
                    silence, and adds a layer of its own.
                  </p>
                  <button className="mt-10 font-sans text-[9px] tracking-luxury uppercase text-champagne/60 transition-colors hover:text-champagne">
                    Read essay →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 3: wide horizontal */}
            <article className="grid grid-cols-12 items-center gap-8">
              <div className="col-span-12 md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-champagne/10">
                  <img src={panel} alt="" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-pitch/30 to-transparent" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Material · 03
                </p>
                <h2 className="font-display mt-6 text-4xl uppercase leading-[1.1] text-champagne md:text-6xl">
                  Eggshell, <br /> <span className="italic text-champagne/60">Crushed</span>
                </h2>
                <p className="mt-8 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  The most fragile material on earth, broken by intent and laid
                  into resin. The crack is not concealed — it is the
                  composition.
                </p>
              </div>
            </article>

            {/* Article 4: editorial vertical landscape */}
            <article className="mx-auto grid max-w-5xl grid-cols-12 items-end gap-8">
              <div className="col-span-12 md:col-span-5">
                <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                  Studio · 04
                </p>
                <h2 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-5xl">
                  The Slow <br /><span className="italic text-champagne/60">Room</span>
                </h2>
                <p className="mt-8 text-xs leading-loose tracking-[0.12em] text-champagne/55">
                  In Hà Nội, a windowless chamber holds three hundred panels in
                  perpetual darkness. Time, not the artisan, finishes the
                  work.
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
            More dispatches · spring MMXXVI
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
