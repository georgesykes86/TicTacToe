function GamePrinter() {
}

GamePrinter.prototype.printGame = function (p1, p2) {
  const outputMatrix = this._createOutputMatrix(p1, p2);
  const outputString = '  | A | B | C |\n--|-----------|\n'
    + `1 | ${outputMatrix[0]} | ${outputMatrix[1]} | ${outputMatrix[2]} |\n`
    + '--|-----------|\n'
    + `2 | ${outputMatrix[3]} | ${outputMatrix[4]} | ${outputMatrix[5]} |\n`
    + '--|-----------|\n'
    + `3 | ${outputMatrix[6]} | ${outputMatrix[7]} | ${outputMatrix[8]} |\n`
    + '--|-----------|\n';
  console.log(outputString);
};

GamePrinter.prototype._createOutputMatrix = function (p1, p2) {
  const returnArray = [];
  for (let i = 0; i < p1.moves.length; i++) {
    for (let j = 0; j < p1.moves[0].length; j++) {
      if (p1.moves[i][j]) {
        returnArray.push('x');
      } else if (p2.moves[i][j]) {
        returnArray.push('o');
      } else {
        returnArray.push(' ');
      }
    }
  }
  return returnArray;
};

module.exports = GamePrinter;
