const Player = require('./player');

function TicTacToe(p1 = new Player(), p2 = new Player()) {
  this.result = null;
  this.players = {
    player1: p1,
    player2: p2,
  };
  this.isOver = false;
  this.turn = 'player1';
}

TicTacToe.prototype.play = function (selection) {
  if (this._isAlreadySelected(selection)) return;
  this.players[this.turn].addMove(selection);
  this._nextTurn();
};

TicTacToe.prototype._nextTurn = function () {
  const otherPlayers = Object.keys(this.players).filter(key => key !== this.turn);
  this.turn = otherPlayers[0];
};

TicTacToe.prototype._isAlreadySelected = function (selection) {
  Object.values(this.players).forEach((player) => {
    if (player.isAlreadySelectedMove(selection)) return true;
  });
  return false;
};

module.exports = TicTacToe;
