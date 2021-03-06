var SessionActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
        actionType: SessionConstants.RECIEVE_CURRENT_USER,
        currentUser: currentUser
    });
  },

  logOutCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
        actionType: SessionConstants.LOGOUT_CURRENT_USER,
        currentUser: currentUser
    });
  }

};
