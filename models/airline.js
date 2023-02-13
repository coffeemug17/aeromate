const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    name: String,
    iataCode: String,
    homeAirport: String,
    homeCountry: String,
    airlineSize: Number,
    fleetAge: Number,
    callSign: String,
    icon: String
});

module.exports = mongoose.model('Airline', airlineSchema);