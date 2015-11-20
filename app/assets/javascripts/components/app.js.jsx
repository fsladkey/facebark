var App = React.createClass({

  getInitialState: function() {
    return {currentUser: SessionStore.currentUser()};
  },

  componentWillMount: function() {
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
            {
              React.Children.map(this.props.children,function (child) {
                return React.cloneElement(child, {currentUser: this.state.currentUser});
              }, this)
            }
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
