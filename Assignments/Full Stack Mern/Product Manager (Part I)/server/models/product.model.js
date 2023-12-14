const mongoose = require("mongoose")


const Product = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "the Title is required"]
    },
    Price: {
        type: Number,
        required: [true, "the number is required"]
    },
    Description: {
        type: String,
        required: [true, "Description  is required"]
    }
}, { timestamps: true })


const ProductSchema = mongoose.model("ProductSchema", Product)

module.exports = ProductSchema