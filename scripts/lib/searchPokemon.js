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
window.searchPokemonAPI = searchPokemonAPI;
