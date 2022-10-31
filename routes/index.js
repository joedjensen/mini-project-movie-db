const express = require('express');

const addMovieRouter  = require('./add-movie');
const getMoviesRouter = require('./movies')
const deleteMoviesRouter = require('./movie')
const getMoviesAndReviewsRouter = require('./movie-reviews')
const postReviewRouter = require('./review')

const app = express();

app.use('/add-movie', addMovieRouter);
app.use('/movies', getMoviesRouter)
app.use('/movie', deleteMoviesRouter)
app.use('/movie-reviews',getMoviesAndReviewsRouter)
app.use('/review', postReviewRouter)


module.exports = app;
