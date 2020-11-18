const Router = require('express').Router()
const ReviewController = require('../controllers/ReviewController')

Router.get('/:review_id', ReviewController.GetReview)
Router.post('/create', ReviewController.CreateReview)
Router.post('/update/:review_id', ReviewController.UpdateReview)
Router.delete('/delete/:review_id', ReviewController.RemoveReview)

module.exports = Router