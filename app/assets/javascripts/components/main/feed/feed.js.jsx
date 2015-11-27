var Feed = React.createClass({


  getInitialState: function () {
    return {posts: PostStore.all()};
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    FeedApiUtil.fetchPosts(this.props.currentUser.id);
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

  render: function() {
    if (SessionStore.currentUser()) {
      return (
        <div className="group">

          <div className="feed-sidebar">
            <div className="feed-profile-link">
              <ReactRouter.Link to={"/" + this.props.currentUser.username}>
                <div className="group feed-profile-link">
                  <img className="feed-thumbnail" src={this.props.currentUser.profile_image_url}/>
                  <p className="feed-current-user-name">{this.props.currentUser.firstname + " " + this.props.currentUser.lastname}</p>
                </div>
              </ReactRouter.Link>
            </div>
          </div>

          <div className="feed-page">
            <PostForm postType="feed" profile={this.props.currentUser.profile} currentUser={this.props.currentUser}/>
            <FeedPosts posts={this.state.posts} currentUser={this.props.currentUser}/>
          </div>
          <SponseredPost />

        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _change: function () {
    this.setState({posts: PostStore.all()});
  }

});
