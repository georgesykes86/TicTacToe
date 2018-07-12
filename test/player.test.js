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

    it('returns true if a player already has that move selected', () => {
      const move = 'A1';
      player.addMove(move);
      expect(player.isAlreadySelectedMove(move)).toBeTruthy();
    });
  });

  describe('#addMove', () => {
    it('adds a move', () => {
      const move = 'A1';
      player.addMove(move);
      expect(player.isAlreadySelectedMove(move)).toBeTruthy();
    });
  });

  describe('#isWinner', () => {
    it('returns false when the player has not won', () => {
      expect(player.isWinner()).toBeFalsy();
    });

    it('declares a winner when top row locked out', () => {
      player.addMove('A1');
      player.addMove('B1');
      player.addMove('C1');
      expect(player.isWinner()).toBeTruthy();
    });

    it('declares a winner when another row locked out', () => {
      player.addMove('A2');
      player.addMove('B2');
      player.addMove('C2');
      expect(player.isWinner()).toBeTruthy();
    });

    it('declares a winner when a column is locked out', () => {
      player.addMove('A1');
      player.addMove('A2');
      player.addMove('A3');
      expect(player.isWinner()).toBeTruthy();
    });

    it('declares a winner when another column is locked out', () => {
      player.addMove('C1');
      player.addMove('C2');
      player.addMove('C3');
      expect(player.isWinner()).toBeTruthy();
    });
  });
});
