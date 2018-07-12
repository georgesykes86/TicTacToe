function TicTacToe() {
  this.result = null;
  this.players = {
    player1: {
      moves: [],
    },
    player2: {
      moves: [],
    },
  };
  this.isOver = false;
  this.turn = 'player1';
}

TicTacToe.prototype.play = function (selection) {
  this.players[this.turn].moves.push(selection);
  this._nextTurn();
};

TicTacToe.prototype._nextTurn = function () {
  const otherPlayers = Object.keys(this.players).filter(key => key !== this.turn);
  this.turn = otherPlayers[0];
};

module.exports = TicTacToe;
