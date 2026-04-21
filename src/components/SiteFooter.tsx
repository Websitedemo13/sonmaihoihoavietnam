import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-champagne/15 bg-pitch px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center border border-crimson bg-crimson/15">
              <span className="font-display text-base text-champagne">V</span>
            </div>
            <div>
              <p className="font-serif-cap text-xs text-champagne">Vũ Gia</p>
              <p className="mt-1 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Maison de Laque · MCMXXIV
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-sm text-xs leading-loose tracking-[0.1em] text-champagne/45">
            One hundred years of resin, time, and silence — preserved as fire.
            A century cured in the dark, surfacing now into the light of the
            world.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Navigate
          </p>
          <ul className="mt-6 space-y-3 font-serif-cap text-[11px] text-champagne/70">
            <li><Link to="/journey" className="hover:text-champagne">The Journey</Link></li>
            <li><Link to="/gallery" className="hover:text-champagne">The Gallery</Link></li>
            <li><Link to="/journal" className="hover:text-champagne">The Journal</Link></li>
            <li><Link to="/contact" className="hover:text-champagne">Inner Circle</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Ateliers
          </p>
          <div className="mt-6 space-y-5 text-xs tracking-[0.1em] text-champagne/55">
            <div>
              <p className="font-serif-cap text-[11px] text-champagne">Hà Nội</p>
              <p className="mt-1">28 Phố Hàng Khay · Hoàn Kiếm</p>
            </div>
            <div>
              <p className="font-serif-cap text-[11px] text-champagne">Paris</p>
              <p className="mt-1">14 Rue de Sévigné · 4ᵉ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-[1600px] items-center justify-between border-t border-champagne/10 pt-8 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/30">
        <span>© MCMXXIV — MMXXX · Vũ Gia Maison</span>
        <span className="hidden md:block">A Century of Shadows</span>
      </div>
    </footer>
  );
}
