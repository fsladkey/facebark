var FeedSidebar = React.createClass({
  render() {
    const currentUser = SessionStore.currentUser();
    return (
      <ul className="feed-sidebar">
        <li className="feed-profile-link group">
          <ReactRouter.Link to={ "/" + currentUser.username }>
            <div className="feed-profile-link">
              <img className="feed-thumbnail" src={ currentUser.profile_image_url }/>
              <span className="feed-current-user-name">
                { currentUser.fullname }
              </span>
            </div>
          </ReactRouter.Link>
        </li>

        <li className="feed-profile-link twentyforty group">
          <ReactRouter.Link to="games/twentyfortyeight">
            <div className="group feed-profile-link">
              <img className="feed-thumbnail" src="2048-logo.jpg"/>
              <p className="feed-current-user-name">2048</p>
            </div>
          </ReactRouter.Link>
        </li>

        <li className="feed-profile-link snake group">
          <ReactRouter.Link to="games/snake">
            <div className="group feed-profile-link">
              <img className="feed-thumbnail" src="snake-logo.jpg"/>
              <p className="feed-current-user-name">Snake</p>
            </div>
          </ReactRouter.Link>
        </li>

      </ul>
    )
  }
})
