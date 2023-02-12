const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        required: true
    }, 
    airport: {
        type: String,
        required: true,
        match: /[A-Z][A-Z][A-Z]/
    },
    flightNo: {
        type: Number,
        required: true
    },
    departure: {
        type: Date,
        default: function() {
            return Date.now() + 365*24*60*60000;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);