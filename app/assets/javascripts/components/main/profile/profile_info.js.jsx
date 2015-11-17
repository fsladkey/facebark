var ProfileInfo = React.createClass({

  render: function() {
    return (
      <div className="profile-info">
        <ul>
            <ProfileInfoField item="Breed"/>
            <ProfileInfoField item="Birthday"/>
            <ProfileInfoField item="Hometown"/>
            <ProfileInfoField item="Gender"/>
        </ul>
      </div>
    );
  }

});
