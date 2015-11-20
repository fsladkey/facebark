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

  handleSubmit: function () {
    var params = {body: this.state.body, profile_id: this.props.profile.id};
    PostApiUtil.createPost(params);
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
        <form onSubmit={this.handleSubmit}>
          <img className="profile_thumbnail" src={this.props.currentUser.profile_image_url}/>
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
