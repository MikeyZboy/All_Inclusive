const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        trip_start: {
            type: Date
        },
        trip_end: {
            type: Date
        },
        hotels: [{
                type: Schema.Types.ObjectId,
                ref: 'hotels'
        }],
        activities: [{
            type: Schema.Types.ObjectId,
            ref: 'activities'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }]
    },
    {timestamps: true}
)