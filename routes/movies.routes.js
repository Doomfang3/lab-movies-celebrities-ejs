// starter code in both routes/celebrities.routes.js and routes/movies.routes.js


const express = require('express')
const router = express.Router()
const Movie = require("../models/Movie.model")
// all your routes here

router.get('/', async (req, res)=>{
    const movies = await Movie.find()
    //console.log("all celebs" , celebs)
    res.render('../views/Movies/movies.ejs', {movies})
})

router.get('/create', (req, res)=>{
    res.render('../views/Movies/new-movie.ejs')
})

router.post('/create', async (req, res)=>{
    const newMovie = await Movie.create(req.body)
    res.redirect('/movies')
})

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    const movieDetails = await Movie.findById(id)
    //console.log(movieDetails)
    const castInfo = await movieDetails.populate('cast')
    console.log(castInfo)

    res.render('../views/Movies/movie-details.ejs', {castInfo})
})

router.post('/:id/delete', async (req, res)=>{
    const {id} = req.params
    await Movie.findByIdAndDelete(id)
    res.redirect('/movies')
})

router.get('/:id/edit', async (req, res)=>{
    const {id} = req.params
    const movieEdit = await Movie.findById(id)
    res.render('../views/Movies/edit-movie.ejs', {movieEdit})
})

router.post('/:id/edit', async (req, res)=>{
    const {id} = req.params
    await Movie.findByIdAndUpdate(id, req.body)
    res.redirect('/movies')
})


module.exports = router;