(function(root) {

  var UserApiUtil = window.UserApiUtil = {

    createUser: function(user) {
      $.ajax({
        url: "/api/users/",
        type: 'POST',
        data: { user: user },
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(currentUser);
        }
      });
    },

    fetchUsers: function(searchString) {
      var data = {search_string: searchString};
      $.ajax({
        url: "/api/users/",
        type: 'GET',
        data: data,
        success: function(users) {
          UserActions.receiveUsers(users);
        }
      });
    },

    fetchUser: function(username) {
      $.ajax({
        url: "/api/users/" + username,
        type: 'GET',
        success: function (user) {
          UserActions.receiveUser(user);
        }
      });
    },

    updateProfile: function (profile_id, params) {
      var data = { profile: params };
      $.ajax({
        url: "/api/profiles/" + profile_id,
        type: 'PATCH',
        data: data,
        success: function (user) {
          // UserApiUtil.fetchUser(user.username);
          UserActions.receiveUser(user);
        }
      });
    },

    updateUser: function (user_id, params) {
      var data = { user: params };
      $.ajax({
        url: "/api/users/" + user_id,
        type: 'PATCH',
        data: data,
        success: function (user) {
          // TODO WTF!? Who DOES this?
          // UserApiUtil.fetchUser(user.username);
          UserActions.receiveUser(user);
        }
      });
    }

  };

})(this);
