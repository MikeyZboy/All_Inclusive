const Router = require('express').Router()
const ReviewController = require('../controllers/ReviewController')

Router.get('/:review_id', ReviewController.GetReview)
// not working "cannot GET" err
Router.post('/create', ReviewController.CreateReview)
//create works
Router.post('/update/:review_id', ReviewController.UpdateReview)
// not working
Router.delete('/delete/:review_id', ReviewController.RemoveReview)
// works
module.exports = Router