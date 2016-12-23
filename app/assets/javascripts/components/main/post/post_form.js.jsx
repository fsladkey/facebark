var PostForm = React.createClass({

  getInitialState: function () {
    return { body: "", highlight: false };
  },

  handleFocus: function (bool) {
    this.setState({ highlight: bool });
    console.log(bool);
  },

  handleChange: function (e) {
    this.setState({ body: e.currentTarget.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = { body: this.state.body, profile_id: this.props.profile.id };
    PostApiUtil.createPost(params, this.props.postType).then(function () {
      this.setState({ body: "" });
    });
  },

  render: function() {
    var currentUser = SessionStore.currentUser();
    return (
      <Highlightable highlight={ this.state.highlight }>
        <div className="post-form group">
          <div className="style-div"></div>
          <img className="post-form-thumbnail" src={ currentUser.thumb_url }/>
          <form onSubmit={ this.handleSubmit }>
            <textarea
              className="post-input"
              onChange={ this.handleChange }
              onFocus={ this.handleFocus.bind(null, true) }
              onBlur={ this.handleFocus.bind(null, false) }
              placeholder="What's on your mind?"
              value={ this.state.body }>
            </textarea>
            <div className="post-submit-button group">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </Highlightable>
    );
  }

});
