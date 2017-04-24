const PokedexEntry = (props) => (
  <div className="pokedex-entry">
    <div className="media-left media-middle">
      <img className="pokedexEntry" />
    </div>
    <div className="media-body">
      <div className="pokedex-entry-name">
        {props.forms}
      </div>
      <div className="pokedex-entry-info">{'Pokédex ID: ' + props.pokemon.id}</div>
    </div>
  </div>
);
window.PokedexEntry = PokedexEntry;
