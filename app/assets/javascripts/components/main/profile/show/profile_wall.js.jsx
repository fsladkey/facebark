var ProfileWall = React.createClass({

  render: function () {
    return (
      <div className="profile-wall group">
        <PostForm currentUser={this.props.currentUser} profile={this.props.profile}/>
        <PostList profile={this.props.profile}/>
      </div>
    );
  }

});
