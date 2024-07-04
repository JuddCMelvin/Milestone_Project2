require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGO_URI);

const games = [
    {
        title: 'Elden Ring',
        pic: '...',
        platform: 'PC',
        status: 'Playing'
    },
    {
        title: 'God of War: Ragnarok',
        pic: '...',
        platform: 'Playstation 5',
        status: 'Playing'
    }
];

db.Game.insertMany(games)
    .then(() => {
        console.log('Games seeded successfully!');
        process.exit();
    })
    .catch(err => {
        console.log('Failed to seed games:', err);
        process.exit(1);
    });
