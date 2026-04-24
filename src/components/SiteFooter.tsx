import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-champagne/15 bg-pitch/50 backdrop-blur-[1px] px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center border border-crimson bg-crimson/15">
              <span className="font-display text-base text-champagne">S</span>
            </div>
            <div>
              <p className="font-serif-cap text-xs text-champagne">Sơn Mài Di Sản</p>
              <p className="mt-1 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
                Kỷ Nguyên Trăm Năm · MCMXXIV
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-sm text-xs leading-loose tracking-[0.1em] text-champagne/45">
            Một trăm năm của nhựa sơn, thời gian và tĩnh lặng — được gìn giữ
            như ngọn lửa. Một thế kỷ ủ trong bóng tối, nay bừng sáng cùng thế giới.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Khám phá
          </p>
          <ul className="mt-6 space-y-3 font-serif-cap text-[11px] text-champagne/70">
            <li><Link to="/journey" className="hover:text-champagne">Hành trình</Link></li>
            <li><Link to="/gallery" className="hover:text-champagne">Thư viện</Link></li>
            <li><Link to="/journal" className="hover:text-champagne">Tin tức</Link></li>
            <li><Link to="/contact" className="hover:text-champagne">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-sans text-[9px] tracking-eyebrow uppercase text-champagne/40">
            Xưởng nghệ thuật
          </p>
          <div className="mt-6 space-y-5 text-xs tracking-[0.1em] text-champagne/55">
            <div>
              <p className="font-serif-cap text-[11px] text-champagne">Hà Nội</p>
              <p className="mt-1">28 Phố Hàng Khay · Hoàn Kiếm</p>
            </div>
            <div>
              <p className="font-serif-cap text-[11px] text-champagne">Liên hệ</p>
              <p className="mt-1">heritage@sonmai.vn · +84 123 456 789</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-[1600px] items-center justify-between border-t border-champagne/10 pt-8 font-sans text-[9px] tracking-eyebrow uppercase text-champagne/30">
        <span>© MCMXXIV — MMXXX · Sơn Mài Di Sản</span>
        <span className="hidden md:block">Một Thế Kỷ Trong Bóng Tối</span>
      </div>
    </footer>
  );
}
