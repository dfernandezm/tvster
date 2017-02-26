var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var engine = require('ejs-mate');
app.use('/client', express.static(__dirname + '/public/client'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./routes')(app);

// Basic error Handling
app.use(function(err, req, res, next) {
    console.log("Error ", err);
    res.status(err.status || 500);
});

module.exports = app;
