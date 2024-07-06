const mongoose = require('mongoose');

// review schema //
const ReviewSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.ObjectId, ref: 'Title', required: true }, // reference to the game being reviewed //
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true }, // reference to the user who wrote the review //
    review: { type: String, required: true }, // content of the review //
    rating: { type: Number, min: 1, max: 5, required: true }, // rating given by the user (1 to 5) //
    createdAt: { type: Date, default: Date.now } // date when the review was created //
});

module.exports = mongoose.model('Review', ReviewSchema); // export the Review model //

