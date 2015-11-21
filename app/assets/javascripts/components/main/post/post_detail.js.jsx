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
        <div className="group">
          <img className="profile_thumbnail" src={post.poster_photo_url}/>
          <div classNam="post-content group">
            {heading}
            <p>{this.props.post.body}</p>
          </div>
        </div>
        <div className="like-form">
        </div>

        <div className="like-info">
        </div>

        <div className="comment-list">
          <ul>
          {
            post.comments.map(function(comment) {
              return <CommentDetail key={comment.id} comment={comment}/>;
            }, this)
          }
          </ul>
        </div>

        <div className="comment-form group">
          <CommentForm
            postType={this.props.postType}
            postCallback={this.postCallback}
            post={this.props.post}/>
        </div>
      </li>
    );
  }

});
