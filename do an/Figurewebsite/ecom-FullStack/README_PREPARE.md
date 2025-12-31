# Chuẩn Bị Dự Án Cho Bài Tập Git - Đã Hoàn Thành

Tôi đã hoàn thành việc chuẩn bị dự án của bạn cho bài tập nhóm Git & Jira. Dưới đây là tóm tắt các thay đổi và hướng dẫn tiếp theo:

## 1. Sao Lưu & Phân Chia Code (`ChucNang/`)
Toàn bộ code của 2 tính năng **Quản lý Sản phẩm (Product)** và **Quản lý Đơn hàng (Order)** đã được sao lưu vào thư mục `ChucNang`.
- Code được chia nhỏ theo từng thành viên (A, B, C, D, E) tương ứng với nhiệm vụ của họ.
- Mỗi thư mục thành viên có chứa:
    - `Backend/`: Các file controller, service phía server.
    - `Frontend/`: Các file component, container phía client.
    - `CODE_THEM_VAO_PROJECT.txt`: Chứa các đoạn code Route (Backend) và API Service (Frontend) cần thiết để họ tích hợp lại.

## 2. Làm Sạch Dự Án Chính (`ecom-FullStack`)
- **Đã xóa:** Các file Controller và Service backend liên quan đến Product và Order.
- **Đã xóa:** Các file Component và Container frontend liên quan đến Product và Order.
- **Đã xử lý:** 
    - File `ecomAPI/src/route/web.js`: Đã comment out (vô hiệu hóa) các đường dẫn API của Product và Order.
    - File `eCommerce_Reactjs/src/services/userService.js`: Đã comment out các hàm gọi API của Product và Order.
    -> **Mục đích:** Giúp dự án chạy được (không crash) nhưng thiếu tính năng, sẵn sàng để các bạn code lại.

## 3. Tài Liệu Hướng Dẫn
Tôi đã tạo 2 file tài liệu quan trọng ngay tại thư mục gốc dự án:

### 📄 `PhanCong.md` (Bảng Phân Công Nhiệm Vụ)
- Liệt kê chi tiết ai làm gì.
- Chỉ định rõ tên file, đường dẫn file mà mỗi bạn cần tạo mới.
- **Hành động:** Hãy gửi file này cho cả nhóm để mọi người biết nhiệm vụ của mình.

### 📄 `HuongDan.md` (Quy Trình Git & Code)
- Hướng dẫn chi tiết từng bước từ lúc Clone code, tạo Branch, Commit, Push đến tạo Pull Request.
- Quy định cách đặt tên Branch, tên Commit.
- **QUAN TRỌNG:** Hướng dẫn cách xử lý file chung (`web.js`, `userService.js`) để tránh xung đột (Conflict) - **Mọi người bắt buộc phải đọc kỹ phần này.**

## 4. Các Bước Tiếp Theo Cho Bạn (Nhóm Trưởng)
1.  **Kiểm tra lại:** Dạo qua một vòng thư mục `ChucNang` và các file `.md` tôi vừa tạo.
2.  **Đẩy code lên Git:**
    - Đảm bảo bạn đang ở branch `main` (hoặc tạo mới repo).
    - Commit tất cả các thay đổi này: `git add .` -> `git commit -m "Prepare project for Git exercise: Remove features and add docs"` -> `git push`.
3.  **Họp nhóm:**
    - Chia sẻ Repository URL cho các bạn.
    - Gửi `PhanCong.md` và `HuongDan.md` cho các bạn đọc trước.
    - Yêu cầu các bạn làm đúng theo hướng dẫn trong `HuongDan.md`.

Chúc nhóm bạn đạt điểm cao trong bài tập này! Nếu cần hỗ trợ gì thêm (ví dụ: sửa lỗi khi merge code sau này), hãy quay lại đây nhé.
