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
            default: 0
        },
        image_url: {
            type: String,
        }
    },
    {timestamps: true}
)