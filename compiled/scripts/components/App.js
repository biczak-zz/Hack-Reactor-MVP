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
    key: 'getPokemon',
    value: function getPokemon(query) {
      axios.get('http://pokeapi.co/api/v2/pokemon/' + query).then(function (pokemon) {
        $('#userInput').val(pokemon.data.forms[0].name.charAt(0).toUpperCase() + pokemon.data.forms[0].name.slice(1));
        $('.pokemonImage').attr('src', pokemon.data.sprites.front_default);
        $('.pokemonName').text(pokemon.data.forms[0].name.charAt(0).toUpperCase() + pokemon.data.forms[0].name.slice(1));
        $('.pokemonId').text('Pokédex ID: ' + pokemon.data.id);
        $('.pokemonWeight').text('Weight: ' + Math.round(pokemon.data.weight * 2.20462 / 10) + ' lbs.');
        $('.pokemonHeight').text('Height: ' + pokemon.data.height / 10 + ' m');
      });
    }
  }, {
    key: 'saveToDB',
    value: function saveToDB(pokemon) {
      $.ajax({
        url: '/',
        type: 'POST',
        contentType: 'application/json',
        success: function success(data) {
          console.log('saveToDB');
          return data;
        },
        failure: function failure() {
          alert('post failed');
        }
      });
    }
    //       console.log(pokemon);
    //

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPokemon('squirtle');
    }
  }, {
    key: 'changePokemon',

    // Fill the card list with data from the API, and Set the Current Card

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwb2tlbW9uIiwicG9rZWRleCIsInF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiJCIsInZhbCIsImRhdGEiLCJmb3JtcyIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYXR0ciIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwidGV4dCIsImlkIiwiTWF0aCIsInJvdW5kIiwid2VpZ2h0IiwiaGVpZ2h0IiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbHVyZSIsImFsZXJ0IiwiZ2V0UG9rZW1vbiIsImJpbmQiLCJjaGFuZ2VQb2tlbW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBU0YsTUFBTSxDQUFOLENBREU7QUFFWEcsZUFBUztBQUZFLEtBQWI7QUFIaUI7QUFPbEI7Ozs7K0JBRVVDLEssRUFBTztBQUNoQkMsWUFBTUMsR0FBTix1Q0FBOENGLEtBQTlDLEVBQ0dHLElBREgsQ0FDUSxVQUFVTCxPQUFWLEVBQW1CO0FBQ3JCTSxVQUFFLFlBQUYsRUFBZ0JDLEdBQWhCLENBQW9CUCxRQUFRUSxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBQXRCLENBQTJCQyxNQUEzQixDQUFrQyxDQUFsQyxFQUFxQ0MsV0FBckMsS0FBcURaLFFBQVFRLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQkMsSUFBdEIsQ0FBMkJHLEtBQTNCLENBQWlDLENBQWpDLENBQXpFO0FBQ0FQLFVBQUUsZUFBRixFQUFtQlEsSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0JkLFFBQVFRLElBQVIsQ0FBYU8sT0FBYixDQUFxQkMsYUFBcEQ7QUFDQVYsVUFBRSxjQUFGLEVBQWtCVyxJQUFsQixDQUF1QmpCLFFBQVFRLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQkMsSUFBdEIsQ0FBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDQyxXQUFyQyxLQUFxRFosUUFBUVEsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCQyxJQUF0QixDQUEyQkcsS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBNUU7QUFDQVAsVUFBRSxZQUFGLEVBQWdCVyxJQUFoQixDQUFxQixpQkFBaUJqQixRQUFRUSxJQUFSLENBQWFVLEVBQW5EO0FBQ0FaLFVBQUUsZ0JBQUYsRUFBb0JXLElBQXBCLENBQXlCLGFBQWFFLEtBQUtDLEtBQUwsQ0FBWXBCLFFBQVFRLElBQVIsQ0FBYWEsTUFBYixHQUFzQixPQUF2QixHQUFrQyxFQUE3QyxDQUFiLEdBQWdFLE9BQXpGO0FBQ0FmLFVBQUUsZ0JBQUYsRUFBb0JXLElBQXBCLENBQXlCLGFBQWFqQixRQUFRUSxJQUFSLENBQWFjLE1BQWIsR0FBc0IsRUFBbkMsR0FBd0MsSUFBakU7QUFFTCxPQVREO0FBV0g7Ozs2QkFFVXRCLE8sRUFBUztBQUNoQk0sUUFBRWlCLElBQUYsQ0FBTztBQUNMQyxhQUFLLEdBREE7QUFFTEMsY0FBTSxNQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFTbkIsSUFBVCxFQUFlO0FBQ3RCb0Isa0JBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsaUJBQU9yQixJQUFQO0FBQ0QsU0FQSTtBQVFMc0IsaUJBQVMsbUJBQVc7QUFDbEJDLGdCQUFNLGFBQU47QUFDRDtBQVZJLE9BQVA7QUFZRDtBQUNIO0FBQ0E7Ozs7d0NBRW9CO0FBQ2xCLFdBQUtDLFVBQUwsQ0FBZ0IsVUFBaEI7QUFDRDs7OztBQUNHOztvQ0FFYztBQUNkSixjQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELElBQUsseUJBQXlCLEtBQUtHLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQTlCLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSw4QkFBQyxhQUFELElBQWUsU0FBUyxLQUFLbEMsS0FBTCxDQUFXRSxPQUFuQztBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSw4QkFBQyxPQUFELElBQVMsU0FBUyxLQUFLRixLQUFMLENBQVdFLE9BQTdCLEVBQXNDLFlBQVksS0FBS2lDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBQWxEO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUE5RGVFLE1BQU1DLFM7O0FBZ0V4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCO0FBQ0FDLE9BQU81QyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb2tlbW9uOiBwcm9wc1swXSxcbiAgICAgIHBva2VkZXg6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGdldFBva2Vtb24ocXVlcnkpIHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cXVlcnl9YClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChwb2tlbW9uKSB7XG4gICAgICAgICAgJCgnI3VzZXJJbnB1dCcpLnZhbChwb2tlbW9uLmRhdGEuZm9ybXNbMF0ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBva2Vtb24uZGF0YS5mb3Jtc1swXS5uYW1lLnNsaWNlKDEpKVxuICAgICAgICAgICQoJy5wb2tlbW9uSW1hZ2UnKS5hdHRyKCdzcmMnLCBwb2tlbW9uLmRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0KTtcbiAgICAgICAgICAkKCcucG9rZW1vbk5hbWUnKS50ZXh0KHBva2Vtb24uZGF0YS5mb3Jtc1swXS5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcG9rZW1vbi5kYXRhLmZvcm1zWzBdLm5hbWUuc2xpY2UoMSkpO1xuICAgICAgICAgICQoJy5wb2tlbW9uSWQnKS50ZXh0KCdQb2vDqWRleCBJRDogJyArIHBva2Vtb24uZGF0YS5pZCk7XG4gICAgICAgICAgJCgnLnBva2Vtb25XZWlnaHQnKS50ZXh0KCdXZWlnaHQ6ICcgKyBNYXRoLnJvdW5kKChwb2tlbW9uLmRhdGEud2VpZ2h0ICogMi4yMDQ2MikgLyAxMCkgKyAnIGxicy4nKTtcbiAgICAgICAgICAkKCcucG9rZW1vbkhlaWdodCcpLnRleHQoJ0hlaWdodDogJyArIHBva2Vtb24uZGF0YS5oZWlnaHQgLyAxMCArICcgbScpO1xuXG4gICAgfSk7XG5cbn07XG5cbiAgc2F2ZVRvREIocG9rZW1vbikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlVG9EQicpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0sXG4gICAgICBmYWlsdXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYWxlcnQoJ3Bvc3QgZmFpbGVkJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4vLyAgICAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcbi8vXG5cbmNvbXBvbmVudERpZE1vdW50KCkge1xuICB0aGlzLmdldFBva2Vtb24oJ3NxdWlydGxlJyk7XG59O1xuICAgIC8vIEZpbGwgdGhlIGNhcmQgbGlzdCB3aXRoIGRhdGEgZnJvbSB0aGUgQVBJLCBhbmQgU2V0IHRoZSBDdXJyZW50IENhcmRcblxuICBjaGFuZ2VQb2tlbW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2UgUG9rZW1vbicpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2U9e3RoaXMuZ2V0UG9rZW1vbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgPFBva2Vtb25WaWV3ZXIgcG9rZW1vbj17dGhpcy5zdGF0ZS5wb2tlZGV4fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgIDxQb2tlZGV4IHBva2Vtb249e3RoaXMuc3RhdGUucG9rZWRleH0gY2xpY2tFdmVudD17dGhpcy5jaGFuZ2VQb2tlbW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=