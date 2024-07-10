const router = require('express').Router();
const db = require('../models');
const Review = require('../models/review');

// INDEX - get all games //
router.get('/', async (req, res) => {
    try {
        const games = await db.Game.find();
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching games' });
    }
});

// CREATE - add a new game //
router.post('/', async (req, res) => {
    const { title, platform, status, review, rating } = req.body;
    if (!title || !status) {
        return res.status(400).json({ message: 'Title and status are required' });
    }

    try {
        // create new game //
        const newGame = new db.Game({ title, platform, status, review, rating });
        await newGame.save();

        // create and associate review with the new game //
        if (review && rating) {
            const newReview = new db.Review({ author: 'Anonymous', review, rating });
            await newReview.save();
            newGame.reviews.push(newReview._id);
            await newGame.save();
        }

        res.status(201).json(newGame);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating game' });
    }
});

// SHOW - get details of a specific game by ID //
router.get('/:id', async (req, res) => {
    try {
        const game = await db.Game.findById(req.params.id).populate('reviews');
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching game' });
    }
});

// REVIEW - add a review to a specific game //
router.post('/:id/review', async (req, res) => {
    const { author, review, rating } = req.body;

    // console.log('Received review data:', req.body);

    try {
        const game = await db.Game.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        const newReview = new db.Review({ author, review, rating });
        await newReview.save();

        game.reviews.push(newReview._id);
        await game.save();

        res.status(201).json(newReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating review' });
    }
});

// UPDATE - update details of a specific game by ID //
router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await db.Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGame) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.json(updatedGame);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating game' });
    }
});

// UPDATE REVIEW - update a review by review ID //
router.put('/:id/review/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const { author, review, rating } = req.body;

    try {
        const updatedReview = await db.Review.findByIdAndUpdate(reviewId, {
            author,
            review,
            rating
        }, { new: true });

        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json(updatedReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating review' });
    }
});

// DELETE - remove a game and its associated reviews from db //
router.delete('/:id', async (req, res) => {
    try {
        const game = await db.Game.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        // delete associated reviews //
        await Review.deleteMany({ _id: { $in: game.reviews } });

        // delete the game //
        await db.Game.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Game and associated reviews deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting game' });
    }
});


// DELETE REVIEW - remove a review from a specific game by review ID //
router.delete('/:id/review/:reviewId', async (req, res) => {
    const { id: gameId, reviewId } = req.params;

    try {
        const deletedReview = await Review.findByIdAndDelete(reviewId);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        await db.Game.findByIdAndUpdate(gameId, { $pull: { reviews: reviewId } });

        res.json({ message: 'Review deleted successfully' });
    } catch (err) {
        console.error('Error deleting review:', err);
        res.status(500).json({ message: 'Error deleting review' });
    }
});

module.exports = router;
