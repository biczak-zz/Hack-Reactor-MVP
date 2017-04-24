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
      )
    )
  );
};
window.PokedexEntry = PokedexEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb2tlZGV4RW50cnkuanN4Il0sIm5hbWVzIjpbIlBva2VkZXhFbnRyeSIsInByb3BzIiwiZm9ybXMiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDR0EsY0FBTUM7QUFEVDtBQURGO0FBSkYsR0FEbUI7QUFBQSxDQUFyQjtBQVlBQyxPQUFPSCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJQb2tlZGV4RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb2tlZGV4RW50cnkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb2tlZGV4LWVudHJ5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJwb2tlZGV4RW50cnlcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlZGV4LWVudHJ5LW5hbWVcIj5cbiAgICAgICAge3Byb3BzLmZvcm1zfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbndpbmRvdy5Qb2tlZGV4RW50cnkgPSBQb2tlZGV4RW50cnk7XG4iXX0=