const { DataTypes } = require('sequelize');
const db = require('../db');

const Book = db.define('Book', {
  'book_id': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  'title': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'author': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'teacher': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'subject': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'filename': {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  }
);

Book.sync({});

module.exports = Book;
