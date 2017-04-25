var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var db;
var Team = require('./config.js');
//Establish Connection
MongoClient.connect('mongodb://demo:demo@ds113871.mlab.com:13871/mvp', function (err, database) {
   if (err)
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(3000);
   }
 });

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../'));
});

app.post('/', function(req, res) {
   // Insert JSON straight into MongoDB
  db.collection('team').insert(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});
