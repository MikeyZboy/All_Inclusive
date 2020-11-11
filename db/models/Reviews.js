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
        // place: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'places'
        // },
        // activity: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'activities'
        // },
        // above may not be needed for reviewing each place/activity
    },
    {timestamps: true}
)