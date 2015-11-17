var ProfileInfoField = React.createClass({

  render: function() {
    return (
      <li className="profile-info-field">
        {"⌂ " + this.props.item + ": "}
      </li>
    );
  }

});
