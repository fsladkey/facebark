var PostActions = {

  recievePosts: function (posts) {
    AppDispatcher.dispatch({
        actionType: PostConstants.RECIEVE_POSTS,
        posts: posts
    });
  },

  recievePost: function (post) {
    AppDispatcher.dispatch({
        actionType: PostConstants.RECIEVE_POST,
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
