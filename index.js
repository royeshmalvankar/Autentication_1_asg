const express = require("express")
const mongoose = require("mongoose")
const movieRoutes = require("./route/movie.route")
const userRoutes = require("./route/user.route")
require("dotenv").config()


const app = express()
const ltserver = 3001

app.use(express.json())
app.use("/movie",movieRoutes)
app.use("/user",userRoutes)

app.listen(ltserver,()=>{
    try { 
        connet_to_db()
        console.log("The server has started 3001")
    } catch (error) {
        console.log("The server has not started",error)
    }
})

const connet_to_db = async()=>{
try {
        await mongoose.connect("mongodb://127.0.0.1:27017/movies")
        console.log("connected to db")
} catch (error) {
    console.log("Failed to connect to db",error)
}
}