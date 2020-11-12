const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.get('/:user_id', UserController.GetProfile)
// got an unauthorized error = need to narrow that down
Router.post('/register', UserController.CreateUser)
// was able to register myself...
Router.post('/login', UserController.SignInUser)
// getting a 'no password' error = password v password_digest is off somewhere...

module.exports = Router