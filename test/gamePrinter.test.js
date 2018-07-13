const Printer = require('../lib/gamePrinter');

describe('Printer', () => {
  let printer;
  const player1 = {
    moves: [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ],
  };
  const player2 = {
    moves: [
      [true, false, false],
      [false, false, false],
      [false, false, true],
    ],
  };

  const player3 = {
    moves: [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ],
  };

  const gameOneResult = '  | A | B | C |\n'
                      + '--|-----------|\n'
                      + '1 | o |   |   |\n'
                      + '--|-----------|\n'
                      + '2 |   | x |   |\n'
                      + '--|-----------|\n'
                      + '3 |   |   | o |\n'
                      + '--|-----------|\n';

  const gameTwoResult = '  | A | B | C |\n'
                      + '--|-----------|\n'
                      + '1 | x | o |   |\n'
                      + '--|-----------|\n'
                      + '2 |   | o |   |\n'
                      + '--|-----------|\n'
                      + '3 |   | o | x |\n'
                      + '--|-----------|\n';

  beforeEach(() => {
    global.console = { log: jest.fn() };
  });

  describe('#printGame', () => {
    it('prints a game', () => {
      printer = new Printer();
      printer.printGame(player1, player2);
      expect(console.log).toHaveBeenCalledWith(gameOneResult);
    });

    it('prints a different game', () => {
      printer = new Printer();
      printer.printGame(player2, player3);
      expect(console.log).toHaveBeenCalledWith(gameTwoResult);
    });
  });
});
