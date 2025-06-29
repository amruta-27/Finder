const express=require("express");
const User=require('../models/User');
const {registerUser, loginUser, Profile} = require("../controllers/authContro");
const router=express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', Profile);

module.exports=router;