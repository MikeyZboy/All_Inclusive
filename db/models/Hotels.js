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
        city: {
            type: Schema.Types.ObjectId,
            ref: 'places'
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
        }]
    },
    {timestampes: true}
)