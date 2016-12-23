(function(root) {

  var NotificationApiUtil = root.NotificationApiUtil = {

    viewNotification: function(notificationId) {
      $.ajax({
        url: "/api/notifications/" + notificationId,
        type: 'PATCH',
        success: function(notification) {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },

  };

})(this);
