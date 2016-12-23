(function (root) {
  var contentStyle = { position: "relative" };
  var activeStyle = Object.assign({}, contentStyle, { zIndex: 10001 });

  var modalStyle = {
    backgroundColor: `rgba(0, 0, 0, 0.35)`,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000
  };

  root.Highlightable = function ({ highlight, children }) {
    var modalLayer;
    var style = contentStyle

    this.open = false;
    var ref = function (node) {
      node && !this.open && fadeIn(node);
      this.open = true;
    }.bind(this);

    if (highlight) {
      style = activeStyle;
      modalLayer = <div ref={ ref } style={ modalStyle }/>;
    }

    return (
      <div>
        { modalLayer }
        <div style={ style }>
          { children }
        </div>
      </div>
    )
  }

})(this);
