var Notification = React.createClass({

  render: function () {

    return (
      <li className="group">
        <p >{this.props.notification.description}</p>
      </li>
    );
  }

});
