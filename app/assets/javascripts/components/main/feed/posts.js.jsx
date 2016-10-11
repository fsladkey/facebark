var Posts = React.createClass({

  render: function() {
    const currentUser = SessionStore.currentUser();
    return (
      <div className="group">

        <div className="feed-sidebar">
          <div className="feed-profile-link group">
            <ReactRouter.Link to={"/" + currentUser.username}>
              <div className="group feed-profile-link">
                <img className="feed-thumbnail" src={currentUser.profile_image_url}/>
                <p className="feed-current-user-name">{currentUser.firstname + " " + currentUser.lastname}</p>
              </div>
            </ReactRouter.Link>
          </div>

          <div className="feed-profile-link twentyforty group">
            <ReactRouter.Link to="games/twentyfortyeight" className="group feed-profile-link">
              <img className="feed-thumbnail" src="2048-logo.jpg"/>
              <span className="feed-current-user-name">2048</span>
            </ReactRouter.Link>
          </div>

          <div className="feed-profile-link snake group">
            <ReactRouter.Link to="games/snake" className="group feed-profile-link">
              <img className="feed-thumbnail" src="snake-logo.jpg"/>
              <span className="feed-current-user-name">Snake</span>
            </ReactRouter.Link>
          </div>

        </div>

        <div className="feed-page">
           { this.props.children }
        </div>
        <SponseredPost />

      </div>
    );
  },
});
