const values = [
  {
    n: "I",
    label: "Heritage",
    title: "One Hundred Years",
    body: "From the imperial workshops of 1924 to the dim ateliers of today — an unbroken thread of resin, patience, and inherited gesture.",
  },
  {
    n: "II",
    label: "Unique Identity",
    title: "Sơn Mài Vietnam",
    body: "Eggshell, cinnabar, gilded leaf laid in seventy translucent strata. A material vocabulary belonging to one country alone.",
  },
  {
    n: "III",
    label: "Global Recognition",
    title: "Recorded Mastery",
    body: "Archived at the Louvre, exhibited in Tokyo, sealed into the Vietnamese Lacquer Record of 2026 — a craft elevated to canon.",
  },
];

export function RecordValues() {
  return (
    <section className="relative border-y border-champagne/15 bg-pitch px-6 py-32 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-24 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-sans text-[9px] tracking-eyebrow uppercase text-crimson">
              Record · Three Pillars
            </p>
            <h2 className="font-display mt-6 max-w-[18ch] text-4xl uppercase leading-[1] text-champagne md:text-6xl">
              The Values <span className="text-champagne/55">we keep</span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-loose tracking-[0.12em] text-champagne/50">
            What survives a century is not technique. It is intention — coded
            into matter, carried by hands that know exactly when to stop.
          </p>
        </div>

        <div className="grid gap-px bg-champagne/15 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.n}
              className="group relative bg-pitch p-10 transition-colors duration-700 hover:bg-pitch/80 md:p-14"
            >
              <div className="absolute -right-px -top-px size-3 border-r border-t border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -bottom-px -left-px size-3 border-b border-l border-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-champagne/30 transition-colors duration-500 group-hover:text-champagne">
                  {v.n}
                </span>
                <span className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                  {v.label}
                </span>
              </div>

              <h3 className="font-display mt-16 text-2xl leading-[1.15] text-champagne md:text-3xl">
                {v.title}
              </h3>

              <p className="mt-8 text-xs leading-loose tracking-[0.1em] text-champagne/50">
                {v.body}
              </p>

              <div className="mt-16 h-px w-12 bg-champagne/30 transition-all duration-700 group-hover:w-24 group-hover:bg-champagne" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
