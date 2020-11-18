const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const TripRouter = require('./TripRouter')


Router.use('/users', UserRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/trips', TripRouter)


module.exports = Router