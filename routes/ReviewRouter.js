const Router = require('express').Router()
const ReviewController = require('../controllers/ReviewController')
const { Review } = require('../db/schema')

Router.post('/review', ReviewController.CreateReview)
Router.post('/:review_id&&update', ReviewController.UpdateReview)
Router.delete('/:review_id&&delete', ReviewController.RemoveReview)

module.exports = Router