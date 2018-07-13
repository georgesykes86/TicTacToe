const TicTacToe = require('../lib/ticTacToe');
const Player = require('../lib/player');

jest.mock('../lib/player');

describe('TicTacToe', () => {
  let game; let p1Spy; let p2Spy; let printerSpy;
  const player1 = new Player();
  const player2 = new Player();
  const firstMove = 'A1';
  const gamePrinter = {
    printGame: jest.fn(),
  };

  beforeEach(() => {
    game = new TicTacToe(player1, player2, gamePrinter);
    p1Spy = jest.spyOn(player1, 'addMove');
    p2Spy = jest.spyOn(player2, 'addMove');
    p1Spy.mockClear();
    p2Spy.mockClear();
    game.play(firstMove);
  });

  describe('#play', () => {
    describe('No duplicate selections', () => {
      beforeEach(() => {
        jest.spyOn(player1, 'isAlreadySelectedMove').mockReturnValue(false);
        jest.spyOn(player2, 'isAlreadySelectedMove').mockReturnValue(false);
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
      jest.spyOn(player1, 'isAlreadySelectedMove').mockReturnValue(true);
      game.play('A1');
      expect(p1Spy).not.toHaveBeenCalledWith();
    });

    it('does nothing if the game is over', () => {
      game.isOver = true;
      game.play('B1');
      expect(p2Spy).not.toHaveBeenCalledWith();
    });
  });

  describe('#showBoard', () => {
    it('calls on the gamePrinter to show the board', () => {
      printerSpy = jest.spyOn(gamePrinter, 'printGame');
      game.showBoard();
      expect(printerSpy).toHaveBeenCalledWith(player1, player2);
    });
  });
});
