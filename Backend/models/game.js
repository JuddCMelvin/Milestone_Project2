const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: { type: String, required: true }, // title of the game //
    platform: { type: String }, // platform(s) the game is available on //
    status: { type: String, required: true, enum: ['Playing', 'Completed', 'Wishlist'] }, // current status of the game //
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // array of review references //
    rating: { type: Number, min: 1, max: 5 }, // user's rating of the game (1 to 5) //
    image: { type: String }, // URL of the game's image //
    createdAt: { type: Date, default: Date.now } // date when the game entry was created //
});

module.exports = mongoose.model('Game', GameSchema); // export the Game model //