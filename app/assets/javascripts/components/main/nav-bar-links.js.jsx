var NavBarLinks = React.createClass({

  componentWillReceiveProps: function() {
    this.forceUpdate();
  },

  render: function () {
    const currentUser = SessionStore.currentUser();
    return (
      <div className="nav-user-profile-link">

        <ReactRouter.Link to={ "/" + currentUser.username }>
          <img className="nav-thumbnail" src={currentUser.thumb_url}/>
          <span>{currentUser.firstname}</span>
        </ReactRouter.Link>

        <ReactRouter.Link to={"/"}>
          <button className="group">
            <span>Home</span>
          </button>
        </ReactRouter.Link>

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
