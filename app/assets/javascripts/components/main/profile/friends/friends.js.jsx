var Friends = React.createClass({

  render: function() {
    var user = UserStore.user();
    var friends = user.friends;
    return (
      <div className="friends group">

        <ReactRouter.Link to={"/" + user.username + "/friends"}>
          <h1>Friends</h1>
        </ReactRouter.Link>

        <ul className="group">
          {
            friends.map(function(friend) {
              return <Friend key={ friend.id } friend={ friend }/>;
            })
          }
        </ul>
      </div>
    );
  }

});
