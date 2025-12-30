import React from "react";
import { createPaymentLink } from "../../services/userService"; // Import hàm vừa tạo
// Nếu dùng toast để thông báo
// import { toast } from 'react-toastify';

const PaymentPage = () => {
  const handlePayment = async () => {
    try {
      // Dữ liệu giả lập gửi lên server
      const paymentData = {
        amount: 20000, // 20.000 VNĐ
        description: "Thanh toan giay Adidas",
      };

      const response = await createPaymentLink(paymentData);

      if (response && response.errCode === 0) {
        // Nếu thành công, chuyển hướng website sang trang PayOS
        window.location.href = response.checkoutUrl;
      } else {
        alert("Tạo giao dịch thất bại!");
      }
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Demo Thanh toán PayOS - Member D</h2>
      <div className="card-payment">
        <p>Sản phẩm: Giày Adidas</p>
        <p>Tổng tiền: 20.000 VNĐ</p>

        <button
          onClick={handlePayment}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Thanh toán ngay bằng QR Code
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
