var Notification = React.createClass({

  render: function () {
    debugger

    return (
      <li className="group">
        <img className="profile_thumbnail" src={this.props.notification.user_photo_url}/>
        <p className="notification-description">{this.props.notification.description}</p>
      </li>
    );
  }

});
