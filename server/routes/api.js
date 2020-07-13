const express = require('express')
const urllib = require('urllib')

const router = express.Router()

router.get('/sanity', (req, res) => {
  res.send('OK')
})

module.exports = router