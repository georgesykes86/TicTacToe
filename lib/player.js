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
  if (this._checkRowsForWinner()) return true;
  if (this._checkColumnsforWinner()) return true;
  if (this._checkDiagonalsforWinner()) return true;
  return false;
};

Player.prototype._translateMove = function (move) {
  const parsedMove = move.toUpperCase();
  const columns = { A: 0, B: 1, C: 2 };
  const [column, row] = parsedMove.split('');
  return [parseInt(row - 1, 10), columns[column]];
};

Player.prototype._checkRowsForWinner = function (matrix = this.moves) {
  return matrix.some(row => row.every(square => square === true));
};

Player.prototype._checkColumnsforWinner = function () {
  const transposedMatrix = this.moves[0].map((col, index) => this.moves.map(row => row[index]));
  return this._checkRowsForWinner(transposedMatrix);
};

Player.prototype._checkDiagonalsforWinner = function () {
  const diagonalOne = this.moves[0].map((col, index) => this.moves[index][index]);
  const diagonalTwo = this.moves[0].map((col, index) => this.moves[index][this.moves.length - (index + 1)]);
  return this._checkRowsForWinner([diagonalOne, diagonalTwo]);
}

module.exports = Player;
