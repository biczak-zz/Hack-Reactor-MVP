var Nav = ({ handleSearchInputChange }) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInputChange={handleSearchInputChange} />
    </div>
  </nav>
);

window.Nav = Nav;
