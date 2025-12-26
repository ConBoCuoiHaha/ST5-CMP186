// src/controllers/paymentController.js
import PayOS from "@payos/node";

// Khởi tạo PayOS với các key (Lấy tại https://payos.vn/)

/////TUANPAYMENT.js////////
let handleCreatePayment = async (req, res) => {
  try {
    // Lấy thông tin đơn hàng từ Client gửi lên
    // Ví dụ: { amount: 10000, description: "Thanh toan don hang" }
    const { amount, description } = req.body;

    // Tạo mã đơn hàng ngẫu nhiên (bắt buộc phải là số)
    const orderCode = Number(String(Date.now()).slice(-6));

    const body = {
      orderCode: orderCode,
      amount: amount, // Số tiền
      description: description || "Thanh toan don hang",
      cancelUrl: "http://localhost:3000/cancel", // Link quay về khi hủy
      returnUrl: "http://localhost:3000/success", // Link quay về khi thành công
    };

    const paymentLinkResponse = await payos.createPaymentLink(body);

    // Trả về link thanh toán cho Client
    return res.status(200).json({
      errCode: 0,
      message: "Ok",
      checkoutUrl: paymentLinkResponse.checkoutUrl,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: -1,
      message: "Error creating payment link",
    });
  }
};

module.exports = {
  handleCreatePayment: handleCreatePayment,
};
