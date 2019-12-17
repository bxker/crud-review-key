const express = require('express');
const app = express();

//controller
const {getMovies, addMovies, editMovies, deleteMovies} = require('./controller');

app.use(express.json());

app.get('/api/movies', getMovies);
app.post('/api/movies', addMovies)
app.put('/api/movies/:id', editMovies)
app.delete('/api/movies/:id', deleteMovies)

app.listen(4242, () => console.log(`Listening on port 4242`));
