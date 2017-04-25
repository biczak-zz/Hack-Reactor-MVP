const PokemonViewer = (props) => (
  <div className="pokemon-viewer row">
    <div className="pokemon-viewer-info col-md-7">
      <img className="pokemonImage"/>
        <h1 className="pokemonName"></h1>
        <h3 className="pokemonId"></h3>
        <h3 className="pokemonHeight"></h3>
        <h3 className="pokemonWeight"></h3>
        <h3 className="team"></h3>
    </div>
  </div>
);

window.PokemonViewer = PokemonViewer;
