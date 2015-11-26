var Message = React.createClass({

  render: function () {
    var message = this.props.message,
        classname,
        imgUrl;
    if (message.sender_id === SessionStore.currentUser.id) {
      className = "current-user-message";
    } else {
      className = "friend-message";
      img = <img className="chat-thumbnail" src={this.props.conversation.friendPhotoUrl}/>;
    }
    return (
      <li className={className}>
        {img}
        {this.props.message.body}
      </li>
    );
  }

});
