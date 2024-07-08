const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    author: { type: String, required: true }, // reference to the user who wrote the review //
    review: { type: String }, // content of the review //
    rating: { type: Number, min: 1, max: 5, required: true }, // rating given by the user (1 to 5) //
    createdAt: { type: Date, default: Date.now } // date when the review was created //
});

module.exports = mongoose.model('Review', ReviewSchema); // export the Review model //