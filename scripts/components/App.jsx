class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: props[0],
      pokedex: []
    };
  }

  componentDidMount() {
    this.getPokemon('squirtle');
  };

  getPokemon(query) {
    // Fill the card list with data from the API, and Set the Current Card
    window.searchPokemonAPI(query, (pokemon) => {
      this.setState({
        pokemon: pokemon,
        pokedex: pokemon
      })
      $('.pokemonImage').attr('src', pokemon.sprites.front_default);
      $('.pokemonName').text(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
      $('.pokemonId').text('Pokédex ID: ' + pokemon.id);
      $('.pokemonWeight').text('Weight: ' + Math.round((pokemon.weight * 2.20462) / 10) + ' lbs.');
      $('.pokemonHeight').text('Height: ' + pokemon.height / 10 + ' m');
    })
  }

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
