var FeedPosts = React.createClass({

  render: function () {
    if (this.props.fetching) return <Spinner />;
    return (
      <ul className="post-list">
        {
          this.props.posts.map(function (post) {
            return <PostDetail postType="feed" post={post} key={post.id}/>;
          })
        }
      </ul>
    );
  },

});
