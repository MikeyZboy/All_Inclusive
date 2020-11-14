const Router = require('express').Router()
const TripController = require('../controllers/TripController')


Router.get('/alltrips', TripController.GetTrips)
Router.get('/:trip_id', TripController.GetTripById)
Router.post('/create', TripController.CreateTrip) 
Router.post('/update/:trip_id', TripController.UpdateTrip)
Router.delete('/delete/:trip_id', TripController.DeleteTrip)

module.exports = Router