const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')





Router.use('/users', UserRouter)
Router.use('/reviews', ReviewRouter)




module.exports = Router