const PokemonViewer = (props) => (
  <div className="pokemon-viewer row">
    <div className="pokemon-viewer-info col-md-7">
      <h3 className="pokemon-name">{props.pokemon.name}</h3>
      <img className="pokemonImage" />
      <div className="cardDetails">
        <h3 className="pokemon-id">{'Pokédex ID: ' + props.pokemon.id}</h3>
      </div>
    </div>
  </div>
);

window.PokemonViewer = PokemonViewer;
