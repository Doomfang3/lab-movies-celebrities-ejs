const Celebrity = require('../models/Celebrity.model')
const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        const celebList = await Celebrity.find();
        res.render('celebrities/celebrities', { celebList });
    } catch (err) {
        console.log(err)
    }
})

router.get('/create', (req, res) => {
    res.render('celebrities/newcelebrity')
})

router.post('/create', async (req, res) => {
    const celebdata = Celebrity.create(req.body)
    console.log(req.body)
    res.redirect('/celebrities')
})

module.exports = router
