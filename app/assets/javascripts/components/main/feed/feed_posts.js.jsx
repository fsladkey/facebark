var FeedPosts = React.createClass({

  render: function () {
    return (
      <ul className="post-list">
        {
          this.props.posts.map(function(post) {
            return <PostDetail post={post} key={post.id}/>;
          })
        }
      </ul>
    );
  },

});
