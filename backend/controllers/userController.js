const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({error: "Please fill in all fields"})
    }

    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({error: "User already exists"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({name, email, password: hashedPassword})
    if(user){
        return res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        return res.status(400).json({error: "Invalid user"})
    }
})

const loginUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        return res.status(400).json({error: "Invalid credentials"})
    }
})

const getMe = asyncHandler(async (req,res)=>{
    
})

module.exports ={
    registerUser,
    loginUser,
    getMe
}