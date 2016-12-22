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
    var currentUser = SessionStore.currentUser();
    return (
      <div className="group">

        <FeedSidebar />

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
