var UserActions = {

  receiveUsers: function (users) {
    AppDispatcher.dispatch({
        actionType: UserConstants.RECIEVE_USERS,
        users: users
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
        actionType: UserConstants.RECIEVE_USER,
        user: user
    });
  }

};
