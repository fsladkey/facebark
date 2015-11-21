var Friends = React.createClass({

  render: function() {
    if (this.props.user) {
      var friends = this.props.user.friends;
      return (
        <div className="friends group">

          <ReactRouter.Link to={"/" + this.props.user.username + "/friends"}>
            <h1>Friends</h1>
          </ReactRouter.Link>

          <ul className="group">
            {
              friends.map(function(friend) {
                return <Friend key={friend.id} friend={friend}/>;
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  },

});
