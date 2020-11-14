const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const {
    createToken,
    verifyToken,
    getToken
} = require('../middleware/JwtHandler')

Router.get('/:user_id', UserController.GetProfile)
// works, user_id:5fac462cdb8bfbe8f52caa94 
Router.post('/register', UserController.CreateUser)
// works, was able to register myself...
Router.post('/login', UserController.SignInUser, createToken)
// getting a 'no password' error - does this need Auth before confirming...
// Router.get('/refresh/session', getToken, verifyToken, UserController.RefreshSession)
Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)

module.exports = Router