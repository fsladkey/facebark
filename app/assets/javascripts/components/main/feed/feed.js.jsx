var Feed = React.createClass({

  getInitialState: function () {
    return { posts: PostStore.all() };
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    FeedApiUtil.fetchPosts(SessionStore.currentUser().id);
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

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
            <ReactRouter.Link to="games/twentyfortyeight">
              <div className="group feed-profile-link">
                <img className="feed-thumbnail" src="2048-logo.jpg"/>
                <p className="feed-current-user-name">2048</p>
              </div>
            </ReactRouter.Link>
          </div>

          <div className="feed-profile-link snake group">
            <ReactRouter.Link to="games/snake">
              <div className="group feed-profile-link">
                <img className="feed-thumbnail" src="snake-logo.jpg"/>
                <p className="feed-current-user-name">Snake</p>
              </div>
            </ReactRouter.Link>
          </div>

        </div>

        <div className="feed-page">
          <PostForm postType="feed" profile={currentUser.profile} currentUser={currentUser}/>
          <FeedPosts posts={this.state.posts} currentUser={currentUser}/>
        </div>
        <SponseredPost />

      </div>
    );
  },

  _change: function () {
    this.setState({posts: PostStore.all()});
  }

});
