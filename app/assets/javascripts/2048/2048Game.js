var TwentyFortyGame = window.TwentyFortyGame = window.TwentyFortyGame || {};

TwentyFortyGame = function(grid) {
  this.grid = grid;

  if (typeof grid === "undefined") {
    //create new generic grid
    this.grid = [];
    for (var idx = 0; idx < 4; idx++) {
      var row = [];
      for (var idy = 0; idy < 4; idy++) {
        row.push(0);
      }
      this.grid.push(row);
    }

    //set up initial random tiles
    this.setInitialState();
  }
};

TwentyFortyGame.prototype.dup = function() {
  var newGrid = this.grid.map(function(row){
    return row.slice();
  });
  return new TwentyFortyGame(newGrid);
};

TwentyFortyGame.prototype.currentScore = function() {
  var sum = 0;
  this.allTiles().forEach(function(tile){
    sum += tile;
  });
  return sum;
};


TwentyFortyGame.prototype.rotateGrid = function() {
  var rotatedGrid = [];

  for (var x = 0, s = this.grid.length, t; t = [], x < s; x++) {
    for (var y = s - 1; y !== -1; y--) {
      t.push(this.grid[y][x]);
    }
    rotatedGrid.push(t);
  }
  this.grid = rotatedGrid;
};

TwentyFortyGame.prototype.rotateGridNTimes = function(n) {
  for (var idx = 0; idx < n; idx++) {
    this.rotateGrid();
  }
};

TwentyFortyGame.prototype.callWithFlippedGrid = function(direction, func) {
  var numRotations;
  switch (direction) {
    case "down":
      numRotations = 1;
      break;
    case "right":
      numRotations = 2;
      break;
    case "up":
      numRotations = 3;
      break;
    default:
      numRotations = 0;
  }
  this.rotateGridNTimes(numRotations);

  func();

    this.rotateGridNTimes(Math.abs(4 - numRotations));
};


TwentyFortyGame.prototype.registerListener = function(callback) {
  this.viewCallback = callback;
};

TwentyFortyGame.prototype.allTiles = function() {
  return [].concat.apply([], this.grid);
};

TwentyFortyGame.prototype.combineAllRows = function() {
  var newGrid = [];
  for (var idx = 0; idx < this.grid.length; idx++) {
    newGrid.push(this.combineRow(this.grid[idx]));
  }
  this.grid = newGrid;
};

TwentyFortyGame.prototype.moveInDirection = function(direction) {
  this.callWithFlippedGrid(direction, this.combineAllRows.bind(this));
};

TwentyFortyGame.prototype.makeMoveInDirection = function(direction) {
  var prevGridState = this.grid.toString();

  this.moveInDirection(direction);

  if (this.grid.toString() !== prevGridState) {
    this.placeRandomTiles(1);
  }
  this.viewCallback();
};

TwentyFortyGame.prototype.combineRow = function(row) {
  var nonZeroTiles = row.filter(function (tile) {
    return tile !== 0;
  });

  var combinedTiles = this.combineActiveTiles(nonZeroTiles);
  return this.padWithZeros(combinedTiles);
};

TwentyFortyGame.prototype.padWithZeros = function(arr) {
  while (arr.length < 4) {
    arr.push(0);
  }
  return arr;
};

TwentyFortyGame.prototype.combineActiveTiles = function (activeTiles) {
  if (activeTiles.length < 2) {
    return activeTiles;
  }
  var results = [];
  var count = 0;

  while (count < activeTiles.length) {
    if (activeTiles[count] == activeTiles[count + 1]) {
      results.push(activeTiles[count] * 2);
      count += 2;
    } else {
      results.push(activeTiles[count]);
      count += 1;
    }
  }
  return results;
};

TwentyFortyGame.prototype.log = function () {
  this.grid.forEach(function(row){
    console.log(row);
  });
};

TwentyFortyGame.prototype.setInitialState = function () {
  this.placeRandomTiles(2);
};

TwentyFortyGame.prototype.emptyTiles = function() {
  var emptyTiles = [];
  for (var idx = 0; idx < 4; idx++) {
    for (var idy = 0; idy < 4; idy++) {
      if (this.grid[idx][idy] === 0) {
        emptyTiles.push([idx, idy]);
      }
    }
  }
  return emptyTiles;
};

TwentyFortyGame.prototype.randomEmptyTile = function() {
  var emptyTiles = this.emptyTiles();
  return emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
};

TwentyFortyGame.prototype.placeRandomTiles = function (n) {

  for (var idx = 0; idx < n; idx++) {

    var randomTile = this.randomEmptyTile(),
        row = randomTile[0];
        tile = randomTile[1];

    this.grid[row][tile] = this.randomValue();
  }

};

TwentyFortyGame.prototype.randomValue = function () {
  var randomInt = Math.floor(Math.random() * 10);

  return randomInt > 2 ? 2 : 4;
};

TwentyFortyGame.prototype.over = function () {
  return this.allTiles().every(function(tile){
    return tile !== 0;
  });
};


TwentyFortyGame.prototype.numActiveTiles = function() {
  var count = 0;
  this.allTiles().forEach(function(tile){
    if (tile !== 0) {
      count += 1;
    }
  });
  return count;
};
