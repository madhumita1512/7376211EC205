const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:String,
    price:Number,
    rating:Number,
discount:Number,
availability:String
})

const ProductModel = mongoose.model("employees", ProductSchema)
module.exports = ProductModel