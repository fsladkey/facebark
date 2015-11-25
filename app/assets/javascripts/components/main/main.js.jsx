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
        <NavBar
          history={this.props.history}
          currentUser={this.state.currentUser}
          />
    );
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }

});
