var PostDetail = React.createClass({

  render: function () {
    var post = this.props.post,
        poster_name = post.poster.firstname + " " + post.poster.lastname,
        postee_name = post.postee.firstname + " " + post.postee.lastname,
        heading;

    if (poster_name === postee_name) {
      heading = <h3><a href={"#/" + post.poster.username}>{poster_name}</a></h3>;
    } else {
      heading = (
        <h3>
          <a href={"#/" + post.poster.username}>{poster_name}</a> > <a href={"#/" + post.postee.username}>{postee_name}</a>
        </h3>
      );
    }
    return (
      <li>
      {heading}
      <p>{this.props.post.body}</p>
      </li>
    );
  }

});
