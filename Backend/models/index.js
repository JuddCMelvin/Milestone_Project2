const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI); // connects to mongodb database

// exports the models //
module.exports.Game = require('./game'); // exports the game model // 