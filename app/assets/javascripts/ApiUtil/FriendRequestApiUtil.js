(function(root) {

  var FriendRequestApiUtil = root.FriendRequestApiUtil = {

    requestFriendship: function(friendId) {
      var params = {friend_request: {friend_id: friendId}};
      $.ajax({
        url: "/api/friend_requests/",
        type: 'POST',
        data: params,
        success: function(friend_request) {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },

    unfriend: function (friendId) {
      $.ajax({
        url: "/api/friendships/" + friendId,
        type: 'DELETE',
        success: function() {
          // can also return current user and recieve current user here?
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },


    acceptRequest: function(requestId) {
      $.ajax({
        url: "/api/friend_requests/" + requestId,
        type: 'PATCH',
        success: function(photo) {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },

  rejectRequest: function(requestId) {
    $.ajax({
      url: "/api/friend_requests/" + requestId,
      type: 'DELETE',
      success: function(photo) {
        SessionApiUtil.fetchCurrentUser();
      }
    });
  },

};



})(this);
