(function(){

  Snake = window.Snake = window.Snake || {};

  Snake.View  = function(board, $gameEl){
    this.board = board;
    this.snake = this.board.snake;
    this.$gameEl = $gameEl;

    this.bindEvents();
    this.setupBoard();
    this.render();

    this.timer = window.setInterval(this.step.bind(this), 120);
  };


  Snake.View.prototype.bindEvents = function() {

    this.$gameEl.on("click", function(e){
      if (this.snake.dead) {
        this.snake.reset();
        $(".snake-message").text("I knew you'd want to play again!");
        this.timer = window.setInterval(this.step.bind(this), 120);
      }
    }.bind(this));

    $(document).keydown(function(e) {
      e.preventDefault();
      if (e.keyCode === 38) {
        this.snake.setDirection("UP");
      } else if (e.keyCode === 40) {
        this.snake.setDirection("DOWN");
      } else if (e.keyCode === 37) {
        this.snake.setDirection("LEFT");
      } else if (e.keyCode === 39) {
        this.snake.setDirection("RIGHT");
      }
    }.bind(this));
  };

  Snake.View.prototype.setupBoard = function(){
    this.$gameEl.append('<ul class="snake-grid"></ul>');
    var $ul = this.$gameEl.find("ul");
    for (var i = 0; i < this.board.size; i++){
      for (var j = 0; j < this.board.size; j++){
        $ul.append('<li title="' + i + ',' + j + '"></li>');
      }
    }
  };

  Snake.View.prototype.render = function(){
    this.$gameEl.find("li").removeClass("snake-color apple-color snake-dead");

    var applePos = this.board.apple;
    this.$gameEl.find('li[title="' + applePos[0] + "," + applePos[1] + '"]').addClass("apple-color");

    this.addSnakeClass("snake-color");
    $(".snake-score").text(this.board.score + "");
  };

  Snake.View.prototype.step = function(){
    this.snake.move();
    this.render();
    if (this.snake.dead) {
      clearInterval(this.timer);
      this.addSnakeClass("snake-dead");
      $(".snake-message").text("Uh oh, you lost! Click the screen to play again!");
    }
  };

  Snake.View.prototype.addSnakeClass = function(className) {
    var segments = this.board.snake.segments;

    for (var i = 0; i < segments.length; i++){
      var pos = segments[i];
      this.$gameEl.find('li[title="' + pos[0] + "," + pos[1] + '"]').addClass(className);
    }
  };




})();
