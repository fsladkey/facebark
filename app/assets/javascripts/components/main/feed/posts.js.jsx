var Posts = React.createClass({

  render: function() {
    var currentUser = SessionStore.currentUser();
    return (
      <div className="group feed-container">
        <FeedSidebar />
        <div className="feed-page">
           { this.props.children }
        </div>
        <SponseredPost />
      </div>
    );
  },
});
