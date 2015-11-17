(function(root) {

  var SessionApiUtil = root.SessionApiUtil = {

    logInUser: function(user) {
      $.ajax({
        url: "/session/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(currentUser);
        }
      });
    },

    logOut: function() {
      $.ajax({
        url: "/session/",
        type: 'DELETE',
        success: function(user) {
          SessionActions.logOutCurrentUser(user);
        }
      });
    },

    fetchCurrentUser: function() {
      $.ajax({
        url: "/session/",
        type: 'GET',
        success: function(user) {
          SessionActions.receiveCurrentUser(user);
        }
      });
    }

  };



})(this);
