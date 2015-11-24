var PostActions = {

  recievePosts: function (posts) {
    AppDispatcher.dispatch({
        actionType: PostConstants.RECIEVE_POSTS,
        posts: posts
    });
  },

  recieveComment: function (comment) {
    AppDispatcher.dispatch({
        actionType: PostConstants.RECIEVE_COMMENT,
        comment: comment
    });
  }
};
