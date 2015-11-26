var ConversationList = React.createClass({

  getInitialState: function () {
    return {conversations: ConversationStore.all()};
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
      <div className="chat-friend-list">
        <ul>
          {
            this.state.conversations.map(function (conversation) {
              return <li className="conversation-item">{"Conversation Id: " + conversation.id}</li>;
            })
          }
        </ul>
      </div>
    );
  },

  _change: function () {
    this.setState({conversations: ConversationStore.all()});
  }

});
