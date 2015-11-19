var App = React.createClass({

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

  render: function(){
    if (this.state.currentUser) {
      return (
          <div>
            <Main/>
            {this.props.children}
          </div>
      );
    } else {
      return (
          <div>
            <LandingPage/>
          </div>
      );
    }
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }
});
