const express = require('express');

const addMovieRouter  = require('./add-movie');
const getMoviesRouter = require('./movies')

const app = express();

app.use('/add-movie', addMovieRouter);
app.use('/movies', getMoviesRouter)
module.exports = app;
