var CommentDetail = React.createClass({

  render: function () {
    return (
        <li className="comment-detail group">
          <img className= "profile_thumbnail" src={this.props.comment.user_photo_url}/>
          <p>{this.props.comment.body}</p>
        </li>
    );
  }

});
