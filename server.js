const express = require('express')
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const app = express()

app.use(notFound)
app.use(errorMw)

const port = process.env.PORT || 8000
app.listen(port, () => console.log('Server running', port))