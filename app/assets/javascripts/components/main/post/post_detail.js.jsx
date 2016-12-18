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
    var post = this.props.post,
        poster_name = post.poster.firstname + " " + post.poster.lastname,
        postee_name = post.postee.firstname + " " + post.postee.lastname,
        heading,
        lickCount;

    if (poster_name === postee_name) {
      heading = (
        <h3>
          <ReactRouter.Link to={ "/" + post.poster.username }>
            { poster_name }
          </ReactRouter.Link>
        </h3>
      );
    } else {
      heading = (
        <h3>
          <ReactRouter.Link to={ "/" + post.poster.username}>{ poster_name }</ReactRouter.Link>
            { ' > ' }
          <ReactRouter.Link href={ "/" + post.postee.username}>{ postee_name }</ReactRouter.Link>
        </h3>
      );
    }

    if (post.num_licks === 1) {
      lickCount = (
        <p className="lick-count">
          <ReactRouter.Link to={"/" + post.licks[0].author_username}>
            {post.licks[0].author_name}
          </ReactRouter.Link>
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
            post.comments.map(comment => {
              return (
                <CommentDetail
                  key={ comment.id }
                  postType={ this.props.postType }
                  comment={ comment }
                  />
              );
            })
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
