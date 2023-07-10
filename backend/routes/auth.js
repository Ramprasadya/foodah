const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
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

   try {
    let user =  User.create({
      name: req.body.name,
      password: req.body.password,
      email : req.body.email,
      location :  req.body.email
    }).then(res.json({success : req.body}))
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
   
   if(!password === user.password ){
    return res.status(400).json({error : "Please try to login with correct credentials "});
   }


   res.json({success : true,})

 } catch (error) {
  
 }
})

module.exports = router ;