const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    airline: {
        type: Schema.Types.ObjectId,
        ref: 'Airline',
        required: true
    },
    airport: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
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