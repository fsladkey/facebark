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
      body: this.state.input,
      conversation_id: this.props.conversation.id
    };
    ConversationApiUtil.sendMessage(params);
  },

  hideDetail: function () {
    ConversationActions.deactivateConversation(this.props.conversation);
  },

  render: function () {
    return (
      <li>
        <div className="chat-active-conversation">
          <div className="active-chat-header group">
            <h3>{this.props.conversation.friendFullname}</h3>
            <button onClick={this.hideDetail}>x</button>
          </div>

          <div className="chat-message-list">
            <ul>
              {
                this.props.conversation.messages.map(function(message) {
                  return <Message message={message} key={message.id} conversation={this.props.conversation}/>;
                }, this)
              }
            </ul>
          </div>

          <form>
            <input onChange={this.updateInput}type="text">this.state.input</input>
          </form>

        </div>
      </li>
    );
  }

});
