"use strict";

var Pokedex = function Pokedex(_ref) {
  var pokemon = _ref.pokemon,
      clickEvent = _ref.clickEvent;
  return React.createElement(
    "div",
    { className: "pokedex media" },
    React.createElement(PokedexEntry, { pokemon: pokemon })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlZGV4LmpzeCJdLCJuYW1lcyI6WyJQb2tlZGV4IiwicG9rZW1vbiIsImNsaWNrRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsVUFBWixRQUFZQSxVQUFaO0FBQUEsU0FDZDtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDRyx3QkFBQyxZQUFELElBQWMsU0FBU0QsT0FBdkI7QUFESCxHQURjO0FBQUEsQ0FBaEIiLCJmaWxlIjoiUG9rZWRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBva2VkZXggPSAoeyBwb2tlbW9uLCBjbGlja0V2ZW50IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb2tlZGV4IG1lZGlhXCI+XG4gICAgIDxQb2tlZGV4RW50cnkgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgPC9kaXY+XG4pO1xuIl19