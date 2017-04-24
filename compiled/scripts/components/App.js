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
      this.getPokemon('Squirtle');
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

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwb2tlbW9uIiwicG9rZWRleCIsImdldFBva2Vtb24iLCJxdWVyeSIsIndpbmRvdyIsInNlYXJjaFBva2Vtb25BUEkiLCJzZXRTdGF0ZSIsIiQiLCJhdHRyIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImNoYW5nZVBva2Vtb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTRixNQUFNLENBQU4sQ0FERTtBQUVYRyxlQUFTO0FBRkUsS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsVUFBTCxDQUFnQixVQUFoQjtBQUNEOzs7K0JBRVVDLEssRUFBTztBQUFBOztBQUNoQjtBQUNBQyxhQUFPQyxnQkFBUCxDQUF3QkYsS0FBeEIsRUFBK0IsVUFBQ0gsT0FBRCxFQUFhO0FBQzFDLGVBQUtNLFFBQUwsQ0FBYztBQUNaTixtQkFBU0EsT0FERztBQUVaQyxtQkFBU0Q7QUFGRyxTQUFkO0FBSUFPLFVBQUUsZUFBRixFQUFtQkMsSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0JSLFFBQVFTLE9BQVIsQ0FBZ0JDLGFBQS9DO0FBQ0QsT0FORDtBQU9EOzs7b0NBRWU7QUFDZEMsY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxJQUFLLHlCQUF5QixLQUFLVixVQUFMLENBQWdCVyxJQUFoQixDQUFxQixJQUFyQixDQUE5QixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsYUFBRCxJQUFlLFNBQVMsS0FBS2QsS0FBTCxDQUFXRSxPQUFuQztBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSw4QkFBQyxPQUFELElBQVMsU0FBUyxLQUFLRixLQUFMLENBQVdFLE9BQTdCLEVBQXNDLFlBQVksS0FBS2EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEQ7QUFERjtBQUxGLE9BREY7QUFXRDs7OztFQXpDZUUsTUFBTUMsUzs7QUE0Q3hCWixPQUFPUCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9rZW1vbjogcHJvcHNbMF0sXG4gICAgICBwb2tlZGV4OiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFBva2Vtb24oJ1NxdWlydGxlJyk7XG4gIH07XG5cbiAgZ2V0UG9rZW1vbihxdWVyeSkge1xuICAgIC8vIEZpbGwgdGhlIGNhcmQgbGlzdCB3aXRoIGRhdGEgZnJvbSB0aGUgQVBJLCBhbmQgU2V0IHRoZSBDdXJyZW50IENhcmRcbiAgICB3aW5kb3cuc2VhcmNoUG9rZW1vbkFQSShxdWVyeSwgKHBva2Vtb24pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb2tlbW9uOiBwb2tlbW9uLFxuICAgICAgICBwb2tlZGV4OiBwb2tlbW9uXG4gICAgICB9KVxuICAgICAgJCgnLnBva2Vtb25JbWFnZScpLmF0dHIoJ3NyYycsIHBva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0KTtcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlUG9rZW1vbigpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIFBva2Vtb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFBva2Vtb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxQb2tlbW9uVmlld2VyIHBva2Vtb249e3RoaXMuc3RhdGUucG9rZWRleH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICA8UG9rZWRleCBwb2tlbW9uPXt0aGlzLnN0YXRlLnBva2VkZXh9IGNsaWNrRXZlbnQ9e3RoaXMuY2hhbmdlUG9rZW1vbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19