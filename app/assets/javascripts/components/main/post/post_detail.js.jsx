var PostDetail = React.createClass({

  focusComment: function () {
    //use a ref?
  },

  render: function () {
    var post = this.props.post,
        poster_name = post.poster.firstname + " " + post.poster.lastname,
        postee_name = post.postee.firstname + " " + post.postee.lastname,
        heading,
        lickCount;

    if (poster_name === postee_name) {
      heading = <h3><a href={"#/" + post.poster.username}>{poster_name}</a></h3>;
    } else {
      heading = (
        <h3>
          <a href={"#/" + post.poster.username}>{poster_name}</a> > <a href={"#/" + post.postee.username}>{postee_name}</a>
        </h3>
      );
    }

    if (post.num_licks === 1) {
      lickCount = post.licks[0].author_name + " licked this post.";
    }
    if (post.num_licks > 1) {
      lickCount = post.num_licks + " dogs licked this post.";
    }
    return (
      <li>
        <div className="group">
          <img className="profile_thumbnail" src={post.poster_photo_url}/>
          <div classNam="post-content group">
            {heading}
            <p>{post.body}</p>
          </div>
        </div>
        <div className="lick-form">
          <LickForm
            post={this.props.post}
            postType={this.props.postType}
            />
        </div>

        <div className="lick-info">
          {lickCount}
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
            post={post}/>
        </div>
      </li>
    );
  }

});
