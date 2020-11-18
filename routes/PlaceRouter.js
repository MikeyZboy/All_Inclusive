const Router = require('express').Router()
const PlaceController = require('../controllers/PlaceController')

Router.get('/places/all', PlaceController.AllPlaces)
Router.get('places/:place_id', PlaceController.GetPlace)

module.exports = Router