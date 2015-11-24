var ProfileWall = React.createClass({

  render: function () {
    return (
      <div className="profile-wall group">
        <PostForm postType="profile" currentUser={this.props.currentUser} profile={this.props.profile}/>
        <PostList postType={"profile"} profile={this.props.profile}/>
      </div>
    );
  }

});
