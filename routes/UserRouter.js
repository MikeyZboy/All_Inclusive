const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser)
Router.get('/:user_id', UserController.GetProfile)

module.exports = Router