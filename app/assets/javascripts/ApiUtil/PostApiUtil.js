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
    }

  };



})(this);
