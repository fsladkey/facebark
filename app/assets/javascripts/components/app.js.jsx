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
    var pusher = new Pusher('9f37adb8ceb342038022');
    var channel = pusher.subscribe('private-' + currentUser.id);

    channel.bind('new_message', function(message) {
      ConversationActions.receiveMessage(message);
    });

    // Some useful debug msgs
    pusher.connection.bind('connecting', function() {
      $('div#status').text('Connecting to Pusher...');
    });
    pusher.connection.bind('connected', function() {
      $('div#status').text('Connected to Pusher!');
    });
    pusher.connection.bind('failed', function() {
      $('div#status').text('Connection to Pusher failed :(');
    });
    channel.bind('subscription_error', function(status) {
      $('div#status').text('Pusher subscription_error');
    });
  },

  disconnectFromPusher: function () {
    pusher.unsubscribe('private-' + currentUser.id);
  },

  componentWillUnmount: function() {
    SessionStore.removeListener("change", this._changeCurrentUser);
    if (this.state.currentUser) {
      pusher.unsubscribe('private-' + currentUser.id);
      SessionStore.notConnected = true; //probably unneccassary
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

    if (!currentUser) {
      this.disconnectFromPusher();
    } else {
      if (SessionStore.notConnected) {
        this.connectToPusher(currentUser);
        SessionStore.notConnected = false;
      }
    }

    this.setState({currentUser: currentUser});
  },

  _changeModalStatus: function () {
    this.setState({showModal: ModalStore.show()});
  }

});
