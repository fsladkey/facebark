const contentStyle = { position: "relative" };
const activeStyle = Object.assign({}, contentStyle, { zIndex: 10001 });

const modalStyle = {
  backgroundColor: `rgba(0, 0, 0, 0.25)`,
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10000
};

function Highlightable({ highlight, children }) {
  let modalLayer;
  let style = contentStyle
  if (highlight) {
    style = activeStyle;
    modalLayer = <div ref={ (node) => node && fadeIn(node) } style={ modalStyle }/>;
  }

  return (
    <div>
      { modalLayer }
      <div style={ style }>
        { children }
      </div>
    </div>
  )
}

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
    const { body } = state;
    var params = {body: this.state.body, profile_id: this.props.profile.id};
    this.setState({body: ""});
    PostApiUtil.createPost(params, this.props.postType);
  },

  render: function() {
    const currentUser = SessionStore.currentUser();
    return (
      <Highlightable highlight={ this.state.highlight }>
        <div className="post-form group">
          <div className="style-div"></div>
          <img className="profile_thumbnail" src={ currentUser.thumb_url }/>
          <form onSubmit={ this.handleSubmit }>
            <textarea
              className="post-input"
              onChange={ this.handleChange }
              onFocus={ () => this.handleFocus(true) }
              onBlur={ () => this.handleFocus(false) }
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
