class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: props[0],
      pokedex: []
    };
  }

  componentDidMount() {
    this.getPokemon('Squirtle');
  };

  getPokemon(query) {
    // Fill the card list with data from the API, and Set the Current Card
    window.searchPokemonAPI(query, (pokemon) => {
      this.setState({
        pokemon: pokemon,
        pokedex: pokemon
      })
      $('.pokemonImage').attr('src', pokemon.sprites.front_default);
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

window.App = App;
