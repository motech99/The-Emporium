const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bidder: {
        type: String,
        required: true
    },
    bidAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    }
}, {
    timestamps: true
});

const listingSchema = new Schema({
    itemName: { 
        type: String,
        trim: true,
        required: true 
    },
    image: {
        type: String
    },
    category: {
        type: String,
        enum: ["Trading Card", "Memorabilia", "Collectible", "Other"], 
        required: true 
    },
    description: {
        type: String
    },
    startingBid : {
        type: Number,
        min: 1,
        required: true
    },
    bidStartDate: {
        type: Date,
        default: Date.now()
    },
    bidEndDate: {
        type: Date,
        required: true
    },
    condition: {
        type: String,
        enum: ["New", "Good", "Used", "Worn"],
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bids: [bidSchema],
    // minSellPrice: {
    //     type: Number
    // }
}, {
    timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);