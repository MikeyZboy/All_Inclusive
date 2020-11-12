const { Trip, Review } = require('../db/schema')

const GetReview = async (req, res) => {
    const review = await Review.findById(req.params.review_id).select('comment')
    console.log({msg: `did it work?`})
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
//this is based off of mern-stack CreateComment...may need tweaking at the _id: req.params.trip_id

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
}

//rateReview might not be an actual CRUD operation - 
//more like an Onclick function when someone likes the review
//so I dont think we're doing that here yet...

// const RateReview = async (req, res) => {
//     await Review.findByIdAndUpdate({_id: req.params.review_id})
//     const addPopularity = await Review.findByIdAndUpdate(
        
//     )
// }


module.exports = {
    CreateReview,
    UpdateReview,
    RemoveReview,
    //RateReview
    GetReview
}