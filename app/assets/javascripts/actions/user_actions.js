var UserActions = {

  receiveUsers: function (users) {
    AppDispatcher.dispatch({
        actionType: UserConstants.RECIEVE_USERS,
        users: users
    });
  }

};
