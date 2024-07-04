const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    rating: { type: Number, required: true, min: 1, max: 5 },
});

module.exports = mongoose.model('Review', reviewSchema); // export the Review model //
