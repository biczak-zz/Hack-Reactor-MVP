"use strict";

var PokedexEntry = function PokedexEntry(props) {
  return React.createElement(
    "div",
    { className: "pokedex-entry" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "pokedexEntry" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "pokedex-entry-name" },
        props.forms
      ),
      React.createElement(
        "div",
        { className: "pokedex-entry-info" },
        'Pokédex ID: ' + props.pokemon.id
      )
    )
  );
};
window.PokedexEntry = PokedexEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlZGV4RW50cnkuanN4Il0sIm5hbWVzIjpbIlBva2VkZXhFbnRyeSIsInByb3BzIiwiZm9ybXMiLCJwb2tlbW9uIiwiaWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDR0EsY0FBTUM7QUFEVCxPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUFxQyx5QkFBaUJELE1BQU1FLE9BQU4sQ0FBY0M7QUFBcEU7QUFKRjtBQUpGLEdBRG1CO0FBQUEsQ0FBckI7QUFhQUMsT0FBT0wsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiUG9rZWRleEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUG9rZWRleEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9rZWRleC1lbnRyeVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9rZWRleEVudHJ5XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZWRleC1lbnRyeS1uYW1lXCI+XG4gICAgICAgIHtwcm9wcy5mb3Jtc31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlZGV4LWVudHJ5LWluZm9cIj57J1Bva8OpZGV4IElEOiAnICsgcHJvcHMucG9rZW1vbi5pZH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xud2luZG93LlBva2VkZXhFbnRyeSA9IFBva2VkZXhFbnRyeTtcbiJdfQ==