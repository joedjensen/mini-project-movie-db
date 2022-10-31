const express = require('express');

const addMovieRouter  = require('./add-movie');

const app = express();

app.use('/add-movie', addMovieRouter);

module.exports = app;
