var express = require('express');
var app = express();
var path = require('path');
var searchPokemonAPI;
app.use(express.static(path.join(__dirname, '../')));
app.post('/api/query', foo);

function foo(req, res){
  res.send('HI');
}

app.get(`/`, function (error, response, body) {
   searchPokemonAPI = function(query, callback) {
  request(`http://pokeapi.co/api/v2/pokemon/squirtle`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
};
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports.searchPokemonAPI = searchPokemonAPI;
