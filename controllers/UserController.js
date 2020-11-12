const { User, Trip } = require('../db/schema')

const CreateUser = async (req, res) => {
    try {
        const body = req.body
        const user = new User({
            name: body.name,
            email: body.email,
            password_digest: body.password
        })
        user.save()
        res.send(user)
        console.log(`profile created!`)
    }catch (error) {
        throw error
    }
}

const SignInUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user && user.password_digest === req.body.password) {
            const payload = {
                _id: user._id,
                name: user.name
            }
        }
        console.log(payload)
        return res.send(payload)
    }catch (error) {
        res.status(401).send({ msg: 'Unauthorized' })
    }
}

const GetProfile = async (req,res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const userTrips = await Trip.find({ user_id: req.params.user_id })
        // *TODO = userFriends... 
        res.send(user, userTrips)
    } catch (error) {
        res.status(401).send({ msg: 'Unauthorized' })
    }
}

module.exports = {
    CreateUser,
    SignInUser,
    GetProfile
}
