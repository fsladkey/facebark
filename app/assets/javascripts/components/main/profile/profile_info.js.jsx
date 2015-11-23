var ProfileInfo = React.createClass({

  updateProfileAttribute: function(field, value) {
    var params = {};
    params[field] = value;
    UserApiUtil.updateProfile(this.props.user.profile.id, params);
  },

  updateUserAttribute: function(field, value) {
    var params = {};
    params[field] = value;
    UserApiUtil.updateUser(this.props.user.id, params);
  },

  render: function() {
    if (this.props.user) {
      return (
        <div className="profile-info">
          <ul>
            <ProfileInfoField
              user={this.props.user}
              fieldname="Breed"       fieldvalue={this.props.user.profile.breed}
              updateCallback={this.updateProfileAttribute.bind(this, "breed")}
              />
            <ProfileInfoField
              user={this.props.user}
              fieldname="Gender"       fieldvalue={this.props.user.gender}
              updateCallback={this.updateUserAttribute.bind(this, "gender")}
              />
            <ProfileInfoField
              user={this.props.user}
              fieldname="Birthday"       fieldvalue={this.props.user.birthday}
              updateCallback={this.updateUserAttribute.bind(this, "birthday")}
              />
            <ProfileInfoField
              user={this.props.user}
              fieldname="Hometown"       fieldvalue={this.props.user.profile.hometown}
              updateCallback={this.updateProfileAttribute.bind(this, "hometown")}
              />
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

});
