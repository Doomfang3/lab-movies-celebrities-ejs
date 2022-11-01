const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model')

router.get('/', async (req, res) => {
    try {
        const moviesList = await Movie.find();
        res.render('movies/movies', { moviesList });
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render('movies/movie-details', { movie });
    } catch (err) {
        console.log(err)
    }
})

router.get('/create', async (req, res) => {
    try {
        const celebList = await Celebrity.find();
    res.render('movies/new-movie', { celebList })
    } catch( err) {
        console.log(err);
    }
})

router.post('/create', async (req, res) => {
    const movieData = Movie.create(req.body)
    console.log(req.body)
    res.redirect('/movies')
})

module.exports = router
