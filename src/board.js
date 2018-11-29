const Board = function Board(height=5, width=5) {
  this.height = height;
  this.width = width;
  this.cells = 0;
};

Board.prototype.cellCount = function draw() {
  for (var x = 0; x < this.width ; x++) {
    for (var y = 0; y < this.height; y++) {
      this.cells += 1;
    };
  };
};

/* istanbul ignore next */
if (typeof module !== 'undefined' && Object.prototype.hasOwnProperty.call(module, 'exports')) {
  module.exports = Board;
}
