require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGO_URI);

async function seed() {
    try {
        // finds the game to associate the review with // 
        const game = await db.Game.findOne({ title: 'Elden Ring' });
        if (!game) {
            throw new Error('Game not found');
        }

        // creates the review for the game // 
        const review = await db.Review.create({
            author: 'Cameron',
            review: 'Wow, what a relaxing non-stressful game!',
            rating: 5.0
        });

        // add the review's ObjectId to the game's reviews array //
        game.reviews.push(review._id);
        await game.save();

        console.log('Review seeded successfully!');
        process.exit();
    } catch (err) {
        console.error('Failed to seed review:', err);
        process.exit(1);
    }
}

seed();
