const { model } = require('mongoose')

const UsersModel = require('./models/Users')
const TripsModel = require('./models/Trips')
const ReviewsModel = require('./models/Reviews')
const PlacesModel = require('./models/Places')
const ActivitiesModel = require('./models/Activities')

const User = model('users', UsersModel)
const Trip = model('trips', TripsModel)
const Review = model('reviews', ReviewsModel)
const Place = model('places', PlacesModel)
const Activity = model('activities', ActivitiesModel)

module.exports = {
    User,
    Trip,
    Review,
    Place,
    Activity
}

