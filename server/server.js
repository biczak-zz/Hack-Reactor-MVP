const express = require('express');
const path = require('path');
var http = require('http');
const app = express();

const searchPokemon = (query) => {
  var options = {
    "method": "GET",
    "hostname": "pokeapi.co",
    "port": null,
    "path": "/api/v2/pokemon/" + query,
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "7a26070b-8713-e233-4999-13153491db43"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
};
