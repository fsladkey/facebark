var ProfileShow = React.createClass({

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

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.params.username);
  },

  render: function() {
    if (this.state.user) {
      return (
        <div>
          <div className="profile-left group">
            <ProfileInfo user={this.state.user}/>
          </div>

          <div className="profile-right group">
            <ProfileWall profile={this.state.user.profile}/>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }

});
