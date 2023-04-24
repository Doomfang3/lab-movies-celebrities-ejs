const router = require("express").Router();

const Movie = require("../models/Movie.model");

// all your routes here

router.get("/create", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/create", async (req, res) => {
  const newMovies = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  };
  await Movie.create(newMovies);
});

router.get("/", async (req, res) => {
  const allMovies = await Movie.find();
  console.log(allMovies);
  res.render("movies/movies", allMovies);
});

module.exports = router;
