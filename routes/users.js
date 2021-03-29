const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config({path: __dirname + '/.env'})

const User = require('../models/userModel')

router.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  console.log('Body: ', req.body)

  const user = User.findOne({where: {"username": username}}).then(
    (user) => {
       if (user === null) {
          res.status(404).json({
            message: "User not found"
          })
       }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(401).json({
              message: 'Authorization failed'
          });
        }

        if (result) {
          const token = jwt.sign({
            user_id: user.user_id,
            username: user.username,
            isAdmin: user.isAdmin
          }, process.env['JWT_KEY'],
          {
            expiresIn: "1h"
          }
          )

          res.status(200).json({
            message: 'Authorization successful!',
            token: token
          })
        } else {
          res.status(401).json({
            message: 'Authorization failed'
          })
        }
    })
    })
})

module.exports = router;