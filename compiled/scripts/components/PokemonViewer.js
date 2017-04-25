"use strict";

var PokemonViewer = function PokemonViewer(props) {
  return React.createElement(
    "div",
    { className: "pokemon-viewer row" },
    React.createElement(
      "div",
      { className: "pokemon-viewer-info col-md-7" },
      React.createElement("img", { className: "pokemonImage" }),
      React.createElement("h1", { className: "pokemonName" }),
      React.createElement("h3", { className: "pokemonId" }),
      React.createElement("h3", { className: "pokemonHeight" }),
      React.createElement("h3", { className: "pokemonWeight" })
    )
  );
};

window.PokemonViewer = PokemonViewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlbW9uVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uVmlld2VyIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsU0FDcEI7QUFBQTtBQUFBLE1BQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsOEJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsR0FERjtBQUVJLGtDQUFJLFdBQVUsYUFBZCxHQUZKO0FBR0ksa0NBQUksV0FBVSxXQUFkLEdBSEo7QUFJSSxrQ0FBSSxXQUFVLGVBQWQsR0FKSjtBQUtJLGtDQUFJLFdBQVUsZUFBZDtBQUxKO0FBREYsR0FEb0I7QUFBQSxDQUF0Qjs7QUFZQUMsT0FBT0YsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiUG9rZW1vblZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBva2Vtb25WaWV3ZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb2tlbW9uLXZpZXdlciByb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tdmlld2VyLWluZm8gY29sLW1kLTdcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9rZW1vbkltYWdlXCIvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9rZW1vbk5hbWVcIj48L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicG9rZW1vbklkXCI+PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBva2Vtb25IZWlnaHRcIj48L2gzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicG9rZW1vbldlaWdodFwiPjwvaDM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LlBva2Vtb25WaWV3ZXIgPSBQb2tlbW9uVmlld2VyO1xuIl19