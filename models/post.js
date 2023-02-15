const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    airlineId: {
        type: Schema.Types.ObjectId,
        ref: 'Airline',
        required: true
    },
    airlineName: {
        type: String,
        required: true
    },
    airlineIcon: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    content: {
        type: String,
        required: true
    },
    legRoom: {
        type: String,
        enum: ['Extra Legroom', 'Regular Legroom', 'Less Legroom'],
        default: 'Regular Legroom'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);