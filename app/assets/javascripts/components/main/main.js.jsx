 var Main = React.createClass({
  getInitialState: function() {
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount: function() {
    SessionStore.on("change", this._change);
    if (!SessionStore.currentUser()) {
      SessionApiUtil.fetchCurrentUser();
    }
  },

  componentWillUnmount: function() {
    SessionStore.removeListener("change", this._change);
  },

  render: function() {
    return (
      <div>
        <NavBar
          history={this.props.history}
          currentUser={this.state.currentUser}
          />
        <Chat
          currentUser={this.state.currentUser}
          />
      </div>
    );
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }

});
