var CommentForm = React.createClass({

  getInitialState: function () {
    return {body: ""};
  },

  handleChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function () {
    var params = {commentable_id: this.props.post.id, commentable_type: "Post", body: this.state.body};
    CommentApiUtil.createComment(params, this.props.postType);
    this.setState({body: ""});
  },

  render: function () {
    return (
      <div className="group">
        <form onSubmit={this.handleSubmit}>
          <img className= "profile_thumbnail" src={SessionStore.currentUser().profile_image_url}/>
          <input onChange={this.handleChange} className="comment-input" value={this.state.body} placeholder="Write a comment"/>
        </form>
      </div>
    );
  }

});
