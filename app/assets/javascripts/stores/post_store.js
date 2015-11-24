(function (root){

  var _posts = [];

  var setPosts = function(posts) {
    _posts = posts;
  };

  root.PostStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case PostConstants.RECIEVE_POSTS:
          setPosts(payload.posts);
          PostStore.emit("change");
          console.log("POST STORE CHANGED")
          break;
      }
    }),

    all: function () {
      return _posts;
    },

  });

})(this);
