var PostForm = React.createClass({

  getInitialState: function () {
    return { body: "", highlight: false };
  },

  handleFocus: function (bool) {
    this.setState({ highlight: bool });
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
    var placeholder = currentUser.id == this.props.profile.id ?
      "What's on your mind?" :
      "Write something";

    return (
      <Highlightable highlight={ this.state.highlight }>
        <div className="post-form group">
          <div className="style-div" aria-hidden="true"/>
          <form onSubmit={ this.handleSubmit }>
            <div className="post-form-container">
              <img className="post-form-thumbnail" src={ currentUser.thumb_url }/>
              <textarea
                className="post-input"
                onChange={ this.handleChange }
                onFocus={ this.handleFocus.bind(null, true) }
                onBlur={ this.handleFocus.bind(null, false) }
                placeholder={ placeholder }
                value={ this.state.body }>
              </textarea>
            </div>
            <div className="post-submit-button">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </Highlightable>
    );
  }

});
