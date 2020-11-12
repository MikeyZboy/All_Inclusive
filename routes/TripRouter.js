const Router = require('express').Router()
const TripController = require('../controllers/TripController')


Router.get('/alltrips', TripController.GetTrips)
Router.get('/:trip_id', TripController.GetTripById)
Router.post('/create', TripController.CreateTrip) 
Router.post('/:trip_id/update', TripController.UpdateTrip)
Router.delete('/:trip_id/delete', TripController.DeleteTrip)

module.exports = Router