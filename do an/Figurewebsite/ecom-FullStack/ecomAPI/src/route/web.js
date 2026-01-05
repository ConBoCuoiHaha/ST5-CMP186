import express from "express";
import userController from "../controllers/userController";
import allcodeController from "../controllers/allcodeController";
import productController from "../controllers/productController";
import bannerController from "../controllers/bannerController";
import blogController from "../controllers/blogController";
import typeshipController from "../controllers/typeshipController";
import voucherController from "../controllers/voucherController";
import commentController from "../controllers/commentController";
import shopCartController from "../controllers/shopCartController";
import orderController from "../controllers/orderController";

import messageController from "../controllers/messageController";
import statisticController from "../controllers/statisticController";
import middlewareControllers from "../middlewares/jwtVerify";
import supplierController from "../controllers/supplierController";
import receiptController from "../controllers/receiptController";
import paymentController from "../controllers/paymentController";
import addressUserController from "../controllers/addressUserController";
let router = express.Router();


let initwebRoutes = (app) => {
  //================= REVIEW ==================
  router.post('/api/create-new-review', commentController.createNewReview);
  router.get('/api/get-all-review-by-product-id', commentController.getAllReviewByProductId);
  router.post('/api/reply-review', commentController.ReplyReview);
  router.delete('/api/delete-review', commentController.deleteReview);

  router.get("/", (req, res) => {
    return res.send("hello");
  });
  //=====================API USER==========================//
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put(
    "/api/update-user",
    middlewareControllers.verifyTokenUser,
    userController.handleUpdateUser
  );
  router.delete(
    "/api/delete-user",
    middlewareControllers.verifyTokenAdmin,
    userController.handleDeleteUser
  );
  router.post("/api/login", userController.handleLogin);
  router.post(
    "/api/changepassword",
    middlewareControllers.verifyTokenUser,
    userController.handleChangePassword
  );
  router.get(
    "/api/get-all-user",
    middlewareControllers.verifyTokenAdmin,
    userController.getAllUser
  );
  router.get("/api/get-detail-user-by-id", userController.getDetailUserById);
  router.post(
    "/api/send-verify-email",
    middlewareControllers.verifyTokenUser,
    userController.handleSendVerifyEmailUser
  );
  router.post(
    "/api/verify-email",
    middlewareControllers.verifyTokenUser,
    userController.handleVerifyEmailUser
  );
  router.post(
    "/api/send-forgotpassword-email",
    userController.handleSendEmailForgotPassword
  );
  router.post("/api/forgotpassword-email", userController.handleForgotPassword);
  router.get(
    "/api/check-phonenumber-email",
    userController.checkPhonenumberEmail
  );
  router.get(
    "/api/get-detail-user-by-email",
    userController.getDetailUserByEmail
  );
  //===================API ALLCODE========================//
  router.post(
    "/api/create-new-all-code",
    middlewareControllers.verifyTokenAdmin,
    allcodeController.handleCreateNewAllCode
  );
  router.put(
    "/api/update-all-code",
    middlewareControllers.verifyTokenAdmin,
    allcodeController.handleUpdateAllCode
  );
  router.get('/api/get-all-code', allcodeController.getAllCodeService);
  router.get('/api/get-list-allcode', allcodeController.getListAllCodeService);
  router.get('/api/get-detail-all-code', allcodeController.getDetailAllCodeById);
  router.delete('/api/delete-all-code', middlewareControllers.verifyTokenAdmin, allcodeController.handleDeleteAllCode);
  router.get('/api/get-all-category-blog', allcodeController.getAllCategoryBlog);

  //==================API BANNER============================//
  router.post('/api/create-new-banner', middlewareControllers.verifyTokenAdmin, bannerController.createNewBanner);
  router.get('/api/get-detail-banner', bannerController.getDetailBanner);
  router.get('/api/get-all-banner', bannerController.getAllBanner);
  router.put('/api/update-banner', middlewareControllers.verifyTokenAdmin, bannerController.updateBanner);
  router.delete('/api/delete-banner', middlewareControllers.verifyTokenAdmin, bannerController.deleteBanner);

  //==================API BLOG==============================//
  router.post('/api/create-new-blog', middlewareControllers.verifyTokenAdmin, blogController.createNewBlog);
  router.get('/api/get-detail-blog', blogController.getDetailBlogById);
  router.get('/api/get-all-blog', blogController.getAllBlog);
  router.put('/api/update-blog', middlewareControllers.verifyTokenAdmin, blogController.updateBlog);
  router.delete('/api/delete-blog', middlewareControllers.verifyTokenAdmin, blogController.deleteBlog);
  router.get('/api/get-feature-blog', blogController.getFeatureBlog);
  router.get('/api/get-new-blog', blogController.getNewBlog);

  //==================API TYPESHIP==========================//
  router.post('/api/create-new-typeship', middlewareControllers.verifyTokenAdmin, typeshipController.createNewTypeShip);
  router.get('/api/get-detail-typeship', typeshipController.getDetailTypeshipById);
  router.get('/api/get-all-typeship', typeshipController.getAllTypeship);
  router.put('/api/update-typeship', middlewareControllers.verifyTokenAdmin, typeshipController.updateTypeship);
  router.delete('/api/delete-typeship', middlewareControllers.verifyTokenAdmin, typeshipController.deleteTypeship);

  //==================API TYPE VOUCHER======================//
  router.post('/api/create-new-typevoucher', middlewareControllers.verifyTokenAdmin, voucherController.createNewTypeVoucher);
  router.get('/api/get-detail-typevoucher', voucherController.getDetailTypeVoucherById);
  router.get('/api/get-all-typevoucher', voucherController.getAllTypeVoucher);
  router.put('/api/update-typevoucher', middlewareControllers.verifyTokenAdmin, voucherController.updateTypeVoucher);
  router.delete('/api/delete-typevoucher', middlewareControllers.verifyTokenAdmin, voucherController.deleteTypeVoucher);
  router.get('/api/get-select-typevoucher', voucherController.getSelectTypeVoucher);

  //==================API VOUCHER===========================//
  router.post('/api/create-new-voucher', middlewareControllers.verifyTokenAdmin, voucherController.createNewVoucher);
  router.get('/api/get-detail-voucher', voucherController.getDetailVoucherById);
  router.get('/api/get-all-voucher', voucherController.getAllVoucher);
  router.put('/api/update-voucher', middlewareControllers.verifyTokenAdmin, voucherController.updateVoucher);
  router.delete('/api/delete-voucher', middlewareControllers.verifyTokenAdmin, voucherController.deleteVoucher);
  router.post('/api/save-user-voucher', middlewareControllers.verifyTokenUser, voucherController.saveUserVoucher);
  router.get('/api/get-all-voucher-by-userid', middlewareControllers.verifyTokenUser, voucherController.getAllVoucherByUserId);
  //==================API COMMENT============================//
  router.post(
    "/api/create-new-comment",
    middlewareControllers.verifyTokenUser,
    commentController.createNewComment
  );
  router.post(
    "/api/reply-comment",
    middlewareControllers.verifyTokenAdmin,
    commentController.ReplyComment
  );
  router.get(
    "/api/get-all-comment-by-blogId",
    commentController.getAllCommentByBlogId
  );
  router.delete(
    "/api/delete-comment",
    middlewareControllers.verifyTokenUser,
    commentController.deleteComment
  );

  //=================API ORDER==============================//
  router.post('/api/create-new-order', orderController.createNewOrder)
  router.get('/api/get-all-order', orderController.getAllOrders)
  router.get('/api/get-detail-order-by-id', orderController.getDetailOrderById)
  router.put('/api/update-status-order', orderController.updateStatusOrder)
  router.get('/api/get-all-order-by-user', orderController.getAllOrdersByUser)
  router.post('/api/payment-order', orderController.paymentOrder)
  router.post('/api/payment-order-success', orderController.paymentOrderSuccess)
  router.post('/api/confirm-order', orderController.confirmOrder)
  router.get('/api/get-all-order-by-shipper', orderController.getAllOrdersByShipper)
  router.post('/api/payment-vnpay', orderController.paymentOrderVnpay)
  router.post('/api/confirm-vnpay', orderController.confirmOrderVnpay)
  router.get('/api/vnpay-return', orderController.confirmOrderVnpay)
  router.post('/api/payment-vnpay-success', orderController.paymentOrderVnpaySuccess)
  router.post('/api/update-image-order', orderController.updateImageOrder)


  //=================API STATISTIC==============================//
  router.get(
    "/api/get-count-card-statistic",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getCountCardStatistic
  );
  router.get(
    "/api/get-count-status-order",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getCountStatusOrder
  );
  router.get(
    "/api/get-statistic-by-month",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getStatisticByMonth
  );
  router.get(
    "/api/get-statistic-by-day",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getStatisticByDay
  );
  router.get(
    "/api/get-statistic-overturn",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getStatisticOverturn
  );
  router.get(
    "/api/get-statistic-profit",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getStatisticProfit
  );
  router.get(
    "/api/get-statistic-stock-product",
    middlewareControllers.verifyTokenAdmin,
    statisticController.getStatisticStockProduct
  );
  //=================API SUPPLIER================================//
  router.post(
    "/api/create-new-supplier",
    middlewareControllers.verifyTokenAdmin,
    supplierController.createNewSupplier
  );
  router.get(
    "/api/get-detail-supplier",
    supplierController.getDetailSupplierById
  );
  router.get("/api/get-all-supplier", supplierController.getAllSupplier);
  router.put(
    "/api/update-supplier",
    middlewareControllers.verifyTokenAdmin,
    supplierController.updateSupplier
  );
  router.delete(
    "/api/delete-supplier",
    middlewareControllers.verifyTokenAdmin,
    supplierController.deleteSupplier
  );

  //=================API RECEIPT================================//
  router.post(
    "/api/create-new-receipt",
    middlewareControllers.verifyTokenAdmin,
    receiptController.createNewReceipt
  );
  router.get("/api/get-detail-receipt", receiptController.getDetailReceiptById);
  router.get("/api/get-all-receipt", receiptController.getAllReceipt);
  router.put(
    "/api/update-receipt",
    middlewareControllers.verifyTokenAdmin,
    receiptController.updateReceipt
  );
  router.delete(
    "/api/delete-receipt",
    middlewareControllers.verifyTokenAdmin,
    receiptController.deleteReceipt
  );
  router.post(
    "/api/create-new-detail-receipt",
    middlewareControllers.verifyTokenAdmin,
    receiptController.createNewReceiptDetail
  );

  //================= Hung PRODUCT================================//
  router.post(
    "/api/create-new-product",
    productController.handleCreateNewProduct
  );
  router.get(
    "/api/get-all-product-admin",
    productController.getAllProductAdmin
  );
  router.get("/api/get-all-product-user", productController.getAllProductUser);
  router.put("/api/update-product", productController.handleUpdateProduct);
  router.delete("/api/delete-product", productController.handleDeleteProduct);
  router.get(
    "/api/get-detail-product-by-id",
    productController.getDetailProductById
  );
  router.get("/api/get-all-product", productController.getAllProduct);
  router.post("/api/unactive-product", productController.UnactiveProduct);
  router.post("/api/active-product", productController.ActiveProduct);
  router.get(
    "/api/get-product-recommend",
    productController.getProductRecommend
  );
  router.get("/api/get-product-feature", productController.getProductFeature);
  router.get("/api/get-product-new", productController.getProductNew);
  router.get("/api/get-product-shopcart", productController.getProductShopCart);

  //======tai=====
  router.post('/api/create-new-product-detail-image', productController.createNewProductDetailImage);
  router.post('/api/create-new-product-detail-size', productController.createNewProductDetailSize);
  router.get('/api/get-product-detail-by-id', productController.getDetailProductDetailById); // API lấy chi tiết size/image
  router.put('/api/update-product-detail', productController.updateProductDetail);
  router.delete('/api/delete-product-detail-image', productController.deleteProductDetailImage);
  router.delete('/api/delete-product-detail-size', productController.deleteProductDetailSize);


  //=================API ADDRESS USER=========================//
  router.post('/api/create-new-address-user', middlewareControllers.verifyTokenUser, addressUserController.createNewAddressUser);
  router.get('/api/get-all-address-user', middlewareControllers.verifyTokenUser, addressUserController.getAllAddressUserByUserId);
  router.delete('/api/delete-address-user', middlewareControllers.verifyTokenUser, addressUserController.deleteAddressUser);
  router.put('/api/edit-address-user', middlewareControllers.verifyTokenUser, addressUserController.editAddressUser);
  router.get('/api/get-detail-address-user-by-id', middlewareControllers.verifyTokenUser, addressUserController.getDetailAddressUserById);

  //================= Tuan PayMent================================//
  router.post(
    "/api/create-payment-link",
    paymentController.handleCreatePayment
  );
  return app.use("/", router);
};

module.exports = initwebRoutes;
