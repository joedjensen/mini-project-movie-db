const getMovies = require('express').Router();
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

  getMovies.get('/', (req, res) => {
      db.query("Select * from movies", function(err, table) {
        if (err) throw err;
        res.json(table)
      });
  }
);

module.exports = getMovies