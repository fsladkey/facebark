var NotificationList = function (props) {
  if (props.notifications.length === 0) return (<p>No notifications to show</p>);
  return (
    <ul>
      {
        props.notifications.map(function (notification) {
          return (
            <Notification
              key={ notification.id }
              hideDetail={ this.hideDetail }
              notification={ notification }
              hideDetail={ this.hideDetail }
              history={ this.props.history }
              />
          );
        }, this)
      }
    </ul>
  );
}

var NotificationsDropdown = React.createClass({
  render() {
    return (
      <div className="friend-requests-dropdown info-dropdown">
        <h4 className="request-header">Notifications</h4>
        <NotificationList notifications={ this.props.notifications }/>
      </div>
    );
  }
});


var Notifications = React.createClass({

  showDetail: function(e) {
    DropdownActions.receiveDropdown("notifications");
  },

  render: function () {
    var currentUser = SessionStore.currentUser();

    return (
      <div onClick={ stopProp }>
        <button onClick={ this.showDetail } className="notifications-button">
          <Badge num={ currentUser.newNotifications }/>
        </button>
        <Dropdown type="notifications">
          <NotificationsDropdown notifications={ currentUser.notifications }/>
        </Dropdown>
      </div>
    );
  }

});
