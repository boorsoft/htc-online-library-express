const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env['DB_NAME'], process.env['DB_USER'], process.env['DB_PASSWORD'], {
  host: 'ec2-3-95-85-91.compute-1.amazonaws.com',
  dialect: 'postgres'
});

module.exports = db;