const router = require("express").Router();
const Celebrity= require('../models/Celebrity.model')

/* GET home page */
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post('/create', async (req, res) =>{
  try {
    const{name, occupation, catchPhrase} = req.body
    const newCelebrity = await Celebrity.create({name, occupation, catchPhrase})
  } catch (error) {
    console.log(error);
    res.render('celebrities/new-celebrity')
  }
})



module.exports = router;