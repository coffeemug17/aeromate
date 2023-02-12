const Flight = require('../models/flight');

module.exports = {
    index
};

function index(req,res) {
    res.render('flights/index', {title: 'All Flights'});
}