var connection = require('./connection.js');

var orm = {
    selectAll: function(queryString, cb) {
        connection.query(queryString, function(err, data) {
            cb(err, data);
        });
    },
    insertOne: function(queryString, inputData, cb) {
        connection.query(queryString, inputData, function(err, data) {
            cb(err, data);
        });
    },
    updateOne: function(queryString, inputData, cb) {
        connection.query(queryString, inputData, function(err, data) {
            cb(err, data);
        });
    },
    deleteOne: function(queryString, inputData, cb) {
        connection.query(queryString, inputData, function(err, data) {
            cb(err, data);
        });
    }
}

module.exports = orm;