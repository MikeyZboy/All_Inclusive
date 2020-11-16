const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        popularity_rating: {
            type: Number,
            default: 0,
            required: true
        }
    },
    {timestamps: true}
)