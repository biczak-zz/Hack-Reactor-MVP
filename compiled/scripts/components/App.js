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
      var _this2 = this;

      // Fill the card list with data from the API, and Set the Current Card
      window.searchPokemonAPI(query, function (pokemon) {
        _this2.setState({
          pokemon: pokemon,
          pokedex: pokemon
        });
        $('.pokemonImage').attr('src', pokemon.sprites.front_default);
        $('.pokemonName').text(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
        $('.pokemonId').text('Pokédex ID: ' + pokemon.id);
        $('.pokemonWeight').text('Weight: ' + Math.round(pokemon.weight * 2.20462 / 10) + ' lbs.');
        $('.pokemonHeight').text('Height: ' + pokemon.height / 10 + ' m');
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwb2tlbW9uIiwicG9rZWRleCIsImdldFBva2Vtb24iLCJxdWVyeSIsIndpbmRvdyIsInNlYXJjaFBva2Vtb25BUEkiLCJzZXRTdGF0ZSIsIiQiLCJhdHRyIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJ0ZXh0IiwibmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpZCIsIk1hdGgiLCJyb3VuZCIsIndlaWdodCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiY2hhbmdlUG9rZW1vbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVNGLE1BQU0sQ0FBTixDQURFO0FBRVhHLGVBQVM7QUFGRSxLQUFiO0FBSGlCO0FBT2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLQyxVQUFMLENBQWdCLFVBQWhCO0FBQ0Q7OzsrQkFFVUMsSyxFQUFPO0FBQUE7O0FBQ2hCO0FBQ0FDLGFBQU9DLGdCQUFQLENBQXdCRixLQUF4QixFQUErQixVQUFDSCxPQUFELEVBQWE7QUFDMUMsZUFBS00sUUFBTCxDQUFjO0FBQ1pOLG1CQUFTQSxPQURHO0FBRVpDLG1CQUFTRDtBQUZHLFNBQWQ7QUFJQU8sVUFBRSxlQUFGLEVBQW1CQyxJQUFuQixDQUF3QixLQUF4QixFQUErQlIsUUFBUVMsT0FBUixDQUFnQkMsYUFBL0M7QUFDQUgsVUFBRSxjQUFGLEVBQWtCSSxJQUFsQixDQUF1QlgsUUFBUVksSUFBUixDQUFhQyxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixLQUF1Q2QsUUFBUVksSUFBUixDQUFhRyxLQUFiLENBQW1CLENBQW5CLENBQTlEO0FBQ0FSLFVBQUUsWUFBRixFQUFnQkksSUFBaEIsQ0FBcUIsaUJBQWlCWCxRQUFRZ0IsRUFBOUM7QUFDQVQsVUFBRSxnQkFBRixFQUFvQkksSUFBcEIsQ0FBeUIsYUFBYU0sS0FBS0MsS0FBTCxDQUFZbEIsUUFBUW1CLE1BQVIsR0FBaUIsT0FBbEIsR0FBNkIsRUFBeEMsQ0FBYixHQUEyRCxPQUFwRjtBQUNBWixVQUFFLGdCQUFGLEVBQW9CSSxJQUFwQixDQUF5QixhQUFhWCxRQUFRb0IsTUFBUixHQUFpQixFQUE5QixHQUFtQyxJQUE1RDtBQUNELE9BVkQ7QUFXRDs7O29DQUVlO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsSUFBSyx5QkFBeUIsS0FBS3BCLFVBQUwsQ0FBZ0JxQixJQUFoQixDQUFxQixJQUFyQixDQUE5QixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsYUFBRCxJQUFlLFNBQVMsS0FBS3hCLEtBQUwsQ0FBV0UsT0FBbkM7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUE3QixFQUFzQyxZQUFZLEtBQUt1QixhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFsRDtBQURGO0FBTEYsT0FERjtBQVdEOzs7O0VBN0NlRSxNQUFNQyxTOztBQStDeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QjtBQUNBMUIsT0FBT1AsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBva2Vtb246IHByb3BzWzBdLFxuICAgICAgcG9rZWRleDogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQb2tlbW9uKCdzcXVpcnRsZScpO1xuICB9O1xuXG4gIGdldFBva2Vtb24ocXVlcnkpIHtcbiAgICAvLyBGaWxsIHRoZSBjYXJkIGxpc3Qgd2l0aCBkYXRhIGZyb20gdGhlIEFQSSwgYW5kIFNldCB0aGUgQ3VycmVudCBDYXJkXG4gICAgd2luZG93LnNlYXJjaFBva2Vtb25BUEkocXVlcnksIChwb2tlbW9uKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9rZW1vbjogcG9rZW1vbixcbiAgICAgICAgcG9rZWRleDogcG9rZW1vblxuICAgICAgfSlcbiAgICAgICQoJy5wb2tlbW9uSW1hZ2UnKS5hdHRyKCdzcmMnLCBwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCk7XG4gICAgICAkKCcucG9rZW1vbk5hbWUnKS50ZXh0KHBva2Vtb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBva2Vtb24ubmFtZS5zbGljZSgxKSk7XG4gICAgICAkKCcucG9rZW1vbklkJykudGV4dCgnUG9rw6lkZXggSUQ6ICcgKyBwb2tlbW9uLmlkKTtcbiAgICAgICQoJy5wb2tlbW9uV2VpZ2h0JykudGV4dCgnV2VpZ2h0OiAnICsgTWF0aC5yb3VuZCgocG9rZW1vbi53ZWlnaHQgKiAyLjIwNDYyKSAvIDEwKSArICcgbGJzLicpO1xuICAgICAgJCgnLnBva2Vtb25IZWlnaHQnKS50ZXh0KCdIZWlnaHQ6ICcgKyBwb2tlbW9uLmhlaWdodCAvIDEwICsgJyBtJyk7XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBva2Vtb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBQb2tlbW9uJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZT17dGhpcy5nZXRQb2tlbW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8UG9rZW1vblZpZXdlciBwb2tlbW9uPXt0aGlzLnN0YXRlLnBva2VkZXh9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgPFBva2VkZXggcG9rZW1vbj17dGhpcy5zdGF0ZS5wb2tlZGV4fSBjbGlja0V2ZW50PXt0aGlzLmNoYW5nZVBva2Vtb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==