var App = React.createClass({

  getInitialState: function() {
    return { showModal: ModalStore.show() };
  },

  componentWillMount: function() {
    ModalStore.on("change", this._changeModalStatus);
  },

  componentWillUnmount: function() {
    ModalStore.removeListener("change", this._changeModalStatus);
    this.pusher.unsubscribe('private-' + currentUser.id);
    SessionStore.notConnected = true;
  },

  connectToPusher: function (currentUser) {
    // Is this doing anything?
    this.pusher = new Pusher(window.pusherKey);
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

  handleDropdownClear: function () {
    DropdownActions.receiveDropdown(null);
  },

  render: function(){
    var modal;
    if (this.state.showModal) modal = <PhotoDetail/>;
    return (
      <div className="app" onClick={ this.handleDropdownClear }>
        { modal }
        <Main history={this.props.history}/>
        <div className="main-layout">
          <div className="page-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  },

  _changeModalStatus: function () {
    this.setState({ showModal: ModalStore.show() });
  }

});
