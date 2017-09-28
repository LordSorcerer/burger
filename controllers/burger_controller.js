var burger = require('../models/burger.js');
var connection = require('../config/connection.js');

var routes = function(app) {
    //View all burgers
    app.get("/", function(req, res) {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            res.render("index", { burgers: data });
        });
    });

    //Add a new burger and reload the page
    app.post("/api/submit", function(req, res) {
        console.log(req.body);
        var burgerData = [req.body.burger_name, 0, new Date()];
        connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES (?,?,?)", burgerData, function(err, data) {
            if (err) throw err;
            res.redirect("/");
        });

    });

    //Remove burgers from the list without devouring them
    app.delete("/api/remove", function(req, res) {
        console.log(req.body);
        var burgerId = req.body.id;
        connection.query("DELETE FROM burgers WHERE item_id=?", [burgerId], function(err, data) {
            if (err) throw err;
            res.redirect("/");
        });
    });


    //Remove burgers from the list without devouring them
    app.put("/api/update", function(req, res) {
        console.log(req.body);
        var burgerId = req.body.id;
        connection.query("UPDATE burgers SET devoured = 1 WHERE item_id=?", [burgerId], function(err, data) {
            if (err) throw err;
            res.redirect("/");
        });
    });
};

module.exports = routes;