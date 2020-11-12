const Reviews = require('../db/models/Reviews')
const { User, Trip, Review } = require('../db/schema')

const GetTrips = async (req, res) => {
    const { page, limit } = req.body
    const offset = page === '1' ? '0' : Math.floor(parseInt(page) * parseInt(limit))
    const trips = await Trip.find()
        .limit(parseInt(limit))
        .skip(offset)
        .sort({ trip_start: 'ascending'})
    res.send({ results: trips.length, trips })
}
//gettrips needs to be filtered to the user...
// trip.findbyid(req.params.user_id)?

const GetTripById = async (req, res) => {
    const trip = await Trip.findById(req.params.trip_id).populate([
        {
            model: 'trips',
            path: 'trip_id',
            select: '_id name'
        },
        {
            path: 'places',
            populate: {
                path: 'user_id',
                model: 'users',
                select: '_id name friends'
            }
        }
    ])
    res.send(trip)
}

const CreateTrip = async (req, res) => {
    const newTrip = new Trip ({...req.body, user_id: req.params.user_id})
    newTrip.save()
    res.send(newTrip)
}

const UpdateTrip = async (req, res) => {
    await Trip.findByIdAndUpdate(
        req.params.trip_id,
        {...req.body},
        {new: true, useFindAndModify: false},
        (err, (d) => (err ? err: res.send(d)))
    )
}
// what is going in with the error catch/throw in line 44?

const DeleteTrip = async (req, res) => {
    await Review.deleteMany({_id: {$in: trip.reviews }})
    await Trip.findByIdAndDelete(req.params.trip_id)
    res.send({msg:`Trip Deleted`})
}

//Invite Trip would be a stretch here - add other users to trip is the goal


module.exports = {
    GetTrips,
    GetTripById,
    CreateTrip,
    UpdateTrip,
    DeleteTrip
}