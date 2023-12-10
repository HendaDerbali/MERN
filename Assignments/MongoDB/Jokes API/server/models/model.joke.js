const mongoose = require("mongoose")


const Joke = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "the setup is required"],
        minlength: [10, "First name must be at least 6 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchlineis required"],
        minlength: [3, "punchline must be at least 6 characters long"]

    }

}, { timestamps: true })


const JokeSchema = mongoose.model("JokeSchema", Joke)

module.exports = JokeSchema