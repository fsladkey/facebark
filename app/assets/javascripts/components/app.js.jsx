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
          <div className="main-layout">
            <div className="page-content">
              {
                React.Children.map(this.props.children,function (child) {
                  return React.cloneElement(child, {currentUser: this.state.currentUser});
                }, this)
              }
            </div>
            <div className="side-bar">
            </div>
          </div>
        </div>
      );
    } else {
      return (
          <LandingPage/>
      );
    }
  },

  _change: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  }

});
