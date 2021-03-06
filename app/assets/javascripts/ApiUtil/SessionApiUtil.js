(function(root) {

  var SessionApiUtil = root.SessionApiUtil = {

    logInUser: function(user) {
      $.ajax({
        url: "/api/session/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(currentUser);
        }
      });
    },

    logOut: function(callback) {
      $.ajax({
        url: "/api/session/",
        type: 'DELETE',
        success: function(user) {
          SessionActions.logOutCurrentUser(user);
          callback && callback();
        }
      });
    },

    fetchCurrentUser: function() {
      $.ajax({
        url: "/api/session/",
        type: 'GET',
        success: function(user) {
          SessionActions.receiveCurrentUser(user);
        }
      });
    }

  };



})(this);
