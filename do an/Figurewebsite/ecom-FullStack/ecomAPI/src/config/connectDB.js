const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ecom', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        connectTimeout: 30000
    }
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;