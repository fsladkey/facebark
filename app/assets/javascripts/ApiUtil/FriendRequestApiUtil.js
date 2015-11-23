(function(root) {

  var FriendRequestApiUtil = root.FriendRequestApiUtil = {

    requestFriendship: function(freindId) {
      /// is this what I'm sending?
      var params = {friend_request: {friend_id: friendId}};
      $.ajax({
        url: "/api/friend_requests/" + requestId,
        type: 'POST',
        data: params,
        success: function(friend_request) {
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
