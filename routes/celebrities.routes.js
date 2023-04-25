const Celebrity = require('../models/Celebrity.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get('/', async (req, res) => {
    try {
        const listCelebs = await Celebrity.find()
        res.render('celebrities/celebrities', {listCelebs})
        console.log(listCelebs._id)
    }catch (error) {
        console.log(error)
    } 
})


router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res) => {
    try {
        const newCelebrity = await Celebrity.create(req.body)
        //console.log(newCelebrity)
        res.redirect(`/celebs`)
    } catch(error) {
        res.redirect('/celebs/create')
        console.log(error)
    }
})

module.exports = router