var Posts = React.createClass({

  render: function() {
    if (this.props.currentUser) {
      return (
        <div className="group">

          <div className="feed-sidebar">
            <div className="feed-profile-link">
              <ReactRouter.Link to={"/" + this.props.currentUser.username}>
                <div className="feed-profile-link group">
                  <img className="feed-thumbnail" src={this.props.currentUser.profile_image_url}/>
                  <p className="feed-current-user-name">{this.props.currentUser.firstname + " " + this.props.currentUser.lastname}</p>
                </div>
              </ReactRouter.Link>
            </div>
          </div>

          <div className="feed-page">
             {this.props.children}
          </div>
          <SponseredPost />

        </div>
      );
    } else {
      return <div></div>;
    }
  },
});
