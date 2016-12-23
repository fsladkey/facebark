(function(root) {

  var FeedApiUtil = root.FeedApiUtil = {
    fetchPosts: function() {
      PostActions.requestPosts();
      $.ajax({
        url: "/api/feed/",
        type: 'GET',
        success: function(posts) {
          PostActions.recievePosts(posts);
        }
      });
    },

  };

})(this);
