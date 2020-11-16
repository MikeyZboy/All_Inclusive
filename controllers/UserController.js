const { User, Trip } = require('../db/schema')
const {
    checkPassword,
    generatePassword
} = require('../middleware/PasswordHandler')


const CreateUser = async (req, res) => {
        const body = req.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
            name: body.name,
            email: body.email,
            password_digest
        })
        //console.log('new user created!')
        user.save()
        res.send(user)
}

const SignInUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (user && (await checkPassword(req.body.password, user.password_digest))) {
            const payload = {
                _id: user._id,
                name: user.name
            }
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ msg: 'Unauthorized Sign In' })
    }catch (error) {
        throw error
    }
}

const GetProfile = async (req,res) => {
        const user = await User.findById(req.params.user_id).select('_id name')
        const trips = await Trip.find({ user_id: req.params.user_id })
        // *TODO = userFriends... 
        res.send(user, trips)
}

const RefreshSession = (req, res) => {
  const token = res.locals.token
  res.send(token)
}

module.exports = {
    CreateUser,
    SignInUser,
    GetProfile,
    RefreshSession
}
