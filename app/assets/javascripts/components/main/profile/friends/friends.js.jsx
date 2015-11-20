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
        <div className="friends group">

          <ReactRouter.Link to={"/" + this.state.user.username + "/friends"}>
            <h1>Friends</h1>
          </ReactRouter.Link>

          <ul className="group">
            {
              friends.map(function(friend) {
                return <Friend friend={friend}/>;
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
