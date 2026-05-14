import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/admin")({
  // Check quyền trước khi vào
  beforeLoad: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-stone-100">
      {/* Sidebar đơn giản */}
      <aside className="w-64 bg-stone-900 text-stone-200 p-6 space-y-6">
        <div className="font-serif text-xl border-b border-stone-700 pb-4">Dashboard</div>
        <nav className="space-y-2">
          <a href="/admin/gallery" className="block p-2 hover:bg-stone-800 rounded">
            Quản lý Gallery
          </a>
          <a href="/admin/journal" className="block p-2 hover:bg-stone-800 rounded">
            Bài viết Journal
          </a>
        </nav>
      </aside>

      {/* Nội dung thay đổi theo từng trang admin con */}
      <main className="flex-1 p-10 text-stone-900">
        <Outlet />
      </main>
    </div>
  );
}
