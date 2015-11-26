var ConversationList = React.createClass({

  getInitialState: function () {
    return {
      conversations: ConversationStore.all(),
      activeConversations: ConversationStore.allActive()
    };
  },

  componentDidMount: function () {
    ConversationStore.on("change", this._change);
    ConversationApiUtil.fetchConversations();
  },

  componentWillUnmount: function () {
    ConversationStore.removeListener("change", this._change);
  },

  render: function () {
    return (
      <div>
        <div className="chat-friend-list">
          <ul>
            {
              this.state.conversations.map(function (conversation) {
                return (
                  <ConversationItem key={conversation.id} conversation={conversation}/>
                );
              })
            }
          </ul>
        </div>

        <div className="chat-active-conversation-list">
          <ul className="group">
            {
              this.state.activeConversations.map(function (conversation) {
                return (
                  <ConversationDetail key={conversation.id} conversation={conversation}/>
                );
              })
            }
          </ul>
        </div>


    </div>
    );
  },

  _change: function () {
    this.setState({
      conversations: ConversationStore.all(),
      activeConversations: ConversationStore.allActive()
    });
  }

});
