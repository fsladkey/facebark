var PostForm = React.createClass({

  getInitialState: function () {
    return { body: "", focused: false };
  },

  handleFocus: function (bool) {
    this.setState({focused: bool});
  },

  handleChange: function (e) {
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    const { body } = state;
    var params = {body: this.state.body, profile_id: this.props.profile.id};
    this.setState({body: ""});
    PostApiUtil.createPost(params, this.props.postType);
  },

  modalLayer: function() {
    if (this.state.focused) {
      return <div className="post-form-modal"></div>
    }
  },

  render: function() {
    const currentUser = SessionStore.currentUser();
    var submit;
    if (this.state.showSubmit) {
      submit = (
        <div className="post-submit-button group">
          <button type="submit">Post</button>
        </div>
      );
    }
    return (
      <div>
        { this.modalLayer() }
        <div className="post-form group">
          <div className="style-div"></div>
          <img className="profile_thumbnail" src={currentUser.profile_image_url}/>
          <form onSubmit={ this.handleSubmit }>
            <textarea
              className="post-input"
              onChange={this.handleChange}
              onFocus={() => this.handleFocus(true) }
              onBlur={() => this.handleFocus(false)}
              placeholder="What's on your mind?"
              value={this.state.body}>
            </textarea>
            { submit }
          </form>
        </div>
      </div>
    );
  }

});
