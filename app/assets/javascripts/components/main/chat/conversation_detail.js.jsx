var ConversationDetail = React.createClass({

  hideDetail: function () {
    
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
            THE FORM!
          </form>

        </div>
      </li>
    );
  }

});
