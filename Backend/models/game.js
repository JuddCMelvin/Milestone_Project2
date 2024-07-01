const mongoose = require('mongoose');

// game schema //
const GameSchema = new mongoose.Schema({
    title: { type: String, required: true }, // title of the game //
    backgroundImage: { type: String }, // background image URL from RAWG API //
    platform: { type: String }, // platform(s) the game is available on //
    status: { type: String, required: true, enum: ['Playing', 'Completed', 'Wishlist'] }, // current status of the game //
    review: { type: String }, // user's review of the game //
    rating: { type: Number, min: 1, max: 5 }, // user's rating of the game (1 to 5) //
    createdAt: { type: Date, default: Date.now }, // date when the game entry was created //
});

module.exports = mongoose.model('Game', GameSchema); // export the Game model //
