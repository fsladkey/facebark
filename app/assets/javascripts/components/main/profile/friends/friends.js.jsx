var Friends = React.createClass({

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
      var friends = this.state.user.friends;
      return (
        <div>
          <ul>
            {
              friends.map(function(friend) {
                return friend.name;
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }

});
