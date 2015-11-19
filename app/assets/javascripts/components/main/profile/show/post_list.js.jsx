var PostList = React.createClass({

  getInitialState: function () {
    return {posts: PostStore.all()};
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    PostApiUtil.fetchPosts(this.props.profile.id);
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

  render: function () {
    return (
      <ul className="post-list">
        {
          this.state.posts.map(function(post) {
            <PostDetail post={post}/>;
          })
        }
      </ul>
    );
  },

  _change: function () {
    this.setState({posts: PostStore.all()});
  }

});
