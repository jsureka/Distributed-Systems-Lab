const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    storyUUID:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model("Story", storySchema);