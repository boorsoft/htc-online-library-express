const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('User', {
  'user_id': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  'username': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'password': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'is_admin': {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'false'
  }
}, {
  timestamps: false
})

User.sync({})

module.exports = User