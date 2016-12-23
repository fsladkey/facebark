Image.prototype.load = function( url, callback ) {
  var thisImg = this,
      xmlHTTP = new XMLHttpRequest();

  thisImg.completedPercentage = 0;

  xmlHTTP.open( 'GET', url , true );
  xmlHTTP.responseType = 'arraybuffer';
  console.log("init");

  xmlHTTP.onload = function( e ) {
    console.log("load");
      var h = xmlHTTP.getAllResponseHeaders(),
          m = h.match( /^Content-Type\:\s*(.*?)$/mi ),
          mimeType = m[ 1 ] || 'image/png';

      var blob = new Blob( [ this.response ], { type: mimeType } );
      thisImg.src = window.URL.createObjectURL( blob );
      if ( callback ) callback( this );
  };

  xmlHTTP.onprogress = function( e ) {
    console.log("progress");
      if ( e.lengthComputable )
          thisImg.completedPercentage = parseInt( ( e.loaded / e.total ) * 100 );
  };

  xmlHTTP.onloadstart = function() {
      thisImg.completedPercentage = 0;
  };

  xmlHTTP.onloadend = function() {
      thisImg.completedPercentage = 100;
  }
}

var ImageTag = React.createClass({

  getInitialState: function () {
    return { percentage: 0 };
  },

  componentDidMount: function () {
    var img = new Image();
    this.div.appendChild(img);
    this.interval = setInterval(function () {
      this.setState({ percentage: img.completedPercentage });
    }.bind(this), 10);
    img.load(this.props.src, () => {debugger});
  },

  render: function () {
    var ref = function (div) { this.div = div; }.bind(this);
    return <div ref={ ref }>{ this.state.percentage }</div>;
  }
});
