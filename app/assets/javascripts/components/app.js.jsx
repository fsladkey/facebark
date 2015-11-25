var App = React.createClass({

  getInitialState: function() {
    return {currentUser: SessionStore.currentUser(), showModal: ModalStore.show()};
  },

  componentWillMount: function() {
    SessionStore.on("change", this._changeCurrentUser);
    ModalStore.on("change", this._changeModalStatus);
    if (!SessionStore.currentUser()) {
      SessionApiUtil.fetchCurrentUser();
    }
  },

  componentWillUnmount: function() {
    SessionStore.removeListener("change", this._changeCurrentUser);
  },

  render: function(){
    var modal;
    if (this.state.showModal) {
      modal = <PhotoDetail/>;
    }
    if (this.state.currentUser) {
      return (
        <div className="app">
          {modal}
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

  _changeCurrentUser: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  _changeModalStatus: function () {
    this.setState({showModal: ModalStore.show()});
  }

});
