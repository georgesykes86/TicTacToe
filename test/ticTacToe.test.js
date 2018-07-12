const TicTacToe = require('../lib/ticTacToe');
const Player = require('../lib/player');

jest.mock('../lib/player');

describe('TicTacToe', () => {
  let game; let p1Spy; let p2Spy; let p1SelectionSpy; let p2SelectionSpy;
  const player1 = new Player();
  const player2 = new Player();
  const firstMove = 'A1';

  beforeEach(() => {
    game = new TicTacToe(player1, player2);
    p1Spy = jest.spyOn(player1, 'addMove');
    p2Spy = jest.spyOn(player2, 'addMove');
    p1Spy.mockClear();
    p2Spy.mockClear();
    game.play(firstMove);
  });

  describe('#play', () => {
    describe('No duplicate selections', () => {
      beforeEach(() => {
        p1SelectionSpy = jest.spyOn(player1, 'isAlreadySelectedMove').mockReturnValue(false);
        p1SelectionSpy = jest.spyOn(player2, 'isAlreadySelectedMove').mockReturnValue(false);
      });

      it('registers a turn for player 1', () => {
        expect(p1Spy).toHaveBeenCalledWith(firstMove);
      });

      it('registers a turn for player 2', () => {
        const secondMove = 'B1';
        game.play(secondMove);
        expect(p2Spy).toHaveBeenCalledWith(secondMove);
      });

      it('continues to switch goes', () => {
        game.play('B1');
        game.play('C1');
        expect(p1Spy).toHaveBeenCalledTimes(2);
      });
    });

    it('stops a player selecting a square that has been taken', () => {
      p1SelectionSpy = jest.spyOn(player1, 'isAlreadySelectedMove').mockReturnValue(true);
      game.play('A1');
      expect(p1Spy).not.toHaveBeenCalledWith();
    });

    it('does nothing if the game is over', () => {
      game.isOver = true;
      game.play('B1');
      expect(p2Spy).not.toHaveBeenCalledWith();
    });
  });
});
