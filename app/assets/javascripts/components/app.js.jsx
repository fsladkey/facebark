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
    ModalStore.removeListener("change", this._changeModalStatus);
    if (this.state.currentUser) {
      pusher.unsubscribe('private-' + currentUser.id);
      SessionStore.notConnected = true;
    }
  },

  connectToPusher: function (currentUser) {
    var pusher = new Pusher(window.pusherKey);
    var channel = pusher.subscribe('private-' + currentUser.id);

    channel.bind('new_message', function(message) {
      var conversation = ConversationStore.all().find(function(conversation) {
        return conversation.id == message.conversation_id;
      });
      ConversationActions.receiveMessage(message);
      ConversationActions.activateConversation(conversation);
    });
  },

  disconnectFromPusher: function () {
    pusher.unsubscribe('private-' + currentUser.id);
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
