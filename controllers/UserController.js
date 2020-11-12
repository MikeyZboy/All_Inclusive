const { User, Trip } = require('../db/schema')
const {
    checkPassword,
    generatePassword
} = require('../middleware/PasswordHandler')


const CreateUser = async (req, res) => {
    try {
        const body = req.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
            name: body.name,
            email: body.email,
            password_digest
        })
        user.save()
        res.send(user)
    }catch (error) {
        throw error
    }
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
        res.status(401).send({ msg: 'Unauthorized 1' })
    }catch (error) {
        throw error
    }
}

const GetProfile = async (req,res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        // const userTrips = await Trip.find({ user_id: req.params.user_id })
        // *TODO = userFriends... 
        res.send(user)
    } catch (error) {
        res.status(401).send({ msg: 'you didnt say magic word' })
    }
}

module.exports = {
    CreateUser,
    SignInUser,
    GetProfile
}
