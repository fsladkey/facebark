(function (root){

  var _currentUser = null;

  var setCurrentUser = function(currentUser) {
    _currentUser = currentUser;
  };

  root.SessionStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case SessionConstants.RECIEVE_CURRENT_USER:
          setCurrentUser(payload.currentUser);
          SessionStore.emit("change");
          console.log(SessionStore.currentUser());
          break;
        case SessionConstants.LOGOUT_CURRENT_USER:
          setCurrentUser(null);
          SessionStore.emit("change");
          break;
      }
    }),

    currentUser: function () {
      return _currentUser;
    },

  });

})(this);
