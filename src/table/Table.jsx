import React from "react";

const Table = ({ columns = [], data = [] }) => {
  // Nếu không có dữ liệu thì hiển thị thông báo
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-white rounded-lg border">
        Không có dữ liệu để hiển thị
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                >
                  {/* Hỗ trợ render tùy chỉnh nếu có */}
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

/*
Class                          | Mục đích
overflow-x-auto                | Cho phép cuộn ngang trên mobile
min-w-full                     | Table chiếm hết chiều rộng
divide-y divide-gray-200       | Đường kẻ ngang giữa các hàng
bg-gray-50                     | Nền header xám nhạt
hover:bg-gray-50               | Hiệu ứng hover hàng
whitespace-nowrap              | Không xuống dòng trong ô
rounded-lg border shadow-sm    | Bo góc + viền + đổ bóng nhẹ
*/
