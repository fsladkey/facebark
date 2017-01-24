var MessagePreviewList = function (props) {
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
              />
          );
        }, this)
      }
    </ul>
  );
}

var MessageDropdown = function (props) {
  return (
    <div>
      <h4 className="request-header">Notifications</h4>
      <MessagePreviewList notifications={ props.notifications }/>
    </div>
  );
};

var MessagesPreview = React.createClass({

  showDetail: function(e) {
    DropdownActions.receiveDropdown("messages");
  },

  render: function () {
    var currentUser = SessionStore.currentUser();

    return (
      <div onClick={ stopProp }>
        <button onClick={ this.showDetail } className="messages-button">
          <Badge num={ 1 }/>
        </button>
        <Dropdown type="messages">
          <MessageDropdown notifications={ currentUser.notifications }/>
        </Dropdown>
      </div>
    );
  }

});
