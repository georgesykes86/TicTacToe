const Player = require('../lib/player');

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('#isAlreadySelectedMove', () => {
    it('returns false if player doesnt have move', () => {
      const move = 'A1';
      expect(player.isAlreadySelectedMove(move)).toBeFalsy();
    });
  });

  describe('#addMove', () => {
    it('adds a move', () => {
      const move = 'A1';
      player.addMove(move);
      expect(player.moves.length).toEqual(1);
    });
  });
});
