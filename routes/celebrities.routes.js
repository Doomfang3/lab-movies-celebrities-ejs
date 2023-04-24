const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", async (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  try {
    const newCelebrity = await Celebrity.create(req.body);
    console.log(newCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity");
  }
});

// teration #4: Listing Our Celebrities
router.get("/", async (req, res, next) => {
  try {
    const allCelebrity = await Celebrity.find();

    res.render("celebrities/celebrities", { allCelebrity });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
