require('dotenv').config();
require('./config/database');

// const fetch = require('node-fetch');
const airline = require('./models/airline');
const ROOT_URL = 'https://app.goflightlabs.com/airlines?access_key=';
const DAISY_URL = 'https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata='
const key = process.env.API_KEY;
const Airline = require('./models/airline');

async function getAirlines(req, res, next) {
    const data = await fetch(`${ROOT_URL}${key}`);
    const airlineData = await data.json();
    for (let airline of airlineData.data) {
        const exists = await Airline.exists({iataCode: airline.codeIataAirline})
        if (!exists) {
            await Airline.create({
                name: airline.nameAirline,
                iataCode: airline.codeIataAirline,
                homeAirport: airline.codeHub,
                homeCountry: airline.nameCountry,
                airlineSize: airline.sizeAirline,
                fleetAge: airline.ageFleet,
                callSign: airline.callsign,
                icon: `${DAISY_URL}${airline.codeIataAirline}`
            })
        }
    }
    console.log('Finished!');
}

getAirlines();