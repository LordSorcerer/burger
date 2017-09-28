var burger = require('../models/burger.js');
var connection = require('../config/connection.js');

var routes = function(app) {
    //View all burgers
    app.get("/", function(req, res) {
        burger.selectAll(req, res);
    });

    //Add a new burger and reload the page
    app.post("/api/burger", function(req, res) {
        burger.insertOne(req, res);
    });
    //Update devoured to true
    app.put("/api/burger", function(req, res) {
        burger.updateOne(req, res);
    });
    //Remove burgers from the list without devouring them
    app.delete("/api/burger", function(req, res) {
        burger.deleteOne(req, res);
    });
};

module.exports = routes;