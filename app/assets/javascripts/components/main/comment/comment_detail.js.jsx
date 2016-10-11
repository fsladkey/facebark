var CommentDetail = React.createClass({

  lick: function () {
    if (this.props.postType === "photo") {
      PhotoCommentApiUtil.lickComment(this.props.comment.id);
    } else {
      PostCommentApiUtil.lickComment(this.props.comment.id);
    }
  },

  unlick: function () {
    const apiUtil = (this.props.postType === "photo" ?
      PhotoCommentApiUtil :
      PostCommentApiUtil
    )
    ApiUtil.unlickComment(this.props.comment.id);
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
          { button }
          { numLicks }
          </div>
        </li>
    );
  }

});
