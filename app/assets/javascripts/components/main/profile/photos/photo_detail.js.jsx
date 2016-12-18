var PhotoDetail = React.createClass({

  getInitialState: function () {
    return {photo: PhotoStore.photo()};
  },

  focusComment: function () {
    this.setState({focused: !this.state.focused});
  },

  componentDidMount: function () {
    jQuery("abbr.timeago").timeago();
    PhotoStore.on("change", this._change);
  },

  componentWillUnmount: function () {
    PhotoStore.removeListener("change", this._change);
  },

  exitDetail: function () {
    ModalActions.hideModal();
  },

  commentInfo: function () {
    var photo = this.state.photo,
        lickCount;

    if (photo.num_licks === 1) {
      lickCount = <p className="lick-count">{photo.licks[0].author_name + " licked this post."}</p>;
    }
    if (photo.num_licks > 1) {
      lickCount = <p className="lick-count" >{photo.num_licks + " dogs licked this post."}</p>;
    }
    return (
      <div>
        <div className="group">
          <div className="photo-header group">
            <img className="profile_thumbnail" src={photo.user_profile_image_url}/>
            <h3 className="photo-author-header">
              <ReactRouter.Link href={ "/" + photo.user.username }>``
                { photo.user_fullname }
              </ReactRouter.Link>
            </h3>
            <abbr className="timeago" title={photo.time_created}></abbr>
          </div>
            {this.state.photo.caption}
          </div>
        <div className="lick-form">
          <LickForm
            focusComment={this.focusComment}
            post={this.state.photo}
            postType="photo"
            />
        </div>

        <div className="lick-info">
          {lickCount}
        </div>

        <div className="comment-list">
          <ul>
          {
            photo.comments.map(function(comment) {
              return <CommentDetail postType="photo" key={comment.id} comment={comment}/>;
            }, this)
          }
          </ul>
        </div>

        <div className="comment-form photo-comment-form group">
          <CommentForm
            focused={this.state.focused}
            focusComment={this.focusComment}
            postType="photo"
            post={photo}/>
        </div>
      </div>
    );
  },

  render: function () {
    var commentInfo;

    if (this.state.photo) {
      return (
        <div className="photo-detail-modal">
          <div className="photo-detail-content group">
            <div className="photo-detail-left">
              <img className="photo-detail-image" src={this.state.photo.image_url}/>
            </div>
            <div className="photo-detail-right">
              <div className="exit-button group">
                <button onClick={this.exitDetail}>x</button>
              </div>
                {this.commentInfo()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="photo-detail-modal">
        </div>
      );
    }
  },

  _change: function () {
    this.setState({photo: PhotoStore.photo()});
  }

});
