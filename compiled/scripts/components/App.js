'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      pokemon: props[0],
      pokedex: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPokemon('squirtle');
    }
  }, {
    key: 'getPokemon',
    value: function getPokemon(query) {
      $.post('http://pokeapi.co/api/v2/pokemon/' + query, function (pokemon) {
        console.log(pokemon);
        this.setState({
          pokemon: pokemon,
          pokedex: pokemon
        });
        $('.pokemonImage').attr('src', pokemon.sprites.front_default);
        $('.pokemonName').text(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
        $('.pokemonId').text('Pokédex ID: ' + pokemon.id);
        $('.pokemonWeight').text('Weight: ' + Math.round(pokemon.weight * 2.20462 / 10) + ' lbs.');
        $('.pokemonHeight').text('Height: ' + pokemon.height / 10 + ' m');
      }.bind(this));
      // Fill the card list with data from the API, and Set the Current Card
    }
  }, {
    key: 'changePokemon',
    value: function changePokemon() {
      console.log('Change Pokemon');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, { handleSearchInputChange: this.getPokemon.bind(this) }),
        React.createElement(
          'div',
          { className: 'col-md-7' },
          React.createElement(PokemonViewer, { pokemon: this.state.pokedex })
        ),
        React.createElement(
          'div',
          { className: 'col-md-5' },
          React.createElement(Pokedex, { pokemon: this.state.pokedex, clickEvent: this.changePokemon.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwb2tlbW9uIiwicG9rZWRleCIsImdldFBva2Vtb24iLCJxdWVyeSIsIiQiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiYXR0ciIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwidGV4dCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaWQiLCJNYXRoIiwicm91bmQiLCJ3ZWlnaHQiLCJoZWlnaHQiLCJiaW5kIiwiY2hhbmdlUG9rZW1vbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVNGLE1BQU0sQ0FBTixDQURFO0FBRVhHLGVBQVM7QUFGRSxLQUFiO0FBSGlCO0FBT2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLQyxVQUFMLENBQWdCLFVBQWhCO0FBQ0Q7OzsrQkFFVUMsSyxFQUFPO0FBQ2hCQyxRQUFFQyxJQUFGLHVDQUEyQ0YsS0FBM0MsRUFBb0QsVUFBU0gsT0FBVCxFQUFrQjtBQUNwRU0sZ0JBQVFDLEdBQVIsQ0FBWVAsT0FBWjtBQUNBLGFBQUtRLFFBQUwsQ0FBYztBQUNaUixtQkFBU0EsT0FERztBQUVaQyxtQkFBU0Q7QUFGRyxTQUFkO0FBSUFJLFVBQUUsZUFBRixFQUFtQkssSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0JULFFBQVFVLE9BQVIsQ0FBZ0JDLGFBQS9DO0FBQ0FQLFVBQUUsY0FBRixFQUFrQlEsSUFBbEIsQ0FBdUJaLFFBQVFhLElBQVIsQ0FBYUMsTUFBYixDQUFvQixDQUFwQixFQUF1QkMsV0FBdkIsS0FBdUNmLFFBQVFhLElBQVIsQ0FBYUcsS0FBYixDQUFtQixDQUFuQixDQUE5RDtBQUNBWixVQUFFLFlBQUYsRUFBZ0JRLElBQWhCLENBQXFCLGlCQUFpQlosUUFBUWlCLEVBQTlDO0FBQ0FiLFVBQUUsZ0JBQUYsRUFBb0JRLElBQXBCLENBQXlCLGFBQWFNLEtBQUtDLEtBQUwsQ0FBWW5CLFFBQVFvQixNQUFSLEdBQWlCLE9BQWxCLEdBQTZCLEVBQXhDLENBQWIsR0FBMkQsT0FBcEY7QUFDQWhCLFVBQUUsZ0JBQUYsRUFBb0JRLElBQXBCLENBQXlCLGFBQWFaLFFBQVFxQixNQUFSLEdBQWlCLEVBQTlCLEdBQW1DLElBQTVEO0FBQ0wsT0FYdUQsQ0FXdERDLElBWHNELENBV2pELElBWGlELENBQXBEO0FBWUE7QUFDSDs7O29DQUNpQjtBQUNkaEIsY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxJQUFLLHlCQUF5QixLQUFLTCxVQUFMLENBQWdCb0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBOUIsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLDhCQUFDLGFBQUQsSUFBZSxTQUFTLEtBQUt2QixLQUFMLENBQVdFLE9BQW5DO0FBREYsU0FGRjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLDhCQUFDLE9BQUQsSUFBUyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0UsT0FBN0IsRUFBc0MsWUFBWSxLQUFLc0IsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEQ7QUFERjtBQUxGLE9BREY7QUFXRDs7OztFQTdDZUUsTUFBTUMsUzs7QUErQ3hCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7QUFDQUMsT0FBT2pDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBva2Vtb246IHByb3BzWzBdLFxuICAgICAgcG9rZWRleDogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQb2tlbW9uKCdzcXVpcnRsZScpO1xuICB9O1xuXG4gIGdldFBva2Vtb24ocXVlcnkpIHtcbiAgICAkLnBvc3QoYGh0dHA6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cXVlcnl9YCwgZnVuY3Rpb24ocG9rZW1vbikge1xuICAgICAgY29uc29sZS5sb2cocG9rZW1vbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9rZW1vbjogcG9rZW1vbixcbiAgICAgICAgcG9rZWRleDogcG9rZW1vblxuICAgICAgfSlcbiAgICAgICQoJy5wb2tlbW9uSW1hZ2UnKS5hdHRyKCdzcmMnLCBwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCk7XG4gICAgICAkKCcucG9rZW1vbk5hbWUnKS50ZXh0KHBva2Vtb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBva2Vtb24ubmFtZS5zbGljZSgxKSk7XG4gICAgICAkKCcucG9rZW1vbklkJykudGV4dCgnUG9rw6lkZXggSUQ6ICcgKyBwb2tlbW9uLmlkKTtcbiAgICAgICQoJy5wb2tlbW9uV2VpZ2h0JykudGV4dCgnV2VpZ2h0OiAnICsgTWF0aC5yb3VuZCgocG9rZW1vbi53ZWlnaHQgKiAyLjIwNDYyKSAvIDEwKSArICcgbGJzLicpO1xuICAgICAgJCgnLnBva2Vtb25IZWlnaHQnKS50ZXh0KCdIZWlnaHQ6ICcgKyBwb2tlbW9uLmhlaWdodCAvIDEwICsgJyBtJyk7XG59LmJpbmQodGhpcykpO1xuICAgIC8vIEZpbGwgdGhlIGNhcmQgbGlzdCB3aXRoIGRhdGEgZnJvbSB0aGUgQVBJLCBhbmQgU2V0IHRoZSBDdXJyZW50IENhcmRcbn07XG4gIGNoYW5nZVBva2Vtb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBQb2tlbW9uJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZT17dGhpcy5nZXRQb2tlbW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8UG9rZW1vblZpZXdlciBwb2tlbW9uPXt0aGlzLnN0YXRlLnBva2VkZXh9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgPFBva2VkZXggcG9rZW1vbj17dGhpcy5zdGF0ZS5wb2tlZGV4fSBjbGlja0V2ZW50PXt0aGlzLmNoYW5nZVBva2Vtb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==