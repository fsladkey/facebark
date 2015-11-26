var ConversationDetail = React.createClass({

  getInitialState: function () {
    return {input: ""};
  },

  updateInput: function (e) {
    this.setState({input: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = {
      receiver_id: this.props.conversation.friendId,
      body: this.state.input,
      conversation_id: this.props.conversation.id
    };
    ConversationApiUtil.sendMessage(params);
    this.setState({input: ""});
  },

  hideDetail: function () {
    ConversationActions.deactivateConversation(this.props.conversation);
  },

  scrollToBottom: function () {
    var selector = ".conversation-number-" + this.props.conversation.id;
    $(selector).scrollTop($(selector)[0].scrollHeight);
  },

  componentWillReceiveProps: function () {
    this.scrollToBottom();
  },

  componentDidMount: function () {
    this.scrollToBottom();
  },

  render: function () {
    var conversation = this.props.conversation;

    return (
      <li>
        <div className="chat-active-conversation">
          <div className="active-chat-header group">
            <h3>{conversation.friendFullname}</h3>
            <button onClick={this.hideDetail}>x</button>
          </div>

          <div className={"chat-message-list" + " conversation-number-" + conversation.id}>
            <ul>
              {
                conversation.messages.map(function(message) {
                  return <Message message={message} key={message.id} conversation={conversation}/>;
                }, this)
              }
            </ul>
          </div>

          <form onSubmit={this.handleSubmit}>
            <input
              className="chat-input"
              onChange={this.updateInput}type="text"
              placeholder="Send a message"
              >
              {this.state.input}
            </input>
          </form>

        </div>
      </li>
    );
  }

});
