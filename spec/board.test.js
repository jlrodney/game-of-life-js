const Board = require('../src/board');

describe('Board', () => {
  let newBoard;

  beforeEach( () => {
    newBoard = new Board();
  })
  describe('Draw board', () => {
    it('draws the grid', () => {
      newBoard.cellCount();
      expect(newBoard.cells).toEqual(25)
    });
  });
});
