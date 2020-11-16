const Router = require('express').Router()
const TripController = require('../controllers/TripController')


Router.get('/alltrips', TripController.GetTrips)
// works - brings back an array of 10 trip objects
Router.get('/:trip_id', TripController.GetTripById)
// works - 5fad69771cf637152997c3b3 brought back Venezuela trip object
Router.post('/create/:user_id', TripController.CreateTrip)
// this seemed to work - but i dont see it in db...?
Router.post('/update/:trip_id', TripController.UpdateTrip)
// not working - error in TripController.js:46:10
Router.delete('/delete/:trip_id', TripController.DeleteTrip)
// not working = error in TripController.js:52:41
// trip is not defined?

module.exports = Router