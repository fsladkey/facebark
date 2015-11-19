var PostDetail = React.createClass({

  render: function () {
    return (
      <li>
      <h3>{this.props.post.poster} > {this.props.post.postee}</h3>
      <p>{}this.props.post.body</p>
      </li>
    );
  }

});
