const TicTacToe = require('../lib/ticTacToe');

describe('TicTacToe', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
    game.play('A1');
  });

  describe('#play', () => {
    it('registers a turn for player 1', () => {
      expect(game.players.player1.moves.length).toEqual(1);
    });

    it('registers a turn for player 2', () => {
      game.play('B1');
      expect(game.players.player2.moves.length).toEqual(1);
    });

    it('continues to switch goes', () => {
      game.play('B1');
      game.play('C1');
      expect(game.players.player1.moves.length).toEqual(2);
    });

    it('stops a player selecting a square that has been taken', () => {
      game.play('A1');
      expect(game.players.player2.moves.length).toEqual(0);
      expect(game.turn).toEqual('player2');
    });
  });
});
