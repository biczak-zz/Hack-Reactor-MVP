"use strict";

var PokemonViewer = function PokemonViewer(props) {
  return React.createElement(
    "div",
    { className: "pokemon-viewer row" },
    React.createElement(
      "div",
      { className: "pokemon-viewer-info col-md-7" },
      React.createElement(
        "h3",
        { className: "pokemon-name" },
        props.pokemon.name
      ),
      React.createElement("img", { className: "pokemonImage" }),
      React.createElement(
        "div",
        { className: "cardDetails" },
        React.createElement(
          "h3",
          { className: "pokemon-id" },
          'Pokédex ID: ' + props.pokemon.id
        )
      )
    )
  );
};

window.PokemonViewer = PokemonViewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlbW9uVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uVmlld2VyIiwicHJvcHMiLCJwb2tlbW9uIiwibmFtZSIsImlkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3BCO0FBQUE7QUFBQSxNQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDhCQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQThCQSxjQUFNQyxPQUFOLENBQWNDO0FBQTVDLE9BREY7QUFFRSxtQ0FBSyxXQUFVLGNBQWYsR0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsWUFBZDtBQUE0QiwyQkFBaUJGLE1BQU1DLE9BQU4sQ0FBY0U7QUFBM0Q7QUFERjtBQUhGO0FBREYsR0FEb0I7QUFBQSxDQUF0Qjs7QUFZQUMsT0FBT0wsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiUG9rZW1vblZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBva2Vtb25WaWV3ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXZpZXdlciByb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tdmlld2VyLWluZm8gY29sLW1kLTdcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwb2tlbW9uLW5hbWVcIj57cHJvcHMucG9rZW1vbi5uYW1lfTwvaDM+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInBva2Vtb25JbWFnZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmREZXRhaWxzXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb2tlbW9uLWlkXCI+eydQb2vDqWRleCBJRDogJyArIHByb3BzLnBva2Vtb24uaWR9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5Qb2tlbW9uVmlld2VyID0gUG9rZW1vblZpZXdlcjtcbiJdfQ==