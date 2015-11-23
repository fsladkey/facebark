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

  componentWillReceiveProps: function (newProps) {
    FeedApiUtil.fetchPosts(newProps.currentUser.id);
  },

  render: function() {
    return (
      <div>
        <div className="feed-page">
          <PostForm profile={this.props.currentUser.profile} currentUser={this.props.currentUser}/>
          <FeedPosts posts={this.state.posts} currentUser={this.props.currentUser}/>
        </div>
      </div>
    );
  },

  _change: function () {
    this.setState({posts: PostStore.all()});
  }

});
