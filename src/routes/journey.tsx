import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import img1925 from "@/assets/journey-1925.jpg";
import img2026 from "@/assets/journey-2026.jpg";
import img2028 from "@/assets/journey-2028.jpg";
import imgPanel from "@/assets/lacquer-panel.jpg";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Journey 1924—2030 · Vũ Gia" },
      {
        name: "description",
        content:
          "A century of lacquer, charted in four chapters: Foundation, Record, Expansion, Legacy.",
      },
      { property: "og:title", content: "The Journey 1924—2030 · Vũ Gia" },
      {
        property: "og:description",
        content:
          "From the imperial workshops of 1924 to the global Legacy of 2030.",
      },
    ],
  }),
  component: JourneyPage,
});

const milestones = [
  {
    year: "1925",
    label: "Foundation",
    title: "The First Resin",
    body: "Master Vũ Văn Khánh opens the maison in Hà Nội. Thirty coats. Ten years to cure. A vow that would outlive him.",
    img: img1925,
    shape: "rect",
    side: "left",
  },
  {
    year: "2026",
    label: "The Record",
    title: "Vietnamese Lacquer Record",
    body: "The maison enters the official heritage record of Vietnam — a one-hundred-year continuum sealed into national memory.",
    img: img2026,
    shape: "circle",
    side: "right",
    glow: true,
  },
  {
    year: "2028",
    label: "Expansion",
    title: "Continents Crossed",
    body: "Permanent exhibitions open in Paris and Tokyo. The lacquer panel is no longer a Vietnamese object — it is a global one.",
    img: img2028,
    shape: "square",
    side: "left",
  },
  {
    year: "2030",
    label: "The Legacy",
    title: "A Century Surrendered",
    body: "The Vũ Gia Legacy Vault opens. One thousand works enter the public archive. The fire is passed forward.",
    img: imgPanel,
    shape: "orb",
    side: "right",
    glow: true,
  },
];

function JourneyPage() {
  return (
    <div className="min-h-dvh bg-pitch text-foreground">
      <SiteHeader />

      <main className="relative pt-40">
        {/* Header */}
        <section className="px-6 pb-32 text-center">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
            MCMXXIV — MMXXX · The Journey
          </p>
          <h1 className="font-display mx-auto mt-8 max-w-[14ch] text-5xl uppercase leading-[0.95] text-champagne md:text-7xl lg:text-[6.5rem]">
            One Hundred <span className="text-shimmer">Years</span>
          </h1>
          <p className="mx-auto mt-12 max-w-[48ch] text-xs leading-loose tracking-[0.15em] text-champagne/50">
            Four chapters. A single thread of gold drawn through a century of
            silence.
          </p>
        </section>

        {/* The Golden Path */}
        <section className="relative mx-auto max-w-[1400px] px-6 pb-44">
          {/* Vertical gold thread */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block">
            <div
              className="h-full origin-top bg-gradient-to-b from-transparent via-champagne/60 to-transparent"
              style={{ animation: "draw-line 3s 0.2s both" }}
            />
          </div>

          <ul className="space-y-44 md:space-y-52">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className={`relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24`}
              >
                {/* Node on thread */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-champagne bg-pitch md:block" />

                {/* Text */}
                <div
                  className={`${
                    m.side === "left" ? "md:order-1 md:text-right" : "md:order-2"
                  }`}
                >
                  <span className="font-display text-7xl text-champagne/15 md:text-8xl">
                    {m.year}
                  </span>
                  <p className="mt-2 font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
                    {m.label}
                  </p>
                  <h3 className="font-display mt-6 text-3xl uppercase leading-[1.1] text-champagne md:text-4xl">
                    {m.title}
                  </h3>
                  <p
                    className={`mt-8 max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/55 ${
                      m.side === "left" ? "md:ml-auto" : ""
                    }`}
                  >
                    {m.body}
                  </p>
                </div>

                {/* Image with shape */}
                <div className={m.side === "left" ? "md:order-2" : "md:order-1"}>
                  <div className="relative mx-auto w-full max-w-md">
                    <div
                      className={`relative aspect-square overflow-hidden ring-1 ring-champagne/25 ${
                        m.shape === "circle" || m.shape === "orb"
                          ? "rounded-full"
                          : m.shape === "square"
                            ? "rounded-none"
                            : "aspect-[3/4] rounded-none"
                      } ${m.glow ? "shadow-[0_0_80px_oklch(0.78_0.13_85_/_0.25)]" : ""}`}
                    >
                      <img
                        src={m.img}
                        alt={m.title}
                        loading="lazy"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-pitch/20 mix-blend-multiply" />
                      {m.glow && (
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-champagne/20 to-transparent" />
                      )}
                    </div>
                    {m.glow && (
                      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-champagne/15 blur-3xl" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="border-t border-champagne/15 px-6 py-32 text-center">
          <p className="font-display text-2xl uppercase leading-[1.4] text-champagne/70 md:text-3xl">
            And so the thread <span className="text-shimmer">continues</span>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
