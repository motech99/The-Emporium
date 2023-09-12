const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    bidder: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bid: {
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
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
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