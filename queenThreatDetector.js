let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function generateBoard() {
  const chessSize = 8;
  let chessboard = [];
  for (let i = 0; i < chessSize; i++) {
    chessboard.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  chessboard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessboard[blackQueen[0]][blackQueen[1]] = 1;


  return chessboard;
}


function queenThreat(generateBoard) {
  const boardLength = generateBoard.length;

  let firstQueenFound = false;
  let secondQueenFound = false;

  let firstQueenIndex;
  let secondQueenIndex;

  let removeX;
  let removeY;

  let queenCounter = 0;
  //check for line line;
  for (let i = 0; i < boardLength; i++) {
    if (generateBoard[i].reduce(reducer) > 1) {
      return true;
    }
    let count = 0;
    for (let k = 0; k < boardLength; k++) {
      count += generateBoard[k][i];
      if (count > 1) {
        return true;
      }
    }

    //find where both queens are and get indexes
    for (let i = 0; i < boardLength; i++) {
      for (let k = 0; k < boardLength; k++) {
        queenCounter += generateBoard[i][k];
        if (queenCounter === 1 && !firstQueenFound) {
          firstQueenIndex = [i, k];
          firstQueenFound = true;
        }
        if (queenCounter === 2 && !secondQueenFound) {
          secondQueenIndex = [i, k];
          secondQueenFound = true;
        }
      }
    }
  }
  let x1 = firstQueenIndex[0];
  let y1 = firstQueenIndex[1];

  let x2 = secondQueenIndex[0];
  let y2 = secondQueenIndex[1];

  //normalize x,y pairs such that the first queen is always on layer 0
  if (x1 > x2) {
    let removeX = x2;
  } else {
    removeX = x1;
  }
  if (y1 > y2) {
    removeY = y2;
  } else {
    removeY = y1;
  }
  x1 -= removeX;
  x2 -= removeX;
  y1 -= removeY;
  y2 -= removeY;

  //there are two cases now: either diagonal to the right or left.
  if (x1 === y2 && x2 === y1) {
    return true;
  }
  if (x1 === x2 && y1 === y2) {
    return true;
  }
  return false;
}

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));