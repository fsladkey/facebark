var LickForm = React.createClass({

  lick: function () {
    PostApiUtil.lickPost(this.props.post.id, this.props.postType);
  },

  unlick: function () {
    PostApiUtil.unlickPost(this.props.post.id, this.props.postType);
  },

  handleUnlick: function () {
    PostApiUtil.unlickPost(this.props.post.id, this.props.postType);
  },

  render: function () {
    if (post.licked) {
      return (
        <div>
          <button className="post-licked" onClick={this.unlick}>Licked</button>
          <button onClick={this.focusComment}>Comment</button>
        </div>
      );
    } else {
      return (
      <div>
        <button onClick={this.lick}>Lick</button>
        <button onClick={this.focusComment}>Comment</button>
      </div>
      );
    }
  }

});
