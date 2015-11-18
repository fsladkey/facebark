// var ProfileInfo = React.createClass({
//
//   updateProfileAttribute: function(field, value) {
//     var params = {};
//     params[field] = value;
//     UserApiUtil.updateProfile(this.props.user.profile.id, params);
//   },
//
//   updateUserAttribute: function(field, value) {
//     var params = {};
//     params[field] = value;
//     UserApiUtil.updateUser(this.props.user.id, params);
//   },
//
//   render: function() {
//     if (this.props.user) {
//       return (
//         <div className="profile-info">
//           <ul>
//             <ProfileInfoField
//               fieldname="Breed"       fieldvalue={this.props.user.profile.breed}
//               updateCallback={this.updateProfileAttribute.bind(this, "breed")}
//               />
//             <ProfileInfoField
//               fieldname="Gender"       fieldvalue={this.props.user.gender}
//               updateCallback={this.updateUserAttribute.bind(this, "gender")}
//               />
//             <ProfileInfoField
//               fieldname="Birthday"       fieldvalue={this.props.user.birthday}
//               updateCallback={this.updateUserAttribute.bind(this, "birthday")}
//               />
//             <ProfileInfoField
//               fieldname="Hometown"       fieldvalue={this.props.user.profile.hometown}
//               updateCallback={this.updateProfileAttribute.bind(this, "hometown")}
//               />
//           </ul>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
//
// });
