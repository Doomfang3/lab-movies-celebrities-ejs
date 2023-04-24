const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model.js");

router.get("/", async (req, res, next) => {
	try {
		const allCelebrities = await Celebrity.find();
		res.render("celebrities/celebrities", { allCelebrities });
	} catch (error) {
		console.log(error);
	}
});

router.get("/create", (req, res, next) => {
	res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
	try {
		const newCelebrity = await Celebrity.create(req.body);
		res.redirect("/celebrities");
	} catch (error) {
		console.log(error);
		res.render("celebrities/new-celebrity");
	}
});

module.exports = router;
