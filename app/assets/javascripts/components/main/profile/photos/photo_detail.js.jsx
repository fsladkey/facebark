var PhotoDetail = React.createClass({

  exitDetail: function () {
    this.props.hideDetail();
  },

  render: function () {
    return (
      <div className="photo-detail-modal">
        <div className="photo-detail-content group">
          <div className="photo-detail-left">
            <img className="photo-detail-image" src={this.props.photo.image_url}/>
          </div>
          <div className="photo-detail-right">
            <div className="exit-button group">
              <button onClick={this.exitDetail}>x</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
