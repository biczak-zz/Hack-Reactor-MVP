
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: props[0],
      pokedex: []
    };
  }

  getPokemon(query) {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${query}`)
      .then(function (pokemon) {
          $('#userInput').val(pokemon.data.forms[0].name.charAt(0).toUpperCase() + pokemon.data.forms[0].name.slice(1))
          $('.pokemonImage').attr('src', pokemon.data.sprites.front_default);
          $('.pokemonName').text(pokemon.data.forms[0].name.charAt(0).toUpperCase() + pokemon.data.forms[0].name.slice(1));
          $('.pokemonId').text('Pokédex ID: ' + pokemon.data.id);
          $('.pokemonWeight').text('Weight: ' + Math.round((pokemon.data.weight * 2.20462) / 10) + ' lbs.');
          $('.pokemonHeight').text('Height: ' + pokemon.data.height / 10 + ' m');

    });

};

  saveToDB(pokemon) {
    $.ajax({
      url: '/',
      type: 'POST',
      contentType: 'application/json',
      success: function(data) {
        console.log('saveToDB');
        return data;
      },
      failure: function() {
        alert('post failed')
      }
    })
  }
//       console.log(pokemon);
//

componentDidMount() {
  this.getPokemon('squirtle');
};
    // Fill the card list with data from the API, and Set the Current Card

  changePokemon() {
    console.log('Change Pokemon')
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getPokemon.bind(this)} />
        <div className="col-md-7">
          <PokemonViewer pokemon={this.state.pokedex} />
        </div>
        <div className="col-md-5">
          <Pokedex pokemon={this.state.pokedex} clickEvent={this.changePokemon.bind(this)} />
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
window.App = App;
