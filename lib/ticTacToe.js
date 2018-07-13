const Player = require('./player');
const GamePrinter = require('./gamePrinter');

function TicTacToe(p1 = new Player(), p2 = new Player(), gamePrinter = new GamePrinter()) {
  this.result = null;
  this.players = {
    player1: p1,
    player2: p2,
  };
  this.isOver = false;
  this.turn = 'player1';
  this.turnCount = 0;
  this.gamePrinter = gamePrinter;
}

TicTacToe.prototype.play = function (move) {
  if (this._isAlreadySelected(move) || this.isOver) return;
  this.players[this.turn].addMove(move);
  this._incrementCounter();
  this._checkGameStatus();
  this._nextTurn();
};

TicTacToe.prototype.showBoard = function () {
  this.gamePrinter.printGame(this.players.player1, this.players.player2);
};

TicTacToe.prototype._nextTurn = function () {
  const otherPlayers = Object.keys(this.players).filter(key => key !== this.turn);
  this.turn = otherPlayers[0];
};

TicTacToe.prototype._isAlreadySelected = function (move) {
  return this.players.player1.isAlreadySelectedMove(move)
   || this.players.player2.isAlreadySelectedMove(move);
};

TicTacToe.prototype._checkGameStatus = function () {
  if (this._isWinner()) return this._setWinner();
  if (this._isDraw()) this._setDraw();
};

TicTacToe.prototype._isWinner = function () {
  return this.players.player1.isWinner() || this.players.player2.isWinner();
};

TicTacToe.prototype._isDraw = function () {
  return this.turnCount === 9;
};

TicTacToe.prototype._incrementCounter = function () {
  this.turnCount = this.turnCount + 1;
};

TicTacToe.prototype._setWinner = function () {
  this.result = `Player ${this.turn.split('r')[1]} wins`;
  this.isOver = true;
};

TicTacToe.prototype._setDraw = function () {
  this.result = 'Draw';
  this.isOver = true;
};

module.exports = TicTacToe;
