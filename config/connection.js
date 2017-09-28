var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c0wb3ar',
    database: 'burgers_db'
});

module.exports = connection;