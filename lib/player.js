function Player() {
  this.moves = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
}

Player.prototype.addMove = function (move) {
  const moveCoords = this._translateMove(move);
  this.moves[moveCoords[0]][moveCoords[1]] = true;
};

Player.prototype.isAlreadySelectedMove = function (move) {
  const moveCoords = this._translateMove(move);
  return this.moves[moveCoords[0]][moveCoords[1]];
};

Player.prototype.isWinner = function () {
  return true;
};

Player.prototype._translateMove = function (move) {
  const parsedMove = move.toUpperCase();
  const columns = { A: 0, B: 1, C: 2 };
  const [column, row] = parsedMove.split('');
  return [parseInt(row, 10), columns[column]];
};

module.exports = Player;
