const { Trip, Review } = require('../db/schema')

const GetReview = async (req, res) => {
    const review = await Review.findById(req.params.review_id).select('comment')
    res.json(review)
}

const CreateReview = async (req, res) => {
    const review = new Review({...req.body, user_id: req.params.user_id })
    review.save()
    await Trip.update(
        { _id: req.params.trip_id},
        {
            $push: {
                reviews: review
            }
        }
    )
    res.send(review)
}

const UpdateReview = async (req, res) => {
    await Review.findByIdAndUpdate(
        req.params.review_id,
        {...req.body},
        {upsert: true, new: true},
        (err, d) => (err ? err : res.send(d))
    )
}

const RemoveReview = async (req, res) => {
    await Review.deleteOne({_id: req.params.review_id})
    const updatedTrip = await Trip.findByIdAndUpdate(
        req.params.trip_id,
        {$pull: { reviews: {_id: req.params.review_id}}},
        {upsert: true, new: true}
    )
    res.send(updatedTrip)
    console.log(`Review Removed`)
}

module.exports = {
    CreateReview,
    UpdateReview,
    RemoveReview,
    GetReview
}