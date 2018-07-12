const TicTacToe = require('../lib/ticTacToe');

describe('TicTacToe', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  describe('#play', () => {
    it('registers a turn', () => {
      expect(game.play('A1')).toBeTruthy();
    });
  });
});
