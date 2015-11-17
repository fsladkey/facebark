(function (){

  var _users = [];

  var _user;

  var recieveUsers = function(users) {
    _users = users;
  };

  var recieveUser = function(user) {
    _user = user;
  };

  window.UserStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _users;
    },

    user: function () {
      return _user;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case UserConstants.RECIEVE_USERS:
            recieveUsers(payload.users);
            UserStore.emit("change");
          break;
        case UserConstants.RECIEVE_USER:
            recieveUser(payload.user);
            UserStore.emit("change");
          break;
      }
    })

  });

})();
