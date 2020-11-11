const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        popularity_string: {
            type: String,
            required: true
        },
        image_url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
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
            ref: 'users'
        }]
    },
    {timestamps: true}
)