var orm = require('../config/orm.js');

var burger = {
        selectAll: function(req, res) {
            orm.selectAll('SELECT * FROM burgers', function(err, data) {
                if (err) throw err;
                res.render("index", { burgers: data });
            });
        },
        insertOne: function(req, res) {
            var inputData = [req.body.burger_name, 0, new Date()];
            orm.insertOne("INSERT INTO burgers(burger_name, devoured, date) VALUES (?,?,?)", inputData, function(err, data) {
                if (err) throw err;
                res.json(data);
            });
        },
        updateOne: function(req, res) {
            var inputData = req.body.id;
            orm.updateOne("UPDATE burgers SET devoured = 1 WHERE item_id=?", inputData, function(err, data) {
                if (err) throw err;
                res.json(data);
            });
        },
        deleteOne: function(req, res) {
            var inputData = req.body.id;
            orm.deleteOne("DELETE FROM burgers WHERE item_id=?", inputData, function(err, data) {
                if (err) throw err;
                res.json(data);
            });
        }
};


/*
Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.*/

module.exports = burger;