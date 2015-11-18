var About = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user(), content: "Info"};
  },

  componentDidMount: function() {
    UserStore.on("change", this._change);
    var username = this.props.params.username;
    if (username && !(UserStore.user())) {
      UserApiUtil.fetchUser(username);
    }
  },
  
  componentWillUnmount: function() {
    UserStore.removeListener("change", this._change);
  },

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.params.username);
  },

  handleClick: function (e) {
    this.setState({content: e.currentTarget.innerHTML});
  },

  render: function() {
    var content;
    if (this.state.content === "Info") {
      content = <ProfileInfo user={this.state.user}/>;
    } else {
      content = <ProfileBio user={this.state.user}/>;
    }
      return (
        <div className="about">
          <h1>About</h1>
          <div className="about-info" >
            <ul className="about-choices">
              <li onClick={this.handleClick}>
                Info
              </li>

              <li onClick={this.handleClick}>
                Bio
              </li>
            </ul>
            {content}
          </div>
        </div>
      );
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }

});
