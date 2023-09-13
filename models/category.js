const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { 
    type: String,
    enum: ["Trading Card", "Memorabilia", "Collectible", "Other"], 
    required: true 
},
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
