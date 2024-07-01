const router = require('express').Router();
const axios = require('axios');
const db = require('../models');

// RAWG API endpoint base URL
const RAWG_API_URL = 'https://api.rawg.io/api';

router.get('/', async (req, res) => {
    try {
        const games = await db.Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}); // GET all games // 

router.post('/', (req, res) => {
    res.send('POST /games stub')
}); // POST new game // 

router.get('/:id', (req, res) => {
    res.send('GET /games/:id stub')
}); // GET single game by id // 

router.put('/:id', (req, res) => {
    res.send('PUT /games/:id stub')
}); // PUT to update a game by id include review and rating maybe? // 

router.delete('/:id', (req, res) => {
    res.send('DELETE /games/:id stub')
}); // DELETE game by id // 

router.post('/:id/review', (req, res) => {
    res.send('POST /games/:id/review stub')
}); // POST review and rating for existing game // 

router.delete('/:id/review/', (req, res) => {
    res.send('DELETE /games/:id/review stub')
}); // DELETE a review for a game //

// router.get('/new', (req, res) => {
//     res.send('GET /new - Stub for new game form');
// }); 

// router.get('/:id/edit', async (req, res) => {
//     res.send('GET /:id/edit stub')
// });

module.exports = router;