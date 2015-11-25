(function(root) {

  var PostCommentApiUtil = root.PostCommentApiUtil = {

    createComment: function(params) {
      $.ajax({
        url: "api/comments/",
        type: 'POST',
        data: {comment: params},
        success: function(comment) {
          PostActions.recieveComment(comment);
        }
      });
    },

    lickComment: function(commentId) {
      $.ajax({
        url: "api/comments/" + commentId + "/lick",
        type: 'POST',
        data: {post_type: "post"},
        success: function(comment) {
          PostActions.recieveComment(comment);
        }
      });
    },

    unlickComment: function(commentId) {
      $.ajax({
        url: "api/comments/" + commentId + "/unlick",
        type: 'DELETE',
        data: {post_type: "post"},
        success: function(comment) {
          PostActions.recieveComment(comment);
        }
      });
    }


  };

})(this);
