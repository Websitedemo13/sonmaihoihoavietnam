import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: () => (
    <div className="space-y-4">
      <h2 className="text-3xl font-serif">Chào mừng Stephen quay lại</h2>
      <p className="text-stone-600">Hôm nay bạn muốn chỉnh sửa mockup nào?</p>

      <div className="grid grid-cols-3 gap-6 pt-6">
        <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-sm">
          <h3 className="font-bold">Tổng tác phẩm</h3>
          <p className="text-4xl mt-2">12</p>
        </div>
      </div>
    </div>
  ),
});