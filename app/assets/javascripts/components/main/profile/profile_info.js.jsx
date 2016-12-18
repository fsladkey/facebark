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
    if (!this.props.user) return null;
    return (
      <div className="profile-info">
        <ul>
          <ProfileInfoField
            user={ this.props.user }
            fieldname="Breed"
            fieldValue={ this.props.user.profile.breed }
            updateCallback={ this.updateProfileAttribute.bind(this, "breed") }
            >
            <i className="fa fa-home" aria-hidden="true"/>
          </ProfileInfoField>
          <ProfileInfoField
            user={ this.props.user }
            fieldname="Gender"
            fieldValue={ this.props.user.gender }
            updateCallback={ this.updateUserAttribute.bind(this, "gender") }
            >
            <i className="fa fa fa-female" aria-hidden="true"/>
            <i className="fa fa fa-male" aria-hidden="true"/>
          </ProfileInfoField>
          <ProfileInfoField
            user={ this.props.user }
            fieldname="Birthday"
            fieldValue={ this.props.user.birthday }
            updateCallback={ this.updateUserAttribute.bind(this, "birthday") }
            >
          <i className="fa fa-birthday-cake" aria-hidden="true"/>
        </ProfileInfoField>
          <ProfileInfoField
            user={ this.props.user }
            fieldname="Hometown"
            fieldValue={ this.props.user.profile.hometown }
            updateCallback={ this.updateProfileAttribute.bind(this, "hometown") }
            >
          <i className="fa fa-home" aria-hidden="true"/>
        </ProfileInfoField>
        </ul>
      </div>
    );
  }

});
