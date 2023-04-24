const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

//Iteration #6: Adding New Movies
router.get("/create", async (req, res) => {
  const celebrities = await Celebrity.find();
  res.render("movies/new-movie", { celebrities });
});

router.post("/create", async (req, res) => {
  try {
    const newMovies = req.body;
    await Movie.create(newMovies);
  } catch (error) {
    console.log(error);
  }
});

//Iteration #7: Listing Our Movies
router.get("/", async (req, res) => {
  const allMovies = await Movie.find();
  res.render("movies/movies", { allMovies });
});

// Iteration #8: The Movie Details Page
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", { movie });
  } catch (error) {
    console.log(error);
  }
});

// Iteration #9: Deleting Movies
router.post("/:movieId/delete", async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.movieId);
    res.redirect("/movies");
  } catch (error) {
    console.log(error);
  }
});

//Iteration #10: Editing Movies
router.get("/:movieId/edit", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    const allCelebrity = await Celebrity.find();
    res.render("movies/edit-movie", { movie, allCelebrity });
  } catch (error) {
    console.log(error);
  }
});

router.post("/:movieId/edit", async (req, res) => {
  console.log(req.body);
  try {
    await Movie.findByIdAndUpdate(req.params.movieId, { ...req.body });
    res.redirect("/movies");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
