var colorMap = {
  2: "#EEE4DA",
  4: "#ECE0C8",
  8: "#F0B07A",
  16: "#F59563",
  32: "#F57C5F",
  64: "#EE543A",
  128: "#F2D86D",
  256: "#EFD04A",
  512: "#E4BF26",
  1024: "#E1BA2C",
  2048: "#EAC23E",
};

var TwenyFortyBoard = React.createClass({
  getInitialState: function() {

    return {
      board:  new window.TwentyFortyGame()
    };
  },

  componentDidMount: function() {
    this.state.board.registerListener(this.updateBoard);
    $(document).on("keydown", function(e) {
      // e.preventDefault();
      var direction;
      switch (e.keyCode) {
        case 37:
          direction = "left";
          break;
        case 38:
          direction = "up";
          break;
        case 39:
          direction = "right";
          break;
        case 40:
          direction = "down";
          break;
      }
      this.state.board.makeMoveInDirection(direction);
    }.bind(this));
  },

  componentWillUnmount: function() {
    $(document).off("keydown");
  },

  updateBoard: function() {
    this.forceUpdate();
  },

  createTiles: function(){
    var boardTiles = this.state.board.allTiles();
    var tiles = [];
    var number, className, styles;

    for (var idx = 0; idx < 16; idx++) {
      number = "";
      className= "tile";
      style = {};
      numberStyle = {};


      if (boardTiles[idx] !== 0) {
        number = boardTiles[idx];
        className += " active";
        style.background = colorMap[number];

        if (number > 4) {
          numberStyle.color = "#F8F5F2";
        }
      }

      tiles.push(<li key={idx} style={style} className={className}><p style={numberStyle}>{number}</p></li>);
    }
    return tiles;
  },

  render: function() {
    return (
      <div className="twenty-forty-eight-game">
        <ul>{this.createTiles()}</ul>
      </div>
    );
  }

});
