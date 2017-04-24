class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: ''
    };
  }

    handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }

    handleClick() {
      this.props.handleSearchInputChange(this.refs.cardToSearch.value);
    }

    render() {
      return (
        <div className="search-bar form-inline">
          <input className="form-control userInput" ref="cardToSearch" type="text" value={this.state.value} onChange={this.handleInputChange.bind(this)} />
          <button className="btn hidden-sm-down" onClick={() => this.handleClick()} >
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      )
    }
  }
window.Search = Search;
