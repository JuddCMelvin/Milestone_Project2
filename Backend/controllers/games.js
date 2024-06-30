const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('GET /games stub')
}); // game stub for now //


module.exports = router;