const getMoviesAndReviews = require('express').Router();
const db = require("../db/connect")

getMoviesAndReviews.get('/', (req, res) => {
    db.query("Select movie_name, review from movies left join reviews on movies.id = reviews.movie_id", function(err, table) {
        if (err) throw err;
        res.json(table)
      });
})

module.exports = getMoviesAndReviews;