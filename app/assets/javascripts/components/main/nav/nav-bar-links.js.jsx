var NavBarLinks = React.createClass({

  componentWillReceiveProps: function() {
    this.forceUpdate();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var currentUser = SessionStore.currentUser();
    // <li>
    //   <MessagesPreview currentUser={currentUser}/>
    // </li>
    return (
      <ul className="nav-user-profile-links">
        <li>
          <Link to={ "/" + currentUser.username } className="profile-link">
            <img className="nav-thumbnail" src={currentUser.thumb_url} />
            { currentUser.firstname }
          </Link>
        </li>
        <li className="home-link">
          <Link to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <FriendRequests currentUser={currentUser}/>
        </li>
        <li>
          <Notifications history={this.props.history} currentUser={currentUser}/>
        </li>
        <li>
          <LogOutForm currentUser={currentUser}/>
        </li>
      </ul>
    );
  }
});
