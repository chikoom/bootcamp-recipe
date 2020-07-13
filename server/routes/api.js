const express = require('express')
const urllib = require('urllib')

const router = express.Router()
const APIURL = 'https://recipes-goodness.herokuapp.com/recipes/'

router.get('/sanity', (req, res) => {
  res.send('OK')
})

router.get('/recipes/:ingredient', (req, res) => {
  urllib.request(`${APIURL}${req.params.ingredient}`,
    function (err, data) {
    if (err) {
      console.log(`Error recieving recieps`)
      res.send(`Error recieving recieps`)
    } else {
      res.send(JSON.parse(data).results.map(recipe => ({
        title:recipe.title||'',
        thumbnail:recipe.thumbnail||'',
        href:recipe.href||'',
        ingredients:recipe.ingredients||[]
      })))
    }
  })
})

module.exports = router