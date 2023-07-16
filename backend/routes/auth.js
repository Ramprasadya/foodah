const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const JSON_TOKEN = "iaminnoida"
// 
//Route 1 ... creating a user using post method  : localhost:500/api/createuser

router.post('/createuser',[
  body('name', 'Enter A valid name').isLength({ min: 3 }),
   body('email','Enter a valid Email').isEmail(),
  body('password', 'password must be atleast 5 character').isLength({ min: 5 }),
],async(req,res)=>{

  // Handeling Error 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() });
  }

  // Password Hashing
  const salt  = await bcrypt.genSalt(10)
  const secPassword = await bcrypt.hash(req.body.password,salt)
  //  Creating a new user
   try {
      let user =await  User.create({
      name: req.body.name,
      password: secPassword,
      email : req.body.email,
      location :  req.body.email
    })

    // Passing the user id 
    const data ={
      user:{
        id : user.id
      }
    }
   
    // sending the jwt in response 

    const authToken = jwt.sign(data,JSON_TOKEN);


    res.json({success : authToken})


   } catch (error) {
    console.log(error.massage)
    res.json({success : false})
   }

})

// Route 2 .   Login user using post method -- localhost:500/api/loginuser 

router.post("/loginuser",[
  body('email','Enter a valid Email').isEmail(),
  body('password', 'password can not blank').exists()
],async(req,res)=>{
  // Handeling Error 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email ,password} = req.body
 try {
   let user = await User.findOne({email})
   if(!user){
    return res.status(400).json({error : "Please try to login with correct credentials "});
   }
   
   const passwordCompare = bcrypt.compare(password, user.password)

   if(!passwordCompare ){
    return res.status(400).json({error : "Please try to login with correct credentials "});
   }

   // Passing the user id 
   const data ={
    user:{
      id : user.id
    }
  }
//  sign in with jwt
  const authToken = await jwt.sign(data,JSON_TOKEN)

   res.json({success : authToken,})

 } catch (error) {
  console.log(error.massage)
  res.status(500).send("Internal server error")
 }
})

module.exports = router ;
