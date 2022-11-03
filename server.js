// server.js is the backend
// // This is us creating our own server in lines 3-6
// //require the modules; create the Express app; and mount the morganlogging middleware and express.json()
const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')
require('dotenv').config()
require('./config/database')

const app = express()
const PORT = process.env.PORT || 3001;


// middleware
app.use(morgan('dev'))
// //middleware that processes JSON data sent in the AJAX request and adds it to the req.body
app.use(express.json())
// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// // API Routes - Requesting data from the API
app.get('/api/orders', (req, res) => {

})


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})









