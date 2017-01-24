var PostDetail = React.createClass({

  getInitialState: function () {
    return { focused: false };
  },

  focusComment: function () {
    this.setState({ focused: !this.state.focused });
  },

  componentDidMount: function () {
    jQuery("abbr.timeago").timeago();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var post = this.props.post,
        poster_name = post.poster.full_name,
        postee_name = post.postee.full_name,
        heading,
        lickCount;

    if (poster_name === postee_name) {
      heading = (
        <h3>
          <Link to={ "/" + post.poster.username }>
            { poster_name }
          </Link>
        </h3>
      );
    } else {
      heading = (
        <h3>
          <Link to={ "/" + post.poster.username}>{ poster_name }</Link>
          <i className="fa fa-caret-right poster-postee-arrow" aria-hidden="true"></i>
          <Link href={ "/" + post.postee.username}>{ postee_name }</Link>
        </h3>
      );
    }

    if (post.num_licks === 1) {
      lickCount = (
        <p className="lick-count">
          <Link to={"/" + post.licks[0].author_username}>
            {post.licks[0].author_name}
          </Link>
          { " licked this post." }
        </p>
      );
    }
    if (post.num_licks > 1) {
      lickCount = (
        <p className="lick-count" >
          { post.num_licks + " dogs licked this post." }
        </p>
      );
    }
    return (
      <li ref={ fadeIn }>
        <div className="group">
          <div className="">
          <div className="post-header group">
            <img className="profile_thumbnail" src={ post.poster_thumb_url }/>
              { heading }
            <abbr className="timeago" title={ post.time_created }></abbr>
          </div>
            <p className="post-content">{ post.body }</p>
          </div>
        </div>
        <div className="lick-form">
          <LickForm
            focusComment={ this.focusComment }
            post={ this.props.post }
            postType={ this.props.postType }
            />
        </div>

        <div className="lick-info">
          { lickCount }
        </div>

        <div className="comment-list">
          <ul>
          {
            post.comments.map(function (comment) {
              return (
                <CommentDetail
                  key={ comment.id }
                  postType={ this.props.postType }
                  comment={ comment }
                  />
              );
            }.bind(this))
          }
          </ul>
        </div>

        <div className="comment-form group">
          <CommentForm
            focused={ this.state.focused }
            focusComment={ this.focusComment }
            postType={ this.props.postType }
            post={ post }
            />
        </div>
      </li>
    );
  }

});
