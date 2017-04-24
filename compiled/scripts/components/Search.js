"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.handleSearchInputChange(this.refs.cardToSearch.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        React.createElement("input", { className: "form-control userInput", ref: "cardToSearch", type: "text", value: this.state.value, onChange: this.handleInputChange.bind(this) }),
        React.createElement(
          "button",
          { className: "btn hidden-sm-down", onClick: function onClick() {
              return _this2.handleClick();
            } },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsInRhcmdldCIsInNldFN0YXRlIiwicmVmcyIsImNhcmRUb1NlYXJjaCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFXO0FBQ1RDLGFBQU87QUFERSxLQUFYO0FBRmlCO0FBS2xCOzs7O3NDQUVtQkMsQyxFQUFHO0FBQ25CLFdBQUtILEtBQUwsQ0FBV0ksdUJBQVgsQ0FBbUNELEVBQUVFLE1BQUYsQ0FBU0gsS0FBNUM7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWkosZUFBT0MsRUFBRUUsTUFBRixDQUFTSDtBQURKLE9BQWQ7QUFHRDs7O2tDQUVhO0FBQ1osV0FBS0YsS0FBTCxDQUFXSSx1QkFBWCxDQUFtQyxLQUFLRyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJOLEtBQTFEO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFLHVDQUFPLFdBQVUsd0JBQWpCLEVBQTBDLEtBQUksY0FBOUMsRUFBNkQsTUFBSyxNQUFsRSxFQUF5RSxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBM0YsRUFBa0csVUFBVSxLQUFLTyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBNUcsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVM7QUFBQSxxQkFBTSxPQUFLQyxXQUFMLEVBQU47QUFBQSxhQUFoRDtBQUNFLHdDQUFNLFdBQVUsNEJBQWhCO0FBREY7QUFGRixPQURGO0FBUUQ7Ozs7RUE1QmdCQyxNQUFNQyxTOztBQThCM0JDLE9BQU9mLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfVxuXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2hJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UodGhpcy5yZWZzLmNhcmRUb1NlYXJjaC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB1c2VySW5wdXRcIiByZWY9XCJjYXJkVG9TZWFyY2hcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfSA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19