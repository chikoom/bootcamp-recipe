const express = require('express')
const path = require('path')
const router = require('./server/routes/api')

const app = express()

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.use('/', router)

const PORT = 8080
app.listen(PORT, function(){
  console.log(`Server is ON! listens happily on PORT ${PORT}`)
})