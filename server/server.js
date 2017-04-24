var express = require('express')
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../')));
app.get('/', function (req, res) {
  function searchPokemonAPI(query, callback) {
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${query}`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        return callback(data);
      },
      failure: function(err) {
        console.log(err);
      }
    });
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
