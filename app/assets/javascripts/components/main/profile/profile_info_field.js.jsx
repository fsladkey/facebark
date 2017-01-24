var ProfileInfoField = React.createClass({

  getInitialState: function () {
    return { fieldValue: this.props.fieldValue, editing: false };
  },

  handleSubmit: function(e) {
    this.props.updateCallback(this.state.fieldValue);
    this.toggleEdit();
  },

  handleChange: function(e) {
    this.setState({ fieldValue: e.currentTarget.value });
  },

  toggleEdit: function() {
    this.setState({ editing: !this.state.editing });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ fieldValue: newProps.fieldValue });
  },

  render: function() {
    var button;

    if (this.state.editing) {
      return (
        <li>
          { this.props.children }
          <input
            type="text"
            value={ this.state.fieldValue }
            onChange={ this.handleChange }
            />
          <button className="shown-button" onClick={ this.handleSubmit }>
            <i className="fa fa-pencil" aria-hidden="true"/>
          </button>
        </li>
      );
    }
    if (SessionStore.currentUser().id === this.props.user.id) {
        button = (
          <button onClick={ this.toggleEdit }>
            <i className="fa fa-pencil" aria-hidden="true"/>
          </button>
        );
    }
    return (
      <li>
        { this.props.children } { this.props.fieldValue }
        { button }
      </li>
    );
  }
});
