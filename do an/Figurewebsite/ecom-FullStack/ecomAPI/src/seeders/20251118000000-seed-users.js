'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', salt),
        firstName: 'Admin',
        lastName: 'User',
        address: '123 Admin Street',
        genderId: 'G1', // Assuming G1 is a valid gender code
        roleId: 'R1',
        phonenumber: '0123456789',
        statusId: 'S1',
        isActiveEmail: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'customer@gmail.com',
        password: bcrypt.hashSync('123456', salt),
        firstName: 'Customer',
        lastName: 'User',
        address: '456 Customer Avenue',
        genderId: 'G2', // Assuming G2 is a valid gender code
        roleId: 'R2',
        phonenumber: '0987654321',
        statusId: 'S1',
        isActiveEmail: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
