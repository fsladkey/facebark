var PhotoItem = React.createClass({

  getInitialState: function () {
    return {focused: false};
  },

  showDetail: function () {
    this.setState({focused: true});
  },

  hideDetail: function () {
  this.setState({focused: false});
  },

  render: function () {
    var detail;
    if (this.state.focused) {
      detail = <PhotoDetail
        hideDetail={this.hideDetail}
        photo={this.props.photo}/>;
    }
    return (
      <div>
      <li onClick={this.showDetail} key={this.props.photo.id} photo={this.props.photo}>
        <img className="photo-album-view" src={this.props.photo.image_url}/>
      </li>
      {detail}
      </div>
    );
  }

});
