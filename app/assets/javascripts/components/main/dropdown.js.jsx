var Dropdown = React.createClass({

  getInitialState: function () {
    return { showDropdown: false }
  },

  componentDidMount: function () {
    this.storeToken = DropdownStore.on("change", this._change);
  },

  componentWillUnmount: function () {
    this.storeToken.remove();
  },

  render: function () {
    if (!this.state.showDropdown) return null;
    return React.Children.only(this.props.children);
  },

  _change() {
    this.setState({
      showDropdown: DropdownStore.dropdown() === this.props.type
    })
  }

});
