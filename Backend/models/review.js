const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    rating: { type: Number, required: true },
    comment: { type: String, default: '' } // renamed field to avoid confusion with game schema //
});

module.exports = mongoose.model('Review', reviewSchema); // export the Review model //
