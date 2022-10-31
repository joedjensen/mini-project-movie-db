const deleteMovie = require('express').Router();
const db = require('../db/connect')

  deleteMovie.delete('/:id',  (req, res) => {
    if (req.params.id) {
        deleteSelectedMovie(req.params.id)
        res.json("Successfully deleted movie")
    } else {
        res.json("No ID sent")
    } 
  }
  )

  function deleteSelectedMovie(id) {
    db.query("DELETE FROM movies WHERE id = ?", [id], function(err, res) {
          if (err) throw err;
          console.log(res);
        });
}

module.exports = deleteMovie;