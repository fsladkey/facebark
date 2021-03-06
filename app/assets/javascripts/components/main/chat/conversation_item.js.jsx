var ConversationItem = React.createClass({

  showConversation: function () {
    ConversationActions.activateConversation(this.props.conversation);
  },

  render: function () {
    return (
      <li onClick={ this.showConversation } className="conversation-item">
        <img className="chat-thumbnail" src={ this.props.conversation.friend_thumb }/>
        <span>{ this.props.conversation.friendFullname }</span>
      </li>
    );
  }

});
