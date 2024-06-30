require('dotenv').config();
const express = require('express');
const app = express();


app.use('/games', require('./controllers/games')); // gets games model //
// app.use('/platforms', require('./controllers/platforms')); // gets platforms model //
app.get('/', (req, res) => {
    res.send('Hello Cameron!')
}); // home-default page  //

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
}); // 404 page // 

app.listen(process.env.PORT);
