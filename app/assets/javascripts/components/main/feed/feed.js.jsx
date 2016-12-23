var Feed = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { posts: PostStore.all(), fetching: PostStore.fetchingFeed() };
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    FeedApiUtil.fetchPosts();
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

  render: function() {
    var currentUser = SessionStore.currentUser();
    return (
      <div className="feed-container">
        <FeedSidebar />

        <div className="feed-page">
          <PostForm postType="feed" profile={currentUser.profile} currentUser={currentUser}/>
          <FeedPosts posts={this.state.posts} currentUser={currentUser} fetching={ this.state.fetching }/>
        </div>
        <SponseredPost />
      </div>
    );
  },

  _change: function () {
    this.setState(this.getStateFromStore());
  }

});
