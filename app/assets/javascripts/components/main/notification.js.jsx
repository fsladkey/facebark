var Notification = React.createClass({

  redirect: function () {
    if (this.props.notification.content_type === "Photo") {
          PhotoApiUtil.showPhoto(this.props.notification.content_id, ModalActions.showModal());
    } else {
      this.props.history.pushState(null, ("/posts/" + this.props.notification.content_id));
    }
      this.props.hideDetail();
      NotificationApiUtil.viewNotification(this.props.notification.id);
  },

  render: function () {
    var badge;
    if (!this.props.notification.viewed) {
      badge = <badge
        className="new-notification-badge"
        >New</badge>
    }

    return (
      <li onClick={this.redirect} className="notification group">
        <img className="profile_thumbnail" src={this.props.notification.user_photo_url}/>
        <p className="notification-description">{this.props.notification.description}</p>
        {badge}
      </li>
    );
  }

});
