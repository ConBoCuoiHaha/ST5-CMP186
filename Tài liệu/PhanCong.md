# 📋 PHÂN CÔNG CÔNG VIỆC DỰ ÁN E-COMMERCE (NHÓM 5 NGƯỜI)

Tài liệu này quy định chi tiết nhiệm vụ code cho từng thành viên trong nhóm để đảm bảo tiến độ và giảm thiểu xung đột code (Git Conflict).

## 🏗️ Cấu Trúc Project Giả Định
*   **Backend (NodeJS):** `ecomAPI/src/` (Controllers, Services, Routes)
*   **Frontend (ReactJS):** `eCommerce_Reactjs/src/` (Containers, Components, Services)

---

## 👤 THÀNH VIÊN A: Product Core (Quản lý sản phẩm gốc)
*Nhiệm vụ: Code các API và giao diện cho thông tin chung của sản phẩm (Tên, mô tả, danh mục).*

### 1. Backend (NodeJS)
*   **File:** `ecomAPI/src/controllers/productController.js` & `ecomAPI/src/services/productService.js`
*   **Functions cần code:**
    *   `handleCreateNewProduct`: Lưu thông tin vào bảng Product.
    *   `getAllProductAdmin`: Lấy danh sách, phân trang, tìm kiếm.
    *   `getAllProductUser`: Lấy danh sách hiển thị trang chủ.
    *   `handleUpdateProduct`: Sửa tên, danh mục, thương hiệu.
    *   `handleDeleteProduct`: Xóa sản phẩm (Soft delete).

### 2. Frontend (ReactJS)
*   **Folder:** `eCommerce_Reactjs/src/container/System/Product/`
*   **File:** `ProductManage.js`: Giao diện Admin quản lý danh sách sản phẩm (Table, Modal thêm sửa xóa).
*   **File:** `eCommerce_Reactjs/src/services/productService.js`: Viết các hàm gọi API axios tương ứng.

---

## 👤 THÀNH VIÊN B: Product Attributes & Stock (Chi tiết & Tồn kho)
*Nhiệm vụ: Code phần chi tiết sâu của sản phẩm (Size, Ảnh) và logic tính toán tồn kho.*

### 1. Backend (NodeJS)
*   **File:** `ecomAPI/src/controllers/productDetailController.js` & `ecomAPI/src/services/productDetailService.js` (Tạo file mới tách biệt với A)
*   **Functions cần code:**
    *   `createNewProductDetailImage` / `Update` / `Delete`: Xử lý ảnh.
    *   `createNewProductDetailSize` / `Update` / `Delete`: Xử lý size.
    *   `getDetailProductById`: **Quan trọng** - Code logic tính toán tồn kho realtime tại đây (Tổng nhập - Tổng bán).

### 2. Frontend (ReactJS)
*   **Folder:** `eCommerce_Reactjs/src/container/System/Product/`
*   **File:** `ManageProductDetail.js`: Giao diện quản lý chi tiết (Upload ảnh, set size, giá cho từng loại).
*   **File:** `eCommerce_Reactjs/src/container/Product/`: `ProductDetail.js` (Trang chi tiết sản phẩm phía người dùng).

---

## 👤 THÀNH VIÊN C: Order Core (Xử lý đặt hàng & Trạng thái)
*Nhiệm vụ: Code luồng "xương sống": Tạo đơn hàng và cập nhật trạng thái đơn.*

### 1. Backend (NodeJS)
*   **File:** `ecomAPI/src/controllers/orderController.js` & `ecomAPI/src/services/orderService.js`
*   **Functions cần code:**
    *   `createNewOrder`: Nhận cục data từ FE, insert vào bảng Order, OrderDetail. Xử lý trừ voucher, xóa giỏ hàng.
    *   `getAllOrders`: Lấy danh sách đơn cho Admin.
    *   `updateStatusOrder`: Logic chuyển trạng thái (S3 -> S4 -> S5...).
    *   `handleCancelOrder`: Logic hủy đơn (S7) và cộng lại số lượng tồn kho.

### 2. Frontend (ReactJS)
*   **Folder:** `eCommerce_Reactjs/src/container/Order/`
*   **File:** `OrderHomePage.js`: Trang Checkout (Hiển thị giỏ hàng, chọn phương thức thanh toán, nút Đặt hàng).
*   **Folder:** `eCommerce_Reactjs/src/container/System/Order/`
*   **File:** `ManageOrder.js`: Giao diện Admin duyệt đơn hàng.

---

## 👤 THÀNH VIÊN D: Payments (Cổng thanh toán)
*Nhiệm vụ: Code tích hợp PayPal và VNPay. Làm việc độc lập với các file riêng.*

### 1. Backend (NodeJS)
*   **File:** `ecomAPI/src/controllers/paymentController.js` & `ecomAPI/src/services/paymentService.js` (Tạo file mới)
*   **Functions cần code:**
    *   `paymentOrder` (PayPal): Tạo link thanh toán PayPal.
    *   `paymentOrderSuccess` (PayPal): Xử lý callback khi thanh toán xong.
    *   `paymentOrderVnpay` (VNPay): Tạo URL thanh toán VNPay (HMAC-SHA512).
    *   `paymentOrderVnpaySuccess` (VNPay): Verify chữ ký và update trạng thái đơn hàng.

### 2. Frontend (ReactJS)
*   **Folder:** `eCommerce_Reactjs/src/container/Order/`
*   **File:** `VnpayPaymentPage.js`: Trang xử lý khi user chọn VNPay.
*   **File:** `VnpayPaymentSuccess.js`: Trang thông báo kết quả thanh toán.

---

