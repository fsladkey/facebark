(function(){

  if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
      'use strict';
      var O = Object(this);
      var len = parseInt(O.length) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1]) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {k = 0;}
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement ||
           (searchElement !== searchElement && currentElement !== currentElement)) {
          return true;
        }
        k++;
      }
      return false;
    };
  }

  var Snake = window.Snake = window.Snake || {};
  // var Board = window.Snake.Board;


  Snake.Board = function(size) {
    this.size = size || 8;
    this.grid = [];
    this.score = 0;

    this.snake = new Snake.Snake([Math.floor(this.size / 2),
                                  Math.floor(this.size / 2)],
                                  this);

    this.apple = this.randomApple();

    this.setUpGrid();
  };

  Snake.Board.prototype.setUpGrid = function() {
    for (var i = 0; i < this.size; i++) {
      var arr = [];
      this.grid.push(arr);
      for (var j = 0; j < this.size; j++) {
          arr.push("");
      }
    }
  };

  Snake.Board.prototype.randomApple = function() {
    var randomPos =  [Math.floor(Math.random() * this.size),
                      Math.floor(Math.random() * this.size)];
    var segmentStrings = this.snake.segments.map(function(segment){
      return segment.toString();
    });
    while (segmentStrings.includes(randomPos.toString())) {
      randomPos =  [Math.floor(Math.random() * this.size),
                    Math.floor(Math.random() * this.size)];
    }
    return randomPos;
  };

  Snake.Board.prototype.render = function() {
    var result = this.deeperDup(this.grid);
    this.snake.segments.forEach(function(el) {
      result[el[0]][el[1]] = "@";
    }, this);
    for (var i = 0; i < result.length; i++) {
      console.log(result[i]);
      }
  };

  Snake.Board.prototype.deeperDup = function(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i].slice());
    }
    return result;
  };




})();
