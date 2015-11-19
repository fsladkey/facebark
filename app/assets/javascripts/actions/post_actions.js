var PostActions = {

  recievePosts: function (posts) {
    AppDispatcher.dispatch({
        actionType: PostConstants.RECIEVE_POSTS,
        posts: posts
    });
  }
};
