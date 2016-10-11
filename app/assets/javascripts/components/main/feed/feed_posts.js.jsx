var FeedPosts = React.createClass({

  render: function () {
    return (
      <ul className="post-list">
        {
          this.props.posts.map(post => {
            return <PostDetail postType="feed" post={post} key={post.id}/>;
          })
        }
      </ul>
    );
  },

});
