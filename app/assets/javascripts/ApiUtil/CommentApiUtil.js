(function(root) {

  var CommentApiUtil = root.CommentApiUtil = {

    createComment: function(params, postType) {
      $.ajax({
        url: "api/comments/",
        type: 'POST',
        data: {comment: params, post_type: postType},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

  };

})(this);
