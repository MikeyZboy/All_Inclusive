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
// works.
Router.post('/login', UserController.SignInUser, createToken)
// works.

Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)

module.exports = Router