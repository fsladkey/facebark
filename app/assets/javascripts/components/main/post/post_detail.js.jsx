var PostDetail = React.createClass({

  getInitialState: function () {
    return {focused: false};
  },

  focusComment: function () {
    this.setState({focused: !this.state.focused});
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
      lickCount = <p className="lick-count">{post.licks[0].author_name + " licked this post."}</p>;
    }
    if (post.num_licks > 1) {
      lickCount = <p className="lick-count" >{post.num_licks + " dogs licked this post."}</p>;
    }
    return (
      <li>
        <div className="group">
          <div className="">
          <div className="post-header group">
            <img className="profile_thumbnail" src={post.poster_photo_url}/>
            {heading}
          </div>
            <p className="post-content">{post.body}</p>
          </div>
        </div>
        <div className="lick-form">
          <LickForm
            focusComment={this.focusComment}
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
            focused={this.state.focused}
            focusComment={this.focusComment}
            postType={this.props.postType}
            post={post}/>
        </div>
      </li>
    );
  }

});
