(function(){

  var Snake = window.Snake = window.Snake || {};

  Snake.Snake = function(start, board) {
    this.board = board;
    this.startingPos = start;
    this.segments = [start];
    this.dead = false;
    this.direction = "UP";
  };

  Snake.Snake.prototype.reset = function () {
    this.dead = false;
    this.segments = [this.startingPos];
    this.board.score = 0;
  };

  Snake.Snake.prototype.move = function ()   {
      var newPos = this.newHead(this.segments[0]);
      newPos = this.wrapPos(newPos);

      //check collision
      for (var i = 1; i < this.segments.length; i++) {
        if (this.segments[i].toString() === newPos.toString()){
          this.dead = true;
        }
      }

      this.segments.unshift(newPos);

      //check for apples
      if (this.board.apple.toString() !== newPos.toString()) {
        this.segments.pop();
      } else {
        this.board.score += 10;
        this.board.apple = this.board.randomApple();
      }
  };

  Snake.Snake.prototype.setDirection = function(direction) {
    var oldDirection = this.direction.slice();
    this.direction = direction;
    var newPos = this.newHead(this.segments[0]);
    if (this.segments[1] && newPos.toString() === this.segments[1].toString()) {
      this.direction = oldDirection;
    }
  };

  Snake.Snake.prototype.wrapPos = function(pos) {
    var x = pos[0];
    var y = pos[1];

    if (x < 0) {
      x = this.board.size - 1;
    }
    if (y < 0) {
      y = this.board.size - 1;
    }
    return [x % this.board.size, y % this.board.size];
  };

  Snake.Snake.prototype.newHead = function(previousHead) {
    switch (this.direction) {
      case "UP":
        return [previousHead[0] -1, previousHead[1]];
      case "DOWN":
        return [previousHead[0] + 1, previousHead[1]];
      case "LEFT":
        return [previousHead[0], previousHead[1] - 1];
      case "RIGHT":
        return [previousHead[0], previousHead[1] + 1];
    }
  };

})();
