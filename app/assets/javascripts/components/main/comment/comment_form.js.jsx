var CommentForm = React.createClass({

  getInitialState: function () {
    return {body: ""};
  },

  handleChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = {commentable_id: this.props.post.id, commentable_type: "Post", body: this.state.body};
    PostCommentApiUtil.createComment(params, this.props.postType);
    this.setState({body: ""});
  },

  componentDidUpdate: function () {
    if (this.props.focused) {
      this.refs.commentInput.getDOMNode().focus();
      this.props.focusComment();
    }
  },

  render: function () {
    return (
      <div className="group">
        <form onSubmit={this.handleSubmit}>
          <img className= "profile_thumbnail" src={SessionStore.currentUser().profile_image_url}/>
          <input
            ref="commentInput"
            onChange={this.handleChange}
            className="comment-input"
            value={this.state.body}
            placeholder="Write a comment"
            />
        </form>
      </div>
    );
  }

});
