const express = require("express")
const User = require("../model/user.schema")
const jwt = require("jsonwebtoken")
const userRoutes = express.Router()



userRoutes.post("/register",async(req,res )=> {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201)
        res.json({"message":"user added successfully","data":user})
        
    } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`)
    }
})

userRoutes.post("/login",async(req,res )=> {
    try {
        const {email,password} = req.body
        const user= await User.findOne({email})
        if(user){
            if(user.password == password){
                const token = jwt.sign({id:user._id},"masai",{expiresIn:"1h"})
                res.status(200)
                res.json({"message":"login success",token})
            }else{
                res.status(400)
                res.json({"message":"login failed"})
            }
        }
        else{
        res.send({"message":"user not found please register"})
        }
        } catch (error) {
        res.send(`The data is not valid "${error}" or some error occured`)
    }
})


module.exports = userRoutes