var PostList = React.createClass({

  getInitialState: function () {
    return { posts: PostStore.all() };
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    PostApiUtil.fetchPosts(this.props.profile.id);
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

  componentWillReceiveProps: function (newProps) {
    PostApiUtil.fetchPosts(newProps.profile.id);
  },

  render: function () {
    return (
      <ul className="post-list">
        {
          this.state.posts.map(function (post) {
            return <PostDetail postType={this.props.postType} post={post} key={post.id}/>;
          }.bind(this))
        }
      </ul>
    );
  },

  _change: function () {
    this.setState({ posts: PostStore.all() });
  }

});
