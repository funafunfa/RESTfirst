var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/schReloadModel.js'); //created model loading here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://192.168.0.103/sch_test_test');
// mongoose.connect('mongodb://localhost/sch_test_test');

mongoose.connect('mongodb://podmoskovye:60K32K2ye3Ro@sch-shard-00-00-sflz6.mongodb.net:27017,sch-shard-00-01-sflz6.mongodb.net:27017,sch-shard-00-02-sflz6.mongodb.net:27017/test?ssl=true&replicaSet=sch-shard-0&authSource=admin');

var path = require('path');
var routes = require('./api/routers/schReloadRouter.js'); //importing route
var routesNormal = require('./api/routers/schNormal.js'); //importing route

routes(app); //register the route

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/form_inline.html'));
});
app.get('/test', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/from_test.html'));
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
