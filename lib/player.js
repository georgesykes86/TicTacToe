function Player() {
  this.moves = [];
}

Player.prototype.addMove = function (move) {
  this.moves.push(move);
};

Player.prototype.isAlreadySelectedMove = function (move) {
  false
}

module.exports = Player;
