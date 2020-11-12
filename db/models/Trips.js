const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        trip_start: {
            type: Date
        },
        trip_end: {
            type: Date
        },
        // city: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'places'
        // },
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