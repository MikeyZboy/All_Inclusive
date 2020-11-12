const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        popularity_rating: {
            type: Number,
            default: 0,
            required: true
        },
        image_url: {
            type: String,
            required: true
        },
        hotels: [{
            type: Schema.Types.ObjectId,
            ref: 'hotels'
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