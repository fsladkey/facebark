var ConversationItem = React.createClass({

  showConversation: function () {
    ConversationActions.activateConversation(this.props.conversation);
  },

  render: function () {
    return (
      <li onClick={this.showConversation}className="conversation-item group">
        <img className="chat-thumbnail" src={this.props.conversation.friendPhotoUrl}/>
        <h3>{this.props.conversation.friendFullname}</h3>
      </li>
    );
  }

});
