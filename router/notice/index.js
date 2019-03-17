const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    console.log('[[[[[ NOTICE REGISTER]]]]]')
    console.log('===== req.body ====', req.body);
  })
  
  module.exports = router