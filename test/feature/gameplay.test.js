const TicTacToe = require('../../lib/ticTacToe');

describe('Successful game', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  it('plays a game where player1 wins', () => {
    game.play('A1');
    game.play('C1');
    game.play('C3');
    game.play('B2');
    game.play('A3');
    game.play('B3');
    expect(game.result).toEqual(null);
    game.play('A2');
    expect(game.result).toEqual('Player 1 wins');
  });

  it('plays a game where player2 wins', () => {
    game.play('A1');
    game.play('B2');
    game.play('B3');
    game.play('A3');
    game.play('B1');
    expect(game.result).toEqual(null);
    game.play('C1');
    expect(game.result).toEqual('Player 2 wins');
  });

  it('plays out a draw', () => {
    game.play('A1');
    game.play('B2');
    game.play('C1');
    game.play('B1');
    game.play('B3');
    game.play('C2');
    game.play('A2');
    game.play('A3');
    expect(game.result).toEqual(null);
    game.play('C3');
    expect(game.result).toEqual('Draw');
  });
});
