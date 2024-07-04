require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Game = require('./game');
module.exports.Review = require('./review');
