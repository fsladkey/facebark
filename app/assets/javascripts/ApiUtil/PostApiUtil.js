(function(root) {

  var PostApiUtil = root.PostApiUtil = {

    createPost: function(params, postType) {
      return $.ajax({
        url: "/api/posts/",
        type: 'POST',
        data: {post: params, post_type: postType},
        success: function(post) {
          PostActions.recievePost(post);
        }
      });
    },

    fetchPosts: function(profile_id) {
      return $.ajax({
        url: "/api/posts/",
        type: 'GET',
        data: {profile_id: profile_id},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

    fetchPost: function(postId) {
      return $.ajax({
        url: "/api/posts/" + postId,
        type: 'GET',
        success: function(post) {
          PostActions.recievePostShow(post);
        }
      });
    },

    lickPost: function(postId, postType) {
      return $.ajax({
        url: "/api/posts/" + postId + "/lick",
        type: 'POST',
        data: { post_type: postType },
        success: function(post) {
          PostActions.recievePost(post);
        }
      });
    },

    unlickPost: function(postId, postType) {
      return $.ajax({
        url: "/api/posts/" + postId + "/unlick",
        type: 'DELETE',
        data: { post_type: postType },
        success: function(post) {
          PostActions.recievePost(post);
        }
      });
    }

  };



})(this);
