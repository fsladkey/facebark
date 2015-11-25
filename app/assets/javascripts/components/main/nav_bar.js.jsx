var NavBar = React.createClass({

  render: function() {
    return (
      <div className="nav-bar-full group">
        <div className="nav-bar group">
          <ReactRouter.Link to="/">
            <h1 className="small-logo">
              <img src="/fbtemplogo.png" alt="rss feed" />
            </h1>
          </ReactRouter.Link>

          <SearchBar/>
          <NavBarLinks
            history={this.props.history}
            currentUser={this.props.currentUser}
            />
        </div>
      </div>
    );
  }
});
