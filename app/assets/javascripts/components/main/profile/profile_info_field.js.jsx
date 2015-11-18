var ProfileInfoField = React.createClass({

  getInitialState: function () {
    return {fieldvalue: this.props.fieldvalue, editing: false};
  },

  handleSubmit: function(e) {
    this.props.updateCallback(this.state.fieldvalue);
    this.toggleEdit();
  },

  handleChange: function(e) {
    this.setState({fieldvalue: e.currentTarget.value});
  },

  toggleEdit: function() {
    this.setState({editing: !this.state.editing});
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({fieldvalue: newProps.fieldvalue});
  },

  render: function() {
    var formattedInfo;

    if (this.state.editing) {
      formattedInfo = "⌂ " +
        this.props.fieldname +
        ": ";
      return (
        <li>
        {formattedInfo}
          <input
            type="text"
            value={this.state.fieldvalue}
            onChange={this.handleChange}
            />
          <button className="shown-button" onClick={this.handleSubmit}>Save</button>
        </li>
      );
    } else {
      formattedInfo = "⌂ " +
        this.props.fieldname +
        ": " +
        this.props.fieldvalue +
        ".";
      return (
        <li>
          {formattedInfo}
          <button onClick={this.toggleEdit}>Edit</button>
        </li>
      );
    }
  }
});
