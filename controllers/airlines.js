const Airline = require('../models/airline');

module.exports = {
    search,
    display
};

function search(req,res) {
    res.render('search', {title: "Search Bar"});
}

function display(req,res) {
    const nameRegex = new RegExp(req.body.query);
    Airline.find({name: {$regex: nameRegex, $options: 'i'}}, function(err, airlines) {
        console.log(airlines);
        res.render('search', {title: "Search Bar"});
    });
    
}