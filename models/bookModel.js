const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Book = db.define('Book', {
  'book_id': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  'book_name': {
    type: DataTypes.STRING,
    allowNull: true
  },
  'author': {
    type: DataTypes.STRING
  },
  'teacher': {
    type: DataTypes.STRING
  },
});

Book.sync();

module.exports = Book;