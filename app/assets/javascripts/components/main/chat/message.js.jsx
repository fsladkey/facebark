var Message = React.createClass({

  render: function () {
    var message = this.props.message,
        classname,
        img;
    if (message.sender_id === SessionStore.currentUser().id) {
      className = "current-user-message group";
    } else {
      className = "friend-message group";
      img = <img className="chat-thumbnail" src={this.props.conversation.friendPhotoUrl}/>;
    }
    return (
      <li className={className}>
        {img}
        <p>{this.props.message.body}</p>
      </li>
    );
  }

});
