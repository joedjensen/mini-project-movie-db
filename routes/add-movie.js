const addMovie = require('express').Router();
const db = require('../db/connect')

addMovie.post('/', (req, res) => {
    console.log(req.body);
  
    const { movie_name } = req.body;
    console.log(movie_name)
  
    if (req.body) {
      const newMovie = {
        movie_name
      };
      insertToDb(newMovie)
      res.json("Movie added Successfully")
  }
}
);

function insertToDb(movie) {
    db.query("INSERT INTO movies (movie_name) VALUES (?)", [movie.movie_name], function(err, res) {
          if (err) throw err;
          console.log(res);
        });
}

module.exports = addMovie;