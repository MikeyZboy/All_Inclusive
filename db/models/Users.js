const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password_digest: {
            type: String,
            required: true
        },
        trips: [{
            type: Schema.Types.ObjectId,
            ref: 'trips'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }]
    },
    {timestamps: true}
)