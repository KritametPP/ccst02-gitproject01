require('dontenv').config()
const express = require('express')
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const authRoute = require('./routes/auth-route')
const app = express()

app.use(notFound)
app.use(errorMw)
app.use('/auth', authRoute)

const port = process.env.PORT || 8888
app.listen(port, () => console.log('Server running', port))