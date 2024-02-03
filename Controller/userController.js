const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')
exports.register=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        // check email already exist
        const existingUser = await users.findOne({ email })
        console.log(existingUser);
        if (existingUser) {
            res.status(406).json('User already exist!!! Please Login...')
        } else {
            const newUser = users({
                username,email,password,profile:'',github:'',linkedin:''
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch (err) {
        res.status(401).json(err)
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body
    try {
        // check email.password already exist
        const existingUser = await users.findOne({ email,password })
        console.log(existingUser);
        if (existingUser) {
            //generate token
            const token=jwt.sign({userId:existingUser._id},process.env.secret)
            res.status(200).json({existingUser,token})
        } else {
            res.status(406).json("invalid email/password")
        }
    }catch (err) {
        res.status(401).json(err)
        console.log(err);
    }   
}