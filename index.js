const express = require('express')
const path = require('path')
//const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//app.all('*', ensureSecure)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const port = process.env.PORT || '3030'
app.set('port', port)

app.listen(port, () => {
    console.log('API running on port:', port)
})