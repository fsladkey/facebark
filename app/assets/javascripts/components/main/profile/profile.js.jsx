var Profile = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user()};
  },

  componentDidMount: function() {
    UserStore.on("change", this._change);
    if (this.props.username) {
      UserApiUtil.fetchUser(this.props.username);
    }
  },

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.username);
  },

  render: function() {
    return (
      <div className="profile-page group">
        <ProfileHeader user={this.state.user}/>
        <div className="page-content">
          <div className="profile-left group">
            <ProfileInfo user={this.state.user}/>
          </div>
          <div className="profile-right group">
          </div>
        </div>
      </div>
    );
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }
});
