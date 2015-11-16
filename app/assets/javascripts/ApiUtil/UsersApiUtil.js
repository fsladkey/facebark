(function(root) {

  var UserApiUtil = window.UserApiUtil = {

    createUser: function(user) {
      $.ajax({
        url: "/users/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          console.log(currentUser);
        }
      });
    },

    logInUser: function(user) {
      $.ajax({
        url: "/session/",
        type: 'POST',
        data: {user: user},
        success: function(currentUser) {
          console.log(currentUser);
        }
      });
    },

    logOut: function() {
      $.ajax({
        url: "/session/",
        type: 'DELETE',
        success: function(user) {
          console.log(user);
        }
      });
    },

    fetchUsers: function() {
      $.ajax({
        url: "/users/",
        type: 'GET',
        success: function(users) {
          console.log(users);
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
    },

    fetchCurrentUser: function(user_id) {
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
