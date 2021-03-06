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
        popularity_rating: {
            type: Number,
            default: 0,
            required: true
        },
        date: {
            type: Date
        },
        time: {
            type: Number
        },
        hotel: {
            type: Schema.Types.ObjectId,
            ref: 'hotels'
        },
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