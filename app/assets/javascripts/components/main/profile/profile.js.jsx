var Profile = React.createClass({

  render: function() {
    return (
      <div className="profile-page group">
        <ProfileHeader username={this.props.username}/>
        <div className="page-content">
          <div className="profile-left group">
            <ProfileInfo username={this.props.username}/>
          </div>
          <div className="profile-right group">
          </div>
        </div>
      </div>
    );
  }

});
