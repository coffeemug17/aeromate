const Airline = require('../models/airline');

module.exports = {
    search,
    display,
    show
};

function search(req,res) {
    let airlines = 0;
    res.render('search', {title: "Search Bar", airlines});
}

function display(req,res) {
    const nameRegex = new RegExp(req.body.query);
    Airline.find({name: {$regex: nameRegex, $options: 'i'}}, function(err, airlines) {
        res.render('search', {title: "Search Bar", airlines});
    });   
}

function show(req,res) {
    Airline.findById(req.params.id, function(err, airline) {
        res.render('airlines/show', {title: 'Airline Detail', airline});
    });
}