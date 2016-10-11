var Message = React.createClass({

  render: function () {
    var message = this.props.message, classname, img;

    if (message.sender_id === SessionStore.currentUser().id) {
      className = "current-user-message message group";
    } else {
      className = "friend-message message group";
      img = <img className="chat-thumbnail message-thumbnail" src={ this.props.conversation.friendPhotoUrl }/>;
    }

    return (
      <li className={ className }>
        { img }
        <span>{ this.props.message.body }</span>
      </li>
    );
  }

});
