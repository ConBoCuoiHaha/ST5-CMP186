
const db = require('./src/models/index');

async function check() {
    try {
        console.log("Checking DB connection...");
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");

        let products = await db.Product.findAll({
            include: [
                { model: db.Allcode, as: 'brandData' },
                { model: db.Allcode, as: 'categoryData' },
                { model: db.Allcode, as: 'statusData' },
            ],
            raw: true,
            nest: true
        });
        console.log("Total Products found:", products.length);
        if (products.length > 0) {
            console.log("First Product Sample:", JSON.stringify(products[0], null, 2));
        } else {
            console.log("No products found in DB.");
        }
    } catch (error) {
        console.error("Unable to connect to the database or query failed:", error);
    } finally {
        await db.sequelize.close(); // Close connection
    }
}

check();
