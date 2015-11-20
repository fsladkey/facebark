var PostDetail = React.createClass({

  render: function () {
    var post = this.props.post,
        poster = post.poster.firstname + " " + post.poster.lastname,
        postee = post.postee.firstname + " " + post.postee.lastname,
        heading;

    if (poster === postee) {
      heading = poster;
    } else {
      heading = poster + " > " + postee;
    }
    return (
      <li>
      <h3>{heading}</h3>
      <p>{this.props.post.body}</p>
      </li>
    );
  }

});
