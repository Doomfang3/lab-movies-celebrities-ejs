// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const express = require('express')
const router = express.Router()
const Celebrity = require("../models/Celebrity.model")

// all your routes here
router.get('/', async (req, res)=>{
    const celebs = await Celebrity.find()
    //console.log("all celebs" , celebs)
    res.render('../views/Celebrity/celebrities.ejs', {celebs})
})

router.get('/create', (req, res)=>{
    res.render('../views/Celebrity/new-celebrity.ejs')
})

router.post('/create', async (req, res)=>{
    const newCeleb = await Celebrity.create(req.body)
    res.redirect('/celebrities')
})

module.exports = router;