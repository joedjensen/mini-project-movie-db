const getMovies = require('express').Router();
const db = require("../db/connect")

  getMovies.get('/', (req, res) => {
      db.query("Select * from movies", function(err, table) {
        if (err) throw err;
        res.json(table)
      });
  }
);

module.exports = getMovies