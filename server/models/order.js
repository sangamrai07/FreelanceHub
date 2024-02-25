const mongoose = require("mongoose")
const {Schema} = mongoose

const orderTable = new Schema({
    gigID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        default: 0,   
    },
    price: {
        type: Number,
        default: 0,
    },
    freelancerID: {
        type: String,
        required: true,
    },
    buyerID: {
        type: String,
        required: true,
    },
     isCompleted: {
        type: Boolean,
        default: false,
    },
    payment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Order", orderTable);