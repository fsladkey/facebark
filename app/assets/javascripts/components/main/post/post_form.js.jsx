var PostForm = React.createClass({

  getInitialState: function () {
    return {body: "", showSubmit: false};
  },

  handleFocus: function () {
    this.setState({showSubmit: true});
  },

  handleChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = {body: this.state.body, profile_id: this.props.profile.id};
    this.setState({body: ""});
    PostApiUtil.createPost(params, this.props.postType);
  },

  render: function() {
    var submit = <div></div>;
    if (this.state.showSubmit) {
      submit = (
        <div className="post-submit-button group">
          <button type="submit">Post</button>
        </div>
      );
    }
    return (
      <div className="post-form group">
        <div className="style-div"></div>
        <img className="profile_thumbnail" src={this.props.currentUser.profile_image_url}/>

        <form onSubmit={this.handleSubmit}>
          <textarea
            className="post-input"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            placeholder="What's on your mind?"
            value={this.state.body}>
          </textarea>
          {submit}
        </form>
      </div>
    );
  }

});
