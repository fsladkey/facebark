(function(root) {

  var PhotoCommentApiUtil = root.PhotoCommentApiUtil = {

    createComment: function(params) {
      $.ajax({
        url: "/api/comments/",
        type: 'POST',
        data: {comment: params},
        success: function(comment) {
          PhotoActions.receiveComment(comment);
        }
      });
    },

    lickComment: function(commentId) {
      $.ajax({
        url: "/api/comments/" + commentId + "/lick",
        type: 'POST',
        data: {post_type: "photo"},
        success: function(comment) {
          PhotoActions.receiveComment(comment);
        }
      });
    },

    unlickComment: function(commentId) {
      $.ajax({
        url: "/api/comments/" + commentId + "/unlick",
        type: 'DELETE',
        data: {post_type: "photo"},
        success: function(comment) {
          PhotoActions.receiveComment(comment);
        }
      });
    }


  };

})(this);
