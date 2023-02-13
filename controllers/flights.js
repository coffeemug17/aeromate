const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req,res) {
    res.render('flights/index', {title: 'All Flights'});
}

function newFlight(req,res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req,res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}