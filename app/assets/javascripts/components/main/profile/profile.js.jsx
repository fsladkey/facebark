var Profile = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user()};
  },

  componentDidMount: function() {
    var username = this.props.params.username;
    UserStore.on("change", this._change);
    if (username) {
      UserApiUtil.fetchUser(username);
    }
  },

  componentWillUnmount: function() {
    UserStore.removeListener("change", this._change);
  },

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.params.username);
  },

  render: function() {
    return (
      <div className="profile-page group">
        <ProfileHeader user={ this.state.user }/>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  },

  _change: function() {
    this.setState({ user: UserStore.user() });
  }
});
