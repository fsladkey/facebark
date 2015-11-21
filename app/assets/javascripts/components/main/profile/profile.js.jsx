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

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.params.username);
  },

  render: function() {
    return (
      <div className="profile-page group">
        <ProfileHeader user={this.state.user}/>
        <div className="page-content">
          {
            React.Children.map(this.props.children,function (child) {
              return React.cloneElement(
                child, {currentUser: this.props.currentUser,
                user: this.state.user
              });
            }, this)
          }
        </div>
      </div>
    );
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }
});
