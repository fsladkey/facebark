var Photos = React.createClass({

  componentDidMount: function() {
    TabActions.activateTab("Photos");
  },

  render: function() {
    return (
      <div>
        <PhotoUpload/>
      </div>
    );
  }

});
