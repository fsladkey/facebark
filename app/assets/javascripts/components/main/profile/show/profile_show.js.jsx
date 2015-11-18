var ProfileShow = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user()};
  },

  componentDidMount: function() {
    TabActions.activateTab("Photos");
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
    return (
      <div>
        <div className="profile-left group">
          <ProfileInfo user={this.state.user}/>
        </div>

        <div className="profile-right group">
        </div>
      </div>
    );
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }

});
