require('dontenv').config()
const express = require('express')
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const todoRoute = require('./routes/todo-route')
const app = express()

app.use('/todo', todoRoute)
app.use(notFound)
app.use(errorMw)

const port = process.env.PORT || 9999
app.listen(port, () => console.log('Server running', port))