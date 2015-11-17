(function (){

  var _users = [];

  var recieveUsers = function(users) {
    _users = users;
  };

  window.UserStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _users;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case UserConstants.RECIEVE_USERS:
            recieveUsers(payload.users);
            SessionStore.emit("change");
          break;
        default:

      }
    })

  });

})();
