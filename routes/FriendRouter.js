const Router = require('express').Router()
const FriendController = require('../controllers/FriendController')

Router.post('/invite', FriendController.InviteUser)
Router.post('/invite/:trip_id', FriendController.)
