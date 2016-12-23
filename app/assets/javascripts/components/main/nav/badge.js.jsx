var Badge = React.createClass({
  render() {
    if (this.props.num === 0) return null;
    return (
      <i className="badge">
        { this.props.num }
      </i>
    );
  }
});
