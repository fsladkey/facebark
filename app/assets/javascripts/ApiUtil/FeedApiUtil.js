(function(root) {

  var FeedApiUtil = root.FeedApiUtil = {

    fetchPosts: function(userId) {
      console.log("feed api");
      $.ajax({
        url: "api/feed/",
        type: 'GET',
        data: {user_id: userId},
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

  };

})(this);
