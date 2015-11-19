var Photos = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user()};
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

  render: function() {
    if (this.state.user) {
      return (
        <div className="photos group">
          <ReactRouter.Link to={"/" + this.props.params.username + "/photos"}>
            <h1>Photos</h1>
          </ReactRouter.Link>
          <div>
            {this.props.children}
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
