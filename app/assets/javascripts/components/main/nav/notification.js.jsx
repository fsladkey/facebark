var Notification = ReactRouter.withRouter(React.createClass({

  redirect: function () {
    // TODO: This is a mess, make it a link.
    if (this.props.notification.content_type === "Photo") {
          PhotoApiUtil.showPhoto(this.props.notification.content_id, ModalActions.showModal());
    } else {
      this.props.router.push("/posts/" + this.props.notification.content_id);
    }
      DropdownActions.receiveDropdown(null);
      NotificationApiUtil.viewNotification(this.props.notification.id);
  },

  render: function () {
    return (
      <li onClick={ this.redirect } className="notification group">
        <img className="profile_thumbnail" src={this.props.notification.user_photo_url}/>
        <p className="notification-description">{this.props.notification.description}</p>
      </li>
    );
  }

}));
