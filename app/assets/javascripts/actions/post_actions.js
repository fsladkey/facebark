var PostActions = {

  recievePosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECIEVE_POSTS,
      posts: posts
    });
  },

  requestPosts: function () {
    AppDispatcher.dispatch({
      actionType: PostConstants.REQUEST_POSTS,
    });
  },

  recievePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECIEVE_POST,
      post: post
    });
  },

  recievePostShow: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECIEVE_POST_SHOW,
      post: post
    });
  },

  recieveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECIEVE_COMMENT,
      comment: comment
    });
  }
};
