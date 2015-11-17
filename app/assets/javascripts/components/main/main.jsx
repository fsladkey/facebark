var Main = React.createClass({
  getInitialState: function() {
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount: function() {
    SessionStore.on("change", this._change);
  },

  render: function() {
    return (
      <div>
        <NavBar
          currentUser={this.state.currentUser}
          />
      </div>
    );
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
    if (!SessionStore.currentUser()) {
      this.props.history.pushState(null, "/index");
    }
  }

});
