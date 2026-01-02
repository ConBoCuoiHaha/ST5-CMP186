'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // 1. Allcodes
        await queryInterface.bulkInsert('Allcodes', [
            { type: 'ROLE', value: 'Admin', code: 'R1', createdAt: new Date(), updatedAt: new Date() },
            { type: 'ROLE', value: 'User', code: 'R2', createdAt: new Date(), updatedAt: new Date() },
            { type: 'ROLE', value: 'Supplier', code: 'R3', createdAt: new Date(), updatedAt: new Date() },
            { type: 'ROLE', value: 'Shipper', code: 'R4', createdAt: new Date(), updatedAt: new Date() },
            { type: 'STATUS', value: 'Active', code: 'S1', createdAt: new Date(), updatedAt: new Date() },
            { type: 'STATUS', value: 'Inactive', code: 'S2', createdAt: new Date(), updatedAt: new Date() },
            { type: 'GENDER', value: 'Male', code: 'M', createdAt: new Date(), updatedAt: new Date() },
            { type: 'GENDER', value: 'Female', code: 'F', createdAt: new Date(), updatedAt: new Date() },
            { type: 'GENDER', value: 'Other', code: 'O', createdAt: new Date(), updatedAt: new Date() },
            { type: 'CATEGORY', value: 'Figure', code: 'C1', createdAt: new Date(), updatedAt: new Date() },
            { type: 'CATEGORY', value: 'Electronics', code: 'C2', createdAt: new Date(), updatedAt: new Date() },
            { type: 'BRAND', value: 'Bandai', code: 'B1', createdAt: new Date(), updatedAt: new Date() },
            { type: 'BRAND', value: 'Samsung', code: 'B2', createdAt: new Date(), updatedAt: new Date() },
        ]);

        // 2. Users
        await queryInterface.bulkInsert('Users', [
            { email: 'admin@gmail.com', password: hashPassword('1234'), firstName: 'Super', lastName: 'Admin', address: 'Hanoi', genderId: 'M', roleId: 'R1', phonenumber: '0999999999', statusId: 'S1', isActiveEmail: true, createdAt: new Date(), updatedAt: new Date() },
            { email: 'admin@admin', password: hashPassword('1234'), firstName: 'Requested', lastName: 'Admin', address: 'Hanoi', genderId: 'M', roleId: 'R1', phonenumber: '0888888888', statusId: 'S1', isActiveEmail: true, createdAt: new Date(), updatedAt: new Date() },
            { email: 'customer@gmail.com', password: hashPassword('1234'), firstName: 'Demo', lastName: 'Customer', address: 'Da Nang', genderId: 'F', roleId: 'R2', phonenumber: '0123456789', statusId: 'S1', isActiveEmail: true, createdAt: new Date(), updatedAt: new Date() }
        ]);

        // 3. Products
        await queryInterface.bulkInsert('Products', [
            { id: 1, name: 'Figure Son Goku', contentHTML: '<p>Goku</p>', contentMarkdown: 'Goku', statusId: 'S1', categoryId: 'C1', view: 100, madeby: 'Japan', material: 'Plastic', brandId: 'B1', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, name: 'Galaxy S24 Ultra', contentHTML: '<p>Samsung</p>', contentMarkdown: 'Samsung', statusId: 'S1', categoryId: 'C2', view: 50, madeby: 'Korea', material: 'Metal', brandId: 'B2', createdAt: new Date(), updatedAt: new Date() }
        ]);

        // 4. ProductDetails
        await queryInterface.bulkInsert('ProductDetails', [
            { id: 1, productId: 1, nameDetail: 'Full Box', originalPrice: 1000000, discountPrice: 900000, description: 'New', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, productId: 2, nameDetail: 'Titanium', originalPrice: 30000000, discountPrice: 28000000, description: 'New', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        // Delete in reverse order to avoid FK constraints
        await queryInterface.bulkDelete('ProductDetails', null, {});
        await queryInterface.bulkDelete('Products', null, {});
        await queryInterface.bulkDelete('Users', null, {});
        await queryInterface.bulkDelete('Allcodes', null, {});
    }
};
