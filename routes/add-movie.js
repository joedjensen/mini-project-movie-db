const addMovie = require('express').Router();
const mysql = require("mysql2")

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'movies_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

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