const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize(process.env['DB_URI'], {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = db;