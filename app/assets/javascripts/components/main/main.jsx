var Main = React.createClass({
  getInitialState: function() {
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount: function() {
    SessionStore.on("change", this._change);
    // SessionApiUtil.fetchCurrentUser();
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
  }

});
