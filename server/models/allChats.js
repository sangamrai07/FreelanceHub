const mongoose = require("mongoose")
const {Schema} = mongoose

const allChatTable = new Schema({
    allChatsID: {
        type: String,
        required: true,
        unique: true,
    },
    sellerId: {
        type: String,
        required: true,
    }, 
    buyerId: {
        type: String,
        required: true,   
    },
    readBySeller: {
        type: Boolean,
        required: true,
    },
    readByBuyer: {
        type: Boolean,
        required: true,
    },
     recentMessage: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("AllChat", allChatTable);