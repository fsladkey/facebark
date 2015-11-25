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

  render: function() {
    return (
        <NavBar
          currentUser={this.state.currentUser}
          />
    );
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }

});
