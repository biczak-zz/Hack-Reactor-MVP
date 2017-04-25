var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var Team = require('./config.js');
var mongoose = require('mongoose');
var mongodbUri = 'mongodb://demo:demo@ds113871.mlab.com:13871/mvp';

mongoose.connect(mongodbUri);
var db = mongoose.connection;

app.use( bodyParser({limit: '50mb'}) );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname, '../')));
app.post('/', function(req, res) {
  var userCollection = db.collection('teams');

  userCollection.insertOne({
    "name": req.body.Pokémon,
  });
  console.log(req.body.Pokémon + ' has been added to your team!')
});

app.get(`/`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

});
db.once('open', function () {
  console.log('Mongodb connection open');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var db;
var Team = require('./config.js');


app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../'));
});
