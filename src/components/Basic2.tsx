const Basic2 = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-bold text-gray-800"> Quản lý công việc</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-950">
          + Thêm
        </button>
      </div>

      <p className="mt-4 text-shadow-gray-700">
        Học Tailwind CSS bằng cách xây dựng giao diện thực tế
      </p>
    </div>
  );
};
export default Basic2;

/*

transition-colors
- Tạo hiệu ứng chuyển đổi màu mượt hơn.
- Thường dùng cùng hover.

hover:bg-indigo-950
- Khi đưa chuột vào nút, nền chuyển thành tím đậm.

*/
