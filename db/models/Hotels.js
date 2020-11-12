const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        popularity_rating: {
            type: Number,
            default: 0
        },
        image_url: {
            type: String
        },
        activities: [{
            type: Schema.Types.ObjectId,
            ref: 'activities'
        }],
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'reviews'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],
        trip_start: {
            type: Schema.Types.trip_start,
            ref: 'trips'
        },
        trip_end: {
            type: Schema.Types.trip_end,
            ref: 'trips'
        }
    },
    {timestampes: true}
)