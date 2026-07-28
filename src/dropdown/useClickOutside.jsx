import { useEffect, useRef } from "react";

//khi click chuột bên ngoài dropdown thì nó sẽ tắt màn hình dropdown

export default function useClickOutside(callbackFn) {
  /* useRef(null): Tạo một tham chiếu (domNodeRef) ban đầu có giá trị là null.
     Sau khi hook này được trả về và gán vào một thẻ JSX, domNodeRef.current sẽ trỏ trực tiếp
     đến phần tử DOM thực tế trên giao diện.
  */
  const domNodeRef = useRef(null);

  /* 
  Hàm handler(event): Đây là hàm xử lý sự kiện lắng nghe mỗi khi có thao tác nhấn chuột (mousedown) trên toàn bộ tài liệu (document).
    domNodeRef.current: Kiểm tra xem phần tử DOM đã được gắn kết (mounted) hay chưa.
    domNodeRef.current.contains(event.target): Phương thức contains kiểm tra xem phần tử bị click (event.target) có nằm bên trong phần tử của chúng ta hay không.
    Dấu chấm than ! đảo ngược kết quả: !domNodeRef.current.contains(event.target) có nghĩa là "phần tử bị click nằm ở BÊN NGOÀI phần tử của chúng ta".

Nếu điều kiện này đúng, callbackFn() sẽ được kích hoạt.*/
  useEffect(() => {
    const handler = (event) => {
      if (domNodeRef.current && !domNodeRef.current.contains(event.target)) {
        callbackFn();
      }
    };

    /* Đăng ký và dọn dẹp sự kiện (Cleanup):

document.addEventListener("mousedown", handler): Lắng nghe mọi cú click chuột trên toàn trang web.

Hàm trả về trong useEffect (return () => { document.removeEventListener(...) }) có nhiệm vụ gỡ bỏ sự kiện khi component 
bị unmount (tháo khỏi giao diện). Việc này cực kỳ quan trọng để tránh rò rỉ bộ nhớ (memory leak).

Dependency [callbackFn]: Đảm bảo useEffect cập nhật lại handler nếu hàm callback thay đổi. 
(Lưu ý: Để tránh việc gọi lại useEffect liên tục nếu callback không được bọc useCallback, 
trong thực tế người ta thường dùng thêm một ref để lưu trữ callbackFn).*/
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [callbackFn]);

  return domNodeRef;
  //Hook trả về domNodeRef để component bên ngoài có thể sử dụng và gán vào thuộc tính ref của một thẻ HTML/JSX bất kỳ.
}
