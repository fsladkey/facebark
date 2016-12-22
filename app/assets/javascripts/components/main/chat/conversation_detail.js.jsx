var ConversationDetail = React.createClass({

  getInitialState: function () {
    return { input: "" };
  },

  updateInput: function (e) {
    this.setState({ input: e.currentTarget.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = {
      receiver_id: this.props.conversation.friendId,
      body: this.state.input,
      conversation_id: this.props.conversation.id
    };
    ConversationApiUtil.sendMessage(params);
    this.setState({ input: "" });
  },

  hideDetail: function () {
    ConversationActions.deactivateConversation(this.props.conversation);
  },

  scrollToBottom: function () {
    var selector = ".conversation-number-" + this.props.conversation.id;
    $(selector).scrollTop($(selector)[0].scrollHeight);
  },

  componentWillReceiveProps: function () {
    setTimeout(function () {
      this.scrollToBottom();
    }.bind(this), 50);
  },

  componentDidMount: function () {
    this.scrollToBottom();
  },

  render: function () {
    var conversation = this.props.conversation;

    return (
      <li className="chat-active-conversation">
        <div className="active-chat-header group">
          <h3>{ conversation.friendFullname }</h3>
          <button onClick={ this.hideDetail }>x</button>
        </div>

        <ul className={"chat-message-list" + " conversation-number-" + conversation.id }>
          {
            conversation.messages.map(function(message) {
              return (
                <Message
                  key={ message.id }
                  message={ message }
                  conversation={ conversation }
                  />
              );
            })
          }
        </ul>

        <form onSubmit={ this.handleSubmit } className="chat-input">
          <input
            onChange={ this.updateInput }
            type="text"
            placeholder="Send a message"
            value={ this.state.input }
            />
        </form>

      </li>
    );
  }

});
