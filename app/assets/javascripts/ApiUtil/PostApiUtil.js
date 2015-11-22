(function(root) {

  var PostApiUtil = root.PostApiUtil = {

    createPost: function(params) {
      $.ajax({
        url: "api/posts/",
        type: 'POST',
        data: {post: params},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

    fetchPosts: function(profile_id) {
      $.ajax({
        url: "api/posts/",
        type: 'GET',
        data: {profile_id: profile_id},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

    lickPost: function(postId, postType) {
      $.ajax({
        url: "api/posts/" + postId + "lick",
        type: 'POST',
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

    unlickPost: function(postId, postType) {
      $.ajax({
        url: "api/posts/" + postId + "unlick",
        type: 'DELETE',
        data: {post_type: postType},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    }

  };



})(this);
