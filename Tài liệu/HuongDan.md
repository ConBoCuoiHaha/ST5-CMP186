# 📘 HƯỚNG DẪN QUY TRÌNH GIT & CẤU TRÚC PROJECT (CHO NHÓM 5 NGƯỜI)

Tài liệu này hướng dẫn chi tiết từng bước để 5 thành viên (A, B, C, D, E) làm việc cùng nhau trên GitHub, đảm bảo lịch sử Git đẹp, rõ ràng để giảng viên chấm điểm và tránh xung đột code (Conflict).

---

## 1. 🌳 Quy Tắc Nhánh (Branching Strategy)
Chúng ta sẽ sử dụng mô hình **Gitflow đơn giản hóa**:

*   **`main`**: Nhánh chính chứa code chạy ổn định (Production). **TUYỆT ĐỐI KHÔNG CODE TRỰC TIẾP TRÊN NHÁNH NÀY.**
*   **`develop`**: Nhánh phát triển chung. Mọi người sẽ merge code vào đây để test trước khi đưa sang `main`.
*   **`feature/ten-chuc-nang`**: Nhánh riêng của từng thành viên.

**Quy định đặt tên nhánh:**
*   Thành viên a. Hưng: `feature/product-core-A`
*   Thành viên b. Minh Tài: `feature/product-detail-B`
*   Thành viên c. Gia Bảo: `feature/order-core-C`
*   Thành viên d. Anh Tuấn: `feature/payment-D`
*   Thành viên e. Khôi: `feature/shipper-user-E`

---

## 2. 🚀 Quy Trình Làm Việc Hàng Ngày (Workflow)

### Bước 1: Clone Project & Tạo Nhánh (Làm lần đầu)
Mở Terminal (Git Bash hoặc VS Code) và chạy:

```bash
# 1. Clone repo về máy
git clone <link-github-repo-cua-nhom>
cd <ten-thu-muc-project>

# 2. Chuyển sang nhánh develop (nếu chưa có thì tạo từ main)
git checkout -b develop main 
# Hoặc nếu đã có trên remote: git checkout develop

# 3. Tạo nhánh riêng của mình từ develop
git checkout -b feature/ten-cua-ban develop
# Ví dụ: git checkout -b feature/product-core-A develop
```
git push origin dev
git push origin feature/Hung

### Bước 2: Code & Tạo File (Hàng ngày)
Dựa vào file **`PhanCong.md`**, mỗi bạn tạo đúng file/folder được giao.

**Ví dụ Thành viên A tạo file Backend:**
1.  Vào folder `ecomAPI/src/controllers/`
2.  Tạo file `productController.js`
3.  Code nội dung...

**Ví dụ Thành viên C tạo file Frontend:**
1.  Vào folder `eCommerce_Reactjs/src/container/Order/`
2.  Tạo file `OrderHomePage.js`
3.  Code nội dung...

### Bước 3: Commit & Push (Quan trọng để có lịch sử đẹp)
Sau khi code xong một chức năng nhỏ (hoặc cuối ngày):

```bash
# 1. Kiểm tra trạng thái file
git status

# 2. Thêm file vào Staging Area
git add . 
# Hoặc add từng file: git add ecomAPI/src/controllers/productController.js

# 3. Commit với nội dung rõ ràng (Giảng viên sẽ soi cái này!)
# Cú pháp: [Tên-Thành-Viên] Làm gì đó
git commit -m "[Member A] Create productController and basic CRUD logic"
git commit -m "[Member C] Implement OrderHomePage UI layout"

# 4. Push nhánh của mình lên GitHub
git push origin feature/ten-cua-ban
# Ví dụ: git push origin feature/product-core-A
```

### Bước 4: Tạo Pull Request (PR) để Merge code
**KHÔNG MERGE TRỰC TIẾP.** Hãy tạo PR để trưởng nhóm review.

1.  Truy cập trang GitHub của repo.
2.  Bạn sẽ thấy thông báo "Compare & pull request" cho nhánh vừa push. Nhấn vào đó.
3.  Chọn **Base branch: `develop`** <= **Compare branch: `feature/ten-cua-ban`**.
4.  Tiêu đề PR: `[Member A] Feature Product Core`.
5.  Nhấn **Create Pull Request**.
6.  Gửi link PR vào nhóm chat để mọi người review và Merge.

### Bước 5: Cập nhật code mới nhất từ nhóm (Tránh Conflict)
Trước khi bắt đầu code tiếp vào ngày hôm sau, hãy luôn cập nhật code mới nhất từ `develop`:

```bash
# 1. Chuyển về nhánh develop
git checkout develop

# 2. Kéo code mới nhất về
git pull origin develop

# 3. Chuyển lại về nhánh của mình
git checkout feature/ten-cua-ban

# 4. Gộp code mới từ develop vào nhánh của mình
git merge develop
# Nếu có conflict, hãy sửa file bị đỏ trong VS Code, sau đó git add . và git commit lại.
```

---

## 3. 🛠️ Xử Lý Các File Dùng Chung (Tránh "Dẫm chân nhau")

Có 2 file "nhạy cảm" mà cả 5 người đều phải sửa. Hãy tuân thủ quy tắc sau:

### File 1: `ecomAPI/src/route/web.js` (Backend Routes)
Khi thêm route mới, hãy comment rõ khu vực của mình:

```javascript
// ... code cũ ...

// --- START MEMBER A (Product) ---
router.post('/api/create-new-product', productController.handleCreateNewProduct);
router.get('/api/get-all-product', productController.getAllProduct);
// --- END MEMBER A ---

// --- START MEMBER C (Order) ---
router.post('/api/create-new-order', orderController.createNewOrder);
// --- END MEMBER C ---

// ... code cũ ...
```

### File 2: `eCommerce_Reactjs/src/services/userService.js` (Frontend API)
Tương tự, hãy phân chia khu vực:

```javascript
// ...

// =============== MEMBER A API ===============
const createNewProductService = (data) => {
    return axios.post('/api/create-new-product', data);
}

// =============== MEMBER C API ===============
const createNewOrderService = (data) => {
    return axios.post('/api/create-new-order', data);
}

// ...
```

---

## 4. 🆘 Xử Lý Khi Gặp Conflict (Xung đột)
Nếu khi `git merge` hoặc `git pull` bị báo **CONFLICT**:

1.  Mở file bị conflict trong VS Code.
2.  Bạn sẽ thấy các dòng `<<<<<<< HEAD`, `=======`, `>>>>>>>`.
    *   Phần trên `=======` là code của bạn.
    *   Phần dưới là code mới từ server.
3.  Chọn **"Accept Both Changes"** (nếu muốn giữ cả 2) hoặc sửa tay để code chạy đúng.
4.  Lưu file.
5.  Chạy lệnh:
    ```bash
    git add .
    git commit -m "Fix conflict when merging develop"
    ```

---

## 5. ✅ Checklist Cho Giảng Viên Xem
Để "khoe" với giảng viên, hãy đảm bảo:
1.  **Network Graph:** Trên GitHub, vào tab **Insights -> Network** để thấy biểu đồ các nhánh rẽ ra và gộp vào rất chuyên nghiệp.
2.  **Commits:** Lịch sử commit dày đặc, có tên từng thành viên và nội dung công việc cụ thể.
3.  **Pull Requests:** Có danh sách các PR đã Close, thể hiện quy trình Review code.

Chúc nhóm 5 người hợp tác vui vẻ và đạt điểm A+! 🚀
