 var Main = React.createClass({
  getInitialState: function() {
    return {currentUser: SessionStore.currentUser()};
  },

  // remove all this niave junk smartypants!!

  // componentDidMount: function() {
  //   SessionStore.on("change", this._change);
  //   if (!SessionStore.currentUser()) {
  //     SessionApiUtil.fetchCurrentUser();
  //   }
  // },
  //
  // componentWillUnmount: function() {
  //   SessionStore.removeListener("change", this._change);
  // },
  //
  // _change: function() {
  //   this.setState({currentUser: SessionStore.currentUser()});
  // }

  render: function() {
    return (
      <div>
        <NavBar
          history={this.props.history}
          currentUser={SessionStore.currentUser()}
          />
        <Chat
          currentUser={SessionStore.currentUser()}
          />
      </div>
    );
  },

});
