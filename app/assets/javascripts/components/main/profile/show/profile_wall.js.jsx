var ProfileWall = React.createClass({

  // componentWillReceiveProps: function (newProps) {
  //   this.forceUpdate();
  // },

  render: function () {
    return (
      <div className="profile-wall group">
        <PostForm profile={this.props.profile}/>
        <PostList profile={this.props.profile}/>
      </div>
    );
  }

});
