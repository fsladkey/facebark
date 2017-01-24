(function(root) {

  var FriendRequestApiUtil = root.FriendRequestApiUtil = {

    requestFriendship: function(friendId) {
      var params = { friend_request: { friend_id: friendId } };
      return $.ajax({
        url: "/api/friend_requests/",
        type: 'POST',
        data: params,
        success: function(friend_request) {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },

    unfriend: function (friendId) {
      return $.ajax({
        url: "/api/friendships/" + friendId,
        type: 'DELETE',
        success: function() {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },


    acceptRequest: function(requestId) {
      return $.ajax({
        url: "/api/friend_requests/" + requestId,
        type: 'PATCH',
        success: function() {
          SessionApiUtil.fetchCurrentUser();
        }
      });
    },

  rejectRequest: function(requestId) {
    return $.ajax({
      url: "/api/friend_requests/" + requestId,
      type: 'DELETE',
      success: function() {
        SessionApiUtil.fetchCurrentUser();
      }
    });
  },

};



})(this);
