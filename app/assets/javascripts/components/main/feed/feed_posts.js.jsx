var FeedPosts = React.createClass({

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

  render: function () {
    return (
      <ul className="post-list">
        {
          this.state.posts.map(function(post) {
            return <PostDetail post={post} key={post.id}/>;
          })
        }
      </ul>
    );
  },

  _change: function () {
    this.setState({posts: PostStore.all()});
  }

});
