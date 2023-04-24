const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model.js");
const Movie = require("../models/Movie.model.js");

router.get("/", async (req, res, next) => {
	try {
		const allMovies = await Movie.find();
		res.render("movies/movies", { allMovies });
	} catch (error) {
		console.log(error);
	}
});

router.get("/create", async (req, res, next) => {
	try {
		const allCelebrities = await Celebrity.find();
		res.render("movies/new-movie", { allCelebrities });
	} catch (error) {
		console.log(error);
	}
});

router.post("/create", async (req, res, next) => {
	try {
		const newMovie = await Movie.create(req.body);
		res.redirect("/movies");
	} catch (error) {
		console.log(error);
		res.redirect("/movies/create");
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findById(id).populate("cast");
		res.render("movies/movie-details", { movie });
	} catch (error) {
		console.log(error);
	}
});

router.post("/:id/delete", async (req, res, next) => {
	try {
		await Movie.findByIdAndDelete(req.params.id);
		res.redirect("/movies");
	} catch (error) {
		console.log(error);
	}
});

router.get("/:id/edit", async (req, res, next) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findById(id);
		const allCelebrities = await Celebrity.find();
		res.render("movies/edit-movie", { movie, allCelebrities });
	} catch (error) {
		console.log(error);
	}
});

router.post("/:id/edit", async (req, res, next) => {
	try {
		const { id } = req.params;
		// const { title, genre, plot, cast} = req.body;
		await Movie.findByIdAndUpdate(id, req.body);
		res.redirect(`/movies/${id}`);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
