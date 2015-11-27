var Snake = React.createClass({

  componentDidMount: function () {
    var $gameEl = $("#snake-game");
    var board = new Snake.Board(16);
    var gv = new Snake.View(board, $gameEl);
  },

  render: function () {
    return (
      <figure id="snake-game" class="group">
      </figure>
    );
  }
});
