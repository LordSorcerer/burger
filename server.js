var express = require("express");
var path = require("path");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var connection = require("./config/connection.js");

var PORT = 3000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Include our CSS file
app.use(express.static(path.join(__dirname, '/public')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mysql connection
connection.connect();

require('./controllers/burger_controller.js')(app);

app.listen(PORT, function (){
	console.log("'Burger Server' listening on port " + PORT);
});


