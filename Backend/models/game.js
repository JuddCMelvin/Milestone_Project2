const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    platform: { type: String, },
    status: { type: String, enum: ['Playing', 'Completed', 'Wishlist'] },
    review: { type: String },
    rating: { type: Number, min: 1, max: 5 }, // or maybe by number min: 0, max: 5/10? // 
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('game', GameSchema);