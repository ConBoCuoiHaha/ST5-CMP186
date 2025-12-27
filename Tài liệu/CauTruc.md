ecom-FullStack/
├── ecomAPI/src/
│   ├── controllers/
│   │   ├── productController.js          (Product Backend)
│   │   ├── orderController.js            (Order Backend)
│   │   └── addressUserController.js      (Order Backend)
│   └── services/
│       ├── productService.js             (Product Backend)
│       ├── orderService.js               (Order Backend)
│       └── addressUserService.js         (Order Backend)
│
└── eCommerce_Reactjs/src/
    ├── container/
    │   ├── DetailProduct/
    │   │   └── DetailProductPage.js      (Product Frontend - User View)
    │   ├── Order/
    │   │   ├── OrderHomePage.js          (Order Frontend - Checkout)
    │   │   ├── VnpayPaymentPage.js       (Order Frontend - Payment)
    │   │   └── VnpayPaymentSuccess.js    (Order Frontend - Payment)
    │   ├── ShopCart/
    │   │   └── AdressUserModal.js        (Order Frontend - Address)
    │   ├── System/
    │   │   ├── Order/
    │   │   │   └── ManageOrder.js        (Order Frontend - Admin)
    │   │   └── Product/
    │   │       ├── ManageProduct.js      (Product Frontend - Admin)
    │   │       ├── ProductDetail/
    │   │       │   └── ManageProductDetail.js
    │   │       └── ProductImage/
    │   │           └── ManageProductImage.js
    │   └── User/
    │       └── OrderUser.js              (Order Frontend - User History)
    └── services/
        └── userService.js                (SHARED API CALLS - Chứa cả Product & Order)