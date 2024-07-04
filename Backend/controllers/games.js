const router = require('express').Router();
const db = require('../models');


// GET all user games // 
router.get('/', async (req, res) => {
    try {
        const games = await db.Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new game with review and rating // 
router.post('/', async (req, res) => {
    try {
        const { title, platform, status, review, rating, backgroundImage } = req.body;
        const newGame = new db.Game({ title, platform, status, review, rating, backgroundImage });
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET a single game by ID //
router.get('/:id', async (req, res) => {
    try {
        const game = await db.Game.findById(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });
        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT to update a game by ID, including review and rating //
router.put('/:id', async (req, res) => {
    try {
        const { title, platform, status, review, rating, backgroundImage } = req.body;
        const updatedGame = await db.Game.findByIdAndUpdate(req.params.id, { title, platform, status, review, rating, backgroundImage }, { new: true });
        if (!updatedGame) return res.status(404).json({ error: 'Game not found' });
        res.json(updatedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a game by ID //
router.delete('/:id', async (req, res) => {
    try {
        const deletedGame = await db.Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) return res.status(404).json({ error: 'Game not found' });
        res.json(deletedGame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a review and rating for an existing game //
router.post('/:id/review', async (req, res) => {
    try {
        const game = await db.Game.findById(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });

        game.review = req.body.review;
        game.rating = req.body.rating;
        const updatedGame = await game.save();
        res.json(updatedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a review for a game and reset rating //
router.delete('/:id/review', async (req, res) => {
    try {
        const game = await db.Game.findById(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });

        game.review = '';
        game.rating = undefined;
        const updatedGame = await game.save();
        res.json(updatedGame);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;