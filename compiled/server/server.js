'use strict';

var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

var searchPokemon = function searchPokemon(query) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJwYXRoIiwiaHR0cCIsImFwcCIsInNlYXJjaFBva2Vtb24iLCJxdWVyeSIsIm9wdGlvbnMiLCJyZXEiLCJyZXF1ZXN0IiwicmVzIiwiY2h1bmtzIiwib24iLCJjaHVuayIsInB1c2giLCJib2R5IiwiQnVmZmVyIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBSUUsT0FBT0YsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFNRyxNQUFNSixTQUFaOztBQUVBLElBQU1LLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLE1BQUlDLFVBQVU7QUFDWixjQUFVLEtBREU7QUFFWixnQkFBWSxZQUZBO0FBR1osWUFBUSxJQUhJO0FBSVosWUFBUSxxQkFBcUJELEtBSmpCO0FBS1osZUFBVztBQUNULHVCQUFpQixVQURSO0FBRVQsdUJBQWlCO0FBRlI7QUFMQyxHQUFkOztBQVdBLE1BQUlFLE1BQU1MLEtBQUtNLE9BQUwsQ0FBYUYsT0FBYixFQUFzQixVQUFVRyxHQUFWLEVBQWU7QUFDN0MsUUFBSUMsU0FBUyxFQUFiOztBQUVBRCxRQUFJRSxFQUFKLENBQU8sTUFBUCxFQUFlLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJGLGFBQU9HLElBQVAsQ0FBWUQsS0FBWjtBQUNELEtBRkQ7O0FBSUFILFFBQUlFLEVBQUosQ0FBTyxLQUFQLEVBQWMsWUFBWTtBQUN4QixVQUFJRyxPQUFPQyxPQUFPQyxNQUFQLENBQWNOLE1BQWQsQ0FBWDtBQUNBTyxjQUFRQyxHQUFSLENBQVlKLEtBQUtLLFFBQUwsRUFBWjtBQUNELEtBSEQ7QUFJRCxHQVhTLENBQVY7O0FBYUFaLE1BQUlhLEdBQUo7QUFDRCxDQTFCRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBzZWFyY2hQb2tlbW9uID0gKHF1ZXJ5KSA9PiB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgXCJob3N0bmFtZVwiOiBcInBva2VhcGkuY29cIixcbiAgICBcInBvcnRcIjogbnVsbCxcbiAgICBcInBhdGhcIjogXCIvYXBpL3YyL3Bva2Vtb24vXCIgKyBxdWVyeSxcbiAgICBcImhlYWRlcnNcIjoge1xuICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgIFwicG9zdG1hbi10b2tlblwiOiBcIjdhMjYwNzBiLTg3MTMtZTIzMy00OTk5LTEzMTUzNDkxZGI0M1wiXG4gICAgfVxuICB9O1xuXG4gIHZhciByZXEgPSBodHRwLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKHJlcykge1xuICAgIHZhciBjaHVua3MgPSBbXTtcblxuICAgIHJlcy5vbihcImRhdGFcIiwgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICBjaHVua3MucHVzaChjaHVuayk7XG4gICAgfSk7XG5cbiAgICByZXMub24oXCJlbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJvZHkgPSBCdWZmZXIuY29uY2F0KGNodW5rcyk7XG4gICAgICBjb25zb2xlLmxvZyhib2R5LnRvU3RyaW5nKCkpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXEuZW5kKCk7XG59O1xuIl19