## 👤 THÀNH VIÊN E: Logistics & User Context (Shipper & Người dùng)
*Nhiệm vụ: Code phần địa chỉ, giao diện cho Shipper và lịch sử đơn hàng của User.*

### 1. Backend (NodeJS)
*   **File:** `ecomAPI/src/controllers/addressUserController.js` & `ecomAPI/src/services/addressUserService.js`
    *   CRUD địa chỉ giao hàng.
*   **File:** `ecomAPI/src/controllers/shipperController.js` & `ecomAPI/src/services/shipperService.js` (Tạo file mới)
    *   `getOrderByShipper`: Lấy đơn được phân công.
    *   `confirmOrder`: Shipper xác nhận đã giao, upload ảnh bằng chứng.
    *   `getAllOrdersByUser`: Lấy lịch sử đơn hàng của user.

### 2. Frontend (ReactJS)
*   **Folder:** `eCommerce_Reactjs/src/container/ShopCart/`
*   **File:** `AdressUserModal.js`: Modal thêm/sửa địa chỉ.
*   **Folder:** `eCommerce_Reactjs/src/container/System/Shipper/`
*   **File:** `ManageShipper.js`: Giao diện dành riêng cho Shipper xem đơn.
*   **Folder:** `eCommerce_Reactjs/src/container/User/`
*   **File:** `UserOrder.js`: Trang "Đơn hàng của tôi".

---

## ⚠️ LƯU Ý QUAN TRỌNG ĐỂ TRÁNH CONFLICT (GIT)

1.  **File `web.js` (Route Backend):** Cả 5 người đều cần thêm route vào file này.
    *   *Quy tắc:* Mỗi người comment rõ khu vực của mình trong file. Ví dụ: `// --- ROUTE PAYMENT (MEMBER D) ---`.
    *   Khi merge code phải cực kỳ cẩn thận file này.
2.  **File `App.js` (Route Frontend):** Tương tự như `web.js`, đây là điểm nóng conflict.
3.  **Quy trình Git:**
    *   Mỗi người tạo 1 Branch riêng: `feature/member-a`, `feature/member-b`...
    *   Code xong file của mình thì Push lên.
    *   Trưởng nhóm sẽ là người merge các branch này vào nhánh chính (`develop` hoặc `main`).



----------------------------
Thêm các route
Đúng vậy, về cơ bản là CÓ, nhưng có 2 ĐIỂM QUAN TRỌNG bạn cần lưu ý để project chạy được như cũ:

1. File 
web.js
 (Backend Routes) - CỰC KỲ QUAN TRỌNG
Trong folder ChucNang tôi chưa backup file 
web.js
 (nơi định nghĩa các đường dẫn API). Khi các bạn xóa code cũ đi, các dòng router.post(...) trong file này cũng sẽ mất hoặc bị lỗi.

Khi code lại, các thành viên BẮT BUỘC phải thêm lại các dòng route này vào file 
ecomAPI/src/route/web.js
.

Tôi sẽ liệt kê các Route cần thiết cho bạn ngay dưới đây để bạn lưu lại cho nhóm:

javascript
// --- PHẦN CỦA THÀNH VIÊN A (Product Core) ---
router.post('/api/create-new-product', productController.handleCreateNewProduct);
router.get('/api/get-all-product-admin', productController.getAllProductAdmin);
router.get('/api/get-all-product-user', productController.getAllProductUser);
router.put('/api/update-product', productController.handleUpdateProduct);
router.delete('/api/delete-product', productController.handleDeleteProduct);
router.get('/api/get-detail-product-by-id', productController.getDetailProductById);

// --- PHẦN CỦA THÀNH VIÊN B (Product Detail) ---
router.post('/api/create-new-product-detail', productDetailController.createNewProductDetail);
router.put('/api/update-product-detail', productDetailController.updateProductDetail);
router.delete('/api/delete-product-detail', productDetailController.deleteProductDetail);
router.post('/api/create-new-product-detail-image', productDetailController.createNewProductDetailImage);
router.post('/api/create-new-product-detail-size', productDetailController.createNewProductDetailSize);
// ... và các route detail khác

// --- PHẦN CỦA THÀNH VIÊN C (Order Core) ---
router.post('/api/create-new-order', orderController.createNewOrder);
router.get('/api/get-all-order', orderController.getAllOrders);
router.get('/api/get-detail-order-by-id', orderController.getDetailOrderById);
router.put('/api/update-status-order', orderController.updateStatusOrder);

// --- PHẦN CỦA THÀNH VIÊN D (Payment) ---
router.post('/api/payment-vnpay', paymentController.paymentOrderVnpay);
router.get('/api/vnpay-return', paymentController.paymentOrderVnpaySuccess);
// (Nếu có PayPal thì thêm route PayPal)

// --- PHẦN CỦA THÀNH VIÊN E (Shipper & User) ---
router.post('/api/create-new-address-user', addressUserController.createNewAddressUser);
router.get('/api/get-all-address-user', addressUserController.getAllAddressUser);
router.get('/api/get-all-order-by-shipper', orderController.getAllOrdersByShipper); // Lưu ý controller
2. File 
userService.js
 (Frontend API)
File này nằm trong cả 2 folder backup (ChucNang/OrderManagement và ChucNang/ProductManagement).

Nó chứa TẤT CẢ các hàm gọi API của cả dự án.
Khi chia nhau làm, các bạn chỉ cần copy đúng các hàm mình cần (ví dụ A chỉ copy hàm createNewProductService) vào file chung, hoặc một người chịu trách nhiệm copy file này vào lúc đầu là được.
Tóm lại:

Copy code từ ChucNang vào đúng file theo PhanCong.md.
Thêm lại Route vào web.js (Backend).
Đảm bảo userService.js (Frontend) có đủ các hàm.