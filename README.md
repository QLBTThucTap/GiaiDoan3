### 1. Button Component

Ý nghĩa:
Là thành phần tương tác cơ bản nhất, cho phép người dùng thực hiện hành động (submit form, mở modal, xóa dữ liệu,...).

Chức năng:

- Variant (biến thể): Thay đổi giao diện theo ngữ cảnh
  - `primary`: Nút chính, màu nổi bật (thường là màu chủ đạo)
  - `outline`: Nút viền, phù hợp cho hành động phụ
  - `danger`: Màu đỏ, dùng cho hành động nguy hiểm (xóa, hủy)
  - Có thể mở rộng thêm: `success`, `warning`, `ghost`
- Size: Điều chỉnh kích thước (`small`, `medium`, `large`) phù hợp layout
- Loading: Hiển thị trạng thái đang xử lý (kèm spinner), tự động vô hiệu hóa click
- Disabled: Vô hiệu hóa tương tác, áp dụng style mờ

### Cách sử dụng:

<Button variant="primary" size="medium" loading={isSubmitting} onClick={handleSubmit}>
  Lưu thay đổi
</Button>

<Button variant="danger" disabled>Xóa</Button>

<Button variant="outline" size="small">Hủy bỏ</Button>

### 2. Input Component

Ý nghĩa:
Thành phần nhập liệu có khả năng tự quản lý trạng thái và hiển thị thông tin phản hồi trực quan.

Chức năng:

- Error:Tự động hiển thị thông báo lỗi bên dưới input khi có validation fail (màu đỏ, icon cảnh báo)
- Icon: Hỗ trợ icon bên trái/phải (ví dụ: icon user, email, search)
- Label động: Label thay đổi theo trạng thái (ví dụ: khi có lỗi, label chuyển sang màu đỏ)
- Tích hợp: Dễ dàng kết hợp với React Hook Form, Formik

### Cách sử dụng:

<Input
label="Email"
type="email"
placeholder="nhap@email.com"
icon={<MailIcon />}
error={errors.email}
value={email}
onChange={handleChange}
/>

## 3. Select Component

### Ý nghĩa:

Thành phần chọn lựa từ danh sách, cung cấp trải nghiệm dropdown tùy biến thay vì select HTML mặc định.

### Chức năng:

- **Options tùy biến:** Có thể định dạng option với icon, nhóm, màu sắc
- **Tìm kiếm:** Hỗ trợ tìm kiếm nhanh trong danh sách dài
- **Multi-select:** Cho phép chọn nhiều giá trị
- **Tùy chỉnh giao diện:** Style dropdown menu, hover, active state

### Cách sử dụng:

const options = [
{ value: 'vn', label: 'Việt Nam', icon: '🇻🇳' },
{ value: 'us', label: 'Mỹ', icon: '🇺🇸' },
{ value: 'jp', label: 'Nhật Bản', icon: '🇯🇵' }
];

<Select
  options={options}
  placeholder="Chọn quốc gia"
  onChange={handleSelect}
  isSearchable
  isMulti
/>

## 4. Modal Component

### Ý nghĩa:

Tạo cửa sổ overlay hiển thị nội dung quan trọng (form chi tiết, xác nhận, thông báo).

### Chức năng:

- **Sử dụng Portal:** Render modal ra ngoài DOM gốc (thường là `document.body`), tránh bị ảnh hưởng bởi CSS `overflow: hidden`, `z-index` của component cha
- **Overlay:** Lớp nền mờ phía sau, click vào để đóng modal
- **Quản lý focus:** Tự động focus vào phần tử đầu tiên, giữ focus bên trong modal (accessibility)
- **Animation:** Hiệu ứng mở/đóng mượt mà

### Cách sử dụng:

const [isOpen, setIsOpen] = useState(false);

<Modal
isOpen={isOpen}
onClose={() => setIsOpen(false)}
title="Xác nhận xóa"

>

  <p>Bạn có chắc chắn muốn xóa bản ghi này?</p>
  <Button onClick={handleDelete}>Xóa</Button>
</Modal>

## 5. Table Component

### Ý nghĩa:

Khung hiển thị dữ liệu dạng bảng có cấu trúc, hỗ trợ các thao tác quản lý dữ liệu.

### Chức năng:

- **Tiêu đề (Header):** Cột có thể sắp xếp (sort), lọc (filter)
- **Hàng động (Action Row):** Mỗi hàng có các nút tương tác (sửa, xóa, xem chi tiết)
- **Phân trang:** Hỗ trợ phân trang cho dữ liệu lớn
- **Responsive:** Tự động điều chỉnh khi màn hình nhỏ
- **Checkbox:** Hỗ trợ chọn nhiều hàng để thao tác bulk

### Cách sử dụng:

const columns = [
{ key: 'id', label: 'ID', sortable: true },
{ key: 'name', label: 'Tên' },
{ key: 'status', label: 'Trạng thái' },
{ key: 'actions', label: 'Hành động', render: (row) => (
<>
<Button size="small" onClick={() => handleEdit(row)}>Sửa</Button>
<Button size="small" danger onClick={() => handleDelete(row)}>Xóa</Button>
</>
)}
];

<Table
  columns={columns}
  data={userData}
  onRowClick={handleRowClick}
  pagination={{ page: 1, total: 100, pageSize: 10 }}
/>

## **Tóm tắt lợi ích khi sử dụng hệ thống component này:**

| Component | Lợi ích chính                                               |
| --------- | ----------------------------------------------------------- |
| Button    | Thống nhất giao diện, giảm code lặp, dễ bảo trì             |
| Input     | Tăng UX với phản hồi lỗi tức thì, tích hợp dễ dàng với form |
| Select    | Trải nghiệm người dùng tốt hơn select mặc định              |
| Modal     | Tránh lỗi CSS layout, tăng tính ổn định                     |
| Table     | Xử lý dữ liệu phức tạp có tổ chức, dễ mở rộng               |

Đây là những component **cốt lõi** và **tái sử dụng cao**, giúp xây dựng giao diện nhất quán và chuyên nghiệp. Bạn có thể mở rộng thêm các variant hoặc props để phù hợp với dự án cụ thể.
