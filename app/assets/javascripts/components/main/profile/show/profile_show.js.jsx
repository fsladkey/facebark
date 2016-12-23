var ProfileShow = React.createClass({

  render: function() {
    var user = UserStore.user();
    if (!user) return <Spinner/>;
    return (
      <div>
      <div className="profile-left group">
      <ProfileInfo user={ user }/>
      <ProfileFriends user={ user }/>
      </div>

      <div className="profile-right group">
      <ProfileWall profile={ user.profile }/>
      </div>
      </div>
    );
  },

});
