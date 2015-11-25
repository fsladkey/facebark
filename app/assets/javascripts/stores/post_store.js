(function (root){

  var _posts = [];

  var setPosts = function(posts) {
    _posts = posts;
  };

  var loadPost = function(post) {
    var index;

    var oldPost = _posts.find(function(otherPost, count) {
      if (post.id === otherPost.id) {
        index = count;
        return true;
      }
    });

    if (oldPost) {
      _posts[index] = post;
    } else {
      _posts.unshift(post);
    }
  };

  var loadComment = function(comment) {
    var post = _posts.find(function(post) {
      return post.id === comment.commentable_id;
    });
    var index;

    var oldComment = post.comments.find(function(postComment, count) {
      if (comment.id === postComment.id) {
        index = count;
        return true;
      }
    });
    if (oldComment) {
      post.comments[index] = comment;
    } else {
      post.comments.push(comment);
    }
  };

  root.PostStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case PostConstants.RECIEVE_POSTS:
          setPosts(payload.posts);
          PostStore.emit("change");
          break;
        case PostConstants.RECIEVE_POST:
          loadPost(payload.post);
          PostStore.emit("change");
          break;
        case PostConstants.RECIEVE_POST_SHOW:
          _posts = [payload.post];
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
