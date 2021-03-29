const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({path: __dirname + '/.env'})

checkAuth = (req, res, next) => {
  try {
    const verified = jwt.verify(req.body.token, process.env['JWT_KEY'])
    next()
  } catch(err) {
    return res.status(401).json({
      message: 'Authorization failed'
    })
  }
 
}

module.exports = checkAuth