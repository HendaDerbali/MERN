const mongoose = require("mongoose")


const Player = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "the Name is required"],
        minLength: [2, "Name must be at least 2 characters"]

    },
    PreferedPosition: {
        type: String,
    },

    PlayerStatusGame1: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default : "Undecided"
    },

    PlayerStatusGame2: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default : "Undecided"
    },

    PlayerStatusGame3: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default : "Undecided"
    },

}, { timestamps: true })


const PlayerSchema = mongoose.model("PlayerSchema", Player)

module.exports = PlayerSchema