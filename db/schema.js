const { model } = require('mongoose')

const UsersModel = require('./models/Users')
const TripsModel = require('./models/Trips')
const ReviewsModel = require('./models/Reviews')
const PlacesModel = require('./models/Places')
const ActivitiesModel = require('./models/Activities')
const HotelsModel = require('./models/Hotels')

const User = model('users', UsersModel)
const Trip = model('trips', TripsModel)
const Review = model('reviews', ReviewsModel)
const Place = model('places', PlacesModel)
const Activity = model('activities', ActivitiesModel)
const Hotel = model('hotels', HotelsModel)

module.exports = {
    User,
    Trip,
    Review,
    Place,
    Activity,
    Hotel
}