const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        day: {
            type: Date,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        place: {
            type: Schema.Types.ObjectId,
            ref: 'places'
        },
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }]
    },
    {timestamps: true}
)