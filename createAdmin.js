// Скрипт для создания пользователя (админа)
// Запуск через консоль - nodejs createAdmin.js [логин] [пароль]
const User = require('./models/userModel')
const bcrypt = require('bcrypt');

console.log(process.argv)
var username = process.argv[2]
var plainPassword = process.argv[3]

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) {
    console.log(err)
  }

  const admin = User.create({
    username: username,
    password: hash,
    isAdmin: 'true'
  })
})