import { Link } from "@tanstack/react-router";

const sitemap = [
  { to: "/", label: "Trang chủ" },
  { to: "/about", label: "Giới thiệu" },
  { to: "/journey", label: "Hành trình" },
  { to: "/gallery", label: "Thư viện" },
  { to: "/journal", label: "Tin tức" },
  { to: "/contact", label: "Liên hệ" },
] as const;

const socials = [
  { label: "IG", href: "https://instagram.com" },
  { label: "FB", href: "https://facebook.com" },
  { label: "BE", href: "https://behance.net" },
  { label: "YT", href: "https://youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-champagne/20 bg-black/70 backdrop-blur-md px-6 py-12 md:px-12 md:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.3fr_1fr_1.1fr] md:gap-16">
        {/* Left — logo + slogan */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <div className="flex size-11 items-center justify-center border border-crimson bg-crimson/15">
              <span className="font-display text-base text-champagne">S</span>
            </div>
            <div>
              <p className="font-serif-cap text-xs text-champagne">
                Sơn Mài Di Sản
              </p>
              <p className="mt-1 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Kỷ Nguyên Trăm Năm
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs font-sans text-[11px] leading-[1.9] tracking-[0.1em] text-champagne/50">
            Nghệ thuật không chỉ được nhìn — nó được cảm nhận từ trong tĩnh lặng.
          </p>
        </div>

        {/* Center — sitemap */}
        <div className="flex flex-col items-start">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Khám phá
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 items-start">
            {sitemap.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="font-serif-cap text-[11px] leading-[1.6] text-champagne/70 transition-colors hover:text-champagne"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — email + socials */}
        <div className="flex flex-col items-start md:items-end md:text-right">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Liên hệ
          </p>
          <a
            href="mailto:heritage@sonmai.vn"
            className="mt-6 font-display text-base text-champagne transition-colors hover:text-shimmer md:text-lg"
          >
            heritage@sonmai.vn
          </a>
          <p className="mt-2 font-sans text-[11px] tracking-[0.12em] text-champagne/50">
            +84 123 456 789
          </p>

          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center border border-champagne/25 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/60 transition-colors hover:border-champagne hover:text-champagne"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] items-center justify-between border-t border-champagne/10 pt-5 font-sans text-[9px] tracking-cinzel uppercase text-champagne/30">
        <span>© MCMXXIV — MMXXX · Sơn Mài Di Sản</span>
        <span className="hidden md:block">Hà Nội — Việt Nam</span>
      </div>
    </footer>
  );
}
