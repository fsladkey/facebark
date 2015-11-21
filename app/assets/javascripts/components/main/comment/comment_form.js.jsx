var CommentForm = React.createClass({

  handleSubmit: function () {

  },

  render: function () {
    return (
      <div className="group">
        <form onSubmit={this.handleSubmit}>
          <img className= "profile_thumbnail" src={SessionStore.currentUser().profile_image_url}/>
          <textarea className="comment-input" placeholder="Write a comment"></textarea>
        </form>
      </div>
    );
  }

});
