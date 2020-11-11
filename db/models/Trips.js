const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        trip_start: {
            type: Date,
            required: true
        },
        trip_end: {
            type: Date,
            required: true
        },
        place: {
            type: Schema.Types.ObjectId,
            ref: 'places'
        },
        activities: [{
            type: Schema.Types.ObjectId,
            ref: 'activities'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'reviews'
        }]
    },
    {timestamps: true}
)