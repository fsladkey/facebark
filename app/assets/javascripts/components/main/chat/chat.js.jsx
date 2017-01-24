var ConversationList = function (props) {
  var className = props.shown ? "active" : "";
  return (
    <ul className={ "all-conversation-list " + className }>
      {
        props.conversations.map(function (conversation) {
          return (
            <ConversationItem key={conversation.id} conversation={conversation}/>
          );
        })
      }
    </ul>
  );
};

var Chat = React.createClass({

  getInitialState: function () {
    return {
      conversations: ConversationStore.all(),
      activeConversations: ConversationStore.allActive(),
      showList: true
    };
  },

  componentDidMount: function () {
    ConversationStore.on("change", this._change);
    ConversationApiUtil.fetchConversations();
  },

  componentWillUnmount: function () {
    ConversationStore.removeListener("change", this._change);
  },

  toggleChat: function () {
    this.setState({ showList: !this.state.showList });
  },

  render: function () {
    var className = this.state.showList ? "" : "active";
    return (
      <div >
        <section className="chat-friend-list">
          <h2 onClick={ this.toggleChat } className={ className }>
            Chat
          </h2>
          <ConversationList
            conversations={ this.state.conversations }
            shown={ this.state.showList }
            />
        </section>

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
