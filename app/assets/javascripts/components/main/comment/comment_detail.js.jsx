var CommentDetail = React.createClass({

  lick: function () {
    CommentApiUtil.lickComment(this.props.comment.id, this.props.postType);
  },

  unlick: function () {
    CommentApiUtil.unlickComment(this.props.comment.id, this.props.postType);
  },

  render: function () {
    var comment = this.props.comment,
        numLicks,
        button;

    if (comment.num_licks > 0) {
      numLicks = <span><img src="lick2.png"/>{this.props.comment.num_licks}</span>;
    }
    if (comment.licked) {
      button = <button onClick={this.unlick} className="comment-lick-button">Unlick</button>;
    } else {
      button = <button onClick={this.lick} className="comment-lick-button">Lick</button>;
    }
    return (
        <li className="comment-detail group">
          <img className= "profile_thumbnail" src={this.props.comment.user_photo_url}/>
          <p>{this.props.comment.body}</p>
          <div>
          {button}
          {numLicks}
          </div>
        </li>
    );
  }

});
