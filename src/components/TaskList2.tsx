const TaskList2 = () => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md md:p-6">
      <h2 className="text-lg font-bold text-gray-800 md:text-xl">
        Danh sách công việc
      </h2>

      <div className="mt-4 space-y-3">
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-medium text-gray-800">Học Tailwind CSS</h3>

            <p className="mt-1 text-sm text-gray-500">Hoàn thành bài Flexbox</p>
          </div>

          <button className="w-full rounded-md bg-green-100 px-3 py-2 text-sm font-medium text-green-700 sm:w-auto sm:py-1">
            Hoàn thành
          </button>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-medium text-gray-800">Làm bài tập React</h3>

            <p className="mt-1 text-sm text-gray-500">Ôn lại Props và State</p>
          </div>

          <button className="w-full rounded-md bg-yellow-100 px-3 py-2 text-sm font-medium text-yellow-700 sm:w-auto sm:py-1">
            Đang làm
          </button>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-medium text-gray-800">
              Đọc tài liệu TypeScript
            </h3>

            <p className="mt-1 text-sm text-gray-500">Học Type và Interface</p>
          </div>

          <button className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 sm:w-auto sm:py-1">
            Chưa làm
          </button>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-medium text-gray-800">Học Flexbox</h3>

            <p className="mt-1 text-sm text-gray-500">Làm giao diện Header</p>
          </div>

          <button className="w-full rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-700 sm:w-auto sm:py-1">
            Quan trọng
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList2;

/*
  p-4:
  Padding mặc định là 16px trên màn hình nhỏ.

  md:p-6:
  Từ màn hình 768px trở lên, padding đổi thành 24px.

  text-lg:
  Tiêu đề mặc định khoảng 18px.

  md:text-xl:
  Từ màn hình md trở lên, tiêu đề khoảng 20px.

  flex-col:
  Trên màn hình nhỏ, nội dung và nút xếp theo chiều dọc.

  sm:flex-row:
  Từ màn hình 640px trở lên, nội dung và nút nằm cùng một hàng.

  gap-3:
  Khoảng cách giữa nội dung và nút là 12px.

  sm:items-center:
  Từ màn hình sm trở lên, căn giữa theo chiều dọc.

  sm:justify-between:
  Từ màn hình sm trở lên, nội dung nằm bên trái và nút nằm bên phải.

  w-full:
  Trên màn hình nhỏ, nút chiếm toàn bộ chiều rộng.

  sm:w-auto:
  Từ màn hình sm trở lên, nút chỉ rộng theo nội dung.

  py-2:
  Trên màn hình nhỏ, padding trên dưới của nút là 8px.

  sm:py-1:
  Từ màn hình sm trở lên, padding trên dưới giảm còn 4px.
*/
