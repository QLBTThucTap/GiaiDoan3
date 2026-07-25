const TaskList = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Danh sách công việc</h2>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
          <div>
            <h3 className="font-medium text-gray-800">Học TailwinCSS</h3>
            <p className="mt-1 text-sm text-gray-500">Hoàn thành bài Flexbox</p>
          </div>
          <button className="rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Hoàn Thành
          </button>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
          <div>
            <h3 className="font-medium text-gray-800">Làm lại bài tập REACT</h3>
            <p className="mt-1 text-sm text-gray-500">Ôn lại Props va State</p>
          </div>
          <button className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
            Đang Làm
          </button>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
          <div>
            <h3 className="font-medium text-gray-800">
              Đọc tài liệu TypeScript
            </h3>

            <p className="mt-1 text-sm text-gray-500">Học Type và Interface</p>
          </div>

          <button className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            Chưa làm
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
/*
  rounded-xl: bo tròn góc card
  bg-white: nền trắng
  p-6: padding 24px
  shadow-md: bóng mức trung bình

  text-xl: kích thước chữ khoảng 20px
  font-bold: chữ đậm
  text-gray-800: chữ xám đậm

  mt-4: margin phía trên 16px
  space-y-3: khoảng cách dọc 12px giữa các phần tử con

  flex: kích hoạt Flexbox
  items-center: căn giữa theo chiều dọc
  justify-between: đẩy hai phần tử sang hai đầu

  border: tạo đường viền
  border-gray-200: màu viền xám nhạt
  p-4: padding 16px
  rounded-lg: bo góc vừa

  text-sm: chữ nhỏ khoảng 14px
  text-gray-500: chữ xám nhạt

  rounded-md: bo góc mức trung bình
  px-3: padding trái phải 12px
  py-1: padding trên dưới 4px

  bg-green-100: nền xanh lá nhạt
  text-green-700: chữ xanh lá đậm

  bg-yellow-100: nền vàng nhạt
  text-yellow-700: chữ vàng đậm

  bg-gray-100: nền xám nhạt
  text-gray-600: chữ xám vừa
*/
