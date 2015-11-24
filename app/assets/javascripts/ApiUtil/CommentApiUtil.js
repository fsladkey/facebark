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

    lickComment: function(commentId, postType) {
      $.ajax({
        url: "api/comments/" + commentId + "/lick",
        type: 'POST',
        data: {post_type: postType},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

    unlickComment: function(commentId, postType) {
      $.ajax({
        url: "api/comments/" + commentId + "/unlick",
        type: 'DELETE',
        data: {post_type: postType},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    }


  };

})(this);
