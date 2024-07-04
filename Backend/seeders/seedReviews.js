require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGO_URI);

async function seed() {
    try {
        const game = await db.Game.findOne({ title: 'Elden Ring' });
        if (!game) {
            throw new Error('Game not found');
        }

        const review = await db.Review.create({
            author: 'Cameron',
            content: 'Wow, what a relaxing non-stressful game!',
            rating: 5.0
        });

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
