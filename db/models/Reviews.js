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
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        place: {
            type: Schema.Types.ObjectId,
            ref: 'places'
        },
        activity: {
            type: Schema.Types.ObjectId,
            ref: 'activities'
        },
        popularity_rating: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)