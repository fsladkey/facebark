var NavBarLinks = React.createClass({

  componentWillRecieveProps: function() {
    this.forceUpdate();
  },

  handleLogOut: function () {
    SessionApiUtil.logOut();
  },

  render: function () {
    if (this.props.currentUser) {
      return (
        <div className="nav-user-profile-link group">

          <ReactRouter.Link to={"/" + this.props.currentUser.username}>
            <button className="group">
              <img src="/fbtemplogo.png" alt="rss feed" />
              <span>{this.props.currentUser.firstname}</span>
            </button>
          </ReactRouter.Link>

          <FriendRequests currentUser={this.props.currentUser}/>

          <ReactRouter.Link to={"/"}>
          <button
            className="nav-log-out-button"
            onClick={this.handleLogOut}>
            Log Out
          </button>
          </ReactRouter.Link>
        </div>
      );
    }
    else {
      return <div></div>;
    }
  }

});
