var ProfileInfo = React.createClass({

  updateProfileAttribute: function(field, value) {
    var user = UserStore.user(),
        params = {};
    params[field] = value;
    UserApiUtil.updateProfile(user.profile.id, params);
  },

  updateUserAttribute: function(field, value) {
    var user = UserStore.user(),
        params = {};
    params[field] = value;
    UserApiUtil.updateUser(user.id, params);
  },

  render: function() {
    var user = UserStore.user();
    return (
      <div className="profile-info">
        <ul>
          <ProfileInfoField
            user={ user }
            fieldname="Breed"
            fieldValue={ user.profile.breed }
            updateCallback={ this.updateProfileAttribute.bind(this, "breed") }
            >
            <i className="fa fa-home" aria-hidden="true"/>
          </ProfileInfoField>
          <ProfileInfoField
            user={ user }
            fieldname="Gender"
            fieldValue={ user.gender }
            updateCallback={ this.updateUserAttribute.bind(this, "gender") }
            >
            <i className="fa fa fa-female" aria-hidden="true"/>
            <i className="fa fa fa-male" aria-hidden="true"/>
          </ProfileInfoField>
          <ProfileInfoField
            user={ user }
            fieldname="Birthday"
            fieldValue={ user.birthday }
            updateCallback={ this.updateUserAttribute.bind(this, "birthday") }
            >
          <i className="fa fa-birthday-cake" aria-hidden="true"/>
        </ProfileInfoField>
          <ProfileInfoField
            user={ user }
            fieldname="Hometown"
            fieldValue={ user.profile.hometown }
            updateCallback={ this.updateProfileAttribute.bind(this, "hometown") }
            >
          <i className="fa fa-home" aria-hidden="true"/>
        </ProfileInfoField>
        </ul>
      </div>
    );
  }

});
