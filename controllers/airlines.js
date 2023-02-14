const Airline = require('../models/airline');

module.exports = {
    search,
    display
};

function search(req,res) {
    res.render('search', {title: "Search Bar"});
}

function display(req,res) {
    Airline.find({name: req.body.query}, function(err, airlines) {
        console.log(airlines);
        res.render('search', {title: "Search Bar"});
    });
    
}