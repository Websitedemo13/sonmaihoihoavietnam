import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Trang chủ" },
  { to: "/about", label: "Giới thiệu" },
  { to: "/journey", label: "Hành trình" },
  { to: "/gallery", label: "Thư viện" },
  { to: "/journal", label: "Tin tức" },
  { to: "/contact", label: "Liên hệ" },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 py-5 md:px-12 md:py-6">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative flex size-10 items-center justify-center border border-crimson bg-crimson/10 transition-colors duration-700 group-hover:bg-crimson/25">
            <span className="font-display text-sm font-bold tracking-widest text-champagne">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif-cap text-[10px] text-champagne">Sơn Mài Di Sản</span>
            <span className="mt-1 font-sans text-[8px] tracking-eyebrow text-champagne/40 uppercase">
              Kỷ Nguyên · MCMXXIV
            </span>
          </div>
        </Link>

        <nav className="hidden gap-10 md:flex lg:gap-14">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative font-sans text-[9px] tracking-eyebrow uppercase text-champagne/55 transition-colors duration-500 hover:text-champagne"
              activeProps={{ className: "text-champagne" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40 lg:block">
          Hà Nội — Việt Nam
        </div>
      </div>
    </header>
  );
}
