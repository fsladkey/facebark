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

  connectToPusher: function (currentUser) {
    var pusher = new Pusher(window.pusherKey);
    var channel = pusher.subscribe('private-' + currentUser.id);

    channel.bind('new_message', function(message) {
      ConversationActions.receiveMessage(message);
    });
  },

  disconnectFromPusher: function () {
    pusher.unsubscribe('private-' + currentUser.id);
  },

  componentWillUnmount: function() {
    SessionStore.removeListener("change", this._changeCurrentUser);
    if (this.state.currentUser) {
      pusher.unsubscribe('private-' + currentUser.id);
      SessionStore.notConnected = true;
    }
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
          <Main history={this.props.history}/>
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
    var currentUser = SessionStore.currentUser();

    if (SessionStore.notConnected) {
      this.connectToPusher(currentUser);
      SessionStore.notConnected = false;
    }

    this.setState({currentUser: currentUser});
  },

  _changeModalStatus: function () {
    this.setState({showModal: ModalStore.show()});
  }

});
