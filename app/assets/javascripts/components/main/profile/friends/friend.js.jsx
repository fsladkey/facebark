var Friend = React.createClass({
  render: function () {
    var friend = this.props.friend;

    return (
      <li>
        <img src={friend.profile_image_url}/>
        <p>
        <ReactRouter.Link className="friend-link" to={"/" + friend.username}>
          {friend.name}
        </ReactRouter.Link>
        </p>
      </li>
    );
  }
});
