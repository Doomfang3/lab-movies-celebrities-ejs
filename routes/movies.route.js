const router = require('express').Router()


// all your routes here
router.get('/create', (req, res) => {
    res.render("movies/new-movie")
})


router.post("/create", async (req, res) => {

})


module.exports = router