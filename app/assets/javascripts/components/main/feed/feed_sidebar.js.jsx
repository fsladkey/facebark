var FeedSidebar = React.createClass({
  render() {
    var Link = ReactRouter.Link;
    var currentUser = SessionStore.currentUser();
    return (
      <ul className="feed-sidebar">
        <li className="feed-profile-link current-user-link">
          <Link to={ "/" + currentUser.username }>
            <img className="sidebar-icon" src={ currentUser.thumb_url }/>
            <p>{ currentUser.fullname }</p>
          </Link>
        </li>

        <li className="feed-profile-link active">
          <Link to="/">
            <i className="fa fa-newspaper-o sidebar-icon" aria-hidden="true"/>
            <p>News Feed</p>
          </Link>
        </li>

        <li className="feed-profile-link">
          <Link to="/">
            <i className="fa fa-comments sidebar-icon" aria-hidden="true"/>
            <p>Messages</p>
          </Link>
        </li>

        <li className="feed-profile-link twentyforty">
          <Link to="games/twentyfortyeight">
            <img className="sidebar-icon" src="2048-logo.jpg"/>
            <p>2048</p>
          </Link>
        </li>

        <li className="feed-profile-link snake">
          <Link to="games/snake">
            <img className="sidebar-icon" src="snake-logo.png"/>
            <p>Snake</p>
          </Link>
        </li>

      </ul>
    )
  }
})
