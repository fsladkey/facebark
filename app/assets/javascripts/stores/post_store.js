(function (root){

  var _posts = [];

  var setPosts = function(posts) {
    _posts = posts;
  };

  var loadComment = function(comment) {
    var post = _posts.find(function(post) {
      return post.id === comment.commentable_id;
    });
    post.comments.push(comment);
  };

  root.PostStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case PostConstants.RECIEVE_POSTS:
          setPosts(payload.posts);
          PostStore.emit("change");
          break;
        case PostConstants.RECIEVE_COMMENT:
          loadComment(payload.comment);
          PostStore.emit("change");
          break;
      }
    }),

    all: function () {
      return _posts;
    },

  });

})(this);
