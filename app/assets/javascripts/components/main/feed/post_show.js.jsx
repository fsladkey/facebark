var PostShow = React.createClass({

  getInitialState: function () {
    return { post: PostStore.all()[0] };
  },

  componentDidMount: function () {
    PostStore.on("change", this._change);
    PostApiUtil.fetchPost(this.props.params.post_id);
  },

  componentWillUnmount: function () {
    PostStore.removeListener("change", this._change);
  },

  componentWillReceiveProps(newProps) {
    PostApiUtil.fetchPost(newProps.params.post_id);
  },

  render: function () {
    if (this.state.post) {
      return (
        <ul className="post-list">
          <PostDetail post={this.state.post}/>
        </ul>
      );
    } else {
        return <div></div>;
    }
  },

  _change: function () {
    this.setState({post: PostStore.all()[0]});
  }

});
