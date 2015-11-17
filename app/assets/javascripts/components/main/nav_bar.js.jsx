var NavBar = React.createClass({

  render: function() {
    return (
      <div className="nav-bar group">
        <h1 className="small-logo">
          <img src="/fbtemplogo.png" alt="rss feed" />
        </h1>
        <SearchBar/>
        <NavBarLinks
          currentUser={this.props.currentUser}
          />
      </div>
    );
  }
});
