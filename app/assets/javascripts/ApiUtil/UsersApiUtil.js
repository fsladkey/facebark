(function(root) {

  var UserApiUtil = window.UserApiUtil = {

    createUser: function(user) {
      $.ajax({
        url: "/users/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(user);
        }
      });
    },

    fetchUsers: function() {
      $.ajax({
        url: "/users/",
        type: 'GET',
        success: function(users) {
          UserActions.receiveUsers(users);
        }
      });
    },

    fetchUser: function(user_id) {
      $.ajax({
        url: "/users/" + user_id,
        type: 'GET',
        success: function(user) {
          console.log(user);
        }
      });
    }

  };

})(this);
