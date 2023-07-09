const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post('/createuser',async(req,res)=>{


    let user =  User.create({
        name: 'ram',
        password: '123',
        email : 'ram@gmail.com',
        location :  'noida'
      })
      res.json(user)

})

module.exports = router ;