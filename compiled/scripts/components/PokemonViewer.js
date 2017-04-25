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
      React.createElement("h3", { className: "pokemonWeight" }),
      React.createElement("h3", { className: "team" })
    )
  );
};

window.PokemonViewer = PokemonViewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlbW9uVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJQb2tlbW9uVmlld2VyIiwicHJvcHMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsU0FDcEI7QUFBQTtBQUFBLE1BQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsOEJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsR0FERjtBQUVJLGtDQUFJLFdBQVUsYUFBZCxHQUZKO0FBR0ksa0NBQUksV0FBVSxXQUFkLEdBSEo7QUFJSSxrQ0FBSSxXQUFVLGVBQWQsR0FKSjtBQUtJLGtDQUFJLFdBQVUsZUFBZCxHQUxKO0FBTUksa0NBQUksV0FBVSxNQUFkO0FBTko7QUFERixHQURvQjtBQUFBLENBQXRCOztBQWFBQyxPQUFPRixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJQb2tlbW9uVmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUG9rZW1vblZpZXdlciA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBva2Vtb24tdmlld2VyIHJvd1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZW1vbi12aWV3ZXItaW5mbyBjb2wtbWQtN1wiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJwb2tlbW9uSW1hZ2VcIi8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwb2tlbW9uTmFtZVwiPjwvaDE+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb2tlbW9uSWRcIj48L2gzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicG9rZW1vbkhlaWdodFwiPjwvaDM+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb2tlbW9uV2VpZ2h0XCI+PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRlYW1cIj48L2gzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5Qb2tlbW9uVmlld2VyID0gUG9rZW1vblZpZXdlcjtcbiJdfQ==