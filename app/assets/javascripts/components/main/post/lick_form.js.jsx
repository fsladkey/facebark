var LickForm = React.createClass({

  lick: function () {
    if (this.props.postType === "photo") {
      PhotoApiUtil.lickPhoto(this.props.post.id);
    } else {
      PostApiUtil.lickPost(this.props.post.id);
    }
  },

  unlick: function () {
    if (this.props.postType === "photo") {
      PhotoApiUtil.unlickPhoto(this.props.post.id);
    } else {
      PostApiUtil.unlickPost(this.props.post.id);
    }
  },

  handleUnlick: function () {
    PostApiUtil.unlickPost(this.props.post.id, this.props.postType);
  },

  focusComment: function() {
    this.props.focusComment();
  },

  render: function () {
    if (this.props.post.licked) {
      return (
        <div>
          <button className="post-licked" onClick={this.unlick}><img src="lick.png"/>Licked</button>
          <button onClick={this.focusComment}><img src="comment.png"/>Comment</button>
        </div>
      );
    } else {
      return (
      <div>
        <button onClick={this.lick}><img src="unlick.png"/>Lick</button>
        <button onClick={this.focusComment}><img src="comment.png"/>Comment</button>
      </div>
      );
    }
  }

});
