(function(root) {

  var PhotoApiUtil = root.PhotoApiUtil = {

    uploadPhoto: function() {
      $.ajax({
        url: "api/session/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(currentUser);
        }
      });
    },

  };



})(this);
