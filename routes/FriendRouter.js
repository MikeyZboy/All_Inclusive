const Router = require('express').Router()
const FriendController = require('../controllers/FriendController')


Router.post('/invite', FriendController.InviteUser)
// not tested yet

Router.post('/invite/:trip_id', FriendController.  )