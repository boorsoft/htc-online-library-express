const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Book = db.define('Book', {
  'book_id': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  'title': {
    type: DataTypes.STRING
  },
  'author': {
    type: DataTypes.STRING
  },
  'teacher': {
    type: DataTypes.STRING
  },
  'subject': {
    type: DataTypes.STRING
  },
  'filename': {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
);

Book.sync({});

module.exports = Book;
