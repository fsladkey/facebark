var NavBar = React.createClass({

  render: function() {
    return (
      <div className="nav-bar-full group">
        <div className="nav-bar group">
          <ReactRouter.Link to="/">
            <button></button>
            <h1 className="small-logo">
            </h1>
          </ReactRouter.Link>

          <SearchBar/>
          <NavBarLinks history={ this.props.history } />
        </div>
      </div>
    );
  }
});
