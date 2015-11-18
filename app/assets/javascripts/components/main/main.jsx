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
      <div className="main group">
        <NavBar
          currentUser={this.state.currentUser}
          />
          <Profile username={this.props.path.slice(1)}
            />
      </div>
    );
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }

});
