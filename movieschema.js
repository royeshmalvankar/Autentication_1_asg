const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    name: {type:String, required:true},
    year: {type:Number, required:true , min:1900, max:2024},
    genre: [String],
    actors: [String],
    plot: String
})


const Movie = mongoose.model("Movie", moviesSchema)

module.exports = Movie