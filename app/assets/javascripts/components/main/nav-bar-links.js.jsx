var NavBarLinks = React.createClass({

  componentWillReceiveProps: function() {
    this.forceUpdate();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var currentUser = SessionStore.currentUser();
    return (
      <div className="nav-user-profile-links">

        <Link to={ "/" + currentUser.username } className="profile-link nav-link">
          <img className="nav-thumbnail" src={currentUser.thumb_url} />
          { currentUser.firstname }
        </Link>

        <Link to={"/"} className="home-link nav-link">
          Home
        </Link>

        <FriendRequests currentUser={currentUser}/>
        <Notifications history={this.props.history} currentUser={currentUser}/>

        <form action="/session" method="POST">
          <input type="hidden" name="_method" value="DELETE"/>
          <input type="hidden" name="authenticity_token" value={ FaceBarkAssets.authToken }/>
          <button type="submit" className="nav-log-out-button">
            Log Out
          </button>
        </form>
      </div>
    );
  }
});
